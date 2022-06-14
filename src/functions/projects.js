export {
    addProjectController,
    projectCardController,
    renderProjects,
}

// import { add } from 'date-fns';
import { setPriority } from './set-priority';
import { archiveIt } from './archive-it';
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

function addProjectNav(projectTitle, projectDescription, projectPriority) {
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
                        if (projectTitle != undefined || null) {
                            inputForTitle.textContent = `${projectTitle}`;
                        } else if (projectTitle == undefined || null) {
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
                        if (projectDescription != undefined || null) {
                            inputForDescription.textContent = `${projectDescription}`;
                        } else if (projectDescription == undefined || null) {
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
                            storeFormValues();
                            closeAddProjectNav();
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
    if(!localStorage.getItem(`${projectTitle}`)) {
        populateStorage(projectTitle, projectDescription, projectDue, priority, projectBuild, projectKey);
        getLocalStorage(projectTitle);
      } else {
        getLocalStorage(projectTitle);
      }
}

function populateStorage(projectTitle, projectDescription, projectDue, priority, projectBuild, projectKey) {
    console.log(localStorage);
    let newProject = new Project(projectTitle, projectDescription, projectDue, priority, projectBuild, projectKey);
    localStorage.setItem(`${projectTitle}`, JSON.stringify(newProject));
}

function getLocalStorage(projectTitle) {
    let getProject = window.localStorage.getItem(projectTitle);
    let retrievedProject = JSON.parse(getProject);

    myProjects.push(retrievedProject);
    projectCardController();
}

// For adding ALL projects from local storage to page
function renderProjects() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        let retrievedProject = JSON.parse(value);
        myProjects.push(retrievedProject);
    } 
}

function projectCardController() {
    myProjects.forEach(function (item) {
        let projectTitle = item.title;
        let projectDescription = item.description;
        let projectDue = item.due;
        let projectPriority = item.priority;
        let projectKey = item.key;

        if (item.build == "no") {
            item.build = "yes";
            createProjectCard(projectTitle, projectDescription, projectDue, projectPriority, projectKey);
            assignPriorityColors(projectTitle, projectPriority);
        } else if (item.build == "yes") {
            return
        }
    });
}

function createProjectCard(projectTitle, projectDescription, projectDue, projectPriority, projectKey) {
    const projectHolder = document.querySelector('#project-holder');
    const display = document.querySelector('#display');

    const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-divs');
        projectDiv.setAttribute('id', `${projectTitle}`);
        projectDiv.classList.add(`${projectKey}`)
        
        const projectDisplayContainer = document.createElement('div');
            projectDisplayContainer.setAttribute('id', projectTitle);
            projectDisplayContainer.classList.add('project-display-container');

            const checkBox = document.createElement('input');
                    checkBox.setAttribute('id', 'project-checkbox');
                    checkBox.setAttribute('type', 'checkbox');
                    checkBox.classList.add('checkbox-access');
                    checkBox.addEventListener('change', projectNavController);

            // Hidden until checkbox is selected
            const archiveItButton = document.createElement('div');
                archiveItButton.setAttribute('id', 'archive-it-button');
                archiveItButton.classList.add('archive-button-closed');
                archiveItButton.addEventListener('click', archiveIt);

            const projectTitleDisplay = document.createElement('p');
                projectTitleDisplay.textContent = projectTitle;

                    // Duplicate created before adding class, so that dup, doesn't have the same class
                    let dupProject = projectTitleDisplay.cloneNode(true);
                        dupProject.setAttribute('id', `${projectTitle} Dup`);
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
                    viewProjectContainer.setAttribute('id', `View ${projectTitle}`)
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
                addTaskContainer.setAttribute('id', `add-task ${projectTitle}`);
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
            projectDisplayContainer.appendChild(archiveItButton);
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

function calculateDaysLeft(today, due) {
    const differenceInDays = Math.abs(due - today);
    return differenceInDays / (1000 * 60 * 60 * 24);
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
        
        const projectToDisplay = document.getElementById(`${projectToDisplayId}`);
            projectToDisplay.classList.remove('project-divs-hidden');
            projectToDisplay.classList.add('project-divs');
    } else if (projectToDisplayId == "display") {
        return
    }
}

function editProject(e) {
    let projectTitle = (e.composedPath()[1].children[2].textContent);
        console.log(projectTitle);
    let projectDescription = (e.composedPath()[1].children[3].textContent);
        console.log(projectDescription);
        console.log(myProjects);

    let findTitle = myProjects.findIndex(function(project) {
        if (project.title == `${projectTitle}`) {
            return true;
        }
    });
    console.log(findTitle);

    let projectPriority;
        if (e.composedPath()[2].classList.contains('project-div-priority-1')) {
            console.log("Project Priority is 1");
            projectPriority = 1;
        } else if (e.composedPath()[2].classList.contains('project-div-priority-2')) {
            console.log("Project Priority is 2");
            projectPriority = 2;
        } else if (e.composedPath()[2].classList.contains('project-div-priority-3')) {
            console.log("Project Priority is 3");
            projectPriority = 3;
        } else if (e.composedPath()[2].classList.contains('project-div-priority-4')) {
            console.log("Project Priority is 4");
            projectPriority = 4;
        }

    addProjectNav(projectTitle, projectDescription, projectPriority);
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

    let _findTitle = myProjects.findIndex(function(project, index) {
            if (project.title == `${projectTitle}`) {
                return true;
            }
    });
    myProjects.splice(_findTitle, 1);
    localStorage.removeItem(`${projectTitle}`);
}