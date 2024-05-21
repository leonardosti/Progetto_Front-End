const button = document.body.querySelectorAll('button');
button[1].addEventListener('click', function (){
    
    let p = document.createElement('p');
    p.textContent = "Le sneakers Nike Cortez sono un mix di stile e comfort. Definite già nel 1972 come “le scarpe più comode di sempre”.";
    var div = document.getElementById('1');
    div.appendChild(p);
    button[1].style.display = 'none';
})
button[2].addEventListener('click', function (){
    
    let p = document.createElement('p');
    p.textContent = "Sfoggia un look vintage con le Nike Blazer Mid 77 Vintage White Black."
    "Questo modello è dotato di tomaia bianca e rifiniture grigie, Nike Swoosh nero, intersuola e suola sail.";
    var div = document.getElementById('2');
    div.appendChild(p);
    button[2].style.display = 'none';
})
button[3].addEventListener('click', function (){
    
    let p = document.createElement('p');
    p.textContent = "La Nike Air Max 95 SP Corteiz Aegean Storm è stata creata in collaborazione con Corteiz, un marchio streetwear di Londra, "
    "sfoggia una tomaia grey con accenti a contrasto celesti, fodera interna mimetica su una suola ammortizzata Black Max Air.";
    var div = document.getElementById('3');
    div.appendChild(p);
    button[3].style.display = 'none';
})
button[4].addEventListener('click', function (){
    
    let p = document.createElement('p');
    p.textContent = "Nike celebra l'Air Max Day nel 2023 riportando in auge un modello originale Air Max, con l'uscita delle Nike Air Max 1 '86 Big Bubble Sport Red.";
    var div = document.getElementById('4');
    div.appendChild(p);
    button[4].style.display = 'none';
})
button[5].addEventListener('click', function (){
    
    let p = document.createElement('p');
    p.textContent = "Le Nike Air Force 1 Low White '07 sono state presentate originariamente nel 2007, "
    "ma dato che si tratta di una colorway molto cara al brand, sono sempre state rifornite con costanza.";
    var div = document.getElementById('5');
    div.appendChild(p);
    button[5].style.display = 'none';
})
button[6].addEventListener('click', function (){
    
    let p = document.createElement('p');
    p.textContent = "Le ultime Nike SB Dunk J-Pack Chicago si ispirano all'amore di Jordan Brand per lo skateboard. Per capirci," 
    "prima dell'abbondanza di opzioni nel campo delle sneakers da skateboard, gli skater degli anni '80 e '90 avevano un debole per le Air Jordan 1.";
    var div = document.getElementById('6');
    div.appendChild(p);
    button[6].style.display = 'none';
})