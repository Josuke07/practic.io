const tabButtons = document.querySelectorAll('.tab-button');
 const tabContents = document.querySelectorAll('.tab-content');

   function activateTab(tabId) {
     tabContents.forEach(tabContent => {
         tabContent.classList.remove('active');
         if(tabContent.id === tabId) {
          tabContent.classList.add('active');
          }
      });
      tabButtons.forEach(tabButton => {
        tabButton.classList.remove('active');
        if(tabButton.dataset.tab === tabId) {
          tabButton.classList.add('active');
         }
       });
   }

 tabButtons.forEach(tabButton => {
     tabButton.addEventListener('click', (event) => {
      const tabId = event.target.dataset.tab;
     activateTab(tabId)
    });
 });

const catImage = document.getElementById('cat-image');
const filterButtons = document.querySelectorAll('.filter-buttons button');

 filterButtons.forEach(button => {
     button.addEventListener('click', function() {
       const filterType = this.dataset.filter;
        if(filterType === 'reset') {
          catImage.style.filter = 'none';
          return;
         }
         if (filterType === 'brightness') {
              catImage.style.filter = `brightness(1.5)`;
              return;
             }
         if (filterType === 'contrast') {
              catImage.style.filter = `contrast(1.5)`;
              return;
            }
            catImage.style.filter = `${filterType}(1)`;
      });
  });

  const inputArrayButton = document.getElementById('input-array-button');
  const arrayOutputDiv = document.getElementById('array-output');
       if (inputArrayButton) 
    inputArrayButton.addEventListener('click', function() {
     const arrayInput = prompt('Введите массив чисел через запятую:');
      if (arrayInput) {
        try {
         const arr = arrayInput.split(',').map(item => parseInt(item.trim()));
          if(arr.some(isNaN)){
                arrayOutputDiv.textContent = 'Ошибка: введены не корректные данные.';
              return;
            }
            const modifiedArray = modifyArray(arr);
             arrayOutputDiv.textContent = `Результат: [${modifiedArray.join(', ')}]`;
           } catch (e) {
           arrayOutputDiv.textContent = 'Ошибка: неверный формат ввода.';
           }
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const extrusionImage = document.getElementById('extrusion-image');
    const extrusionDepthInput = document.getElementById('extrusion-depth');
    const extrusionAngleInput = document.getElementById('extrusion-angle');
    const resetExtrusionButton = document.getElementById('reset-extrusion');

    function applyExtrusion() {
        const depth = extrusionDepthInput.value;
        const angle = extrusionAngleInput.value;
        const xOffset = depth * Math.cos(angle * Math.PI / 180);
        const yOffset = depth * Math.sin(angle * Math.PI / 180);
        extrusionImage.style.filter = `drop-shadow(${xOffset}px ${yOffset}px 5px #555)`;
    }

    extrusionDepthInput.addEventListener('input', applyExtrusion);
    extrusionAngleInput.addEventListener('input', applyExtrusion);

     resetExtrusionButton.addEventListener('click', function(){
      extrusionImage.style.filter = 'none';
      extrusionDepthInput.value = 10;
      extrusionAngleInput.value = 45;
    });
});