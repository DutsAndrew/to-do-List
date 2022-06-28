import _ from "lodash";

export {
    calculateDate,
}

function calculateDate() {
    let today = new Date().toISOString().slice(0, 10);
    getProjectDates(today);
}

function getProjectDates(today) {
    let todaysYear = parseInt(today.substr(0, 4));
    let todaysMonth = parseInt(today.substr(5, 2));
    let todaysDay = parseInt(today.substr(8, 2));

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key === "Tasks") {
            continue;
        } else {
            let value = JSON.parse(localStorage.getItem(key));
            let projectDueDate = value.due;
            let projectTitle = value.title;
            let projectPriority = value.priority;
            let projectYear = parseInt(projectDueDate.substr(0, 4));
            let projectMonth = parseInt(projectDueDate.substr(5, 2));
            let projectDay = parseInt(projectDueDate.substr(8, 2));

            sortDates(projectTitle, today, projectDueDate, projectYear, projectMonth, projectDay, todaysYear, todaysMonth, todaysDay, projectPriority);
        }
    }
}

function sortDates(
    projectTitle,
    today,
    projectDueDate,
    projectYear,
    projectMonth,
    projectDay,
    todaysYear,
    todaysMonth,
    todaysDay,
    projectPriority
    ) {
        let projectTitleId;
        if (projectTitle.includes(" ")) {
            projectTitleId = projectTitle.replace(/\s+/g, '-');
        } else {
            projectTitleId = projectTitle;
        }

        if (projectDueDate == today) {
            let dueStatus = 'today';
            createDueCard(projectTitleId,
                projectDueDate,
                projectTitle,
                dueStatus,
                projectPriority);
        } else if (
            projectDueDate != today
            && projectMonth == todaysMonth
            && _.inRange(projectDay, today += 1, todaysDay += 7)
            ) {
                let dueStatus = 'this week';
                createDueCard(projectTitleId,
                    projectDueDate,
                    projectTitle,
                    dueStatus,
                    projectPriority);
        } else if (projectDueDate != today
            && projectMonth == todaysMonth
            ) {
                let dueStatus = 'this month';
                createDueCard(projectTitleId,
                    projectDueDate,
                    projectTitle,
                    dueStatus,
                    projectPriority);
        }
}

function createDueCard(
    projectTitleId,
    projectDueDate,
    projectTitle,
    dueStatus,
    projectPriority
    ) {
        const dueTodayHolder = document.querySelector('#due-today-holder');
        const dueThisWeekHolder = document.querySelector('#due-this-week-holder');
        const dueThisMonthHolder = document.querySelector('#due-this-month-holder');

        let newCard = document.createElement('p');
            newCard.setAttribute('id', `${projectTitleId}-${projectDueDate}`);
            newCard.classList.add('due-date-cards');
            newCard.textContent = `${projectTitle}`;

        if (projectPriority == 1) {
            newCard.classList.add('project-div-priority-1');
        } else if (projectPriority == 2) {
            newCard.classList.add('project-div-priority-2');
        } else if (projectPriority == 3) {
            newCard.classList.add('project-div-priority-3');
        } else if (projectPriority == 4) {
            newCard.classList.add('project-div-priority-4');
        } else {
            return;
        }

        if (dueStatus === 'today') {
            dueTodayHolder.appendChild(newCard);
        } else if (dueStatus === 'this week') {
            dueThisWeekHolder.appendChild(newCard);
        } else if (dueStatus === 'this month') {
            dueThisMonthHolder.appendChild(newCard);
        }
}