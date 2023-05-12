document.querySelector('.balloon').addEventListener('click', function (event) {
    var balloon = this;

    
    var size = parseInt(window.getComputedStyle(balloon).getPropertyValue('width')) + 10;
    if (size > 420)
        size = 200;
    balloon.style.borderRadius = balloon.style.width = balloon.style.height = size.toString() + 'px';

    
    var currentColor = window.getComputedStyle(balloon).getPropertyValue('background-color');
    var newColor;
    if (currentColor === 'rgb(255, 0, 0)') // red
        newColor = 'green';
    else if (currentColor === 'rgb(0, 128, 0)') // green
        newColor = 'blue';
    else
        newColor = 'red';
    balloon.style.backgroundColor = newColor;
});

document.querySelector('.balloon').addEventListener('mouseleave', function (event) {
    var balloon = this;

    
    var size = parseInt(window.getComputedStyle(balloon).getPropertyValue('width')) - 5;
    if (size < 200)
        size = 200;
    balloon.style.borderRadius = balloon.style.width = balloon.style.height = size.toString() + 'px';

    
    var currentColor = window.getComputedStyle(balloon).getPropertyValue('background-color');
    var newColor;
    if (currentColor === 'rgb(255, 0, 0)') 
        newColor = 'blue';
    else if (currentColor === 'rgb(0, 128, 0)') 
        newColor = 'red';
    else
        newColor = 'green';
    balloon.style.backgroundColor = newColor;
});