function gravar(){

    var nome = document.getElementById('nome').value;

    const pessoa = new Pessoa();

    pessoa.setNome(nome);

    console.log(pessoa); 

}