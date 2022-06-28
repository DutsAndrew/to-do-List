export {
    addProjectController,
    projectCardController,
    renderProjects,
    hideTasksOnLoad,
}

// import { add } from 'date-fns';
import { setPriority } from './set-priority';
import { completeIt } from './archive-it';
import { addTaskController } from './tasks';
import { projectNavController } from './item-navs';
import { assignPriorityColors } from './set-priority';
import flagSVG from '../svgs/flag.svg';

// variables needed for functions to run
let addProjectFormOpen = false;
let today = new Date().toISOString().slice(0, 10);
let priority = null;
let myProjects = [];
let projectKey = 0;

// Add-Item Pop Nav Controller
function addProjectController() {
    if (addProjectFormOpen === false) {
        addProjectNav();
        addProjectFormOpen = true;
    } else if ( addProjectFormOpen === true ) {
        closeAddProjectNav();
        addProjectFormOpen = false;
    }
}

function closeAddProjectNav() {
    const content = document.querySelector('#content');
    const addProjectNav = document.querySelector('.add-item-nav');
    
    content.removeChild(addProjectNav);
    addProjectFormOpen = false;
}

function addProjectNav(currentProjectTitle, currentProjectDescription) {
    const content = document.querySelector('#content');

        const addProjectNav = document.createElement('div');
            addProjectNav.classList.add('add-item-nav');

            const formContainer = document.createElement('form');
                formContainer.classList.add('add-item-form-container');
            
                const itemFieldset = document.createElement('fieldset');
                    itemFieldset.classList.add('item-fieldset');

                    const labelForTitle = document.createElement('label');
                        labelForTitle.classList.add('label-title');
                        labelForTitle.for = "title";
                        labelForTitle.class = "label-title";
                        labelForTitle.textContent = "Project Title:";

                    const inputForTitle = document.createElement('textarea');
                        inputForTitle.classList.add('input-title');
                        inputForTitle.class = "input";
                        inputForTitle.id = "title";
                        inputForTitle.rows = "2";
                        inputForTitle.cols = "50";
                        if (currentProjectTitle != undefined || null) {
                            inputForTitle.textContent = `${currentProjectTitle}`;
                        } else if (currentProjectTitle == undefined || null) {
                            inputForTitle.placeholder = "e.g., Read 15 mins, Workout, Make Dinner";
                        }

                    const labelForDescription = document.createElement('label');
                        labelForDescription.classList.add('label-description');
                        labelForDescription.for = "description";
                        labelForDescription.class = "label-title";
                        labelForDescription.textContent = "Description:";

                    const inputForDescription = document.createElement('textarea');
                        inputForDescription.classList.add('input-description');
                        inputForDescription.class = "input";
                        inputForDescription.id = "description";
                        inputForDescription.rows = "5";
                        inputForDescription.cols = "50";
                        if (currentProjectDescription != undefined || null) {
                            inputForDescription.textContent = `${currentProjectDescription}`;
                        } else if (currentProjectDescription == undefined || null) {
                            inputForDescription.placeholder = "Description";
                        }

                    const labelForCalendar = document.createElement('label');
                        labelForCalendar.classList.add('label-calendar');
                        labelForCalendar.for = "due";
                        labelForCalendar.class = "input";
                        labelForCalendar.id = "calendar";
                        labelForCalendar.textContent = "Due Date:";

                    const inputForCalendar = document.createElement('input');
                        inputForCalendar.classList.add('input-calendar');
                        inputForCalendar.type = "date";
                        inputForCalendar.id = "due";
                        inputForCalendar.min = today;
                        inputForCalendar.max = "2100-01-01";

                    const priorityButtonContainer = document.createElement('div');
                        priorityButtonContainer.classList.add('priority-button-container');
                        priorityButtonContainer.setAttribute('id', 'priority-container');

                        const labelForPriority = document.createElement('label');
                            labelForPriority.classList.add('label-priority');
                            labelForPriority.for = "priority-buttons";
                            labelForPriority.textContent = "Priority:";

                        const priorityButton1 = document.createElement('div');
                            priorityButton1.setAttribute('id', 'priority-button-selector-1');
                            priorityButton1.classList.add('priority-button');
                            priorityButton1.textContent = "Priority 1";
                            priorityButton1.onclick = function() {
                                setPriority(1);
                                priority = 1;
                            }

                            const priorityImg1 = document.createElement('img');
                                priorityImg1.setAttribute('id', 'priority-flag-1');
                                priorityImg1.classList.add('priority-1');
                                priorityImg1.src = flagSVG;

                                priorityButton1.appendChild(priorityImg1);

                        const priorityButton2 = document.createElement('div');
                            priorityButton2.setAttribute('id', 'priority-button-selector-2');
                            priorityButton2.classList.add('priority-button');
                            priorityButton2.textContent = "Priority 2";
                            priorityButton2.onclick = function() {
                                setPriority(2);
                                priority = 2;
                            }

                            const priorityImg2 = document.createElement('img');
                                priorityImg2.setAttribute('id', 'priority-flag-2');
                                priorityImg2.classList.add('priority-2');
                                priorityImg2.src = flagSVG;

                                priorityButton2.appendChild(priorityImg2);

                        const priorityButton3 = document.createElement('div');
                            priorityButton3.setAttribute('id', 'priority-button-selector-3');
                            priorityButton3.classList.add('priority-button');
                            priorityButton3.textContent = "Priority 3";
                            priorityButton3.onclick = function() {
                                setPriority(3);
                                priority = 3;
                            }

                            const priorityImg3 = document.createElement('img');
                                priorityImg3.setAttribute('id', 'priority-flag-3');
                                priorityImg3.classList.add('priority-3');
                                priorityImg3.src = flagSVG;

                                priorityButton3.appendChild(priorityImg3);

                        const priorityButton4 = document.createElement('div');
                            priorityButton4.setAttribute('id', 'priority-button-selector-4');
                            priorityButton4.classList.add('priority-button');
                            priorityButton4.textContent = "Priority 4";
                            priorityButton4.onclick = function() {
                                setPriority(4);
                                priority = 4;
                            }

                            const priorityImg4 = document.createElement('img');
                                priorityImg4.setAttribute('id', 'priority-flag-4');
                                priorityImg4.classList.add('priority-4');
                                priorityImg4.src = flagSVG;

                                priorityButton4.appendChild(priorityImg4);

                    const submitButton = document.createElement('input');
                        submitButton.classList.add('submit-button');
                        submitButton.type = "button";
                        submitButton.name = "submit";
                        submitButton.value = "Add Project";
                        submitButton.onclick = function() {
                            if (addProjectFormOpen === true) {
                                storeFormValues();
                                closeAddProjectNav();
                            } else if (addProjectFormOpen === false) {
                                saveProjectEdit(currentProjectTitle);
                            } else {
                                return;
                            }
                            
                        }

                    const cancelButton = document.createElement('button');
                        cancelButton.classList.add('cancel-button');
                        cancelButton.textContent = "Cancel";
                        cancelButton.onclick = function() {
                            closeAddProjectNav();
                        }

                priorityButtonContainer.appendChild(labelForPriority);
                priorityButtonContainer.appendChild(priorityButton1);
                priorityButtonContainer.appendChild(priorityButton2);
                priorityButtonContainer.appendChild(priorityButton3);
                priorityButtonContainer.appendChild(priorityButton4);

                itemFieldset.appendChild(labelForTitle);
                itemFieldset.appendChild(inputForTitle);
                itemFieldset.appendChild(labelForDescription);
                itemFieldset.appendChild(inputForDescription);
                itemFieldset.appendChild(labelForCalendar);
                itemFieldset.appendChild(inputForCalendar);
                itemFieldset.appendChild(priorityButtonContainer);
                itemFieldset.appendChild(submitButton);
                itemFieldset.appendChild(cancelButton);
            formContainer.appendChild(itemFieldset);
        addProjectNav.appendChild(formContainer);
    content.appendChild(addProjectNav);
}

