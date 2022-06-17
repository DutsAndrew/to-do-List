// Plug-ins
import { compareAsc, format } from 'date-fns';

import { loadHome } from './functions/load-home';
import { checkIfStorageIsAvailable } from './functions/local-storage';
import { headerLoad } from './pages/header';
import { loadSideBar } from './pages/side-bar';
import { sideBarController } from './pages/side-bar';
import { addProjectController } from './functions/projects';
import { displayLoad } from './pages/display';
import { projectCardController } from './functions/projects';
import { renderProjects } from './functions/projects';
import { renderTasks } from './functions/tasks';
import { taskCardController } from './functions/tasks';
import { hideTasksOnLoad } from './functions/projects';

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
    checkIfStorageIsAvailable();
    renderProjects();
    projectCardController();
    renderTasks();
    taskCardController();
    hideTasksOnLoad();
};

loadPage();
// localStorage.clear();

// Event Listeners for button clicks on header
    const menuButton = document.querySelector('.menu-button');
        menuButton.addEventListener('click', sideBarController);

    const homeButton = document.querySelector('.home-button');
        homeButton.addEventListener('click', loadHome);

    const addItemButton = document.querySelector('.add-item-button');
        addItemButton.addEventListener('click', addProjectController);