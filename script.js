const items = document.querySelectorAll('.item');
let selectedItem = null;
let offsetX, offsetY;

// Mouse down event to select the item
items.forEach(item => {
    item.addEventListener('mousedown', (e) => {
        selectedItem = item;
        offsetX = e.clientX - item.getBoundingClientRect().left;
        offsetY = e.clientY - item.getBoundingClientRect().top;
        item.style.transition = 'none'; // Disable transition during drag
    });
});

// Mouse move event to move the selected item
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
        if (newY + selectedItem.offsetHeight > containerRect.bottom) newY = containerRect.bottom - selectedItem.offsetHeight;

        // Set the new position
        selectedItem.style.position = 'absolute';
        selectedItem.style.left = `${newX}px`;
        selectedItem.style.top = `${newY}px`;
    }
});

// Mouse up event to drop the item
document.addEventListener('mouseup', () => {
    if (selectedItem) {
        selectedItem.style.transition = ''; // Re-enable transition
        selectedItem = null; // Deselect the item
    }
});