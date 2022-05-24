export {
    projectNavController,
}

let projectNavMode = "off";

function projectNavController() {
    // Nodes needed to display on navbar
    const archiveButton = document.querySelectorAll('#archive-it-button');

    const viewProjectContainerClosed = document.querySelectorAll('.view-project-container-closed');
    const viewProjectContainerOpen = document.querySelectorAll('.view-project-container-open');
        const viewProjectSvg = document.querySelectorAll('#view-project-svg');
        const viewProjectText = document.querySelectorAll('#view-project-text');

    const addTaskContainer = document.querySelectorAll('#add-task');
        const addTaskSvg = document.querySelectorAll('#add-task-svg');
        const addTaskText = document.querySelectorAll('#add-task-text');

    const editProjectButton = document.querySelectorAll('#edit-project-button');
    const deleteProjectButton = document.querySelectorAll('#delete-project-button');


    if (projectNavMode === "off") {
        archiveButton.forEach(button => {
            button.classList.remove('archive-button-closed');
            button.classList.add('archive-button-open');
        })
        viewProjectContainerClosed.forEach(projectContainer => {
            projectContainer.classList.add('view-project-container-open');
            projectContainer.classList.remove('view-project-container-closed');
        })
        viewProjectSvg.forEach(svg => {
            svg.classList.add('view-project-svg-open');
            svg.classList.remove('view-project-svg-closed');
        })
        viewProjectText.forEach(projectText => {
            projectText.classList.remove('view-project-text-closed');
            projectText.classList.add('view-project-text-open');
        })
        addTaskContainer.forEach(taskContainer => {
            taskContainer.classList.remove('add-task-container-closed');
            taskContainer.classList.add('add-task-container-open');
        })
        addTaskSvg.forEach(addTaskSvg => {
            addTaskSvg.classList.remove('add-task-svg-closed');
            addTaskSvg.classList.add('add-task-svg-open');
        })
        addTaskText.forEach(taskText => {
            taskText.classList.remove('add-task-text-closed');
            taskText.classList.add('add-task-text-open');
        })
        editProjectButton.forEach(editProjectButton => {
            editProjectButton.classList.remove('edit-project-closed');
            editProjectButton.classList.add('edit-project-open');
        })
        deleteProjectButton.forEach(deleteProjectButton => {
            deleteProjectButton.classList.remove('delete-project-closed');
            deleteProjectButton.classList.add('delete-project-open');
        })
        
        projectNavMode = "on";
        return
    } else if (projectNavMode === "on") {
        archiveButton.forEach(button => {
            button.classList.add('archive-button-closed');
            button.classList.remove('archive-button-open');
        })
        viewProjectContainerClosed.forEach(projectContainer => {
            projectContainer.classList.remove('view-project-container-open');
            projectContainer.classList.add('view-project-container-closed');
        })
        viewProjectSvg.forEach(svg => {
            svg.classList.remove('view-project-svg-open');
            svg.classList.add('view-project-svg-closed');
        })
        viewProjectText.forEach(projectText => {
            projectText.classList.add('view-project-text-closed');
            projectText.classList.remove('view-project-text-open');
        })
        addTaskContainer.forEach(taskContainer => {
            taskContainer.classList.add('add-task-container-closed');
            taskContainer.classList.remove('add-task-container-open');
        })
        addTaskSvg.forEach(addTaskSvg => {
            addTaskSvg.classList.add('add-task-svg-closed');
            addTaskSvg.classList.remove('add-task-svg-open');
        })
        addTaskText.forEach(taskText => {
            taskText.classList.add('add-task-text-closed');
            taskText.classList.remove('add-task-text-open');
        })
        editProjectButton.forEach(editProjectButton => {
            editProjectButton.classList.add('edit-project-closed');
            editProjectButton.classList.remove('edit-project-open');
        })
        deleteProjectButton.forEach(deleteProjectButton => {
            deleteProjectButton.classList.add('delete-project-closed');
            deleteProjectButton.classList.remove('delete-project-open');
        })

        projectNavMode = "off";
        return
    }
}