function storeFormValues() {
    const projectTitle = document.querySelector('#title').value;
    const projectDescription = document.querySelector('#description').value;
    const projectDue = document.querySelector('#due').value;
    const projectBuild = "no";

    projectKey++;

    projectStorageController(projectTitle, projectDescription, projectDue, priority, projectBuild, projectKey);
}

function Project(title, description, due, priority, build, key) {
    this.title = title;
    this.description = description;
    this.due = due;
    this.priority = priority;
    this.build = build;
    this.key = key;
    this.getInfo = function() {
        return(`${title}, ${description}, ${due}, ${priority}, ${key}`);
    };
}

function projectStorageController(projectTitle, projectDescription, projectDue, priority, projectBuild, projectKey) {

    // Code to prevent whitespaces in ID
    let projectTitleId;
    if (projectTitle.includes(" ")) {
        projectTitleId = projectTitle.replace(/\s+/g, '-');
    } else {
        projectTitleId = projectTitle;
    }

    if(!localStorage.getItem(`${projectTitleId}`)) {
        populateStorage(projectTitle, projectDescription, projectDue, priority, projectBuild, projectKey);
        getLocalStorage(projectTitle);
      } else {
        getLocalStorage(projectTitle);
      }
}

function populateStorage(projectTitle, projectDescription, projectDue, priority, projectBuild, projectKey) {

    // Code to prevent whitespaces in ID
    let projectTitleId;
    if (projectTitle.includes(" ")) {
        projectTitleId = projectTitle.replace(/\s+/g, '-');
    } else {
        projectTitleId = projectTitle;
    }

    let newProject = new Project(projectTitle, projectDescription, projectDue, priority, projectBuild, projectKey);

    localStorage.setItem(`${projectTitleId}`, JSON.stringify(newProject));
}

