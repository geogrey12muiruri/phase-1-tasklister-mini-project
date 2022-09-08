document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const task = e.target.task_description.value;
    addToDoList(task);
    e.target.reset();
    
  })
});
function addToDoList(task) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  li.innerText = `${task}   `;
  deleteButton.innerText = "X";
  deleteButton.style.border = "1px solid black";
  deleteButton.addEventListener("click", deleteTask);
  li.appendChild(deleteButton);
  document.querySelector("#tasks").appendChild(li);
}

function deleteTask(e) {
  e.target.parentElement.remove();
}