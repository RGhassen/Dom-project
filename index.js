var btnsPlus = document.querySelectorAll('.plus')
var btnsMoins = document.querySelectorAll('.moins')
var btndel = document.querySelectorAll('.del')
var tot      = document.querySelector('#tot')
var btnlike = document.querySelectorAll('.like')

for(let i = 0;i<btnsPlus.length;i++){
    btnsPlus[i].addEventListener('click',function(){
        btnsPlus[i].nextElementSibling.innerHTML++
        somme()
    })
}


for(let i = 0;i<btnsMoins.length;i++){
    btnsMoins[i].addEventListener('click',function(){
        if(btnsMoins[i].previousElementSibling.innerHTML>0){
            btnsMoins[i].previousElementSibling.innerHTML--
            somme()
        } 
    })
}
for(let i =0 ; i<btndel.length;i++){
    btndel[i].addEventListener('click', function(){
        btndel[i].parentElement.remove()
        somme()
    })
}
function somme (){
    var quan    = document.querySelectorAll('.quan')
     var price = document.querySelectorAll('.price')
     var sum = 0
     for (i=0 ; i<quan.length;i++){
       sum = sum + quan[i].innerHTML * price[i].innerHTML
     }
     tot.innerHTML = sum
    
}
for(let i =0 ; i<btnlike.length;i++){
    btnlike[i].addEventListener('click', function(){
        btnlike[i].classList.toggle('like')
    }
    )}
