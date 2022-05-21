export {
    viewProject,
}

function viewProject(e) {
    let projectToDisplayId = e.path[3].id;
    console.log(projectToDisplayId)

    const allProjects = document.querySelectorAll('.project-divs');
        allProjects.forEach(project => {
            project.classList.remove('project-divs');
            project.classList.add('project-divs-hidden');
        });

    const projectToDisplay = document.getElementById(`${projectToDisplayId}`);
        projectToDisplay.classList.remove('project-divs-hidden');
        projectToDisplay.classList.add('project-divs');
}