/*pop-up text*/
window.onload = function()
{
    alert('Thank you for visting and supporting our efforts');
};

document.querySelector('header').addEventListener('click',function()
{
   this.style.color = 'black';
});

/*empty text*/
if(document.getElementById('text-input').value === ' ')
{
    alert('Text input cannot be empty!');
}

/*check for email*/
var email = document.getElementById('email-input').value;
var pattern = /^[^ ]+@[^ ]+\[a-z]{2,3}$/;
if (!email.match(pattern)) 
{
    alert('Please enter a valid email address!');
}


