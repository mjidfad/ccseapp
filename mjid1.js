
  
var inicio=document.querySelector(".b1");
var start=document.querySelector(".test");
var start1=document.querySelector(".inicio");
var seguinete=document.querySelector(".bb3");
var list=document.querySelector(".option-list");
var box=document.querySelector(".fin");
var out=document.querySelector(".exit");
var extra=document.querySelector(".button");
var b111=document.querySelector(".b11");
var s=2700;
var counter=0;
var num=1;
var score=0;
(()=>{//aplicar local sorge
var storg=localStorage.getItem("mjid");
 if(storg==null){
     inicio.className="b1";
    }else{ inicio.className=storg;}})();
   
    b111.onclick=()=>{
      //remove local storge from all 
    localStorage.removeItem("mjid");
    localStorage.removeItem("mjid2"); 
    localStorage.removeItem("mjid3");
    localStorage.removeItem("mjid4");
    localStorage.removeItem("mjid5");
    localStorage.removeItem("mjid6");
    localStorage.removeItem("mjid7");
    localStorage.removeItem("mjid8");
    localStorage.removeItem("mjid9");
    localStorage.removeItem("mjid10");
    localStorage.removeItem("mjid11");
    localStorage.removeItem("mjid12");
    window.location.reload();}
  
//inicio.onclick=()=>{/*pulsar button teste1*/
function mjid() {
    

start.classList.add("start-test");
start1.classList.add("star-inicio");
 s=2700;
//inicio.style.background="green";
numbe(1);
    quest(0);
    optiselc();
    cl();
  //localStorage.removeItem("mjid");  
    
  }



function p2(){/*pulsar buton home para atras*/
    start.classList.remove("start-test");
    start1.classList.remove("star-inicio");
    s=2700;
    counter=0;
  num=1;
  score=0;
 
   
}

    seguinete.onclick=()=>{/*buton seguiente*/
        
    
        if(counter<questions.length-1) {
            counter++;
            num++;
             quest(counter);
             numbe(num);
             
             seguinete.classList.remove("bbb3");}
        else{
           //alert  ("teste terminado");
            // clearInterval(countdown);
              start.classList.remove("start-test");
              box.classList.add("active");
               fin(); }
               
   }

    
 //button reptir test 1
 //box.onclick=()=>{
     function oki1(){
    box.classList.remove("active");
    start.classList.add("start-test");
    seguinete.classList.remove("bbb3");  
  
 s=2700;
 counter=0;
 num=1;
 score=0;

quest(counter);
numbe(num);
//clearInterval(countdown); 
 optiselc();
 countdown=setInterval(function(){ setup();},1000);}

function quest(index){/*gunction de preguntas array*/
    var text=document.querySelector(".pregunta");
    var list=document.querySelector(".option-list");

  
   text.innerHTML='<h1>'+questions[index].question+'</h1>';  

    list.innerHTML='<div class="opti"><h1>'+questions[index].option[0]+'</h1></div>'
    +'<div class="opti"><h1>'+questions[index].option[1]+'</h1></div>'
    +'<div class="opti"><h1>'+questions[index].option[2]+'</h1></div>';

 

    /*true false*/
 var list1=list.querySelectorAll(".opti");
 for(let i=0;i<list1.length;i++){
    list1[i].setAttribute("onclick","optiselc(this)"); 
    if(list.children[i].textContent==""){
      list.children[i].classList.add("quito1");
 }
  }
}

 
 function optiselc(ansower){
     
    var userans=ansower.textContent;
    var correct=questions[counter].ansower;
    var allopcion=list.children.length;
      if(userans==correct){ score += 1; ansower.style.background="green"; }
      else{ansower.style.background="red";}
/*cuando la respuesta es incorrecta sacar correcta automati*/
  
  for(var i=0;i < allopcion; i++){
    if( list.children[i].textContent==correct){list.children[i].style.background="green"; }
    else if(list.children[i].textContent==""){
      list.children[i].classList.add("quito");
 }    
    else{ list.children[i].style.background="red"; }
                                 }
                        
                          
    //cuamdo se selectiona deja de selecionar
    for(let i=0; i<allopcion;i++){
        list.children[i].classList.add("disab") ;
         seguinete.classList.add("bbb3");
                                 }
                               }

    //contador de preguntas//
    function numbe(index){
        var numbe=document.querySelector(".footer");
        numbe.innerHTML="<h3 style='font-size:22px;margin-top:10px;'> Pregunta   "+index+" de "+questions.length+"</h3>";
        }
       

       
