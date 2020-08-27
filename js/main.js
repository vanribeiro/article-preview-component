const enableShareIconButton = document.querySelector('.share-section');
const disableShareIconButton = document.querySelector('.share-buttons .share-icon');
const socialMediaContainer = document.querySelector('.share-buttons');


const handleMouseIn = () => socialMediaContainer.classList.add('share-buttons--toggle');
const handleMouseOut = () => socialMediaContainer.classList.remove('share-buttons--toggle');

const handleTabIn = (e) => {
    if(e.keyCode === 13) socialMediaContainer.classList.add('share-buttons--toggle');
}

const handleTabOut = (e) => {
    if(e.keyCode === 27) socialMediaContainer.classList.remove('share-buttons--toggle');
}

const handleTouchIn = () => socialMediaContainer.classList.add('share-buttons--toggle');
const handleTouchOut = () => socialMediaContainer.classList.remove('share-buttons--toggle');

enableShareIconButton.addEventListener('mouseenter', handleMouseIn);
enableShareIconButton.addEventListener('mouseleave', handleMouseOut);

enableShareIconButton.addEventListener('keydown', handleTabIn);
enableShareIconButton.addEventListener('keydown', handleTabOut);

enableShareIconButton.addEventListener('click', handleTouchIn);
disableShareIconButton.addEventListener('click', handleTouchOut);