export {
    displayLoad,
}

function displayLoad() {

    const content = document.querySelector('#content');

        const display = document.createElement('div');
            display.classList.add('display-screen-w-sidebar');
            display.setAttribute('id', 'display');

    content.appendChild(display);
}