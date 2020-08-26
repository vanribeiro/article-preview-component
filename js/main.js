const enableShareIconButton = document.querySelector('.share-icon');
const disableShareIconButton = document.querySelector('.share-buttons .share-icon');
const socialMediaContainer = document.querySelector('.share-buttons');


const handleMouseIn = () => socialMediaContainer.classList.add('share-buttons--toggle');
const handleMouseOut = () => socialMediaContainer.classList.remove('share-buttons--toggle');

const handleTouchIn = () => socialMediaContainer.classList.add('share-buttons--toggle');
const handleTouchOut = (e) => socialMediaContainer.classList.remove('share-buttons--toggle');

enableShareIconButton.addEventListener('mouseenter', handleMouseIn);
enableShareIconButton.addEventListener('mouseleave', handleMouseOut);
enableShareIconButton.addEventListener('click', handleTouchIn);
disableShareIconButton.addEventListener('click', handleTouchOut);