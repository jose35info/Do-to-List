let input = document.querySelector("input");
let btn = document.querySelector("button");
const ul = document.querySelector("ul");
const span = document.querySelector("span");

btn.addEventListener("click", function () {
  if (input.value.trim() === "") return;
  let li = document.createElement("li");
  input.appendChild(li);
  li.innerText = input.value;
  li.innerHTML += `<span>X</span>`;
  ul.appendChild(li);
  const btnRemover = li.querySelector("span");
  btnRemover.addEventListener("click", function () {
    li.remove();
  });
  input.value = "";
});
