// Plug-ins
import { compareAsc, format } from 'date-fns';

// All functions for the To-do list to work
import { storeLocally } from './functions/local-storage';
import { headerLoad } from './pages/header';
import { loadSideBar } from './pages/side-bar';
import { sideBarController } from './pages/side-bar';
import { loadHome } from './functions/load-home';
import { addProjectController } from './functions/add-project';
import { displayLoad } from './pages/display';
import { buildProjectCards } from './functions/add-project';
import { createTemplateProjects } from './functions/add-project';

// All CSS style sheets for design
import './stylesheets/header.css';
import './stylesheets/sidebar.css';
import './stylesheets/todos.css';
import './stylesheets/display.css';
import './stylesheets/add-item.css';

// Page Load
headerLoad();
loadSideBar();
displayLoad();
createTemplateProjects();
buildProjectCards();

// Event Listeners for button clicks on header
    const menuButton = document.querySelector('.menu-button');
        menuButton.addEventListener('click', sideBarController);

    const homeButton = document.querySelector('.home-button');
        homeButton.addEventListener('click', loadHome);

    const addItemButton = document.querySelector('.add-item-button');
        addItemButton.addEventListener('click', addProjectController);

