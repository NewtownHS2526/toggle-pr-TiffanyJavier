// Part 1 //
const heading = document.querySelector("#heading");
const box = document.querySelector("#.my box");
const firstButton = document.querySelector("#button");

heading.classList.add("blue-text");
replySelection.classList.remove("hidden");
heading.classList.toggle("blue-text");

if (heading.classList.contains("blue-text")) {
    heading.classList.remove("blue-text");
} else {
    heading.classList.add("blue-text");
}
heading.addEventListener("click", changeFontColor);

deleteBin.innerHTML = "undo Deletion";
console.log(deleteBin.innerHTML);

// Part 2 //
const heading = document.querySelector("#heading");

const changeFrontColor = () => {
    heading.classList.add("blue-text");
};
heading.addEventListener("click", changeFontColor);

// Part 3 //
const subtitle = document.querySelector("#subheading")

const changeSubtitleColor = () => {
    subtitle.classList.add("blue-text");
};
subtitle.addEventListener("click", changeSubtitleColor);

const firstButton = document.querySelector("#reply-button");
const replyButton = document.querySelector("#reply-message");

replySelection.remove("hidden");

firstButton.addEventListener("click", firstButton);
// Activity 3 //
const sendBtn = document.querySelector("#send-message");
const CancelButton = document.querySelector("#cancel-button");

const replyMessage = () => {
    sendBtn.classlist.add("hidden");
};
sendBtn.addEventListener("click", hideReply);
CancelButton.addEventListener("click", hideReply);




// Part 4 //
const heading = document.querySelector("#heading");

const changeFrontColor = () => {
    heading.classList.toggle("blue-text");
};
heading.addEventListener("click", changeFrontColor);