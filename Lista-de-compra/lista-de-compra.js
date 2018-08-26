function addigrediente(){
    var ingg = document.getElementById("igredientes").value;
    var listahtml = document.getElementById("lista").innerHTML;
    listahtml = listahtml + "<li>" + ingg + "</li>";
    document.getElementById("lista").innerHTML = listahtml
}