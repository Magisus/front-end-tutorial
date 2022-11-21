const myImage = document.querySelector("img");

myImage.onclick = () => {
    const src = myImage.getAttribute("src");
    if (src === "images/ball-of-yarn-blue.jpg") {
      myImage.setAttribute("src", "images/yarn-ball-transparent.jpg");
    } else {
      myImage.setAttribute("src", "images/ball-of-yarn-blue.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName}'s Pattern Collection`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName}'s Pattern Collection`;
}

myButton.onclick = () => {
    setUserName();
};