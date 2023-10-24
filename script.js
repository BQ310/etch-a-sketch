const CONTAINER_WIDTH = 960;

function insertBlocks(side) {
    const container = document.querySelector('.container');
    for (let i = 0; i < Math.pow(side, 2); i++) {
        const block = document.createElement('div');
        const width = CONTAINER_WIDTH / side;
        block.classList.toggle('block');
        block.style.height = block.style.width = width + 'px';
        block.addEventListener('pointerenter', (e) => {
            block.style.backgroundColor = 'blue';
        });
        container.appendChild(block);
    }
}

function removeBlocks() {
    let blocks = document.querySelectorAll('.block');
    blocks.forEach((b) => {
        b.remove();
    });
}

insertBlocks(16);

const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    let side = prompt("Enter length of grid", 16);
    if (side != null) {
        removeBlocks();
        insertBlocks(side);
    }
});                      