export {
    projectNavController,
}

function projectNavController(e) {
    let checkBoxChecked = e.composedPath()[0].checked;

    let archiveButton = e.target.nextSibling;
    let viewProjectContainer = e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
        let viewProjectSvg = e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[0];
        let viewProjectText = e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[1];
    let editButton = e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
    let deleteButton = e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;

    if (checkBoxChecked === true) {
        archiveButton.classList.remove('archive-button-closed');
        archiveButton.classList.add('archive-button-open');

        viewProjectContainer.classList.remove('view-project-container-closed');
        viewProjectContainer.classList.add('view-project-container-open');

            viewProjectSvg.classList.remove('view-project-svg-closed');
            viewProjectSvg.classList.add('view-project-svg-open');

            viewProjectText.classList.remove('view-project-text-closed');
            viewProjectText.classList.add('view-project-text-open');

            editButton.classList.remove('edit-project-closed');
            editButton.classList.add('edit-project-open');

            deleteButton.classList.remove('delete-project-closed');
            deleteButton.classList.add('delete-project-open');
    } else if (checkBoxChecked === false ) {
        archiveButton.classList.remove('archive-button-open');
        archiveButton.classList.add('archive-button-closed');

        viewProjectContainer.classList.remove('view-project-container-open');
        viewProjectContainer.classList.add('view-project-container-closed');

            viewProjectSvg.classList.remove('view-project-svg-open');
            viewProjectSvg.classList.add('view-project-svg-closed');

            viewProjectText.classList.remove('view-project-text-open');
            viewProjectText.classList.add('view-project-text-closed');

            editButton.classList.remove('edit-project-open');
            editButton.classList.add('edit-project-closed');

            deleteButton.classList.remove('delete-project-open');
            deleteButton.classList.add('delete-project-closed');
    }

    return
}