let listadeconvidados = [];

function enviarnomes(){
    let nome = document.getElementById("nome").value;
listadeconvidados.push(nome);
document.getElementById("nome").value="";
document.getElementById("mostrarnomes").innerHTML=listadeconvidados.toString();
}

function ordemalfabetica(){
    listadeconvidados.sort();
    var i = listadeconvidados.join("<br>");
    document.getElementById("emordemalfabetica").innerHTML=i.toString();
}