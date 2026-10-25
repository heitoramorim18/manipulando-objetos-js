const botaoEnviar = document.getElementById('criar')
const displayResultado = document.getElementById('display')
let todasAsPessoas = []

class pessoa {
    constructor (iNome, iDade) {
        this.nome = iNome
        this.idade = iDade
    }
}


botaoEnviar.addEventListener('click', () => {
    const nomeIndividuo = document.getElementById('inpName')
    const idadeIndividuo = document.getElementById('inpAge')


    if ((!nomeIndividuo.value) || (!idadeIndividuo.value)) {displayResultado.innerHTML = 'Insira os dados nos campos!'}

    else {
        const novaPessoa = new pessoa(nomeIndividuo.value, idadeIndividuo.value)

        todasAsPessoas.push(novaPessoa)

        displayResultado.innerHTML = `Nome: ${novaPessoa.nome} <br> Idade: ${novaPessoa.idade} anos`

        nomeIndividuo.value = ""
        idadeIndividuo.value = null
        nomeIndividuo.focus()

        console.log(todasAsPessoas)
    }
})
