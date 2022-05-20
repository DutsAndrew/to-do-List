export {
    addItemController,
    buildProjectCards,
    createTemplateProjects,
}

import { add } from 'date-fns';
import { setPriority } from '../functions/set-priority';
import flagSVG from '../svgs/flag.svg';

// variables needed for functions to run
let addItemFormOpen = false;
let today = new Date().toISOString().slice(0, 10);
let priority = null;
let myProjects = [];

// Add-Item Pop Nav Controller
function addItemController() {
    if (addItemFormOpen === false) {
        addItemNav();
        addItemFormOpen = true;
    } else if ( addItemFormOpen === true ) {
        closeAddItemNav();
        addItemFormOpen = false;
    }
}

function closeAddItemNav() {
    const content = document.querySelector('#content');
    const addItemNav = document.querySelector('.add-item-nav');
        content.removeChild(addItemNav);
    addItemFormOpen = false;
}

function addItemNav() {
    console.log('Adding item... Opening nav to add item... Please wait...');

    const content = document.querySelector('#content');

        const addItemNav = document.createElement('div');
            addItemNav.classList.add('add-item-nav');

            const formContainer = document.createElement('form');
                formContainer.classList.add('add-item-form-container');
            
                const itemFieldset = document.createElement('fieldset');

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
                        inputForTitle.placeholder = "e.g., Read 15 mins, Workout, Make Dinner";

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
                        inputForDescription.placeholder = "Description";

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
                        }

                    const cancelButton = document.createElement('button');
                        cancelButton.classList.add('cancel-button');
                        cancelButton.textContent = "Cancel";
                        cancelButton.onclick = function() {
                            closeAddItemNav();
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
        addItemNav.appendChild(formContainer);
    content.appendChild(addItemNav);
}

function storeFormValues() {
    console.log('Item is being added to the page!');

    const projectTitle = document.querySelector('#title').value;
    const projectDescription = document.querySelector('#description').value;
    const projectDue = document.querySelector('#due').value;
    const projectBuild = "no";

    let newProject = new Project(projectTitle, projectDescription, projectDue, priority, projectBuild);
    myProjects.push(newProject);
    console.log(myProjects);

    buildProjectCards();
}

function Project(title, description, due, priority, build) {
    this.title = title;
    this.description = description;
    this.due = due;
    this.priority = priority;
    this.build = build;
    this.getInfo = function() {
        return(`${title}, ${description}, ${due}, ${priority}`);
    };
}

function buildProjectCards() {
    myProjects.forEach(function (item) {
        let projectTitle = item.title;
        let projectDescription = item.description;
        let projectDue = item.due;
        let projectPriority = item.priority;

        if (item.build == "no") {
            item.build = "yes";
            createProjectCard(projectTitle, projectDescription, projectDue, projectPriority);
        } else if (item.build == "yes") {
            return
        }
    });
}

function createProjectCard(projectTitle, projectDescription, projectDue, projectPriority) {
    const projectHolder = document.querySelector('#project-holder');
    const display = document.querySelector('#display');

    const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-divs');
        
        const projectDisplayContainer = document.createElement('div');
            projectDisplayContainer.setAttribute('id', 'project-display');
            projectDisplayContainer.classList.add('project-display-container');

            const checkBox = document.createElement('input');
                    checkBox.setAttribute('id', 'project-complete-checkbox');
                    checkBox.setAttribute('type', 'checkbox');
                    checkBox.classList.add('checkbox-complete');
                    checkBox.onclick = function() {
                        if (archiveItButton.classList.contains('archive-button-closed')) {
                            archiveItButton.classList.remove('archive-button-closed');
                            archiveItButton.classList.add('archive-button-open');
                        } else if (archiveItButton.classList.contains('archive-button-open')) {
                            archiveItButton.classList.remove('archive-button-open');
                            archiveItButton.classList.add('archive-button-closed');
                        }
                    }

            // Hidden until checkbox is selected
            const archiveItButton = document.createElement('div');
                archiveItButton.setAttribute('id', 'archive-it-button');
                archiveItButton.classList.add('archive-button-closed');

            const projectTitleDisplay = document.createElement('p');
                projectTitleDisplay.classList.add('project-display-title-text');
                projectTitleDisplay.textContent = projectTitle;

            const projectDescriptionDisplay = document.createElement('p');
                projectDescriptionDisplay.classList.add('project-display-description-text');
                projectDescriptionDisplay.textContent = projectDescription;

            const projectDueDisplay = document.createElement('p');
                projectDueDisplay.classList.add('project-display-due-text')
                projectDueDisplay.textContent = projectDue;

            const addTaskContainer = document.createElement('div');
                addTaskContainer.classList.add('add-task-container');

                const addTaskSvg = document.createElement('div');
                    addTaskSvg.setAttribute('id', 'add-task-svg');
                    addTaskSvg.classList.add('add-task-svg');

                const addTaskText = document.createElement('p');
                    addTaskText.setAttribute('id', 'add-task-text');
                    addTaskText.classList.add('add-task-text');
                    addTaskText.textContent = "Add Task";

                addTaskContainer.appendChild(addTaskSvg);
                addTaskContainer.appendChild(addTaskText);

            const editProjectButton = document.createElement('div');
                editProjectButton.setAttribute('id', 'edit-project-button');
                editProjectButton.classList.add('edit-project');

            const deleteProjectButton = document.createElement('div');
                deleteProjectButton.setAttribute('id', 'delete-project-button');
                deleteProjectButton.classList.add('delete-project');

            projectDisplayContainer.appendChild(checkBox);
            projectDisplayContainer.appendChild(archiveItButton);
            projectDisplayContainer.appendChild(projectTitleDisplay);
            projectDisplayContainer.appendChild(projectDescriptionDisplay);
            projectDisplayContainer.appendChild(projectDueDisplay);
            projectDisplayContainer.appendChild(addTaskContainer);
            projectDisplayContainer.appendChild(editProjectButton);
            projectDisplayContainer.appendChild(deleteProjectButton);        

        // function to style project border with priority color


        projectDiv.appendChild(projectDisplayContainer);

        let dupProject = projectTitleDisplay.cloneNode(true);

    display.appendChild(projectDiv);
    projectHolder.appendChild(dupProject);
}

function calculateDaysLeft(today, due) {
    const differenceInDays = Math.abs(due - today);
    return differenceInDays / (1000 * 60 * 60 * 24);
}

function createTemplateProjects() {
    let templateProject = new Project("Read", "15 mins", "2050-09-09", 3, "no");
    myProjects.push(templateProject);

    let templateProject2 = new Project("Make Dinner", "Shopping List: pasta, tomato sauce, meatballs, salad, garlic bread, tomatoes, onions, basil, garlic, pepper, salt, and cheese", "2022-09-09", 1, "no");
    myProjects.push(templateProject2);

    let templateProject3 = new Project("Spring Cleaning", "Need to clean: closets, storage-shed, bedrooms, kitchen, coat-closet, and dresser", "2023-05-01", 4, "no");
    myProjects.push(templateProject3);

    let templateProject4 = new Project("Study for GMAT", "flashcards for 10 minutes, read study guides for 30 minutes, and take a practice test", "2022-09-09", 2, "no");
    myProjects.push(templateProject4);
}