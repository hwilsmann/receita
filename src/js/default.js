const open = document.querySelector('[data--button-open]');
const close = document.querySelector('[data--button-close]');

const drop = document.querySelector('[data--drop]');

if (open) open.addEventListener('click', () => {
  drop.classList.add('--is-visible');
});

if (close) close.addEventListener('click', () => {
  drop.classList.remove('--is-visible');
});

//

$("#chosen-1").chosen();
$("#chosen-2").chosen();
$("#chosen-3").chosen();
$("#chosen-4").chosen();