
var inicio8=document.querySelector(".b-8");/*t*/
var start_8=document.querySelector(".test8");/*t*/
var start1=document.querySelector(".inicio");
var seguinete8=document.querySelector(".bb3_8");/*t*/
var list8=document.querySelector(".option-list8");/*t*/
var box8=document.querySelector(".fin8");/*t*/
var out8=document.querySelector(".exit8");/*t*/
var extra8=document.querySelector(".button8");/*t*/
var b111=document.querySelector(".b11");

var s8=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg8=localStorage.getItem("mjid8");/*t*/
 if(storg8==null){
     inicio8.className="b-8";
 }else{ inicio8.className=storg8;}})();

function mjid8() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_8.classList.add("start-test8");//add boxtest de test3
    s8=2700;
    numbe8(1);
    quest8(0);
    optiselc8();}
      //button reptir test 1

function oki1_8(){/*t*/
    box8.classList.remove("active8");
    start_8.classList.add("start-test8");
    seguinete8.classList.remove("bbb3");  
    s8=2700;
    counter=0;
    num=1;
    score=0;
    quest8(counter);
    numbe8(num);
    optiselc8();
    countdown8=setInterval(function(){setup8();},1000);}  /*t*/ 
    
    seguinete8.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions8.length-1) {
            counter++;
            num++;
            quest8(counter);
            numbe8(num);
           seguinete8.classList.remove("bbb3");}
            else{
            start_8.classList.remove("start-test8");
            fin8(); }}

    function p2_8(){/*pulsar buton home para atras*/ /*t*/
            start_8.classList.remove("start-test8");
            start1.classList.remove("star-inicio");
            s8=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest8(index){/*gunction de preguntas array*/  /*t*/
            var text8=document.querySelector(".pregunta8");
            var list8=document.querySelector(".option-list8");
           
            text8.innerHTML='<h1>'+questions8[index].question+'</h1>'; 
            list8.innerHTML='<div class="opti8"><h1>'+questions8[index].option[0]+'</h1></div>'
            +'<div class="opti8"><h1>'+questions8[index].option[1]+'</h1></div>'
            +'<div class="opti8"><h1>'+questions8[index].option[2]+'</h1></div>';
            /*true false*/
            var list1=list8.querySelectorAll(".opti8");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc8(this)"); 
            if(list8.children[i].textContent==""){
                list8.children[i].classList.add("quito8"); } }}
         

    function optiselc8(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions8[counter].ansower;
            var allopcion=list.children.length;
            if(userans==correct){ score += 1; ansower.style.background="blue";}
           else{ansower.style.background="red"; }
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list8.children[i].textContent==correct){list8.children[i].style="background:green;";  }
            else if(list8.children[i].textContent==""){
            list8.children[i].classList.add("quito8");}/*t*/
            else{ list8.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete8.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe8(index){/*t*/
            var numbe=document.querySelector(".footer8");
            numbe.innerHTML="<h3 style='font-size:22px;margin-top:10px;'> pregunta "+index+" de "+questions8.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto8=document.getElementById("col8");
            var fini8=document.querySelector(".finish8");
    function fin8(){/*t*/
            start_8.classList.remove("start-test8");
            box8.classList.add("active8");
               //resultado de el tirpo
var minute=44-Math.floor(s8/60); 
var second=60-s8 %60;
if(second<10  ){second="0"+second;}
if (minute <10 ) {minute="0"+minute;}

            if(score>=15){
out8.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions8.length +"</h1></h1></span>";
inicio8.className="green8";
fini8.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  :00"+minute+":"+ second +"</h3>";

localStorage.setItem("mjid8","green8");//poner local storge
foto8.src="feliz.jpg";} 
            else {
out8.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions8.length +"</h1></h1></span>";
inicio8.className="red8";
fini8.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  :00"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid8","red8");//poner local storge
foto8.src="triste.jpg";}  }

    function oki2_8(){/*t*/
    // window.location.reload();
    start_8.classList.remove("start-test8");
    start1.classList.remove("star-inicio");
    box8.classList.remove("active8");
    s8=2700;
    counter=0;
    num=1;
    score=0;
    quest8(counter);
    numbe8(num);}

/*time descont*/
     var s8=2700;
count8=document.querySelector(".timer8"),
countdown8=setInterval(function(){
setup8();},1000);/*t*/
function setup8(){/*t*/
    var minutes=Math.floor(s8/60);
        sec=s8 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count8.innerHTML=minutes+":"+sec;}
              if(s8<300){ count8.style.color="red";}
              else{count8.style.color="black";}
           if(s8>0){s8=s8-1; }
                  else{count8.innerHTML="<p style='color:red;'>time off</p>";}
                     }
    



