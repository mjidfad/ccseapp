var inicio6=document.querySelector(".b-6");/*t*/
var start_6=document.querySelector(".test6");/*t*/
var start1=document.querySelector(".inicio");
var seguinete6=document.querySelector(".bb3_6");/*t*/
var list6=document.querySelector(".option-list6");/*t*/
var box6=document.querySelector(".fin6");/*t*/
var out6=document.querySelector(".exit6");/*t*/
var extra6=document.querySelector(".button6");/*t*/
var b111=document.querySelector(".b11");

var s6=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg6=localStorage.getItem("mjid6");/*t*/
 if(storg6==null){
     inicio6.className="b-6";
 }else{ inicio6.className=storg6;}})();

function mjid6() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_6.classList.add("start-test6");//add boxtest de test3
    s6=2700;
    numbe6(1);
    quest6(0);
    optiselc6();}
      //button reptir test 1

function oki1_6(){/*t*/
    box6.classList.remove("active6");
    start_6.classList.add("start-test6");
    seguinete6.classList.remove("bbb3");  
    s6=2700;
    counter=0;
    num=1;
    score=0;
    quest6(counter);
    numbe6(num);
    optiselc6();
    countdown6=setInterval(function(){setup6();},1000);}  /*t*/ 
    
    seguinete6.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions6.length-1) {
            counter++;
            num++;
            quest6(counter);
            numbe6(num);
           seguinete6.classList.remove("bbb3");}
            else{
            start_6.classList.remove("start-test6");
            fin6(); }}

    function p2_6(){/*pulsar buton home para atras*/ /*t*/
            start_6.classList.remove("start-test6");
            start1.classList.remove("star-inicio");
            s6=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest6(index){/*gunction de preguntas array*/  /*t*/
            var text6=document.querySelector(".pregunta6");
            var list6=document.querySelector(".option-list6");
           
            text6.innerHTML='<h1>'+questions6[index].question+'</h1>'; 
            list6.innerHTML='<div class="opti6"><h1>'+questions6[index].option[0]+'</h1></div>'
            +'<div class="opti6"><h1>'+questions6[index].option[1]+'</h1></div>'
            +'<div class="opti6"><h1>'+questions6[index].option[2]+'</h1></div>';
            /*true false*/
            var list1=list6.querySelectorAll(".opti6");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc6(this)"); 
            if(list6.children[i].textContent==""){
                list6.children[i].classList.add("quito6"); } }}
         

    function optiselc6(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions6[counter].ansower;
            var allopcion=list.children.length;
            if(userans==correct){ score += 1; ansower.style.background="green"; }
           else{ansower.style.background="red";}
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list6.children[i].textContent==correct){list6.children[i].style.background="green"; }
            else if(list6.children[i].textContent==""){
            list6.children[i].classList.add("quito6");}/*t*/
            else{ list6.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete6.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe6(index){/*t*/
            var numbe=document.querySelector(".footer6");
            numbe.innerHTML="<h3 style='font-size:22px;margin-top:10px;'> pregunta "+index+" de "+questions6.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto6=document.getElementById("col6");
            var fini6=document.querySelector(".finish6");
    function fin6(){/*t*/
            start_6.classList.remove("start-test6");
            box6.classList.add("active6");

            //resultado de el tirpo
var minute=44-Math.floor(s6/60); 
var second=60-s6 %60;
if(second<10  ){second="0"+second;}
if (minute <10 ) {minute="0"+minute;}

            if(score>=15){
out6.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions6.length +"</h1></h1></span>";
inicio6.className="green6";
fini6.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  00:"+minute+":"+second+"</h3>";
localStorage.setItem("mjid6","green6");//poner local storge
foto6.src="feliz.jpg";} 
            else {
out6.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions6.length +"</h1></h1></span>";
inicio6.className="red6";
fini6.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  00:"+minute+":"+second+"</h3>";
localStorage.setItem("mjid6","red6");//poner local storge
foto6.src="triste.jpg";}  }

    function oki2_6(){/*t*/
    // window.location.reload();
    start_6.classList.remove("start-test6");
    start1.classList.remove("star-inicio");
    box6.classList.remove("active6");
    s6=2700;
    counter=0;
    num=1;
    score=0;
    quest6(counter);
    numbe6(num);}

/*time descont*/
     var s6=2700;
count6=document.querySelector(".timer6"),
countdown6=setInterval(function(){
setup6();},1000);/*t*/
function setup6(){/*t*/
    var minutes=Math.floor(s6/60);
        sec=s6 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count6.innerHTML=minutes+":"+sec;}
              if(s6<300){ count6.style.color="red";}
              else{count6.style.color="black";}
           if(s6>0){s6=s6-1; }
                  else{count6.innerHTML="<p style='color:red;'>time off</p>";}
                     }



var questions6=[
    {
    question:"En la organización de la Administración General del Estado se distinguen tres niveles: estatal, autonómico y…",
         ansower:"local",         
         option:["central","regional","local"]},
         {
question:"El poder legislativo corresponde…",
ansower:"a los diputados y senadores",         
option:["a los diputados y senadores","a los jueces y magistrados","al presidente y los ministros"]},    
        
                 {
  question:"El número de miembros que componen el Senado español…",
 ansower:"puede variar",         
 option:["es siempre el mismo","depende del Congreso de los Diputados","puede variar"]},
        
                         {
question:"El nombre oficial del parlamento español es…",
 ansower:"Cortes Generales",          
 option:["Congreso de los Diputados","Senado","Cortes Generales"]},
        
                                 {
 question :"El Gobierno está formado por el presidente, los ministros y los…",
    ansower:"vicepresidentes",         
    option:["concejales","vicepresidentes","viceministros"]},
    {        
    question:"Los miembros de las diputaciones son elegidos por los…",
    ansower:"representantes de los ayuntamientos",         
    option:["representantes de los ayuntamientos","consejeros autonómicos","partidos políticos"]},
    {
question:"Al poder legislativo le corresponde…",
ansower:"elaborar leyes",         
option:["crear empleo","elaborar leyes","elegir alcaldes"]},    
   
            {
question:"La tercera autoridad del Estado, tras el Rey y el presidente del Gobierno, es el…",
ansower:"presidente del Congreso de los Diputados",         
option:["ministro del Interior","jefe del Estado Mayor del Ejército","presidente del Congreso de los Diputados"]},
   
                    {
question:"¿Cuántos ciudadanos deben respaldar una iniciativa legislativa para poder presentar una proposición de ley?",
ansower:"400 000",          
option:["400 000","500 000","600 000"]},
   
                            {
question:"La Constitución defiende valores tales como la libertad, la igualdad, el pluralismo político y…",
ansower:"la justicia",         
option:["la justicia","la solidaridad"," la fraternidad"]},        
        
 {       
    question:"La libertad de prensa está limitada por el respeto al honor de las personas",
    ansower:"Verdadero",         
    option:["Verdadero","Falso",""]},
    {
question:"En España se regulan mediante ley las causas de separación y disolución matrimonial",
ansower:"Verdadero",         
option:["Verdadero","Falso",""]},    
   
            {
question:"Todos los españoles deben contribuir con la misma cantidad de impuestos para sostener los gastos públicos",
ansower:"Falso",         
option:["Verdadero","Falso",""]},
   
                    {
question:"Huesca, Teruel y Zaragoza están en…",
ansower:"Aragón",          
option:["Cataluña","País Vasco","Aragón"]},
   
                            {
question:"Zaragoza está en…",
ansower:"Aragón",         
option:["Aragón","Andalucía","Castilla y León"]},        
        
{
    question:"Cuál de estas manifestaciones folclóricas es patrimonio cultural inmaterial de la humanidad?",
    ansower:"El flamenco",         
    option:["El flamenco","La jota","La sardana"]},
    {
question:"Cuál es la moneda común en muchos países de la Unión Europea?",
ansower:"El euro",         
option:["El dólar","El peso","El euro"]},    
   
            {
question:"La fiesta de La tomatina se celebra en…",
ansower:"Buñol",         
option:["Mérida","Buñol","Santiago de Compostela"]},
   
                    {
question:"En España hay pruebas especiales para el acceso de los adultos a la universidad a partir de los…",
ansower:"25 años",          
option:["18 años","23 años","25 años"]},
   
                            {
question:"Dónde puede encontrarse la siguiente norma <Dejar salir antes de entrar>?",
ansower:"En el transporte público",         
option:["En el transporte público","En parques y jardines","En instalaciones deportivas"]}, 

{
    question:"En España, el Bachillerato…",
         ansower:"se compone de dos cursos académicos",         
         option:["se compone de dos cursos académicos","es obligatorio","es la enseñanza a alumnos de 14 a 16 años"]},
         {
question:"El Impuesto sobre el Valor Añadido (IVA) forma parte de los…",
ansower:"impuestos indirectos",         
option:["impuestos sobre sociedades","impuestos sobre la renta","impuestos indirectos"]},    
        
                 {
  question:"Qué número reciben los trabajadores al comenzar su primer empleo? ",
 ansower:"El de la Seguridad Social",         
 option:["El número de servicio.","El de la Seguridad Social","El del pasaporte"]},
        
                         {
question:"Los colegios públicos…",
 ansower:"están financiados por el Gobierno",          
 option:["pueden decidir su número de plazas","pueden contratar los profesores que quieran","están financiados por el Gobierno"]},
        
                                 {
 question:"Cuál de estos puertos se encuentra entre los principales de España?",
    ansower:"Las Palmas",         
    option:["Tenerife","Las Palmas","Alicante"]}, 
        ]