function getLocalStorage(projectTitle) {

    // Code to prevent whitespaces in ID
    let projectTitleId;
    if (projectTitle.includes(" ")) {
        projectTitleId = projectTitle.replace(/\s+/g, '-');
    } else {
        projectTitleId = projectTitle;
    }
    
    let getProject = JSON.parse(localStorage.getItem(`${projectTitleId}`));

    myProjects.push(getProject);
    projectCardController();
}

// For adding ALL projects from local storage to page
function renderProjects() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key === "Tasks") {
            continue;
        } else {
            let value = localStorage.getItem(key);
            myProjects.push(JSON.parse(value));
        }
    }
    console.table(myProjects);
}

function projectCardController() {
    myProjects.forEach(function (item) {
        let projectTitle = item.title;
        let projectDescription = item.description;
        let projectDue = item.due;
        let projectPriority = item.priority;
        let projectKey = item.key;

        // Code to prevent whitespaces in ID
        let projectTitleId;
        if (projectTitle.includes(" ")) {
            projectTitleId = projectTitle.replace(/\s+/g, '-');
        } else {
            projectTitleId = projectTitle;
        }

        // Validation for whether a card has been created or not
        if (document.getElementById(`${projectTitleId}`)) {
            return
        } else if (item.build == "no" && !document.getElementById(`${projectTitleId}`)) {
            createProjectCard(projectTitleId, projectTitle, projectDescription, projectDue, projectPriority, projectKey);
            assignPriorityColors(projectTitleId, projectPriority);
        } else if (item.build == "yes") {
            return
        }
    });
}

