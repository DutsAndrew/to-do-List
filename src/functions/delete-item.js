export {
    deleteItem,
}

function deleteItem(e) {
    let findId;
    let projectDup;
    let targetElement = e.composedPath()[2];

    findId = e.composedPath()[1].id;
    projectDup = document.getElementById(findId);
    projectDup.remove();

    targetElement.remove();
}