function adicionarLista() {

    var input = document.querySelector('input').value;

    var lista = document.querySelector('#lista').innerHTML;

    lista = lista +"<li>"+input+"</li>";

    document.querySelector("#lista").innerHTML = lista;
  
}