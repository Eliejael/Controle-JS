let i=1;

function Pnu(){
    let Nu=i;
    i++;
    return Nu+=1;
}

function PName(){
    const input=document.getElementById("sel2");
    return input.value;
};

function Psurname(){
    const input=document.getElementById("sel3");
    return input.value;
};

function Page(){
    const input=document.getElementById("sel4");
    return input.value;
};

function Pgenre(){
    const input=document.getElementById("sel5");
    return input.value;
};

function Ptaille(){
    const input=document.getElementById("sel6");
    return input.value;
};


function Ppoig(){
    const input=document.getElementById("sel7");
    return input.value;
};

function Psp(){
    const Option=document.getElementById("sel8");
    return Option.value;
};

function writer(){
    let Patient={
        sel1:Pnu(),
        sel2:PName(),
        sel3:Psurname(),
        sel4:Page(),
        sel5:Pgenre(),
        sel6:Ptaille(),
        sel7:Ppoig(),
        sel8:Psp(),
    }
    document.getElementById("myListeP").innerHTML+=
    "<tr>"+
        "<td>"+Pnu()+"</td>"+
        "<td>"+PName()+"</td>"+
        "<td>"+Psurname()+"</td>"+
        "<td>"+Page()+"</td>"+
        "<td>"+Pgenre()+"</td>"+
        "<td>"+Ptaille()+"</td>"+
        "<td>"+Ppoig()+"</td>"+
        "<td>"+Psp()+"</td>"
    "</tr>";
};

const elt=document.getElementById("but");
elt.addEventListener("click",writer);
