// Plug-ins
import { compareAsc, format } from 'date-fns';

// All functions for the To-do list to work
import { loadHome } from './functions/load-home';
import { storeLocally } from './functions/local-storage';
import { headerLoad } from './pages/header';
import { loadSideBar } from './pages/side-bar';
import { sideBarController } from './pages/side-bar';
import { addProjectController } from './functions/projects';
import { displayLoad } from './pages/display';
import { buildProjectCards } from './functions/projects';
// import { getProjectsFromStorage } from './functions/projects';
// import { createTemplateProjects } from './functions/projects';

// All CSS style sheets for design
import './stylesheets/header.css';
import './stylesheets/sidebar.css';
import './stylesheets/todos.css';
import './stylesheets/display.css';
import './stylesheets/project.css';
import './stylesheets/task.css';

function loadPage() {
    headerLoad();
    loadSideBar();
    displayLoad();
    storeLocally();
    // getProjectsFromStorage();
    buildProjectCards();
};

loadPage();
function clearLocalStorage() {
    localStorage.clear();
}
clearLocalStorage();
console.log(localStorage);

// Use this function when loading home or on first load -- from getLocalStorage, project.js
    // for (let i = 0; i < localStorage.length; i++) {
    //     let key = localStorage.key(i);
    //     let value = localStorage.getItem(key);
    //     let retrievedProject = JSON.parse(value);
    //     console.log(retrievedProject);
    //     myProjects.push(retrievedProject);
    //     console.log(myProjects);
    // }

// Have code search for and create task cards off the bat

// Event Listeners for button clicks on header
    const menuButton = document.querySelector('.menu-button');
        menuButton.addEventListener('click', sideBarController);

    const homeButton = document.querySelector('.home-button');
        homeButton.addEventListener('click', loadHome);

    const addItemButton = document.querySelector('.add-item-button');
        addItemButton.addEventListener('click', addProjectController);