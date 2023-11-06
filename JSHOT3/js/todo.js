document.getElementById("addTaskBtn").addEventListener("click", function() {
    var taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim() !== "") {
        var todoList = document.getElementById("todoList");
        var listItem = document.createElement("li");
        listItem.textContent = taskInput;
        var deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger btn-sm delete-btn";
        deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        document.getElementById("taskInput").value = "";
    }
});