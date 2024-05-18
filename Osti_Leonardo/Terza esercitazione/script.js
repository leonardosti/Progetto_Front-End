const btn = document.body.querySelectorAll("button");
btn[0].addEventListener("click", function(){
    const width = 600;
    const height = 600;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    let newWindow = document.open("", "", "width = " + width + ",height = " + height + ",left = " + left + ",top = " + top);
    
    let styleCSS = newWindow.document.createElement("link");
    styleCSS.rel = "stylesheet";
    styleCSS.href = "style.css";
    newWindow.document.head.appendChild(styleCSS);

    let form = newWindow.document.createElement("form");
    form.classList = "container";

    let h1 = newWindow.document.createElement("h1");
    h1.textContent = "LogIn";
    h1.classList = "title";

    let user = newWindow.document.createElement("input");
    user.type = "text";
    user.placeholder = "Username";
    user.required = true;

    let pwd = newWindow.document.createElement("input");
    pwd.type = "password";
    pwd.placeholder = "Password";
    pwd.required = true;

    let submit = newWindow.document.createElement("input");
    submit.type = "submit";
    submit.value = "Submit";

    form.appendChild(h1);
    form.appendChild(user);
    form.appendChild(pwd);
    form.appendChild(submit);
    newWindow.document.body.appendChild(form);

    // let script2 = newWindow.document.createElement("script");
    // script2.src = "script2.js";
    // newWindow.document.body.appendChild(script2);
});