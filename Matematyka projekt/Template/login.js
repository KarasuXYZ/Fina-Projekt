let changeBt = document.getElementById("switch"); 
// let rejestracja = document.forms.rejestracja; Po name średnio działa więć robię po Id natomiast zostawiam to w komentarzach na znak samodzielnej pracy nad kodem
// let rejestracja = document.forms.rejestracja;
let x = true;
let login = document.getElementById("log");
let rejestracja = document.getElementById("rejestr");
const info = document.getElementById("info");
info.textContent="";


changeBt.addEventListener('click', () =>{
    if(x){
        login.classList.remove("visible");
        login.classList.add("non-visible")
        rejestracja.classList.remove("non-visible");
        rejestracja.classList.add("visible");
        x = false;
        changeBt.textContent="Przejdź do logowania";
    }
    else{
        rejestracja.classList.remove("visible");
        rejestracja.classList.add("non-visible")
        login.classList.remove("non-visible");
        login.classList.add("visible");
        x = true;
        changeBt.textContent="Przejdź do rejestracji";
    }
})

//Zatwierdzenie formularza

function Send(x) {
  let imie = "";
  let message = "";
  if (x==1) {console.log("logowanie");
    imie = document.getElementById("imie1").value;
    message = `Witaj ponownie ${imie}`;
  }
  if (x==2) { console.log("rejestracja");
    imie = document.getElementById("imie2").value;
    message = `Zarejestrowano ${imie}`;
  }
  showMessage(message);
}
//animacja poprawnego zalogowania
function showMessage(message) {
  info.textContent = message ;
  info.classList.add("active");

  setTimeout(() => {
    info.classList.remove("active");
  }, 4000); 
};