function createProjectCard(projectTitleId, projectTitle, projectDescription, projectDue, projectPriority, projectKey) {
    const projectHolder = document.querySelector('#project-holder');
    const display = document.querySelector('#display');

    const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-divs');
        projectDiv.setAttribute('id', `${projectTitleId}`);
        projectDiv.classList.add(`${projectKey}`)
        
        const projectDisplayContainer = document.createElement('div');
            projectDisplayContainer.setAttribute('id', `${projectTitleId}-Display`);
            projectDisplayContainer.classList.add('project-display-container');

            const checkBox = document.createElement('input');
                    checkBox.setAttribute('id', 'project-checkbox');
                    checkBox.setAttribute('type', 'checkbox');
                    checkBox.classList.add('checkbox-access');
                    checkBox.addEventListener('change', projectNavController);

            // Hidden until checkbox is selected
            const completeItButton = document.createElement('div');
                completeItButton.setAttribute('id', 'complete-it-button');
                completeItButton.classList.add('complete-button-closed');
                completeItButton.addEventListener('click', completeIt);

            const projectTitleDisplay = document.createElement('p');
                projectTitleDisplay.textContent = projectTitle;

                    // Duplicate created before adding class, so that dup, doesn't have the same class
                    let dupProject = projectTitleDisplay.cloneNode(true);
                        dupProject.setAttribute('id', `${projectTitleId}-Dup`);
                        dupProject.classList.add('dup-project-title');

                projectTitleDisplay.classList.add('project-display-title-text');

            const projectDescriptionDisplay = document.createElement('p');
                projectDescriptionDisplay.classList.add('project-display-description-text');
                projectDescriptionDisplay.textContent = projectDescription;

            const projectDueDisplay = document.createElement('p');
                projectDueDisplay.classList.add('project-display-due-text')
                projectDueDisplay.textContent = projectDue;

            const viewProjectContainer = document.createElement('div');
                    viewProjectContainer.classList.add('view-project-container-closed');
                    viewProjectContainer.setAttribute('id', `View ${projectTitleId}`)
                    viewProjectContainer.onclick = function(e) {
                        viewProject(e);
                    }

                const viewProjectSvg = document.createElement('div');
                    viewProjectSvg.classList.add('view-project-svg-closed');
                    viewProjectSvg.setAttribute('id', 'view-project-svg')
                
                const viewProjectText = document.createElement('p');
                    viewProjectText.classList.add('view-project-text-closed');
                    viewProjectText.setAttribute('id', 'view-project-text');
                    viewProjectText.textContent = "View Project";

                viewProjectContainer.appendChild(viewProjectSvg);
                viewProjectContainer.appendChild(viewProjectText);

            const addTaskContainer = document.createElement('div');
                addTaskContainer.classList.add('add-task-container-closed');
                addTaskContainer.setAttribute('id', `add-task ${projectTitleId}`);
                addTaskContainer.onclick = function(e) {
                    viewProject(e);
                    addTaskController(e);
                }

                const addTaskSvg = document.createElement('div');
                    addTaskSvg.setAttribute('id', 'add-task-svg');
                    addTaskSvg.classList.add('add-task-svg-closed');

                const addTaskText = document.createElement('p');
                    addTaskText.setAttribute('id', 'add-task-text');
                    addTaskText.classList.add('add-task-text-closed');
                    addTaskText.textContent = "Add Task";

                addTaskContainer.appendChild(addTaskSvg);
                addTaskContainer.appendChild(addTaskText);

            const editProjectButton = document.createElement('div');
                editProjectButton.setAttribute('id', 'edit-project-button');
                editProjectButton.classList.add('edit-project-closed');
                editProjectButton.onclick = function(e) {
                    editProject(e);
                }

            const deleteProjectButton = document.createElement('div');
                deleteProjectButton.setAttribute('id', 'delete-project-button');
                deleteProjectButton.classList.add('delete-project-closed');
                deleteProjectButton.addEventListener('click', deleteProject);

            projectDisplayContainer.appendChild(checkBox);
            projectDisplayContainer.appendChild(completeItButton);
            projectDisplayContainer.appendChild(projectTitleDisplay);
            projectDisplayContainer.appendChild(projectDescriptionDisplay);
            projectDisplayContainer.appendChild(projectDueDisplay);
            projectDisplayContainer.appendChild(viewProjectContainer);
            projectDisplayContainer.appendChild(addTaskContainer);
            projectDisplayContainer.appendChild(editProjectButton);
            projectDisplayContainer.appendChild(deleteProjectButton);        

        projectDiv.appendChild(projectDisplayContainer);

    display.appendChild(projectDiv);
  
    projectHolder.appendChild(dupProject);
}

