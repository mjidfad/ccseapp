
var inicio9=document.querySelector(".b-9");/*t*/
var start_9=document.querySelector(".test9");/*t*/
var start1=document.querySelector(".inicio");
var seguinete9=document.querySelector(".bb3_9");/*t*/
var list9=document.querySelector(".option-list9");/*t*/
var box9=document.querySelector(".fin9");/*t*/
var out9=document.querySelector(".exit9");/*t*/
var extra9=document.querySelector(".button9");/*t*/
var b111=document.querySelector(".b11");

var s9=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg9=localStorage.getItem("mjid9");/*t*/
 if(storg9==null){
     inicio9.className="b-9";
 }else{ inicio9.className=storg9;}})();

function mjid9() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_9.classList.add("start-test9");//add boxtest de test3
    s9=2700;
    numbe9(1);
    quest9(0);
    optiselc9();}
      //button reptir test 1

function oki1_9(){/*t*/
    box9.classList.remove("active9");
    start_9.classList.add("start-test9");
    seguinete9.classList.remove("bbb3");  
    s9=2700;
    counter=0;
    num=1;
    score=0;
    quest9(counter);
    numbe9(num);
    optiselc9();
    countdown9=setInterval(function(){setup9();},1000);}  /*t*/ 
    
    seguinete9.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions9.length-1) {
            counter++;
            num++;
            quest9(counter);
            numbe9(num);
           seguinete9.classList.remove("bbb3");}
            else{
            start_9.classList.remove("start-test9");
            fin9(); }}

    function p2_9(){/*pulsar buton home para atras*/ /*t*/
            start_9.classList.remove("start-test9");
            start1.classList.remove("star-inicio");
            s9=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest9(index){/*gunction de preguntas array*/  /*t*/
            var text9=document.querySelector(".pregunta9");
            var list9=document.querySelector(".option-list9");
           
            text9.innerHTML='<h1>'+questions9[index].question+'</h1>'; 
            list9.innerHTML='<div class="opti9"><h1>'+questions9[index].option[0]+'</h1></div>'
            +'<div class="opti9"><h1>'+questions9[index].option[1]+'</h1></div>'
            +'<div class="opti9"><h1>'+questions9[index].option[2]+'</h1></div>';
            /*true false*/
            var list1=list9.querySelectorAll(".opti9");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc9(this)"); 
            if(list9.children[i].textContent==""){
                list9.children[i].classList.add("quito9"); } }}
         

    function optiselc9(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions9[counter].ansower;
            var allopcion=list.children.length;
            if(userans==correct){ score += 1; ansower.style.background="blue";}
           else{ansower.style.background="red"; }
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list9.children[i].textContent==correct){list9.children[i].style="background:green;";  }
            else if(list9.children[i].textContent==""){
            list9.children[i].classList.add("quito9");}/*t*/
            else{ list9.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete9.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe9(index){/*t*/
            var numbe=document.querySelector(".footer9");
            numbe.innerHTML="<h3 style='font-size:22px;margin-top:10px;'> pregunta "+index+" de "+questions9.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto9=document.getElementById("col9");
            var fini9=document.querySelector(".finish9");
    function fin9(){/*t*/
            start_9.classList.remove("start-test9");
            box9.classList.add("active9");
             //resultado de el tirpo
var minute=44-Math.floor(s9/60); 
var second=60-s9 %60;
if(second<10  ){second="0"+second;}
if (minute <10 ) {minute="0"+minute;}

            if(score>=15){
out9.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions9.length +"</h1></h1></span>";
inicio9.className="green9";
fini9.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid9","green9");//poner local storge
foto9.src="feliz.jpg";} 
            else {
out9.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions9.length +"</h1></h1></span>";
inicio9.className="red9";
fini9.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid9","red9");//poner local storge
foto9.src="triste.jpg";}  }

    function oki2_9(){/*t*/
    // window.location.reload();
    start_9.classList.remove("start-test9");
    start1.classList.remove("star-inicio");
    box9.classList.remove("active9");
    s9=2700;
    counter=0;
    num=1;
    score=0;
    quest9(counter);
    numbe9(num);}

/*time descont*/
     var s9=2700;
count9=document.querySelector(".timer9"),
countdown9=setInterval(function(){
setup9();},1000);/*t*/
function setup9(){/*t*/
    var minutes=Math.floor(s9/60);
        sec=s9 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count9.innerHTML=minutes+":"+sec;}
              if(s9<300){ count9.style.color="red";}
              else{count9.style.color="black";}
           if(s9>0){s9=s9-1; }
                  else{count9.innerHTML="<p style='color:red;'>time off</p>";}
                     }
    


var questions9=[
    {
    question:"Cómo se llama la policía autonómica del País Vasco?",
         ansower:"Ertzaintza",         
         option:["Ertzaintza","Guardia Civil","Mossos d'Esquadra"]},
         {
question:"Según la Constitución española, la separación de los poderes garantiza…",
ansower:"el funcionamiento de las instituciones",         
option:["el trabajo para todos","el funcionamiento de las instituciones","el derecho a la educación"]},    
        
                 {
  question:"El presidente del Gobierno de España entre 1982 y 1996 fue…",
 ansower:"Felipe González",         
 option:["José María Aznar","José Luis Rodríguez Zapatero","Felipe González"]},
        
                         {
question:"Quién puede presentar una queja al Defensor del Pueblo?",
 ansower:"Todos los ciudadanos, españoles o extranjeros",          
 option:["Solo los ciudadanos legalmente residentes","Solo los españoles mayores de 18 años","Todos los ciudadanos, españoles o extranjeros"]},
        
                                 {
 question:"En España el voto en las elecciones es…",
    ansower:"un derecho",         
    option:["un derecho","un deber","una obligación"]},
    {        
    question:"Cuál es el órgano que controla la gestión económico-financiera del Estado?",
    ansower:"El Tribunal de Cuentas",         
    option:["El Tribunal Constitucional","El Tribunal Supremo","El Tribunal de Cuentas"]},
    {
question:"La inspección y recaudación de los impuestos que gestiona el Estado corresponde a…",
ansower:"la Agencia Tributaria",         
option:["el Tribunal de Cuentas","la Agencia Tributaria","el Consejo Económico y Social"]},    
   
            {
question: "El organismo que elabora y difunde estadísticas sobre España es…",
ansower:"el Instituto Nacional de Estadística",         
option:["el Consejo Económico y Social","la Agencia Tributaria","el Instituto Nacional de Estadística"]},
   
                    {
question:"Cómo se llaman los órganos de gobierno de la Comunidad Autónoma de Canarias?",
ansower:"Cabildos",          
option:["Cabildos","Consejos Insulares","Diputaciones"]},
   
                            {
question:"El Gobierno ofrece toda la información sobre novedades e iniciativas de la Administración a través del…",
ansower:"El PAe (Portal de la Administración Electrónica)",         
option:["El INE (Instituto Nacional de Estadística)","El BOE (Boletín Oficial del Estado)","El PAe (Portal de la Administración Electrónica)"]},        
        
 {       
    question:"En caso de huelga, la ley garantiza el mantenimiento de los servicios esenciales de la comunidad",
    ansower:"Verdadero",         
    option:["Verdadero","Falso",""]},
    {
question:"Los trabajadores tienen derecho a la huelga para defender sus intereses laborales",
ansower:"Verdadero",         
option:["Verdadero","Falso",""]},    
   
            {
question:"La libertad ideológica está garantizada en parte del territorio nacional",
ansower:"Falso",         
option:["Verdadero","Falso",""]},
   
                    {
question:"Cuál de los siguientes ríos desemboca en el océano Atlántico?",
ansower:"El Tajo",          
option:["El Tajo","El Ebro","El Júcar"]},
   
                            {
question:"Cuál de estas provincias forma parte de la Comunidad Valenciana?",
ansower: "Castellón",         
option:["Castellón","Tarragona","Albacete"]},        
        
{
    question:"En qué provincia se celebra la romería de El Rocío?",
    ansower:"En Huelva",         
    option:["En Barcelona","En Huelva","En Sevilla"]},
    {
question:"En el Festival de Sitges puedes…",
ansower:"ver películas de cine",         
option:["ver películas de cine","escuchar música","asistir a obras de teatro"]},    
   
            {
question:"Qué escritora española escribe en otra lengua oficial de España? ",
ansower:"Mercè Rodorera",         
option:[ "Mercè Rodorera","Almudena Grandes","Ana María Matute"]},
   
                    {
question:"Cuál de los siguientes no es un medio público de comunicación audiovisual?",
ansower:"Instituto de la Cinematografía y de las Artes Audiovisuales",          
option:["Televisión Española","Instituto de la Cinematografía y de las Artes Audiovisuales","Radio Nacional de España"]},
   
                            {
question:"Cuál es el canal de televisión estatal que transmite noticias de actualidad nacional e internacional continuamente?",
ansower:"Canal 24 horas",         
option:["La 1","Teledeporte","Canal 24 horas"]}, 

{
    question:"El teléfono para las víctimas de violencia de género es el…",
         ansower:"016",         
         option:["016","091","112"]},
         {
question:"En España, la red de trenes puede ser de larga distancia, de media distancia y …",
ansower:"de cercanías",         
option:["transnacional","rural","de cercanías"]},    
        
                 {
  question:"El Ministerio de Derechos Sociales y Agenda 2030 ofrece…",
 ansower:"ayudas a mayores de 65 años",         
 option:["acceso a viviendas sociales","ayudas a mayores de 65 años","reagrupación familiar"]},
        
                         {
question:"Cuando compramos 250 gramos de un alimento estamos comprando… ",
 ansower:"un cuarto de kilo",          
 option:["medio kilo","un tercio de kilo","un cuarto de kilo"]},
        
                                 {
 question:"Si compramos una botella de agua de 750 ml, compramos una botella de…",
    ansower:"tres cuartos de litro",         
    option:["tres cuartos de litro","medio litro","un litro"]}, 
        ]