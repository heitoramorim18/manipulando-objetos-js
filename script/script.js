const botaoEnviar = document.getElementById('criar')
// const displayResultado = document.getElementById('display')
const secao = document.getElementsByTagName('section')[0]
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

        const divNova = document.createElement('div')
        divNova.setAttribute('class', 'cards')
        divNova.innerHTML = `<h3>${nomeIndividuo.value}</h3>
        Idade: ${idadeIndividuo.value} anos`
        secao.appendChild(divNova)

        nomeIndividuo.value = ""
        idadeIndividuo.value = null
        nomeIndividuo.focus()

        console.log(todasAsPessoas)
    }
})
