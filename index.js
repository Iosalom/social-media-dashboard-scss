'use strict';

const body = document.getElementById('body');
const toggle = document.getElementById('toggle-label-btn');

toggle.addEventListener('click', function () {
  body.classList.toggle('white-mode');
});
