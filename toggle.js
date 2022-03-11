const button = document.querySelector(".share_button");
const shareBlock = document.querySelector(".not-visible");

console.log(button);
console.log(shareBlock);

button.addEventListener("click", () => {
    shareBlock.classList.toggle("hidden_share_block");
    button.classList.toggle("dark_share_button");
}); 
