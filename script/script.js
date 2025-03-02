let buttons = document.querySelectorAll(".complete_btn");
let task_assign = document.getElementById("task_assign");
let total_assign = document.getElementById("total_assign");
let activity_part = document.getElementById("activity_part");
let clear_button = document.getElementById("clear_history");
const get_value = document.getElementById("title").innerHTML;

const get_all_title = document.getElementsByClassName("title").namedItem;
console.log(get_value)


let count = 6;
let count_total = 23;

console.log("log", get_value)

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        alert("Board updated successfully");

        count--;
        count_total++;

        task_assign.innerText = count;
        total_assign.innerText = count_total;

        buttons[i].style.backgroundColor = "lightgray";
        buttons[i].disabled = true;

        // activity part
        let newText = document.createElement("div");
        let divElement = buttons[i].parentElement;  
        // let targetDiv = divElement.nextElementSibling;
        let firstSibling = divElement.nextElementSibling;
        let secondSibling = firstSibling.nextElementSibling;
        let taskTitle = secondSibling.querySelector("h1");  
        if (taskTitle) {  

            // real time
            function getCurrentTime() {
                let currentTime = new Date();
                let hours = currentTime.getHours();
                let minutes = currentTime.getMinutes();
                let seconds = currentTime.getSeconds();

                let formattedTime = hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
                return formattedTime;
            }

            newText.innerHTML = `You have completed the task: <strong>${taskTitle.innerText}</strong><br><small>Time: ${getCurrentTime()}</small>`;

            newText.style.backgroundColor = "#F4F7FF";
            newText.style.borderRadius = "15px";
            newText.style.padding = "5px";
            newText.style.fontWeight = "bold";
            newText.style.fontSize = "24px";
            newText.style.marginTop = "10px";

            activity_part.appendChild(newText);
        } else {
            console.log('Task title not found!');
        }
    });
}

clear_button.addEventListener("click", function () {
    activity_part.innerHTML = "";
});

// color button
let colorButton = document.getElementById("color_button");
let body = document.getElementById("main_body");

let colors = ["#D3E4FF","#F4F7FF", "#C1E1FF", "#A8D0FF", "#B1E2FF", "#C1D9FF"];
let colorIndex = 0;

colorButton.addEventListener("click", function () {
    body.style.backgroundColor = colors[colorIndex];
    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
});

// click korle question page e jabe
let discoverDiv = document.getElementById("discover_div");
discoverDiv.addEventListener("click", function () {
    window.location.href = "discover.html";
});

// real time date 
let currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
});

document.getElementById("display_date").innerHTML = currentDate;
