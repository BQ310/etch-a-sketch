const container = document.querySelector('.container');

const CONTAINER_WIDTH = 960;

const SIDE = 16;

for (let i = 0; i < Math.pow(SIDE, 2); i++) {
    const block = document.createElement('div');
    const width = CONTAINER_WIDTH / SIDE;
    block.style.height = block.style.width = width + 'px';

    block.addEventListener('pointerenter', (e) => {
        block.style.backgroundColor = 'blue';
    });

    container.appendChild(block);
}

const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    let input = prompt("Enter a grid size", 16);
})