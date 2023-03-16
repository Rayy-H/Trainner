function getRandom(min, max){
    return Math.random() * (max - min) + min;

}

const x =  getRandom(5, 10);

console.log(x)

function a(t){
    return Math.floor(t)
}

const y = a(76)
console.log(y)



// Template Literal (customização de Strings)

const nome = 'Jean'

const email = 

`   Pai ${nome}, 

eu não sou 'gay'

obrigado, por entender`

//Date


const data2 = new Date('March 16 2023 8:30')


// Desafios


// Criar objeto endereco

let endereco = {
    rua : 'Jorge e Matheus, 395',
    cidade : 'Los Santos',
    cep : '34410-605',
    

  }


  function exibirEndereco(endereco){
    for(chave in endereco){
        console.log(chave, endereco[chave])
    }
  }


  //Igualdade de Objetos

  function endereco(){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
  }

  const endereco1 = new endereco('a', 'b', 'c')
  const endereco2 = new endereco('a', 'b', 'c')

  function saoIguais(endereco1, endereco2){
    //propriedades do objeto

  }

  function saoMIguais(endereco1, endereco2){
    //endereco de memoria

  }