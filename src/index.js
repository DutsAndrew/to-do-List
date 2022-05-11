// All functions for the To-do list to work
import { changePriority } from './functions/change-priority';
import { createProject } from './functions/create-project';
import { createTask } from './functions/create-task';
import { deleteItem } from './functions/delete-item';
import { storeLocally } from './functions/local-storage';
import { markComplete } from './functions/mark-complete';
import { headerLoad } from './pages/header';
import { setPriority } from './functions/set-priority';
import { viewAllProjects } from './functions/view-all-projects';
import { viewAllToDos } from './functions/view-all-to-dos';
import { viewItem } from './functions/view-item';

// All CSS style sheets for design
import './stylesheets/header.css';
import './stylesheets/sidebar.css';
import './stylesheets/todos.css';

// Page Load
headerLoad();

const content = document.getElementById('content');