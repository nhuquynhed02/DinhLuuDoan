window.addEventListener("load", () => {
    setTimeout(() => {
      alert("Chào mừng đến với ĐỈNH LƯU ĐOÀN!");
    }, 500);
  });
  document.addEventListener("DOMContentLoaded", () => {
    const members = document.querySelectorAll(".member-row");
  
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    members.forEach(member => {
      appearOnScroll.observe(member);
    });
  });
    