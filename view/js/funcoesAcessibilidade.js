let currentFontSize = 16; 
let isHighContrast = false; 
let isGrayscale = false; 
let currentLineHeight = 1.5; 

// Exibição do menu de acessibilidade
function toggleAccessibilityMenu() {
    const menu = document.getElementById('accessibility-menu');
    menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
}

// Aumentar o tamanho do texto
function increaseTextSize() {
    currentFontSize += 2;
    document.body.style.fontSize = currentFontSize + 'px';
}

// Diminuir o tamanho do texto
function decreaseTextSize() {
    if (currentFontSize > 12) { 
        currentFontSize -= 2;
        document.body.style.fontSize = currentFontSize + 'px';
    }
}

// Alternar o alto contraste
function toggleContrast() {
    if (!isHighContrast) {
        document.body.classList.add('high-contrast');
        isHighContrast = true;
    } else {
        document.body.classList.remove('high-contrast');
        isHighContrast = false;
    }
}

// Alternar o modo escala de cinza
function toggleGrayscale() {
    if (!isGrayscale) {
        document.body.style.filter = 'grayscale(100%)';
        isGrayscale = true;
    } else {
        document.body.style.filter = 'none';
        isGrayscale = false;
    }
}

// Aumentar o espaçamento entre linhas
function increaseLineSpacing() {
    currentLineHeight += 0.1;
    document.body.style.lineHeight = currentLineHeight;
}

// Diminuir o espaçamento entre linhas
function decreaseLineSpacing() {
    if (currentLineHeight > 1.0) { 
        currentLineHeight -= 0.1;
        document.body.style.lineHeight = currentLineHeight;
    }
}

// Redefinir padrão
function resetAccessibility() {
    currentFontSize = 16; 
    document.body.style.fontSize = currentFontSize + 'px';

    document.body.classList.remove('high-contrast');
    isHighContrast = false;

    document.body.style.filter = 'none';
    isGrayscale = false;

    currentLineHeight = 1.5;
    document.body.style.lineHeight = currentLineHeight;
}
