let menu= document.querySelector('.menu');
let flag=false;



function iniciar(){
    var imagenes=document.querySelectorAll('#cajaImagenes img');
     soltar=document.getElementById('cajaSoltar');  
     soltar2  =document.getElementById('cajaSoltar2'); 
     soltar3 = document.getElementById('cajaSoltar3'); 

    for(var i=0; i<imagenes.length; i++){
    imagenes[i].addEventListener('dragstart', arrastrado, false);
    imagenes[i].addEventListener('dragend', finalizado, false);
    }

    soltar.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar.addEventListener('drop', soltado, false);


    soltar2.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado2, false);


    soltar3.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltado3, false);

}
function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}
function finalizado(e){
    elemento=e.target;
    elemento.style.visibility='hidden';
} 

function soltado(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    if(id!="imagen4"){
        var src=document.getElementById(id).src;
    soltar.innerHTML='<img src="'+src+'" height="400px" width="275px">';
    }else{
    soltar.innerHTML='la imagen no es admitida';
    }
}

function soltado2(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    if(id!="imagen4"){
        var src=document.getElementById(id).src;
    soltar2.innerHTML='<img src="'+src+'"height="400px" width="275px">';
    }else{
    soltar2.innerHTML='la imagen no es admitida';
    }
}
function soltado3(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    if(id!="imagen4"){
        var src=document.getElementById(id).src;
    soltar3.innerHTML='<img src="'+src+'"height="400px" width="275px">';
    }else{
    soltar3.innerHTML='la imagen no es admitida';
    }
}

function reinicio() {
    window.location.reload();
}
iniciar()



































































































































 







 