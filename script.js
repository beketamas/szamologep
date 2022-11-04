function osszead(){
    szamolj("+");
}

function kivon(){
    szamolj("-");
}

function szoroz(){
    szamolj("*");
}

function oszt(){
    szamolj("/");
}

function szamolj(muvelet){
    var elsoSzam = document.getElementById("szamA").value;
    var masodikSzam = document.getElementById("szamB").value;
    if(muvelet == "+"){
        var eredmeny = parseFloat(elsoSzam) + parseFloat(masodikSzam);
    }

    else if (muvelet == "-"){
        var eredmeny = parseFloat(elsoSzam) - parseFloat(masodikSzam);
    }

    else if(muvelet == "*"){
        var eredmeny = parseFloat(elsoSzam) * parseFloat(masodikSzam);
    }

    else if(muvelet == "/"){
        var eredmeny = parseFloat(elsoSzam) / parseFloat(masodikSzam);
    }

    document.getElementById("eredmeny").innerHTML=eredmeny;
}