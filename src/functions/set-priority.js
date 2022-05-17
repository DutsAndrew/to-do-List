export {
    setPriority,
}

let displaySelected;

function setPriority(selectedPriority) {
    'use strict';
    
    const priority1 = document.getElementById('priority-button-selector-1');
    const priority2 = document.getElementById('priority-button-selector-2');
    const priority3 = document.getElementById('priority-button-selector-3');
    const priority4 = document.getElementById('priority-button-selector-4');

    if (selectedPriority === 1) {
        removePreviousSelected();
        priority1.classList.add('selected-priority-1');
        displaySelected = 1;
    } else if (selectedPriority === 2) {
        removePreviousSelected();
        priority2.classList.add('selected-priority-2');
        displaySelected = 2;
    } else if (selectedPriority === 3) {
        removePreviousSelected();
        priority3.classList.add('selected-priority-3');
        displaySelected = 3;
    } else if (selectedPriority === 4) {
        removePreviousSelected();
        priority4.classList.add('selected-priority-4');
        displaySelected = 4;
    }
}

function removePreviousSelected() {

    const priority1 = document.getElementById('priority-button-selector-1');
    const priority2 = document.getElementById('priority-button-selector-2');
    const priority3 = document.getElementById('priority-button-selector-3');
    const priority4 = document.getElementById('priority-button-selector-4');

    if (displaySelected == 1) {
        priority1.classList.remove('selected-priority-1');
    } else if (displaySelected == 2) {
        priority2.classList.remove('selected-priority-2');
    } else if (displaySelected == 3) {
        priority3.classList.remove('selected-priority-3');
    } else if (displaySelected == 4) {
        priority4.classList.remove('selected-priority-4');
    }
}