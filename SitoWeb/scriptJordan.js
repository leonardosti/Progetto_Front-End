const button = document.body.querySelectorAll('button');
button[1].addEventListener('click', function (){
    
    let p = document.createElement('p');
    p.textContent = "La colorway originale delle Air Jordan 1 Chicago è stata introdotta per la prima volta nel 1985 e da allora è stata riproposta solo poche volte." 
    "Ma il 2022 è l'anno del ritorno di questa colorway con un look vintage.";
    var div = document.getElementById('1');
    div.appendChild(p);
    button[1].style.display = 'none';
})
button[2].addEventListener('click', function (){
    
    let p = document.createElement('p');
    p.textContent = "Prima uscita nell'ambito della monumentale partnership di Travis Scott con Nike," 
    "le Air Jordan 1 Travis Scott infrangono le regole convenzionali del design Air Jordan 1.";
    var div = document.getElementById('2');
    div.appendChild(p);
    button[2].style.display = 'none';
})
button[3].addEventListener('click', function (){
    
    let p = document.createElement('p');
    p.textContent = "Jordan torna indietro nel tempo fino al 1988 per la serie Reimagined,"
    "con l'uscita delle Air Jordan 3 Retro White Cement Reimagined.";
    var div = document.getElementById('3');
    div.appendChild(p);
    button[3].style.display = 'none';
})
button[4].addEventListener('click', function (){
    
    let p = document.createElement('p');
    p.textContent = "Jordan e Virgil Abloh di nuovo insieme per lanciare le terze sneakers della loro collaborazione:"
    "le Jordan 4 Retro Off-White Sail.";
    var div = document.getElementById('4');
    div.appendChild(p);
    button[4].style.display = 'none';
})
button[5].addEventListener('click', function (){
    
    let p = document.createElement('p');
    p.textContent = "La colorway Aqua è stata applicata alla silhouette delle Air Jordan retro con l'uscita delle Jordan 5 Retro Aqua." 
    "Le Jordan 5 Aqua è la colorway delle Jordan 5 che usciranno nel 2023.";
    var div = document.getElementById('5');
    div.appendChild(p);
    button[5].style.display = 'none';
})
button[6].addEventListener('click', function (){
    
    let p = document.createElement('p');
    p.textContent = "Sulla falsariga delle recenti collab, Travis Scott e Jordan si uniscono ancora una volta," 
    "per la release delle Jordan 6 Retro Travis Scott.";
    var div = document.getElementById('6');
    div.appendChild(p);
    button[6].style.display = 'none';
})