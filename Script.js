function applyChanges() {
    const bgColor = document.getElementById('bg-color').value;
    const fontColor = document.getElementById('font-color').value;
    const fontSize = document.getElementById('font-size').value;
    const textAlign = document.getElementById('text-align').value;
    const fontStyle = document.getElementById('font-style').value;

    const content = document.getElementById('content');
    
    if (bgColor) {
        content.style.backgroundColor = bgColor;
    }
    if (fontColor) {
        content.style.color = fontColor;
    }
    if (fontSize) {
        content.style.fontSize = fontSize + 'px';
    }
    if (textAlign) {
        content.style.textAlign = textAlign;
    }
    if (fontStyle) {
        content.style.fontStyle = fontStyle;
    }
}
