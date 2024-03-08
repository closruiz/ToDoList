function addTask() {
	var taskInput = document.getElementById('new-task'); // Get the input field
	var taskList = document.getElementById('task-list'); // Get the UL
 
	if (taskInput.value === '') {
    	alert('Please enter a task!');
    	return;
	}
 
	var li = document.createElement('li'); // Create a new list item
	li.innerText = taskInput.value; // Set its text to the input's value
 
	var deleteBtn = document.createElement('button'); // Create a delete button
	deleteBtn.innerText = 'Delete';
	deleteBtn.onclick = function() {
    	li.remove(); // Remove the list item on click
	};
 
	li.appendChild(deleteBtn); // Add the delete button to the list item
	taskList.appendChild(li); // Add the list item to the list
 
	taskInput.value = ''; // Clear the input
}
