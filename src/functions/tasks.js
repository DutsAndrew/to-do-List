export {
    addTaskController,
    renderTasks,
    taskCardController,
}

import { taskNavController } from './item-navs';

let formOpen = false;
let myTasks = [];
let projectTitleId;
let taskKey;

function addTaskController(e) {
    let selectedProject = e.path[3].id;

    // Code to prevent whitespaces in ID
    if (selectedProject.includes(" ")) {
        projectTitleId = selectedProject.replace(/\s+/g, '-');
    } else {
        projectTitleId = selectedProject;
    }

    if (formOpen === false && projectTitleId != "display") {
        openTaskForm();
        formOpen = true;
        return
    } else if (formOpen === true && projectTitleId != "display") {
        closeTaskForm();
        formOpen = false;
        return
    } else if (projectTitleId == "display") {
        return
    } else {
        return
    }
}

function closeTaskForm() {
    const content = document.querySelector('#content');
    const taskFormNav = document.querySelector('#task-form-nav');
    
    content.removeChild(taskFormNav);
    formOpen = false;
}

function openTaskForm(taskInformation) {
    const content = document.querySelector('#content');

        const taskFormNav = document.createElement('div');
            taskFormNav.classList.add('task-form-nav');
            taskFormNav.setAttribute('id', 'task-form-nav');

            const taskFormContainer = document.createElement('form');
                taskFormContainer.classList.add('task-form-container');
        
                const taskFieldset = document.createElement('fieldset');
                    taskFieldset.classList.add('task-fieldset');

                    const labelForTask = document.createElement('label');
                        labelForTask.classList.add('task-item');
                        labelForTask.for = "task";
                        labelForTask.class = "input";
                        labelForTask.textContent = "Task:";

                    const inputForTask = document.createElement('textarea');
                        inputForTask.classList.add('input-task');
                        inputForTask.class = "input";
                        inputForTask.id = "task";
                        inputForTask.rows = "4";
                        inputForTask.cols = "40";
                        if (taskInformation != undefined || null) {
                            inputForTask.textContent = `${taskInformation}`;
                        } else if (taskInformation == undefined || null) {
                            inputForTask.placeholder = "e.g Step 1, prerequisites:, First...";
                        } else {
                            return;
                        }

                    const taskSubmitButton = document.createElement('input');
                        taskSubmitButton.classList.add('task-submit-button');
                        taskSubmitButton.type = "button";
                        taskSubmitButton.name = "submit";
                        taskSubmitButton.value = "Add Task";
                        taskSubmitButton.onclick = function() {
                            if (formOpen === false) {
                                saveTaskEdit(taskInformation);
                            } else if (formOpen === true) {
                                storeTaskValues();
                                closeTaskForm();
                            } else {
                                return;
                            }
                        }

                    const taskCancelButton = document.createElement('button');
                        taskCancelButton.classList.add('task-cancel-button');
                        taskCancelButton.textContent = "Cancel";
                        taskCancelButton.onclick = function() {
                            closeTaskForm();
                        }

                taskFieldset.appendChild(labelForTask);
                taskFieldset.appendChild(inputForTask);
                taskFieldset.appendChild(taskSubmitButton);
                taskFieldset.appendChild(taskCancelButton);
            taskFormContainer.appendChild(taskFieldset)
        taskFormNav.appendChild(taskFormContainer);
    content.appendChild(taskFormNav);
}

function storeTaskValues() {
    const taskDescription = document.querySelector('#task').value;
    const taskBuild = "no";

    generateTaskKey();

    taskStorageController(taskDescription, taskBuild);
}

function Task(project, description, build, key) {
    this.project = project;
    this.description = description;
    this.build = build;
    this.key = key;
    this.getInfo = function() {
        return(`${taskDescription}, ${taskKey}`);
    }
}

function taskStorageController(taskDescription, taskBuild) {
    let newTask = new Task(projectTitleId, taskDescription, taskBuild, taskKey);

    if (!localStorage.getItem("Tasks")) {
        myTasks.push(newTask);
        localStorage.setItem("Tasks", JSON.stringify(myTasks));
        taskCardController();
        return;
    } else if (localStorage.getItem("Tasks")) {
        let taskArray = JSON.parse(localStorage.getItem("Tasks"));
        taskArray.push(newTask);
        localStorage.setItem("Tasks", JSON.stringify(taskArray));
        renderTasks();
        taskCardController();
        return;
    }
}

