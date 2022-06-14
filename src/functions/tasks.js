export {
    addTaskController,
    renderTasks,
    taskCardController,
}

import { taskNavController } from './item-navs';

let formOpen = false;
let myTasks = [];
let selectedProject;
let taskKey = 0;

function addTaskController(e) {
    selectedProject = e.path[3].id;
    console.log(selectedProject);

    if (formOpen === false && selectedProject != "display") {
        openTaskForm();
        formOpen = true;
        return
    } else if (formOpen === true && selectedProject != "display") {
        closeTaskForm();
        formOpen = false;
        return
    } else if (selectedProject == "display") {
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

function openTaskForm() {
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
                        inputForTask.placeholder = "e.g Step 1, prerequisites:, First...";

                    const taskSubmitButton = document.createElement('input');
                        taskSubmitButton.classList.add('task-submit-button');
                        taskSubmitButton.type = "button";
                        taskSubmitButton.name = "submit";
                        taskSubmitButton.value = "Add Task";
                        taskSubmitButton.onclick = function() {
                            storeTaskValues();
                            closeTaskForm();
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

    taskKey++;

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
    populateTaskStorage(taskDescription, taskBuild);
    getTaskStorage();
}

function sendHomeArrayToLocalStorage() {
    localStorage.setItem("Tasks", JSON.stringify(myTasks));
}

function populateTaskStorage(taskDescription, taskBuild) {
    let newTask = new Task(selectedProject, taskDescription, taskBuild, taskKey);
    console.log(newTask);

    let taskArray = JSON.parse(localStorage.getItem("Tasks"));
    taskArray.push(newTask);
    localStorage.setItem("Tasks", JSON.stringify(taskArray));
}

function getTaskStorage() {
    let retrievedTasks = JSON.parse(localStorage.getItem("Tasks"));

    myTasks.push(retrievedTasks);
}

function renderTasks() {
    if(!localStorage.getItem("Tasks")) {
        sendHomeArrayToLocalStorage();
    } else {
        let retrievedTasks = JSON.parse(localStorage.getItem("Tasks"));
        for (let i = 0; i < retrievedTasks.length; i++) {
            myTasks.push(retrievedTasks[i]);
        }
    }
    
}

function taskCardController() {
    myTasks.forEach(function (item) {
        let selectedProject = item.project;
        let taskDescription = item.description;
        let taskKey = item.key
        if (item.build === "no") {
            item.build = "yes";
            createTaskCard(selectedProject, taskDescription, taskKey);
        } else if (item.build == "yes") {
            return
        }
    });
}

function createTaskCard(selectedProject, taskDescription, taskKey) {
    const project = document.getElementById(selectedProject);

        const taskCard = document.createElement('div');
            taskCard.classList.add('task-card-hidden');
            taskCard.setAttribute('id', `${selectedProject}`);

            const taskCardLeft = document.createElement('div');
                taskCardLeft.classList.add('task-card-left');

                const taskCheckBox = document.createElement('input');
                    taskCheckBox.setAttribute('id', 'task-complete-checkbox');
                    taskCheckBox.setAttribute('type', 'checkbox');
                    taskCheckBox.classList.add('checkbox-complete');
                    taskCheckBox.addEventListener('change', taskNavController);

                const completeButton = document.createElement('div');
                    completeButton.setAttribute('id', 'complete-it-button');
                    completeButton.classList.add('complete-button-hidden');
                    completeButton.addEventListener('click', taskCompleted);

            taskCardLeft.appendChild(taskCheckBox);
            taskCardLeft.appendChild(completeButton);

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
                    editProjectButton.addEventListener('click', editTask);

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

function editTask() {
    console.log("Edit Task was clicked");
}

function deleteTask(e) {
    let selectedTask = e.composedPath()[2];
    selectedTask.remove();

    let taskDescription = (e.composedPath()[2].childNodes[1].childNodes[0].textContent);

    let _findTask = myTasks.findIndex(function(task, index) {
        if (task.description == `${taskDescription}`) {
            return true;
        }
    });
    myTasks.splice(_findTask, 1);
}