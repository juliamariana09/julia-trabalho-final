



//let idadeDois= Number(prompt("qual é a sua idade?"))
//let idade= Number(prompt("qual é a idade do seu melhor amigo?"))

//console.log("sua idade é a maior que a do seu melhor amigo?" + idadeDois > idade)
//console.log("a sua idade é maior do que a da melhor amiga?" + idadeDois > idade)





//let NomeDoUsuario = prompt("digite seu nome:")
//let CorFavoritaDoUsuario = prompt('digite sua cor favorita:')

//console.log(NomeDoUsuario + CorFavoritaDoUsuario) 
          

//let frase = prompt("digite uma frase aqui:")
//console.log( escrita.







//const racasDeCachorro = ["pastor alemao", "pasator australiano", "viralata", "boxer", "golden retriever"]
//let mostrarRacas= racasDeCachorro[Number(prompt("digite um numero de 0 a 4"))]
//console.log(mostrarRacas)


//onst numeros= [1,2,3,4,5,6]
//console.log(numeros.length)
//numeros.push(7)
//console.log(numeros)
//umeros.splice(3,2)
//console.log(numeros.length)


//const nomeDoUsuario= prompt( "Digite aqui seu nome" )
//onst emailDoUsuario= prompt( "Digite seu email aqui" )
//console.log( "O email"  + emailDoUsuario + "foi cadastrado com sucesso" + " seja bem vindo!" + nomeDoUsuario )










//const comidaPreferida= [ "arroz de leite", "bolo de ", "açai", "maracuja", "pudim "]
//console.log( " essas sao as minhas comidas favorita " + comidaPreferida) 
//console.log( comidaPreferida[0] )
//console.log( comidaPreferida [1] )
//onsole.log( comidaPreferida [2] )
//console.log( comidaPreferida [3] )
//console.log( comidaPreferida[4] )


//const comidaDoUsuario= prompt( "Qual a sua comida favorita?")
//console.log( comidaDoUsuario)
//console.log( )




//const filme = {
    //ome: "clara galle", "julio pena", "natalia azahara", " guillermo lasheras", "eric masip"],
   // vistoouNao : true 



//console.log(filme.nome)
//console.log(filme.lancamento)
//console.log(filme[elenco])
//console.log(filme[vistoouNao])

//const raquelMorganh= {
    //nome: "raquelMorganh",
    //idade: 16 , 
    //comidasPreferidas: "açai com chocolate"

//console.log( raquelMorganh + "o nome da pessoa é", raquelMorganh.nome + "ela tem" + raquelMorganh.idade + "anos e gosta muito de", + raquelMorganh.comidasPreferidas)










//filme.outrosPersonagens=[ "raquel", "ares Hidalgo", "ivan lapadula","pilar" ]
//console.log(filme.elenco[0] + ":" + filme.outrosPersonagens[2])
//console.log(filme.elenco[1] +  + filme.outrosPersonagens[1])
//onsole.log()


    
//let num1= Number(prompt("Digite um numero aqui"))
//let num2= Number(prompt("Digite um numero aqui")) 
  //function comparador (num1,  num2) {
    //if (num1 === num2) {
    //console.log("sucesso")
    //}// else {  
     //console.log( " entrei no else ")
   // }
//}
///omparador(num1, num2)
//let numeroZero= Number(prompt("digite um numero aqui"))
//let numeroUm= Number(prompt("digite um numero aqui "))
//function comparador (numeroZero, {numeroUm){
//if( numeroZero === numeroZero){
//console.log("igual")








//let pokemons= prompt("digite um porkemon aqui")
//switch (pokemons){
   // case "Bulbasauro":
//console.log( "É tipo uma planta veneno" )
//break
//case "Charmander":
   // console.log("é tipo fogo")
   // break
    //case"squirtle ":
    //console.log( "é tipo agua")
    ///break
   // default:
        //console.log( " nao foi encontrado o tipo")
       // break
//}
 //let ensinoMedio= prompt("voce ja concluiu o ensino medio?")
 //let idade= Number(prompt("digite sua idade aqui."))
 //et faculdade2= prompt("voce ja esta cursando outra faculdade?")
 //function podeEstudar( ensinoMedio, idade, faculdade2){
    
    //if( idade >= 18 && ensinoMedio === "sim"  && faculdade "nao"){ 
       // console.log(" voce pode entrar na faculdade")
// //}
//else//podeEstudar  ( idade, ensinoMedio, faculdade )



    //let numerosDeUsuario= Number(prompt("insira pelo menos 5 numeros, por favor"))

   
    //let cadastro001=Number (prompt("===ABRIGOS TEMPORARIOS===\n 1=cadastrar abrigo\n 2=Listar abrigos\n 3=procurar abrigo\n 4=sair\n" ))
    //switch(cadastro001){
   // case 1:
       // prompt  ( "Qual vai ser o nome do seu abrigo?" )
        ///break 
        //case 2: 
        //alert()
        //break
       // case 3:
            //prompt( "digite sua cidade aqui para que possamos encontrar um abrigo perto de voce?")
           // break
       // }
   //function novoAbrigo(cadastro){
    //const nomeDoAbrigo= prompt ("Qual sera o nome do seu abrigo?")
    //const cidadeDoAbrigo= prompt ("Qual é a sua cidade atualmente?")
    //const capacidadeDoAbrigo= prompt ("Qual sera a capacidade de pessoas dentro do seu abrigo?")
    //const enderecoDoAbrigo= prompt ("Qual é o seu endereço?")
   // const numeroDoAbrigo= prompt ("Qual é o seu numero de telefone?")
        ////cadastro.push[ListaDeAbrigo]
   //}
//ovoAbrigo(cadastro002)
//function ListaDeAbri

    
let abrigos= [];
function mostrarMenu(){
    let novosAbrigos;
    while (novosAbrigos !== '4'){
        let novosAbrigos= prompt("===ABRIGOS TEMPORARIOS===\n 1-cadastrar abrigos\n 2-listar abrigos\n 3-procurar abrigos\n 4-sair\n escolha uma opçao:")
        switch (novosAbrigos){
        case "1":
            cadastrarnovoAbrigo()
            break
            case "2":
                listarnovosAbrigos()
                break
                case"3":
                procurarnovosAbrigos()
                break
                case"4":
                sair()
                alert("ate mais tarde, obrigada pela participaçao!")
                break
                default:
                    alert("tento novamente mais tarde...")
        }

    }
}

function cadastrarnovoAbrigo(){
const nome: prompt("qual sera o nome do seu abrigo?")
const endereco: prompt("qual sera o endereço do seu futuro abrigo?")
const telefone:prompt("Qaul sera o seu numero de telefone?")
const capacidade:prompt("Qual sera a capacidade de pessoas para o seu abrigo?")
const cidade:prompt("Em qual cidade sera seu futuro abrigo?")

      
let abrigo001={
    nome: nome,
    endereco: endereco,
    telefone: telefone,
    capacidade: capacidade,
    cidade: cidade
 } 
 abrigos.push(abrigo001)
alert ("abrigo cadastrado com sucesso!")
}
function abrigoUm(){
     if (abrigo001.length ===0){
     alert("nao tem nenhum abrigo cadastrado no momento")
} else {
    for( let i=0; i < abrigos.length; i++){
        alert (' Nome: ${abrigos[i].nome')
    }
}
        function prucararAbrigos(){   
        let cidade= prompt (" em que cidade voce esta?")
        if(abrigos.length===0){
            alert ( "voce ainda nao cadastrou seu abrigo" )
            } else { }
        
        }
    }
    mostrarMenu()