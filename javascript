function upDate(previewPic) {
  // Показываем изображение на фоне и заменяем текст
  const display = document.getElementById('image');
  display.style.backgroundImage = `url(${previewPic.src})`;
  display.innerHTML = previewPic.alt;

  // Проверка
  console.log('hovered:', previewPic.src, previewPic.alt);
}

function unDo() {
  // Возвращаем исходное состояние
  const display = document.getElementById('image');
  display.style.backgroundImage = "url('')";
  display.innerHTML = "Наведите курсор на изображение ниже, чтобы отобразить его здесь.";

  console.log('reset');
}
