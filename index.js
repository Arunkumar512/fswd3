const body = document.querySelector("body");
const task = ["abcde", "asdfff", "asffgg"];

const ol = document.getElementById("ol");

task.forEach((task) => {
  const li = document.createElement("li");
  const testnode = document.createTextNode(task);
  li.appendChild(testnode);
  ol.appendChild(li);
});
body.appendChild(ol);
