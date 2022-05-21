export {
    archiveIt,
}

function archiveIt(e) {
    const archivedHolder = document.getElementById('archived-holder');
    let findId;
    let projectDup;
    let targetElement = e.path[2];

    findId = e.path[1].childNodes[2].childNodes[0].data;
    projectDup = document.getElementById(findId);
    archivedHolder.appendChild(projectDup);

    targetElement.remove();
}