function renderTasks() {
    if (!localStorage.getItem("Tasks")) {
        return
    } else {
        let retrievedTasks = JSON.parse(localStorage.getItem("Tasks"));
        for (let i = 0; i < retrievedTasks.length; i++) {
            myTasks.push(retrievedTasks[i]);
        }
    }
    console.table(myTasks);
}

function taskCardController() {
    myTasks.forEach(function (item) {
        let projectTitleId = item.project;
        let taskDescription = item.description;
        let taskKey = item.key

        if (item.build == "no" && !document.querySelector(`.${projectTitleId}-${taskKey}`)) {
            createTaskCard(projectTitleId, taskDescription, taskKey);
        } else if (item.build == "yes") {
            return
        }
    });
}

function createTaskCard(projectTitleId, taskDescription, taskKey) {
    const project = document.getElementById(projectTitleId);

        const taskCard = document.createElement('div');
            taskCard.classList.add('task-card');
            taskCard.setAttribute('id', `${projectTitleId}-Task`);
            taskCard.classList.add(`${projectTitleId}-${taskKey}`);
            taskCard.classList.add(`${taskKey}`);

            const taskCardLeft = document.createElement('div');
                taskCardLeft.classList.add('task-card-left');

                const taskCheckBox = document.createElement('input');
                    taskCheckBox.setAttribute('id', 'task-complete-checkbox');
                    taskCheckBox.setAttribute('type', 'checkbox');
                    taskCheckBox.classList.add('checkbox-complete');
                    taskCheckBox.addEventListener('change', taskNavController);

            taskCardLeft.appendChild(taskCheckBox);

            const taskCardMiddle = document.createElement('div');
                taskCardMiddle.classList.add('task-card-middle');

                const taskItem = document.createElement('p');
                    taskItem.classList.add('task-item');
                    taskItem.textContent = taskDescription;

            taskCardMiddle.appendChild(taskItem);

            const taskCardRight = document.createElement('div');
                taskCardRight.classList.add('task-card-right');

                const editProjectButton = document.createElement('div');
                    editProjectButton.setAttribute('id', 'edit-project-button');
                    editProjectButton.classList.add('edit-task-hidden');
                    editProjectButton.onclick = function(e) {
                        editTask(e);
                    }

                const deleteProjectButton = document.createElement('div');
                    deleteProjectButton.setAttribute('id', 'delete-project-button');
                    deleteProjectButton.classList.add('delete-task-hidden');
                    deleteProjectButton.onclick = function(e) {
                        deleteTask(e);
                    }
            
            taskCardRight.appendChild(editProjectButton);
            taskCardRight.appendChild(deleteProjectButton);

        taskCard.appendChild(taskCardLeft);
        taskCard.appendChild(taskCardMiddle);
        taskCard.appendChild(taskCardRight);

    project.appendChild(taskCard);
}

function taskCompleted() {
    
}

function editTask(e) {
    let taskInformation = e.composedPath()[2].children[1].children[0].textContent;
    openTaskForm(taskInformation);
}

function saveTaskEdit(taskInformation) {
    let newTaskInformation = document.querySelector('#task').value;
    let retrievedTasks = JSON.parse(localStorage.getItem("Tasks"));
        for (let i = 0; i < retrievedTasks.length; i++) {
            if (retrievedTasks[i].description == taskInformation) {
                retrievedTasks[i].description = newTaskInformation;
            } else {
                continue;
            }
        }
    localStorage.setItem("Tasks", JSON.stringify(retrievedTasks));
    location.reload();
}

function deleteTask(e) {
    let selectedTask = e.composedPath()[2];
    selectedTask.remove();

    let taskDescription = (e.composedPath()[2].childNodes[1].childNodes[0].textContent);
    let taskKey = e.composedPath()[2].classList[1];

    let _findTask = myTasks.findIndex(function(task, index) {
        if (task.description == `${taskDescription}`) {
            return true;
        }
    });
    myTasks.splice(_findTask, 1);
    let storedTasks = JSON.parse(localStorage.getItem("Tasks"));
    for (let i = 0; i < storedTasks.length; i++) {
        if (taskKey == storedTasks[i].key) {
            storedTasks.splice(i, 1);
            i--;
        } else {
            continue;
        }
    }
    localStorage.setItem('Tasks', JSON.stringify(storedTasks));
}

function generateTaskKey() {
    taskKey = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 5; i++) {
        taskKey += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return taskKey;
}