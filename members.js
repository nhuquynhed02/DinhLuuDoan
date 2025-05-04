<<<<<<< HEAD
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
=======
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
>>>>>>> b2f0abb291a0861b92f8627b72ff26901cba06aa
  