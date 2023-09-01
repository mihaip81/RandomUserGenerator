//CONTACT ME JS
function handleSend(){
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let contactEmail = document.getElementById("email").value;
    let contactPhone = document.getElementById("phone").value;
    let contactMessage = document.getElementById("message").value;


    alert("Data sent!");
    console.log(firstName, lastName, contactEmail, contactPhone, contactMessage);
}

//TO DO : IMPLEMENT EMAIL API