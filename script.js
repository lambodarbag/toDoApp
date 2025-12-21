const button = document.querySelector("button");
const inputBox = document.querySelector("input");
const list = document.querySelector("ul");

button.addEventListener("click", (e) => {
    if (inputBox.value === "") return;
    let li = document.createElement("li");
    li.textContent = inputBox.value.trim();
    console.log(li.textContent.length);
    list.appendChild(li);
    li.style.cursor = "pointer";
    inputBox.value = "";
});

list.addEventListener("click", (e) => {
    e.target.classList.toggle("completed");
});
