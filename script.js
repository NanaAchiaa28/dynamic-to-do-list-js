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
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.forEach((taskText) => {
            addTaskToDOM(taskText, false); // 'false' prevents duplicate saving to Local Storage
        });
    }

    // Add task to the DOM and optionally save it to Local Storage
    function addTaskToDOM(taskText, save = true) {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        listItem.classList.add("task-item");

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Attach event listener to remove the task
        removeButton.addEventListener("click", () => {
            taskList.removeChild(listItem);
            removeTaskFromLocalStorage(taskText); // Update Local Storage
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Save task to Local Storage if not loading from storage
        if (save) {
            saveTaskToLocalStorage(taskText);
        }
    }

    // Save a task to Local Storage
    function saveTaskToLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    // Remove a task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks = storedTasks.filter((task) => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    // Add a task using input and reset input field
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        addTaskToDOM(taskText);
        taskInput.value = ""; // Clear input field
    }

    // Attach event listeners
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();
});

          

        
