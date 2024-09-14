const colors = [
    '#FF5733', '#33FF57', '#5733FF', '#F333FF', '#33FFF5', '#FF333F', '#A1FF33', '#33A1FF', 
    '#FF33A1', '#33FFA1', '#FF5733', '#57FF33', '#5733FF', '#F533FF', '#33F5FF', '#FFF533', 
    '#FF33F5', '#F53333', '#AFFF33', '#5733FF', '#3357FF', '#FF33A1', '#33FFA1', '#FF5733', 
    '#FF33F1', '#A1FF33', '#5733FF', '#F533A1', '#A1AFFF', '#3333FF', '#5733F5', '#FF3357',
    '#F5FF33', '#A1A1FF', '#33AFFF', '#5733A1', '#33F5A1', '#FF5733', '#FF3357', '#33A1F5', 
    '#5733FF', '#F53333', '#A1FF33', '#5733A1', '#A1A1A1', '#FF5733', '#5733A1', '#F533A1'
];

function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

document.body.addEventListener('click', changeColor);
document.body.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        changeColor();
    }
});
