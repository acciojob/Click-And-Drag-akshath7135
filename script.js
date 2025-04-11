// Your code here.
const itemsContainer = document.querySelector(".items");
const items = document.querySelectorAll(".item");

let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

items.forEach(item => {
    item.addEventListener("mousedown", (event) => {
        selectedCube = event.target;
        
        // Get mouse position relative to the cube
        const rect = selectedCube.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;

        // Add mousemove event to track dragging
        document.addEventListener("mousemove", moveCube);
        document.addEventListener("mouseup", releaseCube);
    });
});

function moveCube(event) {
    if (!selectedCube) return;

    // Get container boundaries
    const containerRect = itemsContainer.getBoundingClientRect();
    const cubeRect = selectedCube.getBoundingClientRect();

    let newX = event.clientX - offsetX;
    let newY = event.clientY - offsetY;

    // Prevent cube from moving outside the container
    if (newX < containerRect.left) newX = containerRect.left;
    if (newY < containerRect.top) newY = containerRect.top;
    if (newX + cubeRect.width > containerRect.right) newX = containerRect.right - cubeRect.width;
    if (newY + cubeRect.height > containerRect.bottom) newY = containerRect.bottom - cubeRect.height;

    selectedCube.style.position = "absolute";
    selectedCube.style.left = `${newX}px`;
    selectedCube.style.top = `${newY}px`;
}

function releaseCube() {
    // Remove event listeners after releasing the mouse
    document.removeEventListener("mousemove", moveCube);
    document.removeEventListener("mouseup", releaseCube);
    selectedCube = null;
}
