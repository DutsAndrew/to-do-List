export { 
    loadHome,
}

function loadHome() {
    location.reload();

    // Use this function when loading home or on first load -- from getLocalStorage, project.js
    // for (let i = 0; i < localStorage.length; i++) {
    //     let key = localStorage.key(i);
    //     let value = localStorage.getItem(key);
    //     let retrievedProject = JSON.parse(value);
    //     console.log(retrievedProject);
    //     myProjects.push(retrievedProject);
    //     console.log(myProjects);
    // }
}