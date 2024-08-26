document.addEventListener('keydown',e =>{

    if(e.key== 'Escape'){

        Limpar();
    }
})  
document.addEventListener('keypress', e => {

    if(e.key == 'Enter'){
    
        Calcular(); 
    }   
})


function Calcular(){
            let cOp = parseFloat(document.getElementById('oposto').value)
            let cAd = parseFloat(document.getElementById('adjacente').value)
            let res =  document.querySelector('.res')

            if(isNaN(cAd) || isNaN(cOp)){
                    res.innerHTML='Falta Dados'
            }
            else{
                if(cAd>0||cOp>0){
                const hip = Math.sqrt(Math.pow( cOp, 2) + Math.pow(cAd, 2));
                res.innerHTML="Calculando..."
                res.innerHTML+=`<br> A Soma Dos Quadrados de <strong>${ cOp}</strong> e <strong>${cAd}</strong> é igual a Hipotenusa<strong> ${Math.round(hip)}</strong>` 
                }
            else if(cOp<=0 || cAd <=0){
                res.innerHTML="Imposivel Calcular. Numeros Negativos ou Nulo"}
            }
        }

function Limpar(){

    document.getElementById('oposto').value=""
    document.getElementById('adjacente').value=""
    document.querySelector('.res').innerHTML="Resultado:"
}