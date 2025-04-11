// Your code here.
const items = document.querySelectorAll('.item');
let selectedItem = null;
let offsetX, offsetY;

items.forEach(item => {
    item.addEventListener('mousedown', (e) => {
        selectedItem = item;
        offsetX = e.clientX - item.getBoundingClientRect().left;
        offsetY = e.clientY - item.getBoundingClientRect().top;
        item.style.transition = 'none'; // Disable transition during drag
    });
});

document.addEventListener('mousemove', (e) => {
    if (selectedItem) {
        const container = document.querySelector('.items');
        const containerRect = container.getBoundingClientRect();

        // Calculate new position
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Boundary conditions
        if (newX < containerRect.left) newX = containerRect.left;
        if (newX + selectedItem.offsetWidth > containerRect.right) newX = containerRect.right - selectedItem.offsetWidth;
        if (newY < containerRect.top) newY = containerRect.top;
        if (
