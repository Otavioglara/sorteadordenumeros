async function sortear(){

  const totalResultado = Number(document.querySelector('#totalResultadoInput').value)
  
  
  const menorValor = Number(document.querySelector('#menorValorInput').value)
  
  
  const maiorValor = Number(document.querySelector('#maiorValorInput').value)

  for (let j = 0; j < 20; j++){

    const elementoHTMLResultValues = document.querySelector('.results-values')
    elementoHTMLResultValues.innerHTML=''
    
    
    for(let i = 0; i< totalResultado; i++){
        
    const resultado=Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor


    const elementoHTMLDoResultado = document.createElement('div')
        elementoHTMLDoResultado.classList.add('result-value')
        elementoHTMLDoResultado.innerText= resultado

        elementoHTMLResultValues.append(elementoHTMLDoResultado)
    }

    await wait(20)
    }
}
  
function wait(tempo){
    return new Promise((resolve) => {
        setTimeout(() =>resolve(), tempo)


    })
}