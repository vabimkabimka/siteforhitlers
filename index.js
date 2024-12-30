    // Отримуємо елемент лінійки
    const ruler = document.getElementById('coordinate-ruler');
    let currentSquare = null; // Змінна для збереження поточного квадрата

    // Генеруємо сітку 11x11 (1 додатковий рядок/стовпець для позначень)
    for (let row = 0; row < 11; row++) {
      for (let col = 0; col < 11; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        
        // Верхній рядок (мітки для осі X)
        if (row === 0 && col > 0) {
          cell.textContent = col; // Цифри 1-10
          cell.classList.add('axis-label');
        }
        // Лівий стовпець (мітки для осі Y)
        else if (col === 0 && row > 0) {
          cell.textContent = row; // Цифри 1-10
          cell.classList.add('axis-label');
        }
        
        ruler.appendChild(cell);
      }
    }

    // Обробник події для кнопки
    document.getElementById('place-square').addEventListener('click', function() {
      const x = parseInt(document.getElementById('input-x').value); // Отримуємо X
      const y = parseInt(document.getElementById('input-y').value); // Отримуємо Y

      // Перевіряємо, чи введені коректні координати
      if (x >= 1 && x <= 10 && y >= 1 && y <= 10) {
        // Видаляємо попередній квадрат (якщо він існує)
        if (currentSquare) {
          currentSquare.remove();
        }

        // Обчислюємо координати для розміщення квадрата
        const squareX = x * 50; // Ширина клітинки * X
        const squareY = y * 50; // Висота клітинки * Y

        // Створюємо новий квадрат
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.left = `${squareX}px`; // Встановлюємо позицію по X
        square.style.top = `${squareY}px`;  // Встановлюємо позицію по Y

        // Додаємо квадрат до лінійки
        ruler.appendChild(square);

        // Зберігаємо новий квадрат у змінній
        currentSquare = square;
      } else {
        alert('Введіть коректні координати (від 1 до 10).');
      }
    });

    