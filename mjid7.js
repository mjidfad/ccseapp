

var inicio7=document.querySelector(".b-7");/*t*/
var start_7=document.querySelector(".test7");/*t*/
var start1=document.querySelector(".inicio");
var seguinete7=document.querySelector(".bb3_7");/*t*/
var list7=document.querySelector(".option-list7");/*t*/
var box7=document.querySelector(".fin7");/*t*/
var out7=document.querySelector(".exit7");/*t*/
var extra7=document.querySelector(".button7");/*t*/
var b111=document.querySelector(".b11");

var s7=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg7=localStorage.getItem("mjid7");/*t*/
 if(storg7==null){
     inicio7.className="b-7";
 }else{ inicio7.className=storg7;}})();

function mjid7() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_7.classList.add("start-test7");//add boxtest de test3
    s7=2700;
    numbe7(1);
    quest7(0);
    optiselc7();}
      //button reptir test 1

function oki1_7(){/*t*/
    box7.classList.remove("active7");
    start_7.classList.add("start-test7");
    seguinete7.classList.remove("bbb3");  
    s7=2700;
    counter=0;
    num=1;
    score=0;
    quest7(counter);
    numbe7(num);
    optiselc7();
    countdown7=setInterval(function(){setup7();},1000);}  /*t*/ 
    
    seguinete7.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions7.length-1) {
            counter++;
            num++;
            quest7(counter);
            numbe7(num);
           seguinete7.classList.remove("bbb3");}
            else{
            start_7.classList.remove("start-test7");
            fin7(); }}

    function p2_7(){/*pulsar buton home para atras*/ /*t*/
            start_7.classList.remove("start-test7");
            start1.classList.remove("star-inicio");
            s7=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest7(index){/*gunction de preguntas array*/  /*t*/
            var text7=document.querySelector(".pregunta7");
            var list7=document.querySelector(".option-list7");
           
            text7.innerHTML='<h1>'+questions7[index].question+'</h1>'; 
            list7.innerHTML='<div class="opti7"><h1>'+questions7[index].option[0]+'</h1></div>'
            +'<div class="opti7"><h1>'+questions7[index].option[1]+'</h1></div>'
            +'<div class="opti7"><h1>'+questions7[index].option[2]+'</h1></div>';
            /*true false*/
            var list1=list7.querySelectorAll(".opti7");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc7(this)"); 
            if(list7.children[i].textContent==""){
                list7.children[i].classList.add("quito7"); } }}
         

    function optiselc7(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions7[counter].ansower;
            var allopcion=list.children.length;
            if(userans==correct){ score += 1; ansower.style.background="blue";}
           else{ansower.style.background="red"; }
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list7.children[i].textContent==correct){list7.children[i].style="background:green;";  }
            else if(list7.children[i].textContent==""){
            list7.children[i].classList.add("quito6");}/*t*/
            else{ list7.children[i].style.background="red";list7.children[i].style.color="white"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete7.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe7(index){/*t*/
            var numbe=document.querySelector(".footer7");
            numbe.innerHTML="<h3 style='font-size:22px;margin-top:10px;'> pregunta "+index+" de "+questions7.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto7=document.getElementById("col7");
            var fini7=document.querySelector(".finish7");
    function fin7(){/*t*/
            start_7.classList.remove("start-test7");
            box7.classList.add("active7");
              //resultado de el tirpo
var minute=44-Math.floor(s7/60); 
var second=60-s7 %60;
if(second<10  ){second="0"+second;}
if (minute <10 ) {minute="0"+minute;}

            if(score>=15){
out7.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions7.length +"</h1></h1></span>";
inicio7.className="green7";
fini7.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  00:"+minute+":"+ second +"</h3>"; 
localStorage.setItem("mjid7","green7");//poner local storge
foto7.src="feliz.jpg";} 
            else {
out7.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions7.length +"</h1></h1></span>";
inicio7.className="red7";
fini7.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  00:"+minute+":"+ second +"</h3>"; 
localStorage.setItem("mjid7","red7");//poner local storge
foto7.src="triste.jpg";}  }

    function oki2_7(){/*t*/
    // window.location.reload();
    start_7.classList.remove("start-test7");
    start1.classList.remove("star-inicio");
    box7.classList.remove("active7");
    s7=2700;
    counter=0;
    num=1;
    score=0;
    quest7(counter);
    numbe7(num);}

/*time descont*/
     var s7=2700;
count7=document.querySelector(".timer7"),
countdown7=setInterval(function(){
setup7();},1000);/*t*/
function setup7(){/*t*/
    var minutes=Math.floor(s7/60);
        sec=s7 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count7.innerHTML=minutes+":"+sec;}
              if(s7<300){ count7.style.color="red";}
              else{count7.style.color="black";}
           if(s7>0){s7=s7-1; }
                  else{count7.innerHTML="<p style='color:red;'>time off</p>";}
                     }
    
    


var questions7=[
    {
    question:"España tiene una extensión de unos…",
         ansower :"500 000 km2",         
         option:["500 000 km2","600 000 km2","700 000 km2"]},
         {
question:"Cuántos millones de habitantes tiene España?",
ansower:"47 millones",         
option:["35 millones","47 millones","72 millones"]},    
        
                 {
  question:"Cuál es el órgano supremo consultivo del Gobierno de España?",
 ansower:"El Consejo de Estado",         
 option:["El Parlamento Europeo","El Tribunal Constitucional","El Consejo de Estado"]},
        
                         {
question:"Quién dirige la política interior y exterior de España?",
 ansower:"el Gobierno",          
 option:["el rey","el Gobierno","el Congreso de los Diputados"]},
        
                                 {
 question:"Cuál es el tribunal encargado de interpretar la Constitución española en relación a actuaciones de los poderes públicos?",
    ansower:"El Tribunal Constitucional",         
    option:["El Tribunal Supremo","El Tribunal de Justicia de la Unión Europea","El Tribunal Constitucional"]},
    {        
    question:"El Instituto Etxepare tiene como misión la difusión del…",
    ansower:"euskera y la cultura vasca",         
    option:["euskera y la cultura vasca","bable y la cultura cántabra","gallego y la cultura galaica"]},
    {
question:"La comunidad iberoamericana está integrada por…",
ansower:"22 países de América y Europa",         
option:["países de habla hispana","América del Sur y España","22 países de América y Europa"]},    
   
            {
question:"El Institut Ramon Llull difunde y promociona la lengua y la cultura…",
ansower:"catalanas",         
option:["vascas","catalanas","gallegas"]},
   
                    {
question:"Las ciudades autónomas de Ceuta y Melilla eligen en las elecciones cada una de ellas a…",
ansower:"2 senadores",          
option:[ "1 senadores","2 senadores","3 senadores"]},
   
                            {
question:"El Consejo General del Poder judicial está integrado por…",
ansower: "jueces y juristas",         
option:["abogados y fiscales","políticos y jueces", "jueces y juristas"]},        
        
 {       
    question:"Se puede ser condenado o sancionado por acciones u omisiones que en el momento de producirse no constituían delito",
    ansower:"Falso",         
    option:["Verdadero","Falso",""]},
    {
question:"La enseñanza obligatoria consta de dos etapas: Educación Primaria y Educación Secundaria Obligatoria",
ansower:"Verdadero",         
option:["Verdadero","Falso",""]},    
   
            {
question:"Las penas de cárcel y las medidas de seguridad están orientadas en España hacia la reeducación y reinserción social",
ansower:"Verdadero",         
option:["Verdadero","Falso",""]},
   
                    {
question:"España se divide en…",
ansower:"comunidades y ciudades autónomas",          
option:["departamentos y regiones","comunidades y ciudades autónomas","regiones autónomas y distritos"]},
   
                            {
question:"Cuál de estas comunidades autónomas tiene solo una provincia?",
ansower:"Islas Baleares",         
option:["Islas Baleares","Aragón","Valencia"]},        
        
{
    question:"Normalmente, en toda España, las Ferias del Libro se celebran en… ",
    ansower:"primavera",         
    option:["invierno","primavera","verano"]},
    {
question:"a Liga y la Copa del Rey son competiciones de…",
ansower:"fútbol",         
option:["natación","atletismo","fútbol"]},    
   
            {
question:"Quién ha recibido el premio Nobel de Literatura?",
ansower:"Vicente Aleixandre",         
option:["María Zambrano","Vicente Aleixandre","Pablo Picasso"]},
   
                    {
question:"Un colegio concertado es un colegio privado que…",
ansower:"recibe subvenciones del Gobierno",          
option:["recibe subvenciones del Gobierno","financian los padres de los alumnos","recibe dinero de los bancos"]},
   
                            {
question:"España exporta productos principalmente a países…",
ansower:"de la Unión Europea",         
option:["de Hispanoamérica","de la Unión Europea","del Norte de África"]}, 

{
    question:"Las bibliotecas públicas son gratuitas para…",
         ansower:"todos",         
         option:["todos","los parados","los niños"]},
         {
question:"Cuál de estos productos exporta España a otros países en mayor cantidadque importa?",
ansower:"Calzado",         
option:["Petróleo","Ropa","Calzado"]},    
        
                 {
  question:"Una persona mayor de 18 años puede obtener el título de Graduado en Educación Secundaria Obligatoria en…",
 ansower:"un centro de Educación de Personas Adultas",         
 option:["un centro de enseñanza Primaria","un centro de Educación de Personas Adultas","una universidad"]},
        
                         {
question:"La formación profesional…",
 ansower:"puede ser de grado medio o superior",          
 option:["puede ser de grado medio o superior","es para mayores de 25 años","es obligatoria"]},
        
                                 {
 question:"¿Cómo se llama el lugar, con un horario establecido, en el que se presta la atención médica básica (medicina de familia, pediatría y enfermería)?",
    ansower:"Centro de salud",         
    option:["Farmacia","Hospital","Centro de salud"]}, 
        ]