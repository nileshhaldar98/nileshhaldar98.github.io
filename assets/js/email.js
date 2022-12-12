

let send = document.getElementById("csend");

send.addEventListener('click', function(e) {
e.preventDefault();
let uname = document.getElementById("cname").value;
let email = document.getElementById("cemail").value;
let message = document.getElementById("cmessage").value;
Email.send({
    Host: "smtp.gmail.com",
    Username: "nileshhaldar123@gmail.com",
    Password: "ukrznhjlmcgcjcfq",
    To: 'nileshhaldar98@gmail.com',
    From: email,
    Subject: "Sending Email from portfolio",
    Body: message,
    Attachments: [
    {
        name: "File_Name_with_Extension",
        path: "Full Path of the file"
    }]
})
    .then(function (message) {
    alert("Mail has been sent successfully")
    });


});

	
	
	


