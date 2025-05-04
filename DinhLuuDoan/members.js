document.addEventListener('DOMContentLoaded', function () {
    const memberRows = document.querySelectorAll('.member-row');
  
    memberRows.forEach(row => {
      row.addEventListener('click', () => {
        const name = row.getAttribute('data-name');
        if (name) {
          window.location.href = `profile.html?name=${encodeURIComponent(name)}`;
        }
      });
    });
  });
  