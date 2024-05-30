window.onload = function() {
    const images = document.querySelectorAll('.random-image');
    const containerRand = document.querySelector('.containerRand');

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    function displayRandomImage() {
        const randomImage = getRandomImage();
        containerRand.innerHTML = '';
        containerRand.appendChild(randomImage.cloneNode());
    }

    displayRandomImage();

    // Change the image every 3 seconds
    setInterval(displayRandomImage, 4000);
};
