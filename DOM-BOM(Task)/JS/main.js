

document.getElementById("Search").addEventListener("click", () => {
    let SearchBar = document.getElementById("SearchBar");
    SearchBar.classList.toggle("d-none");
    document.getElementById("Search").classList.toggle("active");
    
})
















const addButton = document.querySelector(".btn");
const taskInput = document.querySelector('.boxs input');
const taskList = document.querySelector('.task-list');
const taskCount = document.querySelector('.task-count');

addButton.addEventListener("click", function () {
  let task = taskInput.value.trim();
  if (task === '') {
    task = 'No tasks...';
  }

  let h2 = document.createElement('h2');
  let div = document.createElement('div');
  let button = document.createElement('button');

  h2.innerHTML = task;
  button.innerHTML = "Delete";
  div.classList.add('box');
  button.classList.add('btn', 'btn-danger', 'delete_btn');

  div.appendChild(h2);
  div.appendChild(button);
  taskList.appendChild(div);

  let all_btns = document.querySelectorAll('.delete_btn');
  for (let btn of all_btns) {
    btn.onclick = function () {
      this.parentElement.remove();
      updateTaskCount();
    }
  }

  updateTaskCount();
});

function updateTaskCount() {
  const taskCount = document.querySelectorAll('.box').length;
  document.querySelector('.task-count').innerHTML = `Number of tasks: ${taskCount}`;
}
