function Calcular(){
    let  cOp = parseFloat(document.getElementById("oposto").value)
    let cAd = parseFloat(document.getElementById("adjacente").value)
    let res = document.querySelector(".res")

    if(!isNaN(cOp) && !isNaN(cAd)){
        const hipotenusa = Math.sqrt(Math.pow( cOp, 2) + Math.pow(cAd, 2));
        
        res.innerHTML+=`<br> A Soma Dos Quadrados de <strong>${ cOp}</strong> e <strong>${cAd}</strong> é igual a Hipotenusa<strong> ${hipotenusa.toFixed(2)}</strong>` 
    }
    else{
        alert("Insira Dados")
        res.innerHTML="Imposivel Calcular"
    }
}   
function Limpar(){
    document.getElementById('oposto').value=""
    document.getElementById('adjacente').value=""
    document.querySelector('.res').innerHTML="Resposta:"
}