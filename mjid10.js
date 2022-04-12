

var inicio10=document.querySelector(".b-10");/*t*/
var start_10=document.querySelector(".test10");/*t*/
var start1=document.querySelector(".inicio");
var seguinete10=document.querySelector(".bb3_10");/*t*/
var list10=document.querySelector(".option-list10");/*t*/
var box10=document.querySelector(".fin10");/*t*/
var out10=document.querySelector(".exit10");/*t*/
var extra10=document.querySelector(".button10");/*t*/
var b111=document.querySelector(".b11");

var s10=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg10=localStorage.getItem("mjid10");/*t*/
 if(storg10==null){
     inicio10.className="b-10";
 }else{ inicio10.className=storg10;}})();

function mjid10() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_10.classList.add("start-test10");//add boxtest de test3
    s10=2700;
    numbe10(1);
    quest10(0);
    optiselc10();}
      //button reptir test 1

function oki1_10(){/*t*/
    box10.classList.remove("active10");
    start_10.classList.add("start-test10");
    seguinete10.classList.remove("bbb3");  
    s10=2700;
    counter=0;
    num=1;
    score=0;
    quest10(counter);
    numbe10(num);
    optiselc10();
    countdown10=setInterval(function(){setup10();},1000);}  /*t*/ 
    
    seguinete10.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions10.length-1) {
            counter++;
            num++;
            quest10(counter);
            numbe10(num);
           seguinete10.classList.remove("bbb3");}
            else{
            start_10.classList.remove("start-test10");
            fin10(); }}

    function p2_10(){/*pulsar buton home para atras*/ /*t*/
            start_10.classList.remove("start-test10");
            start1.classList.remove("star-inicio");
            s10=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest10(index){/*gunction de preguntas array*/  /*t*/
            var text10=document.querySelector(".pregunta10");
            var list10=document.querySelector(".option-list10");
           
            text10.innerHTML='<h1>'+questions10[index].question+'</h1>'; 
            list10.innerHTML='<div class="opti10"><h1>'+questions10[index].option[0]+'</h1></div>'
            +'<div class="opti10"><h1>'+questions10[index].option[1]+'</h1></div>'
            +'<div class="opti10"><h1>'+questions10[index].option[2]+'</h1></div>';
            /*true false*/
            var list1=list10.querySelectorAll(".opti10");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc10(this)"); 
            if(list10.children[i].textContent==""){
                list10.children[i].classList.add("quito10"); } }}
         

    function optiselc10(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions10[counter].ansower;
            var allopcion=list.children.length;
            if(userans==correct){ score += 1; ansower.style.background="blue";}
           else{ansower.style.background="red"; }
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list10.children[i].textContent==correct){list10.children[i].style="background:green;";  }
            else if(list10.children[i].textContent==""){
            list10.children[i].classList.add("quito10");}/*t*/
            else{ list10.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete10.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe10(index){/*t*/
            var numbe=document.querySelector(".footer10");
            numbe.innerHTML="<h3 style='font-size:22px;margin-top:10px;'> pregunta "+index+" de "+questions10.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto10=document.getElementById("col10");
            var fini10=document.querySelector(".finish10");
    function fin10(){/*t*/
            start_10.classList.remove("start-test10");
            box10.classList.add("active10");
             //resultado de el tirpo
var minute=44-Math.floor(s10/60); 
var second=60-s10 %60;
if(second<10  ){second="0"+second;}
if (minute <10 ) {minute="0"+minute;}
fini10.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
            if(score>=15){
out10.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions10.length +"</h1></h1></span>";
inicio10.className="green10";
fini10.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid10","green10");//poner local storge
foto10.src="feliz.jpg";} 
            else {
out10.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions10.length +"</h1></h1></span>";
inicio10.className="red10";
fini10.innerHTML="<h3 style='font-size:22px;' > tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid10","red10");//poner local storge
foto10.src="triste.jpg";}  }

    function oki2_10(){/*t*/
    // window.location.reload();
    start_10.classList.remove("start-test10");
    start1.classList.remove("star-inicio");
    box10.classList.remove("active10");
    s10=2700;
    counter=0;
    num=1;
    score=0;
    quest10(counter);
    numbe10(num);}

/*time descont*/
     var s10=2700;
count10=document.querySelector(".timer10"),
countdown10=setInterval(function(){
setup10();},1000);/*t*/
function setup10(){/*t*/
    var minutes=Math.floor(s10/60);
        sec=s10 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count10.innerHTML=minutes+":"+sec;}
              if(s10<300){ count10.style.color="red";}
              else{count10.style.color="black";}
           if(s10>0){s10=s10-1; }
                  else{count10.innerHTML="<p style='color:red;'>time off</p>";}
                     }
    

