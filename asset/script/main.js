//Скролл бар

var lastScrollTop = 0;
var scrollBar = document.getElementById("scrollBar");
var fill = document.getElementById("fill");

window.onscroll = function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPercent = (scrollTop / windowHeight) * 100;

    fill.style.width = scrollPercent + "%";

    // Показываем или скрываем скролл-бар
    if (scrollTop > 0) {
        scrollBar.style.opacity = 1; // Показываем полоску
    } else {
        scrollBar.style.opacity = 0; // Скрываем полоску
    }
};

 // Получаем все элементы с классами item-1, item-2 и т.д.
 const items = document.querySelectorAll('.Buisnes-cont-flex > div');

 items.forEach(item => {
     const minText = item.querySelector('.min-text');
     const maxText = item.querySelector('.max-text');

     // Добавляем обработчик события mouseenter для наведения
     item.addEventListener('mouseenter', () => {
         minText.style.opacity = '0'; // Скрываем min-text
         maxText.style.opacity = '1'; // Показываем max-text
         maxText.style.transition = 'opacity 0.6s ease'; // Обеспечиваем плавный переход
     });

     // Добавляем обработчик события mouseleave для ухода мыши
     item.addEventListener('mouseleave', () => {
         minText.style.opacity = '1'; // Показываем min-text
         maxText.style.opacity = '0'; // Скрываем max-text
     });
 });


 //Замена карт
 



 document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.nav-s-o ul li'); // Получаем элементы li
    const maps = document.querySelectorAll('.map-img img'); // Получаем все картинки

    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // Убираем нижний бордер и восстанавливаем цвет текста у всех элементов li
            listItems.forEach(li => {
                li.style.borderBottom = 'none';
                li.style.color = ''; // Восстанавливаем цвет текста
            });

            // Добавляем нижний бордер и меняем цвет текста к текущему элементу
            item.style.borderBottom = '4px solid #B01736';
            item.style.color = '#B01736'; // Меняем цвет текста на красный

            // Скрываем все картинки
            maps.forEach(map => {
                map.style.display = 'none'; // Скрываем все картинки
            });

            // Показываем только нужную картинку
            if (item.textContent === 'Москва') {
                document.getElementById('msk-map').style.display = 'block'; // Показываем картинку Москвы
            } else if (item.textContent === 'Центр') {
                document.getElementById('center-map').style.display = 'block'; // Показываем картинку Центра
            } else if (item.textContent === 'Северо-запад') {
                document.getElementById('sevZap-map').style.display = 'block'; // Показываем картинку Северо-запада
            } else if (item.textContent === 'Юг') {
                document.getElementById('yug-map').style.display = 'block'; // Показываем картинку Юга
            } else if (item.textContent === 'Волга') {
                document.getElementById('volga-map').style.display = 'block'; // Показываем картинку Волги
            } else if (item.textContent === 'Урал') {
                document.getElementById('ural-map').style.display = 'block'; // Показываем картинку Урала
            } else if (item.textContent === 'Сибирь') {
                document.getElementById('sibir-map').style.display = 'block'; // Показываем картинку Сибири
            } else if (item.textContent === 'Дальний восток') {
                document.getElementById('dalnVost-map').style.display = 'block'; // Показываем картинку Дальнего Востока
            } else if (item.textContent === 'Все') {
                document.getElementById('all-map').style.display = 'block'; // Показываем картинку "Все"
            } else {
                const selectedMapId = item.textContent.toLowerCase().replace(/\s+/g, '-') + '-map';
                const selectedMap = document.getElementById(selectedMapId);
                if (selectedMap) {
                    selectedMap.style.display = 'block'; // Показываем соответствующую картинку
                }
            }
        });
    });
});



