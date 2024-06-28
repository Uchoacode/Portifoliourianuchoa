

function showPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}

document.getElementById('menu-icon').addEventListener('click', function() {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
});


