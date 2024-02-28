/*pop-up text*/
window.onload = function()
{
    alert('Thank you for visting and supporting our efforts');
};

/*form-data*/
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
  
};

function validate(){
	var value = $("phonenumber").val();
  
  var regex = new RegExp('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$');
  
  if(value){
  		 if(!regex.test(value)){
          $("#error").text("Please enter valid email address or phone number.")
       }else{
         $("#error").text('')
       }
  }else{
   	$("#error").text('This field is required.')
  }
 	

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

};

/*sound effect*/
function soundEffect()
{
    let sound = new Audio("assets/sound-effects/bark.wav");//sound effect
    sound.play();
};

/*meant to fadeout ~ needs to be fixed*/
$( "button" ).on( "button", function() {
    $( "button" ).fadeOut( "slow", function() {
      // Animation complete.
    });
  });

/*meant to retrieve data from an API*/
axios.get("file:///C:/Users/C00285418.SETU/Desktop/New%20folder/Web-User-InterfaceDesign/Practicals/Lab%205/form.html")
.then(response =>
    {
        console.log(response.data);
    });