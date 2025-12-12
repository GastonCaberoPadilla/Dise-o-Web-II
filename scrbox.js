// Demo interactiva Box-Sizing

const widthSlider = document.getElementById('widthSlider');
const paddingSlider = document.getElementById('paddingSlider');
const borderSlider = document.getElementById('borderSlider');

const widthValue = document.getElementById('widthValue');
const paddingValue = document.getElementById('paddingValue');
const borderValue = document.getElementById('borderValue');

const demoContentBox = document.getElementById('demoContentBox');
const demoBorderBox = document.getElementById('demoBorderBox');

const totalContentBox = document.getElementById('totalContentBox');
const totalBorderBox = document.getElementById('totalBorderBox');

function updateBoxes() {
    const width = parseInt(widthSlider.value);
    const padding = parseInt(paddingSlider.value);
    const border = parseInt(borderSlider.value);

    widthValue.textContent = `${width}px`;
    paddingValue.textContent = `${padding}px`;
    borderValue.textContent = `${border}px`;

    [demoContentBox, demoBorderBox].forEach(box => {
        box.style.width = `${width}px`;
        box.style.padding = `${padding}px`;
        box.style.borderWidth = `${border}px`;
    });

    const contentBoxTotal = width + (padding * 2) + (border * 2);
    const borderBoxTotal = width;

    totalContentBox.textContent = `Total: ${contentBoxTotal}px`;
    totalBorderBox.textContent = `Total: ${borderBoxTotal}px`;
}

widthSlider.addEventListener('input', updateBoxes);
paddingSlider.addEventListener('input', updateBoxes);
borderSlider.addEventListener('input', updateBoxes);

updateBoxes();
