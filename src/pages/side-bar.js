export {
    loadSideBar,
    sideBarController,
}

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

                dueThisMonth.appendChild(dueThisMonthSvg);
                dueThisMonth.appendChild(dueThisMonthText);

            const projectTitle = document.createElement('div');
                projectTitle.classList.add('side-bar-top-items');
                projectTitle.setAttribute('id', 'project-title');

                const projectTitleText = document.createElement('p');
                    projectTitleText.classList.add('project-title-text');
                    projectTitleText.textContent = "Projects";
                
                projectTitle.appendChild(projectTitleText);

                const projectHolder = document.createElement('div');
                    projectHolder.classList.add('side-bar-top-items');
                    projectHolder.setAttribute('id', 'project-holder');

                const archivedProjects = document.createElement('div');
                    archivedProjects.classList.add('side-bar-top-items');
                    archivedProjects.setAttribute('id', 'archived-projects');

                    const archivedProjectsText = document.createElement('p');
                        archivedProjectsText.classList.add('archived-projects-text');
                        archivedProjectsText.textContent = "Archived";
                    
                    archivedProjects.appendChild(archivedProjectsText);

        sidebar.appendChild(dueToday);
        sidebar.appendChild(dueThisWeek);
        sidebar.appendChild(dueThisMonth);
        sidebar.appendChild(projectTitle);
        sidebar.appendChild(projectHolder);
        sidebar.appendChild(archivedProjects);
    
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