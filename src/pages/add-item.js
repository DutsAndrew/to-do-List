export {
    addItemController,
}

import { setPriority } from '../functions/set-priority';
import { displayPriority } from '../functions/set-priority';
import flagSVG from '../svgs/flag.svg';

let addItemFormOpen = false;

function addItemController() {
    if (addItemFormOpen === false) {
        addItem();
        addItemFormOpen = true;
    } else if ( addItemFormOpen === true ) {
        closeAddItemNav();
        addItemFormOpen = false;
    }
}

let today = new Date().toISOString().slice(0, 10);

function addItem() {
    console.log('Adding item... Opening nav to add item... Please wait...');

    const content = document.querySelector('#content');

        const addItemNav = document.createElement('div');
            addItemNav.classList.add('add-item-nav');

            const formContainer = document.createElement('form');
                formContainer.classList.add('add-item-form-container');
            
                const itemFieldset = document.createElement('fieldset');

                    const labelForTitle = document.createElement('label');
                        labelForTitle.classList.add('label-title');
                        labelForTitle.for = "title";
                        labelForTitle.class = "label-title";
                        labelForTitle.textContent = "Project Title:";

                    const inputForTitle = document.createElement('textarea');
                        inputForTitle.classList.add('input-title');
                        inputForTitle.class = "input";
                        inputForTitle.id = "title";
                        inputForTitle.rows = "2";
                        inputForTitle.cols = "50";
                        inputForTitle.placeholder = "e.g., Read 15 mins, Workout, Make Dinner";

                    const labelForDescription = document.createElement('label');
                        labelForDescription.classList.add('label-description');
                        labelForDescription.for = "description";
                        labelForDescription.class = "label-title";
                        labelForDescription.textContent = "Description:";

                    const inputForDescription = document.createElement('textarea');
                        inputForDescription.classList.add('input-description');
                        inputForDescription.class = "input";
                        inputForDescription.id = "description";
                        inputForDescription.rows = "5";
                        inputForDescription.cols = "50";
                        inputForDescription.placeholder = "Description";

                    const labelForCalendar = document.createElement('label');
                        labelForCalendar.classList.add('label-calendar');
                        labelForCalendar.for = "due";
                        labelForCalendar.class = "input";
                        labelForCalendar.id = "calendar";
                        labelForCalendar.textContent = "Due Date:";

                    const inputForCalendar = document.createElement('input');
                        inputForCalendar.classList.add('input-calendar');
                        inputForCalendar.type = "date";
                        inputForCalendar.id = "due";
                        inputForCalendar.min = today;
                        inputForCalendar.max = "2100-01-01";

                    const priorityButtonContainer = document.createElement('div');
                        priorityButtonContainer.classList.add('priority-button-container');
                        priorityButtonContainer.setAttribute('id', 'priority-container');

                        const labelForPriority = document.createElement('label');
                            labelForPriority.classList.add('label-priority');
                            labelForPriority.for = "priority-buttons";
                            labelForPriority.textContent = "Priority:";

                        const priorityButton1 = document.createElement('div');
                            priorityButton1.setAttribute('id', 'priority-button-selector-1');
                            priorityButton1.classList.add('priority-button');
                            priorityButton1.textContent = "Priority 1";
                            priorityButton1.onclick = function() {
                                setPriority(1);
                            }

                            const priorityImg1 = document.createElement('img');
                                priorityImg1.setAttribute('id', 'priority-flag-1');
                                priorityImg1.classList.add('priority-1');
                                priorityImg1.src = flagSVG;

                                priorityButton1.appendChild(priorityImg1);

                        const priorityButton2 = document.createElement('div');
                            priorityButton2.setAttribute('id', 'priority-button-selector-2');
                            priorityButton2.classList.add('priority-button');
                            priorityButton2.textContent = "Priority 2";
                            priorityButton2.onclick = function() {
                                setPriority(2);
                            }

                            const priorityImg2 = document.createElement('img');
                                priorityImg2.setAttribute('id', 'priority-flag-2');
                                priorityImg2.classList.add('priority-2');
                                priorityImg2.src = flagSVG;

                                priorityButton2.appendChild(priorityImg2);

                        const priorityButton3 = document.createElement('div');
                            priorityButton3.setAttribute('id', 'priority-button-selector-3');
                            priorityButton3.classList.add('priority-button');
                            priorityButton3.textContent = "Priority 3";
                            priorityButton3.onclick = function() {
                                setPriority(3);
                            }

                            const priorityImg3 = document.createElement('img');
                                priorityImg3.setAttribute('id', 'priority-flag-3');
                                priorityImg3.classList.add('priority-3');
                                priorityImg3.src = flagSVG;

                                priorityButton3.appendChild(priorityImg3);

                        const priorityButton4 = document.createElement('div');
                            priorityButton4.setAttribute('id', 'priority-button-selector-4');
                            priorityButton4.classList.add('priority-button');
                            priorityButton4.textContent = "Priority 4";
                            priorityButton4.onclick = function() {
                                setPriority(4);
                            }

                            const priorityImg4 = document.createElement('img');
                                priorityImg4.setAttribute('id', 'priority-flag-4');
                                priorityImg4.classList.add('priority-4');
                                priorityImg4.src = flagSVG;

                                priorityButton4.appendChild(priorityImg4);

                    const submitButton = document.createElement('input');
                        submitButton.classList.add('submit-button');
                        submitButton.type = "button";
                        submitButton.name = "submit";
                        submitButton.value = "Add Project";

                    const cancelButton = document.createElement('button');
                        cancelButton.classList.add('cancel-button');
                        cancelButton.textContent = "Cancel";

                priorityButtonContainer.appendChild(labelForPriority);
                priorityButtonContainer.appendChild(priorityButton1);
                priorityButtonContainer.appendChild(priorityButton2);
                priorityButtonContainer.appendChild(priorityButton3);
                priorityButtonContainer.appendChild(priorityButton4);

                itemFieldset.appendChild(labelForTitle);
                itemFieldset.appendChild(inputForTitle);
                itemFieldset.appendChild(labelForDescription);
                itemFieldset.appendChild(inputForDescription);
                itemFieldset.appendChild(labelForCalendar);
                itemFieldset.appendChild(inputForCalendar);
                itemFieldset.appendChild(priorityButtonContainer);
                itemFieldset.appendChild(submitButton);
                itemFieldset.appendChild(cancelButton);
            formContainer.appendChild(itemFieldset);
        addItemNav.appendChild(formContainer);
    content.appendChild(addItemNav);
}

function closeAddItemNav() {
    const content = document.querySelector('#content');
    const addItemNav = document.querySelector('.add-item-nav');
        content.removeChild(addItemNav);
}