/*time descont*/

var s=2700;
count=document.querySelector(".time"),
countdown=setInterval(function(){
setup();},1000);/*t*/
function setup(){/*t*/
    var minutes=Math.floor(s/60);
        sec=s %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count.innerHTML=minutes+":"+sec;}
              if(s<300){ count.style.color="red";}
              else{count.style.color="black";}
           if(s>0){s=s-1; }
                  else{count.innerHTML="<p style='color:red;'>time off</p>";}
                     }
     
     
    /*llamar abox reasult*/                
/*div resultado*/
  //var end=document.querySelector(".res");
   var bhome1=document.querySelector(".bbbb1");
   var bnext2=document.querySelector(".bbbb2");
   var foto=document.getElementById("col");
   var fini=document.querySelector(".finish");
                function fin(){
                   start.classList.remove("start-test");
                    box.classList.add("active");
   var minute=44-Math.floor(s/60); 
   var second=60-s %60;
                    if(second<10  ){second="0"+second;}
                    if (minute <10 ) {minute="0"+minute;}
                   if (score>=15) {
out.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions.length +"</h1></h1></span>";
inicio.style.background ="green";
fini.innerHTML="<h3 style='font-size:22px;' > tu tiempo es  00:"+minute+":"+ second +"</h3>";       
foto.src="feliz.jpg";
localStorage.setItem("mjid","green");//poner local storge
                 } else {
 out.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions.length +"</h1></h1></span>";
 inicio.style.background ="red";
 fini.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  00:"+minute+":"+ second +"</h3>";       
 foto.src="triste.jpg";
 localStorage.setItem("mjid","red");//poner local storge
}
                         
                                }
    //button atras en test 1
   
        function oki2(){
      //volver a inicio
       start.classList.remove("start-test");
       start1.classList.remove("star-inicio");
       box.classList.remove("active");
       s=2700;
       counter=0;
       num=1;
       
       score=0;
      
      quest(counter);
      numbe(num);
      //localStorage.removeItem("mjid");
      //inicio.className="b1";
}


