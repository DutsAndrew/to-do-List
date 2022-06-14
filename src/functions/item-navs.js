export {
    projectNavController,
    taskNavController,
}

function projectNavController(e) {
    let checkBoxChecked = e.composedPath()[0].checked;

    let completeButton = e.target.nextSibling;
    let viewProjectContainer = e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
        let viewProjectSvg = e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[0];
        let viewProjectText = e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[1];
    let addTaskContainer = e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
        let addTaskSvg = e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[0];
        let addTaskText = e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[1];
    let editButton = e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
    let deleteButton = e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;

    if (checkBoxChecked === true) {
        completeButton.classList.remove('complete-button-closed');
        completeButton.classList.add('complete-button-open');

        viewProjectContainer.classList.remove('view-project-container-closed');
        viewProjectContainer.classList.add('view-project-container-open');

            viewProjectSvg.classList.remove('view-project-svg-closed');
            viewProjectSvg.classList.add('view-project-svg-open');

            viewProjectText.classList.remove('view-project-text-closed');
            viewProjectText.classList.add('view-project-text-open');

        addTaskContainer.classList.remove('add-task-container-closed');
        addTaskContainer.classList.add('add-task-container-open');
        
            addTaskSvg.classList.remove('add-task-svg-closed');
            addTaskSvg.classList.add('add-task-svg-open');
        
            addTaskText.classList.remove('add-task-text-closed');
            addTaskText.classList.add('add-task-text-open');

        editButton.classList.remove('edit-project-closed');
        editButton.classList.add('edit-project-open');

        deleteButton.classList.remove('delete-project-closed');
        deleteButton.classList.add('delete-project-open');
    } else if (checkBoxChecked === false ) {
        completeButton.classList.remove('complete-button-open');
        completeButton.classList.add('complete-button-closed');

        viewProjectContainer.classList.remove('view-project-container-open');
        viewProjectContainer.classList.add('view-project-container-closed');

            viewProjectSvg.classList.remove('view-project-svg-open');
            viewProjectSvg.classList.add('view-project-svg-closed');

            viewProjectText.classList.remove('view-project-text-open');
            viewProjectText.classList.add('view-project-text-closed');

        addTaskContainer.classList.remove('add-task-container-open');
        addTaskContainer.classList.add('add-task-container-closed');
        
            addTaskSvg.classList.remove('add-task-svg-open');
            addTaskSvg.classList.add('add-task-svg-closed');
        
            addTaskText.classList.remove('add-task-text-open');
            addTaskText.classList.add('add-task-text-closed');

        editButton.classList.remove('edit-project-open');
        editButton.classList.add('edit-project-closed');

        deleteButton.classList.remove('delete-project-open');
        deleteButton.classList.add('delete-project-closed');
    }
    return
}

function taskNavController(e) {
    let checkBoxChecked = e.composedPath()[0].checked;

    console.log(checkBoxChecked);
    
    let taskCompleteButton = e.target.nextSibling;
    let editButton = e.target.parentNode.parentNode.childNodes[2].childNodes[0];
    let deleteButton = e.target.parentNode.parentNode.childNodes[2].childNodes[1];

    if (checkBoxChecked === true) {
        taskCompleteButton.classList.remove('complete-button-hidden');
        taskCompleteButton.classList.add('complete-button');

        editButton.classList.remove('edit-task-hidden');
        editButton.classList.add('edit-task');

        deleteButton.classList.remove('delete-task-hidden');
        deleteButton.classList.add('delete-task');
    } else if (checkBoxChecked === false) {
        taskCompleteButton.classList.remove('complete-button');
        taskCompleteButton.classList.add('complete-button-hidden');

        editButton.classList.remove('edit-task');
        editButton.classList.add('edit-task-hidden');

        deleteButton.classList.remove('delete-task');
        deleteButton.classList.add('delete-task-hidden');
    }
    return
}