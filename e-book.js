const scrollUp = () => {
    window.scroll(0, -10000);
}


const zap = () => {
    window.open("https://wa.me/554899127992?text=Ol%C3%A1!%20Eu%20gostaria%20de%20saber%20mais%20sobre%20o%20Guia%20de%20Investimentos%20para%20m%C3%A9dicos",'_blank');
}
function mascaraCpf(){
  let cpf = document.getElementById('phone')
  if(cpf.value.length ==0){
    cpf.value +="+55"
  }
}

const sendMail = (event) =>{
 event.preventDefault()
  let name = document.getElementById('nome');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let capital = document.getElementById('capital');
  let agree = document.getElementById('agree');
  
if(agree.checked){
   
  const bodyData = `
  <h1>dadosLead</h1>
  
  <div style="display:flex; align-items:center;" >  
  <strong>Nome:</strong>
  <p>${name.value}</p>
  </div>
  
  <div style="display:flex;align-items:center;">
  <strong>Email:</strong>
  <p>${email.value}</p>
  </div>
  
  <div style="display:flex;align-items:center;">
  <strong>Telefone:</strong>
  <p>${phone.value}</p>
  </div>
  
  <div style="display:flex;align-items:center;">
  <strong>Capital</strong>
  <p>${capital.value}</p>
  </div>
    `   
 
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "decohyperx@gmail.com",
    Password : "46D0A0C895B3CF32B146D310E3894D1F7D12",
    To : 'zanollagalafassi@gmail.com',
    From : "decohyperx@gmail.com",
    Subject : "ebook",
    Body : bodyData
}).then(
  message => alert("Solicitação bem sucedida. Entraremos em contato em instantes.")
);
}
}
