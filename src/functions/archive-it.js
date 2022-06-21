// export {
//     completeIt,
// }

// function completeIt(e) {
//     const completedHolder = document.getElementById('completed-holder');
//     let findId;
//     let projectDup;
//     let targetElement = e.path[2];

//     let confirmCompletion = confirm("Once completed, this project will not be accessible again: it can not be brought back or deleted from the archived tab");
//         if (confirmCompletion == true) {
//             alert("This project was completed and will be inaccessible in the future");

//             console.log(findId = e.composedPath()[2].id);
//             projectDup = document.getElementById(`${findId}-Dup`);
//             completedHolder.appendChild(projectDup);
//             targetElement.remove();

//             let storedProject = JSON.parse(localStorage.getItem(`${findId}`));
//                 storedProject.build = "yes";
//                 localStorage.setItem(`${findId}`, JSON.stringify(storedProject));

//             let retrievedTasks = JSON.parse(localStorage.getItem("Tasks"));
//                 for (let i = 0; i < retrievedTasks.length; i++) {
//                     console.log(retrievedTasks[i]);
//                     if (retrievedTasks[i].project == `${findId}`) {
//                         retrievedTasks.splice(i, 1);
//                         // when splicing you have to re-index since the '.length' is no longer accurate 'i--' alleviates this issue
//                         i--;
//                     } else {
//                         continue;
//                     }
//                 }
//             localStorage.setItem('Tasks', JSON.stringify(retrievedTasks));

//             const removeAllDivs = document.querySelectorAll(`#${findId}`);
//                 removeAllDivs.forEach(div => {
//                     div.remove();
//                 })
//         } else {
//             alert("This project will not be completed");
//             return
//         }
// }