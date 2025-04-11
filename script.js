const itemsContainer = document.querySelector(".items");

let isDragging = false;
let startX;
let scrollLeft;

itemsContainer.addEventListener("mousedown", (event) => {
    isDragging = true;
    itemsContainer.classList.add("active");

    // Capture the initial position
    startX = event.pageX - itemsContainer.offsetLeft;
    scrollLeft = itemsContainer.scrollLeft;
});

itemsContainer.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    event.preventDefault();

    const x = event.pageX - itemsContainer.offsetLeft;
    const walk = (x - startX) * 2; // Speed factor

    itemsContainer.scrollLeft = scrollLeft - walk;
});

itemsContainer.addEventListener("mouseup", () => {
    isDragging = false;
    itemsContainer.classList.remove("active");
});

itemsContainer.addEventListener("mouseleave", () => {
    isDragging = false;
    itemsContainer.classList.remove("active");
});
