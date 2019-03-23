

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let submit = document.getElementById("submit");

function getInputData(){
    let data=[];
    data.push(firstName.value);
    data.push(lastName.value);
    data.push(email.value);
    console.log(data);
}

function checkData(){
    if (this.value===""){
        this.classList.add("alert");
        this.placeholder="Required";
    }
    
}



firstName.addEventListener("blur", checkData);
email.addEventListener("blur", checkData);
lastName.addEventListener("blur", checkData);
submit.addEventListener("click", getInputData);