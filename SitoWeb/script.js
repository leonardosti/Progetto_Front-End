const buttons = document.body.querySelectorAll('button');
let cont = 0;

buttons[0].addEventListener('click', function () {
    const width = 600;
    const height = 600;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    let newWindow = document.open("", "", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);
    
    let styleCSS = newWindow.document.createElement("link");
    styleCSS.rel = "stylesheet";
    styleCSS.href = "styleLog.css";
    newWindow.document.head.appendChild(styleCSS);

    let form = newWindow.document.createElement("form");
    form.classList = "container";

    let h1 = newWindow.document.createElement("h1");
    h1.textContent = "LogIn";

    let user = newWindow.document.createElement("input");
    user.type = "text";
    user.placeholder = "Username";
    user.required = true;

    let email = newWindow.document.createElement("input");
    user.type = "email";
    user.placeholder = "Email";
    user.required = true;

    let pwd = newWindow.document.createElement("input");
    pwd.type = "password";
    pwd.placeholder = "Password";
    pwd.required = true;

    let submit = newWindow.document.createElement("button");
    submit.textContent = "Invia";

    form.appendChild(h1);
    form.appendChild(user);
    form.appendChild(email);
    form.appendChild(pwd);
    form.appendChild(submit);
    newWindow.document.body.appendChild(form);

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        newWindow.close();
        buttons[0].disabled = true;
        buttons[0].style.display = 'none';
        cont++;
    });
});

buttons[1].addEventListener('click', function () {
        if (cont == 0)
        {
            alert("Per aggiungere delle recensioni devi prima fare il LogIn!");
        }else{
        const width = 600;
        const height = 600;
        const left = (screen.width - width) / 2;
        const top = (screen.height - height) / 2;
        let newWindow = document.open("", "", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);
        
        let styleCSS = newWindow.document.createElement("link");
        styleCSS.rel = "stylesheet";
        styleCSS.href = "styleLog.css";
        newWindow.document.head.appendChild(styleCSS);
    
        let form = newWindow.document.createElement("form");
        form.classList = "container";
    
        let h1 = newWindow.document.createElement("h1");
        h1.textContent = "Recensioni";
    
        let commento = newWindow.document.createElement("input");
        commento.type = "text";
        commento.placeholder = "Recensione";
        commento.required = true;
    
        let submit = newWindow.document.createElement("button");
        submit.textContent = "Invia";
    
        form.appendChild(h1);
        form.appendChild(commento);
        form.appendChild(submit);
        newWindow.document.body.appendChild(form);
    
        form.addEventListener("submit", function(event) {
            event.preventDefault();
    
            let p = document.createElement('p');
            p.classList = "commento";
            p.textContent = commento.value;
    
            documento.body.appendChild(p);
    
            newWindow.close();
        });
    }
});
