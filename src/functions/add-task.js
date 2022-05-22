export {
    addTaskController,
}

let taskNumber = 0;
let taskAdded = false;

function addTaskController(e) {
    let selectedProject = e.path[3].id;

    if (taskAdded === false) {
        taskNumber++;
        buildTaskForm(selectedProject);
        storeTaskValues();
        closeTaskForm();
        buildTaskDiv();
        taskAdded = true;
    } else if (taskAdded === true) {
        closeTaskForm();
        return
    }
}

function buildTaskForm() {
    const content = document.querySelector('#content');

        const taskFormNav = document.createElement('div');
            taskFormNav.classList.add('project-tasks');
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
                        inputForTask.rows = "5";
                        inputForTask.cols = "50";
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

}

function openTaskForm() {

}

function closeTaskForm() {

}

function buildTaskDiv() {

}