let form= document.getElementById("form");
let input= document.getElementById("input");
let msg= document.getElementById("msg");
let tasks= document.getElementById("tasks");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
})

let formValidation = ()=>{
    if(input.value===""){
        msg.innerHTML="Task can not be blank";
        console.log ("failure");
    }else{
        console.log ("success");
        msg.innerHTML=""
        acceptData()
    }

};

let data={

}

let acceptData = ()=> {
    data["text"] =  input.value;
    createTask()
    console.log(data)
};

let createTask = ()=> {
    tasks.innerHTML+=
    `<div>
    <p>${data.text}</p>
    <span class="options">
        <i onClick = "editTask(this)" class="fa-solid fa-pen-to-square"></i>
        <i  onClick = "deleteTask(this)" class="fa-solid fa-trash-can"></i>
    </span>
</div>`;

input.value=""
};


let deleteTask =(e)=>{
    e.parentElement.parentElement.remove();
};

let editTask = (e)=>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}