// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // Select the input field, button, and task list
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    // Function to add a task to the list
    function addTask() {
        // Retrieve and trim the task text
        const taskText = taskInput.value.trim();

        // If the input field is empty, alert the user
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Add a class to the list item for styling purposes
        listItem.classList.add("task-item");

        // Create a remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        // Add the remove button class for consistent styling
        removeButton.classList.add("remove-btn");

        // Attach an event listener to remove the task when clicked
        removeButton.addEventListener("click", () => {
            taskList.removeChild(listItem);
        });

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Add an event listener to the Add Task button
    addButton.addEventListener("click", addTask);

    // Add an event listener to allow adding tasks using the Enter key
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

          

        
