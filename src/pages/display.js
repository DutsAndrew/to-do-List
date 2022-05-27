export {
    displayLoad,
}

function displayLoad() {

    const content = document.querySelector('#content');

        const display = document.createElement('div');
            display.classList.add('display-screen-w-sidebar');
            display.setAttribute('id', 'display');

        const displayNav = document.createElement('div');
            displayNav.classList.add('display-nav');

    content.appendChild(display);
}