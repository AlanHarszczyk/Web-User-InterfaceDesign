/*pop-up text*/
window.onload = function()
{
    alert('Thank you for visting and supporting our efforts');
};

function datasaver()
{

let username = document.getElementById("username").value;
let surname = document.getElementById("surname").value;
let email = document.getElementById("email").value;
let phonenumber = document.getElementById("phonenumber").value;

    alert("Your data is being saved");
console.log(document.getElementById("username").value)
console.log(document.getElementById("surname").value)
console.log(document.getElementById("email").value)
console.log(document.getElementById("phonenumber").value)

  localStorage.setItem("username" , username);
  localStorage.setItem("surname" , surname);
  localStorage.setItem("email" , email);
  localStorage.setItem("phonenumber" , phonenumber);
  
}

function retrieveData()
{
  
    if(localStorage.getItem("username")!="")
    {
        let username = localStorage.getItem("username");
        let surname = localStorage.getItem("surname");
        let email= localStorage.getItem("email");
        let phonenumer = localStorage.getItem("phonenumber");
        console.log("username" + username);
        console.log("surname" + surname);
        console.log("email" + email);
        console.log("phonenumber" + phonenumer);
    }

    else
    {
        alert('Please enter valid details!');
    }

}

/*sound effect*/

let sound = new Audio("C:\Users\C00285418\Desktop\New folder\Web-User-InterfaceDesign\Practicals\Lab 4\assets\sound effects\bark.wav");//sound effect

function myFun()
{
    alert("test");
    sound.play();
}
    