function viewProject(e) {
    let projectToDisplayId = e.composedPath()[3].id;
    console.log(projectToDisplayId);

    if (projectToDisplayId != "display") {
        const allProjects = document.querySelectorAll('.project-divs');
            allProjects.forEach(project => {
                project.classList.remove('project-divs');
                project.classList.add('project-divs-hidden');
            });
        const allTasks = document.querySelectorAll('.task-card-hidden');
            allTasks.forEach(task => {
                task.classList.remove('task-card-hidden');
                task.classList.add('task-card');
            })
        const projectToDisplay = document.getElementById(`${projectToDisplayId}`);
            projectToDisplay.classList.remove('project-divs-hidden');
            projectToDisplay.classList.add('project-divs');
    } else if (projectToDisplayId == "display") {
        return
    }
}

function editProject(e) {
    let currentProjectTitle = (e.composedPath()[1].children[2].textContent);
    let currentProjectDescription = (e.composedPath()[1].children[3].textContent);
 
    addProjectNav(currentProjectTitle, currentProjectDescription);
}
 
function saveProjectEdit(currentProjectTitle) {
    const newTitle = document.querySelector('#title').value;
    const newDescription = document.querySelector('#description').value;
    const newDue = document.querySelector('#due').value;
    const newBuild = "no";
 
    let projectPriority = priority;

    let projectTitleId;
    if (currentProjectTitle.includes(" ")) {
        projectTitleId = currentProjectTitle.replace(/\s+/g, '-');
    } else {
        projectTitleId = currentProjectTitle;
    }

    let newProjectTitleId;
    if (newTitle.includes(" ")) {
        newProjectTitleId = newTitle.replace(/\s+/g, '-');
    } else {
        newProjectTitleId = newTitle;
    }
 
    let locallyStoredProject = JSON.parse(localStorage.getItem(`${projectTitleId}`));
        locallyStoredProject.title = newTitle;
        locallyStoredProject.description = newDescription;
        locallyStoredProject.due = newDue;
        locallyStoredProject.priority = projectPriority;
        locallyStoredProject.build = newBuild;
    localStorage.setItem(`${newProjectTitleId}`, JSON.stringify(locallyStoredProject));
    localStorage.removeItem(`${projectTitleId}`);

    // functionality to match tasks back to project
    let localTasks = JSON.parse(localStorage.getItem('Tasks'));
        for (let i = 0; i < localTasks.length; i++) {
            if (localTasks[i].project == projectTitleId) {
                localTasks[i].project = newProjectTitleId;
            } else {
                continue;
            }
           
        }
    localStorage.setItem("Tasks", JSON.stringify(localTasks));
    location.reload();
}

function deleteProject(e) {
    let findId;
    let projectDup;
    let targetElement = e.composedPath()[2];

    findId = e.composedPath()[1].id;
    projectDup = document.getElementById(findId);
    projectDup.remove();

    targetElement.remove();

    let projectTitle = (e.composedPath()[1].children[2].textContent);

    // Creates variables to match the local storage and code array to delete both on click
    let projectTitleId;
    if (projectTitle.includes(" ")) {
        projectTitleId = projectTitle.replace(/\s+/g, '-');
    } else if (projectTitle.includes("-")) {
        projectTitleId = projectTitle.replace(/\-+/g, ' ');
    } else {
        projectTitleId = projectTitle;
    }

    let _findTitle = myProjects.findIndex(function(project) {
            if (project.title == `${projectTitleId}`) {
                return true;
            }
    });
    myProjects.splice(_findTitle, 1);
    localStorage.removeItem(`${projectTitleId}`);

    // Searches for and removes tasks that belong to said project
    let storedTasks = JSON.parse(localStorage.getItem("Tasks"));
    for (let i = 0; i < storedTasks.length; i++) {
        if (storedTasks[i].project == projectTitleId) {
            storedTasks.splice(i, 1);
            i--;
        } else {
            continue;
        }
    }
    localStorage.setItem('Tasks', JSON.stringify(storedTasks));
}

function hideTasksOnLoad() {
    const allTasks = document.querySelectorAll('.task-card');
            allTasks.forEach(task => {
                task.classList.remove('task-card');
                task.classList.add('task-card-hidden');
            })
}