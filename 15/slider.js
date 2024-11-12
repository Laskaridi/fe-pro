const cube = document.getElementById('cube');
    let currentAngleX = 0;
    let currentAngleY = 0;
    let currentFace = 0;

    // Функція для обертання куба
    function rotateCube(direction) {
        // Оновлюємо поточний слайд
        currentFace = (currentFace + direction + 6) % 6;

        // Обчислюємо кут обертання для кожного боку куба
        switch (currentFace) {
            case 0: currentAngleY = 0; currentAngleX = 0; break;
            case 1: currentAngleY = 180; currentAngleX = 0; break;
            case 2: currentAngleY = -90; currentAngleX = 0; break;
            case 3: currentAngleY = 90; currentAngleX = 0; break;
            case 4: currentAngleX = -90; currentAngleY = 0; break;
            case 5: currentAngleX = 90; currentAngleY = 0; break;
        }

        // Застосовуємо обертання до куба
        cube.style.transform = `rotateY(${currentAngleY}deg) rotateX(${currentAngleX}deg)`;
    }