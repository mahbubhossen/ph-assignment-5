let buttons = document.querySelectorAll(".complete_btn");
let task_assign = document.getElementById("task_assign");
let total_assign = document.getElementById("total_assign");
let activity_part = document.getElementById("activity_part");
let clear_button = document.getElementById("clear_history");

count = 6;
count_total = 23;

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        alert("Bored updated successfully");

        count--;
        count_total++;

        task_assign.innerText = count;
        total_assign.innerText = count_total;

        buttons[i].style.backgroundColor = "lightgray";
        buttons[i].disabled = true;

        let newText = document.createElement("div");
        newText.innerText = "You have completed the task";
        
        newText.style.backgroundColor = "#F4F7FF";  
        newText.style.borderRadius = "15px";       
        newText.style.padding = "5px";
        newText.style.fontWeight = "bold";
        newText.style.fontSize = "24px";
        newText.style.marginTop = "10px";           
        
        activity_part.appendChild(newText);
        
    })
}

clear_button.addEventListener("click",function(){
    activity_part.innerHTML = "";
})


//color button
let colorButton = document.getElementById("color_button");
let body = document.getElementById("main_body");

let colors = ["#F4F7FF", "#D3E4FF", "#C1E1FF", "#A8D0FF", "#B1E2FF", "#C1D9FF"];
let colorIndex = 0;

colorButton.addEventListener("click",function(){
    body.style.backgroundColor = colors[colorIndex];
    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0; 
    }
    
})