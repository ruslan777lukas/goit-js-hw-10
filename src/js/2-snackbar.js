import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = parseInt(this.elements.delay.value);
  const state = this.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then((delay) => {
      iziToast.success({
        title: 'Успіх',
        message: `✅ Проміс виконано через ${delay} мс`,
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: 'Помилка',
        message: `❌ Проміс відхилено через ${delay} мс`,
      });
    });
});