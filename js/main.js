const btnOpen = document.getElementById('btn-open');
const btnOpen2 = document.getElementById('btn-open2');
const btnOpen3 = document.getElementById('btn-open3');
const btnOpen4 = document.getElementById('btn-open4');
const btnOpen5 = document.getElementById('btn-open5');
const btnOpen6 = document.getElementById('btn-open6');

const modal = document.getElementById('wrapper-modal');

const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');

const openModal = () => {
    modal.classList.add('active');
}

const closeModel = () => {
    modal.classList.remove('active');
};
btnOpen.addEventListener('click', openModal);
btnOpen2.addEventListener('click', openModal);
btnOpen3.addEventListener('click', openModal);
btnOpen4.addEventListener('click', openModal);
btnOpen5.addEventListener('click', openModal);
btnOpen6.addEventListener('click', openModal);

overlay.addEventListener('click', closeModel);
btnClose.addEventListener('click', closeModel);