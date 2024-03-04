document.addEventListener('DOMContentLoaded', function () {
        const addSectionButton = document.getElementById('add-width');
      
        addSectionButton.addEventListener('click', function () {
          // Создаем новый элемент секции
          const newSection = document.createElement('section');
          
          // Добавляем содержимое секции (можете добавить свое содержимое)
          newSection.innerHTML = `
        <ul class="list sizes-conveyors_width_select">
          <li><button class="sizes-conveyors_width_add">&#10094;</button></li>
          <li><span class="sizes-conveyors_width_data" id="value">1"</span></li>
          <li><button class="sizes-conveyors_width_add">&#10095;</button></li>
        </ul>`;
          
          // Добавляем новую секцию в конец документа
          document.body.appendChild(newSection);
        });
      });
      