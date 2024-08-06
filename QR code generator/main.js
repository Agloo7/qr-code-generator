function generateQR() {
    const qrText = document.getElementById('qrText').value;
    const qrImage = document.getElementById('qrImage');
    const imgBox = document.getElementById('imgBox');

    if (qrText.trim() !== '') {
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrText)}`;
        qrImage.src = qrCodeUrl;
        imgBox.classList.add('show-img');

        // Save the input text and QR code URL to localStorage
        localStorage.setItem('qrText', qrText);
        localStorage.setItem('qrCodeUrl', qrCodeUrl);
    } else {
        imgBox.classList.remove('show-img');
        qrImage.src = '';

        // Clear the localStorage if input is empty
        localStorage.removeItem('qrText');
        localStorage.removeItem('qrCodeUrl');
    }
}

// Function to load the saved QR code and text from localStorage
function loadSavedQR() {
    const savedText = localStorage.getItem('qrText');
    const savedQRCodeUrl = localStorage.getItem('qrCodeUrl');
    const qrText = document.getElementById('qrText');
    const qrImage = document.getElementById('qrImage');
    const imgBox = document.getElementById('imgBox');

    if (savedText && savedQRCodeUrl) {
        qrText.value = savedText;
        qrImage.src = savedQRCodeUrl;
        imgBox.classList.add('show-img');
    }
}

// Load the saved QR code and text when the page is loaded
window.onload = loadSavedQR;
