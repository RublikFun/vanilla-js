/* To Do List */

let listItems = document.getElementsByTagName('li'),
    deleteBnt = document.getElementsByClassName('remove'),
    tasksList = document.querySelector('ul'),
    input = document.querySelectorAll('.new-task-text')[0],
    addNewTaskBtn = document.querySelectorAll('.add-btn')[0];

let listItemsArray = Array.prototype.slice.call(listItems),
    deleteBntArray = Array.prototype.slice.call(deleteBnt);


tasksList.addEventListener('click', doneTask, false);

addNewTaskBtn.addEventListener('click', newTask, false);


deleteBntArray.map((btn) => btn.addEventListener('click', deleteTask, false));

function deleteTask(event) {
    if (this.parentElement.classList.contains('done')) {
        this.parentElement.style.display = 'none';
        swal({
            title: "Cool! You did it!",
            icon: "success",
            button: {
                text: "Yep!",
                className: "alert-btn",
            }
        });
    } else {
        swal({
                title: "You have not completed the assignment yet!",
                text: 'If you complete this task push button "Done".',
                icon: "warning",
                buttons: {
                    confirm: {
                        text: "Done",
                        className: "alert-btn-green",
                        value: 'done',
                        visible: true,
                        closeModal: true
                    },
                    cancel: {
                        text: "Okay",
                        className: "alert-btn",
                        value: 'close',
                        visible: true,
                        closeModal: true,
                    }
                }
            })
            .then((value) => {
                if (value == 'done') event.target.parentElement.classList.toggle('done')
            });
    }
}

function doneTask(event) {
    if (event.target.tagName == 'LI') {
        event.target.classList.toggle('done');
    }
    if (event.target.tagName == 'SPAN') {
        event.target.parentElement.classList.toggle('done');
    }
}

function newTask() {
    let newListItem = document.createElement('li'),
        inputValue = input.value,
        text = `<span>${inputValue}</span><i class="remove">&#215;</i>`;

    newListItem.innerHTML = text;

    if (!inputValue) {
        swal({
                title: "Fill in the field",
                icon: "error",
                button: {
                    text: "Okay",
                    className: "alert-btn",
                }
            })
            .then(() => input.focus());
    } else {
        document.querySelectorAll('ul')[0].appendChild(newListItem);
    }

    input.value = "";

    const newDeleteBnt = newListItem.querySelector('.remove');

    newDeleteBnt.addEventListener('click', deleteTask, false);
}