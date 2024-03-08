document.addEventListener('DOMContentLoaded', function() {
	loadTasks(); // Calls the loadTasks function when the document is fully loaded to display saved tasks
});
 
function addTask() {
	var taskInput = document.getElementById('new-task'); // Accesses the input field element
	var taskList = document.getElementById('task-list'); // Accesses the UL element where tasks are displayed
 
	if (taskInput.value === '') { // Checks if the input field is empty
    	alert('Please enter a task!'); // Displays an alert if the input is empty
    	return; // Exits the function to prevent adding an empty task
	}
 
	var li = document.createElement('li'); // Creates a new list item (LI) element for the task
 
	var taskText = document.createElement('span'); // Creates a span element to hold the task text
	taskText.textContent = taskInput.value; // Sets the text of the span to the input value
	li.appendChild(taskText); // Adds the span to the list item
 
	var editBtn = document.createElement('button'); // Creates a new button for editing the task
	editBtn.textContent = 'Edit'; // Sets the button text to "Edit"
	editBtn.onclick = function() { // Adds an onclick event to the edit button
    	var newTask = prompt("Edit your task:", taskText.textContent); // Prompts the user to edit the task
    	if (newTask !== null && newTask !== "") {
        	taskText.textContent = newTask; // Updates the task text with the new value
        	saveTasks(); // Calls saveTasks to update localStorage with the new task list
    	}
	};
 
	var deleteBtn = document.createElement('button'); // Creates a new button for deleting the task
	deleteBtn.textContent = 'Delete'; // Sets the button text to "Delete"
	deleteBtn.onclick = function() { // Adds an onclick event to the delete button
    	li.remove(); // Removes the list item from the UL
    	saveTasks(); // Calls saveTasks to update localStorage after removing the task
	};
 
	li.appendChild(editBtn); // Adds the edit button to the list item
	li.appendChild(deleteBtn); // Adds the delete button to the list item
	taskList.appendChild(li); // Adds the list item to the unordered list in the HTML
 
	taskInput.value = ''; // Clears the input field after adding the task
	saveTasks(); // Calls saveTasks to save the new task list to localStorage
}
 
function saveTasks() {
	var tasks = []; // Initializes an array to hold the task texts
	document.querySelectorAll('#task-list li span').forEach(function(taskSpan) { // Selects all span elements within list items
    	tasks.push(taskSpan.textContent); // Adds the text content of each span to the tasks array
	});
	localStorage.setItem('tasks', JSON.stringify(tasks)); // Converts the tasks array to a JSON string and saves it in localStorage
}
 
function loadTasks() {
	var tasks = JSON.parse(localStorage.getItem('tasks')); // Retrieves the tasks from localStorage and parses the JSON string back into an array
	if (tasks) { // Checks if there are any saved tasks
    	tasks.forEach(function(taskText) { // Iterates over each task in the array
        	var taskInput = document.getElementById('new-task');
        	taskInput.value = taskText; // Sets the input field value to the current task text
        	addTask(); // Calls addTask to create a new list item for the task
    	});
	}
}

