export {
    deleteItem,
}

function deleteItem(e) {
    let findId;
    let projectDup;
    let targetElement = e.path[2];

    findId = e.path[1].childNodes[2].childNodes[0].data;
    projectDup = document.getElementById(findId);
    projectDup.remove();

    targetElement.remove();
}