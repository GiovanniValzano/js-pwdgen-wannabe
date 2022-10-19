const Name = prompt ('quale è il tuo nome?') 

const surname = prompt ('quale è il tuo congome?')

const color = prompt ('quale è il tuo colore preferito?') 

const venti = Name + surname + color + 22


// collegamenti

document.getElementById('nome').innerHTML = Name;

document.getElementById('cognome').innerHTML = surname;

document.getElementById('colore').innerHTML = color;

document.getElementById('result').innerHTML = venti;
