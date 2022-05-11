export { 
    headerLoad,
}

function headerLoad() {
    const content = document.getElementById('content');

    const header = document.createElement('div');
        header.classList.add('header');

        const navBar = document.createElement('div');
            navBar.classList.add('nav-bar');

            const leftNav = document.createElement('div');
                leftNav.classList.add('nav-left');

                const menu = document.createElement('div');
                    menu.classList.add('menu-button');

                const home = document.createElement('div');
                    home.classList.add('home-button');

                leftNav.appendChild(menu);
                leftNav.appendChild(home);
                
            const toDoLogo = document.createElement('div');
                toDoLogo.classList.add('to-do-logo');

            const rightNav = document.createElement('div');
                rightNav.classList.add('nav-right');

                const addItem = document.createElement('div');
                    addItem.classList.add('add-item-button');

                const completionTracker = document.createElement('div');
                    completionTracker.classList.add('completion-tracker');

                rightNav.appendChild(addItem);
                rightNav.appendChild(completionTracker);

        navBar.appendChild(leftNav);
        navBar.appendChild(toDoLogo);
        navBar.appendChild(rightNav);
    
    header.appendChild(navBar);

    content.appendChild(header);
}