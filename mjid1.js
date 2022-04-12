
  
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
    question:"España es…",
         ansower:"monarquía parlamentaria",         
         option:["monarquía parlamentaria","república federal.","monarquía federal"]},
         {
question:"La ley fundamental de España se llama…",
ansower:"Constitución",         
option:["Ordenamiento esencial","Ley básica","Constitución"]},    
        
                 {
  question:"Según la Constitución española, la soberanía nacional reside en…",
 ansower:"el pueblo español",         
 option:["el pueblo español","el Gobierno del Estado","el Congreso de los Diputados"]},
        
               {
question:"El Instituto de las Mujeres es…",
 ansower:"un organismo español",          
 option:["una institución europea","un organismo español","una organización no gubernamental"]},
        
                                 {
 question:"La Constitución garantiza la libertad religiosa de los individuos y las comunidades, eneste sentido, el Estado español es…",
    ansower:"aconfesional",         
    option:["laico","católico","aconfesional"]},
    {        
    question:"El castellano o español es lengua oficial en…",
    ansower:"en toda España",         
    option:["en toda España","solo donde no hay otras lenguas","en toda la Península Ibérica"]},
    {
question:"Cuál de estas fuerzas de seguridad es de ámbito autonómico?",
ansower:"Policía Foral de Navarra",         
option:["Policía local","Guardia Civil","Policía Foral de Navarra"]},    
   
            {
question:"Qué fuerza de seguridad está en toda España?",
ansower:"La Guardia Civil",         
option:["La Policía Foral de Navarra","La Guardia Civil","Los Mossos d Esquadra"]},
   
          {
question:"En la Constitución se establece la separación de poderes: el poder ejecutivo, el legislativo y el…",
ansower:"judicial",           
option:["judicial","informativo","político"]},
   
                            {
question:"La bandera de España debe utilizarse…",
ansower:"en todos los edificios públicos",         
option:["solo los días de fiesta oficia","en todos los edificios públicos","solo en actos del Gobierno español"]},        
        
 {       
    question:"La mayoría de edad en España es a los 16 años",
    ansower:"Falso",         
    option:["Verdadro","Falso",""]},
    {
question:"Los españoles que obtienen la nacionalidad por residencia tiene los mismos derechos que los nacidos en España",
ansower:"Verdadro",         
option:["Verdadro","Falso",""]},    
   
            {
question:"Los jóvenes tienen derecho a participar en el desarrollo político del país.",
ansower:"Verdadro",         
option:["Verdadro","Falso",""]},
   
                    {
question:"Dónde están Cáceres y Badajoz?",
ansower:"En Extremadura",          
option:["En Asturias","En Cataluña","En Extremadura"]},
   
                            {
question:"La capital de la comunidad autónoma de Cantabria es…",
ansower:"Santander",         
option:["Oviedo","Palma de Mallorca","Santander"]},        
        
{
    question:"Los personajes principales de la novela el Quijote son Don Quijote y…",
    ansower:"Sancho Panza",         
    option:["Don Juan","Sancho Panza","Doña Inés"]},
    {
question:"Cuál de las siguientes mujeres es una científica española reconocida mundialmente?",
ansower:"Margarita Salas",         
option:["Montserrat Caballé","Ana María Matute","Margarita Salas"]},    
   
            {
question:"Cuál de estas tres obras literarias es de Federico García Lorca?",
ansower:"El Quijote",                  
option:["El Cantar de Mio Cid","El Quijote","La casa de Bernarda Alba"]},
   
                    {
question:"Quién hace el DNI?",
ansower:"La Policía Nacional",          
option:["La Policía Nacional","La Guardia Civil","La Policía Local"]},
   
                            {
question:"Cuál es el documento que muestra el lugar de residencia del titular?",
ansower:"El certificado de empadronamiento",         
option:["El carné de conducir","La partida de nacimiento","El certificado de empadronamiento"]}, 

{
    question:"A qué edad es obligatorio tener el DNI?",
         ansower:"A los 14 años",         
         option:["A los 14 años","A los 16 años","A los 18 años"]},
         {
question:"En los documentos oficiales de ciudadano español aparece normalmente",
ansower:"número de DNI",         
option:["estado civil","número de DNI","número de Seguridad social"]},    
        
                 {
  question:"El carné de conducir se hace en…",
 ansower:"la Dirección General de Tráfico (DGT)",         
 option:["el Registro Civil","la Policía Nacional","la Dirección General de Tráfico (DGT)"]},
        
                         {
question:"El DNI o NIE, una fotografía reciente y un informe de aptitud psicológica son necesarios para solicitar el…",
 ansower:"carné de conducir",          
 option:["número de identificación fiscal","carné de conducir","pasaporte"]},
        
                                 {
 question:"La tramitación del libro de familia se realiza en…",
    ansower:"el Registro Civil",         
    option:["el Registro Civil","la Seguridad Social","las comisarías de policía"]}, 
        ]