var questions10=[
    {
    question:"El teléfono de la Administración General del Estado que ofrece información sobre empleo público, becas o ayudas y subvenciones, organismos de las Administraciones, etc.,es el…",
         ansower:"060",         
         option:["010","060","091"]},
         {
question:"España está organizada en…",
ansower:"comunidades autónomas",         
option:["comunidades autónomas","cantones","estados federales"]},    
        
                 {
  question:"La legislatura del Gobierno en España finaliza a los…",
 ansower:"4 años",         
 option:["4 años","5 años","6 años"]},
        
                         {
question:"Cuántos municipios hay en España?",
 ansower:"8 131",          
 option:["200","8 131","1 000 000"]},
        
                                 {
 question:"El gobierno y la protección de las provincias corresponde a…",
    ansower:"las diputaciones",         
    option:["las diputaciones","los ayuntamientos","las asambleas regionales"]},
    {        
    question:"Quién es el representante de la Administración del Estado en una comunidad autónoma?",
    ansower:"El delegado del Gobierno",         
    option:["El presidente de la comunidad autónoma","El delegado del Gobierno","El presidente de la Asamblea autonómica"]},
    {
question:"Cuántas provincias hay en España?",
ansower:"50",         
option:["49","50","52"]},    
   
            {
question:"La enseñanza de las lenguas cooficiales es competencia…",
ansower:"de la comunidad autónoma",         
option:["del Estado","de la provincia","de la comunidad autónoma"]},
   
                    {
question:"El poder ejecutivo corresponde…",
ansower:"al Gobierno del Estado",          
option:["al Gobierno del Estado","al Congreso y al Senado","c) a los jueces y magistrados"]},
   
                            {
question:"El poder legislativo corresponde…",
ansower:"al Congreso y al Senado",         
option:["a los jueces y magistrados","al Gobierno del Estado","al Congreso y al Senado"]},        
        
 {       
    question:"Todos los ciudadanos tendrán acceso al sistema de Seguridad Social público, excepto si están desempleados",
    ansower:"Falso",         
    option:["Verdadero","Falso",""]},
    {
question:"Todos tienen derecho a disfrutar de un medio ambiente adecuado para el desarrollo de la persona, así como el deber de conservarlo",
ansower:"Verdadero",         
option:["Verdadero","Falso" ,""]},    
   
            {
question:"Se reconoce el derecho a la creación literaria y artística",
ansower:"Verdadero",         
option:["Verdadero","Falso",""]},
   
                    {
question:"Las temperaturas suaves con abundantes lluvias son propias del clima…",
ansower:"oceánico",          
option:["continental","oceánico","subtropical"]},
   
                            {
question:"Qué tres culturas convivieron en la España medieval?",
ansower:"La cristiana, la judía y la musulmana",         
option:["La cristiana, la judía y la musulmana","La fenicia, la judía y la musulmana","La griega, la cristiana y la judía"]},        
        
{
    question:"El 6 de diciembre se celebra en España…",
    ansower:"el Día de la Constitución",         
    option:["el Día de la Constitución","la llegada de Colón a América","el Día del Libro"]},
    {
question:"En qué ciudad española está el acueducto considerado patrimonio de la humanidad?",
ansower:"En Segovia",         
option:["En Mérida","En Sevilla","En Segovia"]},    
   
            {
question:"Dónde se venden las medicinas en España?",
ansower:"Farmacia",         
option:["Hospital","Centro de salud","Farmacia"]},
   
                    {
question:"Cuál de estas tres recomendaciones podemos encontrar en un parque?",
ansower:"Respete las plantas y el mobiliario urbano",          
option:["Respete las plantas y el mobiliario urbano","Es conveniente abonar el billete con el importe exacto","Mantenga la distancia de seguridad con el vehículo precedente"]},
   
                            {
question:"Cuál de las siguientes cosas es obligatoria para el propietario de un coche en España?",
ansower:"El seguro",         
option:["El garaje","El seguro","La alarma"]}, 

{
    question:"El aeropuerto Adolfo Suárez está en…",
         ansower:"Madrid",         
         option:["Madrid","Barcelona","Bilbao"]},
         {
question:"En un coche es obligatorio el uso del cinturón de seguridad…",
ansower:"en todos los asientos",         
option:["solo en el asiento del conductor","en los asientos delanteros","en todos los asientos"]},    
        
                 {
  question:"El límite de velocidad en una autopista es de…",
 ansower:"120 km/h",         
 option:["70 km/h","100 km/h","120 km/h"]},
        
                         {
question:"Ceder el asiento a las personas con movilidad reducida es una norma que encontramos indicada en…",
 ansower:"el transporte público",          
 option:["el transporte público","las bibliotecas","los museos"]},
        
                                 {
 question:"En qué caso se retira el permiso de conducir?",
    ansower:"Por la pérdida de los puntos",         
    option:["Por exceso de velocidad","Por accidente grave","Por la pérdida de los puntos"]}, 
        ]