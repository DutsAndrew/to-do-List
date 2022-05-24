export {
    archiveIt,
}

function archiveIt(e) {
    const archivedHolder = document.getElementById('archived-holder');
    let findId;
    let projectDup;
    let targetElement = e.path[2];

    let confirmArchive = confirm("Once archived, this project will not be accessible again: it can not be brought back or deleted from the archived tab");
        if (confirmArchive == true) {
            alert("This project was archived and will be inaccessible in the future");

            findId = e.path[1].childNodes[2].childNodes[0].data;
            projectDup = document.getElementById(findId);
            archivedHolder.appendChild(projectDup);

            targetElement.remove();
        } else {
            alert("This project will not be archived");
            return
        }
}