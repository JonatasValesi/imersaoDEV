var numeroSecreto = parseInt(Math.random()*1001);
var qtdDeChutes = 0

while(chute != numeroSecreto){
    var chute = prompt('Digite um nuemro entre 1 e 1000')
    
    if (chute == numeroSecreto){
        alert('Acertou!')
    } else if (chute > numeroSecreto) {
        alert('Errou, o numero secreto é menor') 
    } else if (chute < numeroSecreto){
        alert('Errou, o nuemro secreto é maior')
    }
}