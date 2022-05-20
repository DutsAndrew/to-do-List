export {
    loadSideBar,
    sideBarController,
}

let projectDropDownOpen = false;
let archivedDropDownOpen = false;

function loadSideBar() {
    console.log('Sidebar is now opening.... Loading...');
    const content = document.querySelector('#content');

        const sidebar = document.createElement('div');
            sidebar.classList.add('side-bar');

            const dueToday = document.createElement('div');
                dueToday.classList.add('side-bar-top-items');
                dueToday.setAttribute('id', 'due-today');

                const dueTodaySvg = document.createElement('div');
                    dueTodaySvg.classList.add('due-today-svg');

                const dueTodayText = document.createElement('p');
                    dueTodayText.classList.add('due-text');
                    dueTodayText.textContent = "Today";

                const dueTodayHolder = document.createElement('div');
                    dueTodayHolder.setAttribute('id', 'due-today-holder');

                dueToday.appendChild(dueTodaySvg);
                dueToday.appendChild(dueTodayText);

            const dueThisWeek = document.createElement('div');
                dueThisWeek.classList.add('side-bar-top-items');
                dueThisWeek.setAttribute('id', 'due-this-week');

                const dueThisWeekSvg = document.createElement('div');
                    dueThisWeekSvg.classList.add('due-this-week-svg');

                const dueThisWeekText = document.createElement('p');
                    dueThisWeekText.classList.add('due-text');
                    dueThisWeekText.textContent = "This Week";

                const dueThisWeekHolder = document.createElement('div');
                    dueThisWeekHolder.setAttribute('id', 'due-this-week-holder');

                dueThisWeek.appendChild(dueThisWeekSvg);
                dueThisWeek.appendChild(dueThisWeekText);

            const dueThisMonth = document.createElement('div');
                dueThisMonth.classList.add('side-bar-top-items');
                dueThisMonth.setAttribute('id', 'due-this-month');

                const dueThisMonthSvg = document.createElement('div');
                    dueThisMonthSvg.classList.add('due-this-month-svg');

                const dueThisMonthText = document.createElement('p');
                    dueThisMonthText.classList.add('due-text');
                    dueThisMonthText.textContent = "This Month";

                const dueThisMonthHolder = document.createElement('div');
                    dueThisMonthHolder.setAttribute('id', 'due-this-month-holder');

                dueThisMonth.appendChild(dueThisMonthSvg);
                dueThisMonth.appendChild(dueThisMonthText);

            const projectTitle = document.createElement('div');
                projectTitle.classList.add('side-bar-top-items');
                projectTitle.setAttribute('id', 'project-title');
                projectTitle.addEventListener('click', projectDropDownController);

                const projectTitleText = document.createElement('p');
                    projectTitleText.classList.add('project-title-text');
                    projectTitleText.textContent = "Projects";

                const projectDropDownImg = document.createElement('div');
                    projectDropDownImg.classList.add('project-drop-down-right-svg');
                    projectDropDownImg.setAttribute('id', 'project-drop-down-svg');
                
                projectTitle.appendChild(projectTitleText);
                projectTitle.appendChild(projectDropDownImg);

                const projectHolder = document.createElement('div');
                    projectHolder.setAttribute('id', 'project-holder');
                    projectHolder.classList.add('project-holder-closed');

                const archivedProjects = document.createElement('div');
                    archivedProjects.classList.add('side-bar-top-items');
                    archivedProjects.setAttribute('id', 'archived-projects');
                    archivedProjects.addEventListener('click', archivedDropDownController);

                    const archivedProjectsText = document.createElement('p');
                        archivedProjectsText.classList.add('archived-projects-text');
                        archivedProjectsText.textContent = "Archived";

                        const archivedDropDown = document.createElement('div');
                            archivedDropDown.classList.add('archived-drop-down-right-svg');
                            archivedDropDown.setAttribute('id', 'archived-drop-down-svg');
                    
                        archivedProjects.appendChild(archivedProjectsText);
                        archivedProjects.appendChild(archivedDropDown);

                        const archivedHolder = document.createElement('div');
                            archivedHolder.setAttribute('id', 'archived-holder');
                            archivedHolder.classList.add('archived-holder-closed');

        sidebar.appendChild(dueToday);
        sidebar.appendChild(dueTodayHolder);
        sidebar.appendChild(dueThisWeek);
        sidebar.appendChild(dueThisWeekHolder);
        sidebar.appendChild(dueThisMonth);
        sidebar.appendChild(dueThisMonthHolder);
        sidebar.appendChild(projectTitle);
        sidebar.appendChild(projectHolder);
        sidebar.appendChild(archivedProjects);
        sidebar.appendChild(archivedHolder);
    
    content.appendChild(sidebar);
}

let sideBarOpen = true;

function sideBarController() {
    const sidebar = document.querySelector('.side-bar');
    const display = document.querySelector('#display');

        if (sideBarOpen === true) {
            sidebar.style.display = "none";
            sidebar.style.position = "relative";
            display.classList.remove('display-screen-w-sidebar');
            display.classList.add('display-screen');
            sideBarOpen = false;
        } else if (sideBarOpen === false){
            sidebar.style.display = "flex";
            sidebar.style.position = "none";
            display.classList.remove('display-screen');
            display.classList.add('display-screen-w-sidebar');
            sideBarOpen = true;
        } else {
            return
        }
}

function projectDropDownController() {
    const projectDropDownSvg = document.querySelector('#project-drop-down-svg');
    const projectHolder = document.querySelector('#project-holder');

    if (projectDropDownOpen === false) {
        projectHolder.classList.remove('project-holder-closed');
        projectHolder.classList.add('project-holder-open');
        projectDropDownSvg.classList.remove('project-drop-down-right-svg');
        projectDropDownSvg.classList.add('project-drop-down-open-svg');
        projectDropDownOpen = true;
    } else if (projectDropDownOpen === true) {
        projectHolder.classList.remove('project-holder-open');
        projectHolder.classList.add('project-holder-closed');
        projectDropDownSvg.classList.remove('project-drop-down-open-svg');
        projectDropDownSvg.classList.add('project-drop-down-right-svg');
        projectDropDownOpen = false;
    }
}

function archivedDropDownController() {
    const archivedDropDownSvg = document.querySelector('#archived-drop-down-svg');
    const archivedHolder = document.querySelector('#archived-holder');

    if (archivedDropDownOpen === false) {
        archivedHolder.classList.remove('archived-holder-closed');
        archivedHolder.classList.add('archived-holder-open');
        archivedDropDownSvg.classList.remove('archived-drop-down-right-svg');
        archivedDropDownSvg.classList.add('archived-drop-down-open-svg');
        archivedDropDownOpen = true;
    } else if (archivedDropDownOpen === true) {
        archivedHolder.classList.remove('archived-holder-open');
        archivedHolder.classList.add('archived-holder-closed');
        archivedDropDownSvg.classList.remove('archived-drop-down-open-svg');
        archivedDropDownSvg.classList.add('archived-drop-down-right-svg');
        archivedDropDownOpen = false;
    }
}