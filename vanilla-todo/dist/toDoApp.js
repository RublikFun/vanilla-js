'use strict';

/* To Do List */

var listItems = document.getElementsByTagName('li'),
    deleteBnt = document.getElementsByClassName('remove'),
    tasksList = document.querySelector('ul'),
    input = document.querySelectorAll('.new-task-text')[0],
    addNewTaskBtn = document.querySelectorAll('.add-btn')[0];

var listItemsArray = Array.prototype.slice.call(listItems),
    deleteBntArray = Array.prototype.slice.call(deleteBnt);

tasksList.addEventListener('click', doneTask, false);

addNewTaskBtn.addEventListener('click', newTask, false);

deleteBntArray.map(function (btn) {
    return btn.addEventListener('click', deleteTask, false);
});

function deleteTask(event) {
    console.log(this.parentElement.classList.contains('done'));
    if (this.parentElement.classList.contains('done')) {
        this.parentElement.style.display = 'none';
        swal({
            title: "Cool! You did it!",
            icon: "success",
            button: {
                text: "Yep!",
                className: "alert-btn"
            }
        });
    } else {
        swal({
            title: "You have not completed the assignment yet!",
            icon: "warning",
            button: {
                text: "Okay",
                className: "alert-btn"
            }
        });
    }
};

function doneTask(event) {
    if (event.target.tagName == 'LI') {
        event.target.classList.toggle('done');
    }
    if (event.target.tagName == 'SPAN') {
        event.target.parentElement.classList.toggle('done');
    }
}

function newTask() {
    var newListItem = document.createElement('li'),
        inputValue = input.value,
        text = '<span>' + inputValue + '</span><i class="remove">&#215;</i>';

    newListItem.innerHTML = text;

    if (!inputValue) {
        swal({
            title: "Fill in the field",
            icon: "error",
            button: {
                text: "Okay",
                className: "alert-btn"
            }
        }).then(function () {
            return input.focus();
        });
    } else {
        document.querySelectorAll('ul')[0].appendChild(newListItem);
    }

    input.value = "";

    var newDeleteBnt = newListItem.querySelector('.remove');

    newDeleteBnt.addEventListener('click', deleteTask, false);
}