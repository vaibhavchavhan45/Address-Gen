function vac(){
    var u = document.getElementById("names").value;
    var v = document.getElementById("fullname");
    v.innerHTML=u;
    return false;
}

function numb(){
    var u = document.getElementById("num").value;
    var v = document.getElementById("number");
    v.innerHTML = u;
    return false;
}

function anum(){
    var u = document.getElementById("alternate");
    u = u.value;
    var v = document.getElementById("a_number");
    v.innerHTML = u;
    return false;
}

function sow(){
    var u = document.getElementById("sowo");
    u = u.value;
    var v = document.getElementById("sonwo");
    v.innerHTML = u;
    return false;
}

function mails(){
    var u = document.getElementById("mail");
    u = u.value;
    var v = document.getElementById("email");
    v.innerHTML = u;
    return false;
}

function patta(){
    var u = document.getElementById("venue");
    u = u.value;
    var v = document.getElementById("add");
    v.innerHTML = u;
    return false;
}

function a() {
    vac();
    numb();
    anum();
    sow();
    mails();
    patta();
}

function bold(){
    var u = document.getElementById("div");
    u.style.fontWeight="bold";
}

function italic(){
    var u = document.getElementById("div");
    u.style.fontStyle="italic";
}

function undo(){
    var u = document.getElementById("div");
    u.style.fontWeight="normal";
    u.style.fontStyle="normal";
}

function pre(){
    window.print();
}




