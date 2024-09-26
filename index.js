document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  const counterElem = document.getElementById('counter');
  const increaseBtn = document.getElementById('increaseBtn');
  const decreaseBtn = document.getElementById('decreaseBtn');
  const resetBtn = document.getElementById('resetBtn');

  let counter = 0;
  function guncelle() {
    counterElem.textContent = counter;
  }

  increaseBtn.addEventListener('click', () => {
    counter++;
    guncelle();
  });
  decreaseBtn.addEventListener('click', () => {
    // eğer counter 0'a eşit veya daha küçükse boş geri döndür
    if (counter <= 0) {
      return;
    }

    counter--;
    guncelle();
  });
  resetBtn.addEventListener('click', () => {
    counter = 0;
    guncelle();
  });
});
