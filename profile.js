const url = new URL(window.location.href);
const memberName = url.searchParams.get('name');

const heading = document.getElementById('member-name');
const videoSection = document.getElementById('video-section');

heading.textContent = memberName || 'Không rõ thành viên nào';

if (memberName) {
  fetch('members.json')
    .then(response => response.json())
    .then(data => {
      const videos = data[memberName];

      if (videos && videos.length > 0) {
        let content = `<h2>Video của ${memberName}</h2>`;

        for (let video of videos) {
          if (typeof video === 'string') {
            content += `<iframe width="320" height="180" src="${video}" frameborder="0" allowfullscreen></iframe><br><br>`;
          } else if (video.type === 'youtube') {
            content += `<iframe width="320" height="180" src="${video.url}" frameborder="0" allowfullscreen></iframe><br><br>`;
          } else if (video.type === 'tiktok') {
            const videoId = video.url.split("/video/")[1];
            content += `
<blockquote class="tiktok-embed" cite="${video.url}" data-video-id="${videoId}" style="max-width: 325px;min-width: 225px;">
  <section>Đang tải...</section>
</blockquote><br><br>`;
          }
        }

        videoSection.innerHTML = content;
        if (videos.some(v => v.type === 'tiktok')) {
          const tikTokScript = document.createElement('script');
          tikTokScript.src = 'https://www.tiktok.com/embed.js';
          tikTokScript.async = true;
          document.body.appendChild(tikTokScript);
        }

      } else {
        videoSection.innerHTML = `<h2>${memberName}</h2><p>Chưa có video nào.</p>`;
      }
    })
    .catch(error => {
      console.error("Lỗi khi tải JSON:", error);
      videoSection.innerHTML = "<p>Có lỗi xảy ra khi tải dữ liệu.</p>";
    });
} else {
  videoSection.innerHTML = "<p>Vui lòng chọn thành viên từ trang trước.</p>";
}