var questions=[
    {
    question:"Espa??a es???",
         ansower:"monarqu??a parlamentaria",         
         option:["monarqu??a parlamentaria","rep??blica federal.","monarqu??a federal"]},
         {
question:"La ley fundamental de Espa??a se llama???",
ansower:"Constituci??n",         
option:["Ordenamiento esencial","Ley b??sica","Constituci??n"]},    
        
                 {
  question:"Seg??n la Constituci??n espa??ola, la soberan??a nacional reside en???",
 ansower:"el pueblo espa??ol",         
 option:["el pueblo espa??ol","el Gobierno del Estado","el Congreso de los Diputados"]},
        
               {
question:"El Instituto de las Mujeres es???",
 ansower:"un organismo espa??ol",          
 option:["una instituci??n europea","un organismo espa??ol","una organizaci??n no gubernamental"]},
        
                                 {
 question:"La Constituci??n garantiza la libertad religiosa de los individuos y las comunidades, eneste sentido, el Estado espa??ol es???",
    ansower:"aconfesional",         
    option:["laico","cat??lico","aconfesional"]},
    {        
    question:"El castellano o espa??ol es lengua oficial en???",
    ansower:"en toda Espa??a",         
    option:["en toda Espa??a","solo donde no hay otras lenguas","en toda la Pen??nsula Ib??rica"]},
    {
question:"Cu??l de estas fuerzas de seguridad es de ??mbito auton??mico?",
ansower:"Polic??a Foral de Navarra",         
option:["Polic??a local","Guardia Civil","Polic??a Foral de Navarra"]},    
   
            {
question:"Qu?? fuerza de seguridad est?? en toda Espa??a?",
ansower:"La Guardia Civil",         
option:["La Polic??a Foral de Navarra","La Guardia Civil","Los Mossos d Esquadra"]},
   
          {
question:"En la Constituci??n se establece la separaci??n de poderes: el poder ejecutivo, el legislativo y el???",
ansower:"judicial",           
option:["judicial","informativo","pol??tico"]},
   
                            {
question:"La bandera de Espa??a debe utilizarse???",
ansower:"en todos los edificios p??blicos",         
option:["solo los d??as de fiesta oficia","en todos los edificios p??blicos","solo en actos del Gobierno espa??ol"]},        
        
 {       
    question:"La mayor??a de edad en Espa??a es a los 16 a??os",
    ansower:"Falso",         
    option:["Verdadro","Falso",""]},
    {
question:"Los espa??oles que obtienen la nacionalidad por residencia tiene los mismos derechos que los nacidos en Espa??a",
ansower:"Verdadro",         
option:["Verdadro","Falso",""]},    
   
            {
question:"Los j??venes tienen derecho a participar en el desarrollo pol??tico del pa??s.",
ansower:"Verdadro",         
option:["Verdadro","Falso",""]},
   
                    {
question:"D??nde est??n C??ceres y Badajoz?",
ansower:"En Extremadura",          
option:["En Asturias","En Catalu??a","En Extremadura"]},
   
                            {
question:"La capital de la comunidad aut??noma de Cantabria es???",
ansower:"Santander",         
option:["Oviedo","Palma de Mallorca","Santander"]},        
        
{
    question:"Los personajes principales de la novela el Quijote son Don Quijote y???",
    ansower:"Sancho Panza",         
    option:["Don Juan","Sancho Panza","Do??a In??s"]},
    {
question:"Cu??l de las siguientes mujeres es una cient??fica espa??ola reconocida mundialmente?",
ansower:"Margarita Salas",         
option:["Montserrat Caball??","Ana Mar??a Matute","Margarita Salas"]},    
   
            {
question:"Cu??l de estas tres obras literarias es de Federico Garc??a Lorca?",
ansower:"El Quijote",                  
option:["El Cantar de Mio Cid","El Quijote","La casa de Bernarda Alba"]},
   
                    {
question:"Qui??n hace el DNI?",
ansower:"La Polic??a Nacional",          
option:["La Polic??a Nacional","La Guardia Civil","La Polic??a Local"]},
   
                            {
question:"Cu??l es el documento que muestra el lugar de residencia del titular?",
ansower:"El certificado de empadronamiento",         
option:["El carn?? de conducir","La partida de nacimiento","El certificado de empadronamiento"]}, 

{
    question:"A qu?? edad es obligatorio tener el DNI?",
         ansower:"A los 14 a??os",         
         option:["A los 14 a??os","A los 16 a??os","A los 18 a??os"]},
         {
question:"En los documentos oficiales de ciudadano espa??ol aparece normalmente",
ansower:"n??mero de DNI",         
option:["estado civil","n??mero de DNI","n??mero de Seguridad social"]},    
        
                 {
  question:"El carn?? de conducir se hace en???",
 ansower:"la Direcci??n General de Tr??fico (DGT)",         
 option:["el Registro Civil","la Polic??a Nacional","la Direcci??n General de Tr??fico (DGT)"]},
        
                         {
question:"El DNI o NIE, una fotograf??a reciente y un informe de aptitud psicol??gica son necesarios para solicitar el???",
 ansower:"carn?? de conducir",          
 option:["n??mero de identificaci??n fiscal","carn?? de conducir","pasaporte"]},
        
                                 {
 question:"La tramitaci??n del libro de familia se realiza en???",
    ansower:"el Registro Civil",         
    option:["el Registro Civil","la Seguridad Social","las comisar??as de polic??a"]}, 
        ]