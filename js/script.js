
let createNewRecipient = document.querySelector('div.new-recipient'),
    frm = document.querySelector('.form-container'),
    form = document.querySelector('form'),
    subject = document.querySelector('input#subject'),
    message = document.querySelector('input#message');

createNewRecipient.addEventListener('click',addRecipient);

frm.addEventListener('click', function(e){
  if(e.target.classList.contains('remove')){
      frm.removeChild(e.target.parentNode);
    }
})

form.addEventListener('submit',function(e){
  e.preventDefault()
    recipients = document.querySelectorAll('input.recipient');
  sendMail(e,recipients,subject,message);
})

function addRecipient(){
	let dv = document.createElement('div');
    
	let lbl = document.createElement('label');
	let lblText = document.createTextNode('Recipient');
	    lbl.appendChild(lblText);
      dv.appendChild(lbl);

  let input = document.createElement('input');
       input.setAttribute('type','email');
       input.setAttribute('name','recipient');
       input.setAttribute('required','true');
       input.classList.add('recipient')
       dv.appendChild(input);

  let spn = document.createElement('span');
      spnText = document.createTextNode('Remove');
      spn.appendChild(spnText);
      spn.classList.add('remove')
      dv.appendChild(spn);

	dv.classList.add('form-item');
	frm.insertBefore(dv,frm.lastElementChild);
}

function sendMail(e,r,s,m){
   e.preventDefault();
   console.log('sending email to ')
  for (var i = 0; i < r.length; i++) {
   Email.send({
    SecureToken : "e9755934-19f5-4136-9637-3f65eb881901",
     To:`${r[i].value}`,
     From:"kevinrukundo1@gmail.com",
     Subject:`${s.value}`,
     Body:`${m.value}`
   }).then(function (message) {
    alert("Mail has been sent successfully")
    });
}
}