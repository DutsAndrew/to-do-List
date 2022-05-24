export {
    viewProjectByButton,
}

function viewProjectByButton(e) {
    let projectToDisplayId = e.path[3].id;
    console.log(projectToDisplayId)

    if (projectToDisplayId != "display") {
        const allProjects = document.querySelectorAll('.project-divs');
        allProjects.forEach(project => {
            project.classList.remove('project-divs');
            project.classList.add('project-divs-hidden');
        });

        const projectToDisplay = document.getElementById(`${projectToDisplayId}`);
            projectToDisplay.classList.remove('project-divs-hidden');
            projectToDisplay.classList.add('project-divs');

        // // code to turn on and off add task button when viewing a project
        // const addTaskContainer = document.querySelectorAll('#add-task');
        // const addTaskSvg = document.querySelectorAll('#add-task-svg');
        // const addTaskText = document.querySelectorAll('#add-task-text');

        // addTaskContainer.forEach(taskContainer => {
        //     taskContainer.classList.remove('add-task-container-closed');
        //     taskContainer.classList.add('add-task-container-open');
        // })
        // addTaskSvg.forEach(addTaskSvg => {
        //     addTaskSvg.classList.remove('add-task-svg-closed');
        //     addTaskSvg.classList.add('add-task-svg-open');
        // })
        // addTaskText.forEach(taskText => {
        //     taskText.classList.remove('add-task-text-closed');
        //     taskText.classList.add('add-task-text-open');
        // })
        // addTaskContainer.forEach(taskContainer => {
        //     taskContainer.classList.add('add-task-container-closed');
        //     taskContainer.classList.remove('add-task-container-open');
        // })
        // addTaskSvg.forEach(addTaskSvg => {
        //     addTaskSvg.classList.add('add-task-svg-closed');
        //     addTaskSvg.classList.remove('add-task-svg-open');
        // })
        // addTaskText.forEach(taskText => {
        //     taskText.classList.add('add-task-text-closed');
        //     taskText.classList.remove('add-task-text-open');
        // })
    } else if (projectToDisplayId == "display") {
        return
    }
}