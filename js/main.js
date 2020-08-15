const button = document.querySelector('.share-icon');
const socialMediaContainer = document.querySelector('.share-buttons');


const handleMouseIn = () => {
    socialMediaContainer.classList.add('share-buttons--toggle');
}
const handleMouseOut = () => {
    socialMediaContainer.classList.remove('share-buttons--toggle');
}

button.addEventListener('mouseenter', handleMouseIn);
button.addEventListener('mouseleave', handleMouseOut);