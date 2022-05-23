export {
    addTaskController,
}

let taskNumber = 0;
let formOpen = false;
let myTasks = [];
let selectedProject;

function addTaskController(e) {
    selectedProject = e.path[3].id;
    console.log(selectedProject);

    if (formOpen === false && selectedProject != "display") {
        openTaskForm(selectedProject);
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
    taskNumber++;

    const taskDescription = document.querySelector('#task').value;
    const taskBuild = "no";

    let newTask = new Task(taskDescription, taskNumber, taskBuild);
    myTasks.push(newTask);
    console.log(myTasks);

    buildTaskDiv();
}

function Task(description, taskNumber, build) {
    this.description = description;
    this.taskNumber = taskNumber;
    this.build = build;
    this.getInfo = function() {
        return(`${description}, ${taskNumber}`);
    }
}

function buildTaskDiv() {
    myTasks.forEach(function (item) {
        let taskDescription = item.description;
        let taskNumber = item.taskNumber;

        if (item.build === "no") {
            item.build = "yes";
            createTaskCard(taskDescription, taskNumber);
        } else if (item.build == "yes") {
            return
        }
    });
}

function createTaskCard(taskDescription, taskNumber) {
    const project = document.getElementById(selectedProject);
    console.log(`This task is being appended to ${selectedProject}`);

        const taskCard = document.createElement('div');
            taskCard.classList.add('task-card');
            taskCard.setAttribute('id', `${selectedProject}-${taskNumber}`);

            const taskCardLeft = document.createElement('div');
                taskCardLeft.classList.add('task-card-left');

                const taskCheckBox = document.createElement('input');
                    taskCheckBox.setAttribute('id', 'task-complete-checkbox');
                    taskCheckBox.setAttribute('type', 'checkbox');
                    taskCheckBox.classList.add('checkbox-complete');
                    taskCheckBox.onclick = function() {
                            
                        }

                // Hidden until checkbox is selected
                const completeButton = document.createElement('div');
                    completeButton.setAttribute('id', 'complete-it-button');
                    completeButton.classList.add('complete-button-closed');
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
                    editProjectButton.classList.add('edit-task');
                    editProjectButton.addEventListener('click', editTask);

                const deleteProjectButton = document.createElement('div');
                    deleteProjectButton.setAttribute('id', 'delete-project-button');
                    deleteProjectButton.classList.add('delete-project');
                    deleteProjectButton.addEventListener('click', deleteTask);
            
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

}

function deleteTask() {

}