var questions8=[
    {
    question:"El control de la acci??n del Gobierno corresponde???",
         ansower:"a las Cortes Generales",         
         option:["a las Cortes Generales","a la Junta Electoral Central","al Rey"]},
         {
question:"La Constituci??n espa??ola es???",
ansower:"una ley esencial",         
option:["parte de otra ley","una ley secundaria","una ley esencial"]},    
        
                 {
  question:"Las Cortes Generales est??n formadas por el Senado y???",
 ansower:"el Congreso de los Diputados",         
 option:["el Consejo de Estado","el Tribunal Supremo","el Congreso de los Diputados"]},
        
                         {
question:"Las leyes espa??olas son elaboradas por???",
 ansower:"poder ejecutivo",          
 option:["poder ejecutivo","poder legislativo","el poder judicial"]},
        
                                 {
 question:"La defensa de la integridad territorial de Espa??a corresponde a???",
    ansower:"las Fuerzas Armadas",         
    option:["la Polic??a Nacional y la Guardia Civil.","las Fuerzas Armadas","la Polic??a Nacional y las polic??as auton??micas"]},
    {        
    question:"El Ej??rcito espa??ol participa desde 1989 en misiones de paz de la???",
    ansower:"Organizaci??n de Naciones Unidas (ONU)",         
    option:["Organizaci??n de Estados Iberoamericanos (OEI)","Uni??n Europea Occidental (UEO)","Organizaci??n de Naciones Unidas (ONU)"]},
    {
question:"Qui??n vigila puertos y aeropuertos, fronteras y costas?",
ansower:"la Guardia Civil",         
option:["la Polic??a Nacional","la Polic??a local","la Guardia Civil"]},    
   
            {
question:"Qui??n hace el control de pasaportes en las fronteras de Espa??a?",
ansower:"la Polic??a Nacional",         
option:["la Polic??a Nacional","la Polic??a local","la Guardia Civil"]},
   
                    {
question:"Qui??n controla la circulaci??n de coches en las ciudades?",
ansower:"la Polic??a local",          
option:["la Polic??a Nacional","la Polic??a local","la Guardia Civil"]},
 
                            {
question:"C??mo se llama la polic??a auton??mica de Catalu??a?",
ansower:"Mossos d'Esquadra",         
option:["Guardia Civil","Ertzaintza","Mossos d'Esquadra"]},        
        
 {       
    question:"Los poderes p??blicos garantizan la atenci??n sanitaria para todos los ciudadanos",
    ansower:"Verdadero",         
    option:["Verdadero","Falso",""]},
    {
question:"Los poderes p??blicos deben promover la educaci??n f??sica y el deporte",
ansower:"Verdadero",         
option:["Verdadero","Falso",""]},    
   
            {
question:"En Espa??a est?? reconocido el derecho de asociaci??n",
ansower:"Verdadero",         
option:["Verdadero","Falso",""]},
   
                    {
question:"En el norte de ??frica est??n Ceuta y???",
ansower:"Melilla",          
option:["Almer??a","Melilla","C??diz"]},
   
                            {
question:"Cu??l de estas comunidades aut??nomas tiene m??s de una provincia?",
ansower:"Castilla-La Mancha",         
option:["Asturias","Madrid","Castilla-La Mancha"]},      
        
{
    question:"Qui??n fue presidente de Gobierno durante la Transici??n espa??ola?",
    ansower:"Adolfo Su??rez",         
    option:["Pedro S??nchez","Adolfo Su??rez","Jos?? Mar??a Aznar"]},
    {
question:"Mireia Belmonte, Edurne Pasaban y Pau Gasol son???",
ansower:"deportistas",         
option:["deportistas","m??sicos","artistas"]},    
   
            {
question:"En Espa??a, ??qu?? se toma la noche del 31 de diciembre para celebrar el cambio de a??o?",
ansower:"Uvas",         
option:["Lentejas","Uvas","Aceitunas"]},
   
                    {
question:"0 La tarjeta sanitaria europea permite acceder gratuitamente a la sanidad p??blica durante???",
ansower:"2 a??os",          
option:["6 meses","12meses","2 a??os"]},
   
                            {
question:"El sistema educativo espa??ol proporciona becas para las distintas etapas educativas y???",
ansower:"para ayudar en los gastos de escolarizaci??n",         
option:["para ayudar en los gastos de escolarizaci??n","para viajes escolares","para los meses de verano"]}, 

{
    question:"Cu??l es el n??mero de tel??fono ??nico para cualquier emergencia?",
         ansower:"112",         
         option:["060","112","911"]},
         {
question:"Los viajes de vacaciones para las personas mayores de 65 a??os los organiza???",
ansower:"el IMSERSO (Instituto de Mayores y Servicios Sociales)",         
option:["el IMSERSO (Instituto de Mayores y Servicios Sociales)","el ICO (Instituto de Cr??dito Oficial)","el IEF (Instituto de Estudios Fiscales)"]},    
        
                 {
  question:"Una persona que tiene a su cargo hijos menores de 18 a??os o hijos mayores de edad discapacitados, puede recibir una???",
 ansower:"ayuda familiar",         
 option:["pensi??n de viudedad","prestaci??n por desempleo","ayuda familiar"]},
        
                         {
question:"Los principales exponentes de la red de alta velocidad son los trenes ALARIS, ALVIA y???",
 ansower:"AVE",          
 option:["Eurostar","AVE","TGV"]},
        
                                 {
 question:"La organizaci??n que trabaja para conseguir la integraci??n de las personas con discapacidad visual es???",
    ansower:"la ONCE",         
    option:["la ONCE","UNICEF","C??ritas"]}, 
        ]