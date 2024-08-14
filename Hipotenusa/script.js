document.addEventListener('keydown',e =>{

    if(e.key== 'Escape'){

        document.getElementById('oposto').value=""
        document.getElementById('adjacente').value=""
        document.querySelector('.res').innerHTML="Resultado:"

    }
})

document.addEventListener('keypress', e => {

    if(e.key == 'Enter'){
       
        var btn = document.getElementById('button')
        btn.click()
        let cOp = parseFloat(document.getElementById('oposto').value)
        let cAd = parseFloat(document.getElementById('adjacente').value)
        let res =  document.querySelector('.res')

        if(!isNaN(cOp) && !isNaN(cAd)){
            const hip = Math.sqrt(Math.pow( cOp, 2) + Math.pow(cAd, 2));
            res.innerHTML="Calculando..."
            res.innerHTML+=`<br> A Soma Dos Quadrados de <strong>${ cOp}</strong> e <strong>${cAd}</strong> é igual a Hipotenusa<strong> ${Math.round(hip)}</strong>` 
        }

        else{
            res.innerHTML="Imposivel Calcular"
        }
        
    }   
})


function Calcular(){
           
            let cOp = parseFloat(document.getElementById('oposto').value)
            let cAd = parseFloat(document.getElementById('adjacente').value)
            let res =  document.querySelector('.res')
    
            if(!isNaN(cOp) && !isNaN(cAd)){
                const hip = Math.sqrt(Math.pow( cOp, 2) + Math.pow(cAd, 2));
                res.innerHTML="Calculando..."
                res.innerHTML+=`<br> A Soma Dos Quadrados de <strong>${ cOp}</strong> e <strong>${cAd}</strong> é igual a Hipotenusa<strong> ${Math.round(hip)}</strong>` 
            }
            else{
                
                res.innerHTML="Imposivel Calcular"
            }
            
        }   
 
function Limpar(){

    document.getElementById('oposto').value=""
    document.getElementById('adjacente').value=""
    document.querySelector('.res').innerHTML="Resultado:"
}