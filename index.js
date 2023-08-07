document.addEventListener("DOMContentLoaded", function () {
    var taskInput = document.getElementById("taskInput");
    var addTask = document.getElementById("addTask");
    var taskList = document.getElementById("taskList");

    addTask.addEventListener("click", function () {
        const taskText = taskInput.value;

        const task = document.createElement("li");
        task.innerHTML = `
            <div class="listItem">
            <span>${taskText}</span>
            </div>
            <button class="delete">Delete</button>
            
        `;
        taskList.appendChild(task);
        taskInput.value = "";

        const deleteButton = task.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            task.remove();
        });
    });
});

