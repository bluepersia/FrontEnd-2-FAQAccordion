const options = document.querySelectorAll(`.accordion-option`);

let current;

document.querySelector('.accordion').addEventListener('click', onClickAccordion);


function onClickAccordion({ target }) {
    const opt = target.closest('.accordion-option');
    toggleOpt(opt);
}


function toggleOpt(opt) {

    if (!opt)
        return;

    if (current)
        current.classList.remove('active');

    if (current == opt) {
        current = null;
        return;
    }

    current = opt;

    current.classList.add('active');
}