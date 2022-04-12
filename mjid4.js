
var inicio4=document.querySelector(".b-4");/*t*/
var start_4=document.querySelector(".test4");/*t*/
var start1=document.querySelector(".inicio");
var seguinete4=document.querySelector(".bb3_4");/*t*/
var list4=document.querySelector(".option-list4");/*t*/
var box4=document.querySelector(".fin4");/*t*/
var out4=document.querySelector(".exit4");/*t*/
var extra4=document.querySelector(".button4");/*t*/
var b111=document.querySelector(".b11");

var s4=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg4=localStorage.getItem("mjid4");/*t*/
 if(storg4==null){
     inicio4.className="b-4";
 }else{ inicio4.className=storg4;}})();

function mjid4() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_4.classList.add("start-test4");//add boxtest de test3
    s4=2700;
    numbe4(1);
    quest4(0);
    optiselc4();}
      //button reptir test 1

function oki1_4(){/*t*/
    box4.classList.remove("active4");
    start_4.classList.add("start-test4");
    seguinete4.classList.remove("bbb3");  
    s4=2700;
    counter=0;
    num=1;
    score=0;
    quest4(counter);
    numbe4(num);
    optiselc4();
    countdown4=setInterval(function(){setup4();},1000);}  /*t*/ 
    
    seguinete4.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions4.length-1) {
            counter++;
            num++;
            quest4(counter);
            numbe4(num);
           seguinete4.classList.remove("bbb3");}
            else{
            start_4.classList.remove("start-test4");
            fin4(); }}

    function p2_4(){/*pulsar buton home para atras*/ /*t*/
            start_4.classList.remove("start-test4");
            start1.classList.remove("star-inicio");
            s4=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest4(index){/*gunction de preguntas array*/  /*t*/
            var text4=document.querySelector(".pregunta4");
            var list4=document.querySelector(".option-list4");
           
            text4.innerHTML='<h1>'+questions4[index].question+'</h1>'; 
            list4.innerHTML='<div class="opti4"><h1>'+questions4[index].option[0]+'</h1></div>'
            +'<div class="opti4"><h1>'+questions4[index].option[1]+'</h1></div>'
            +'<div class="opti4"><h1>'+questions4[index].option[2]+'</h1></div>';
            /*true false*/
            var list1=list4.querySelectorAll(".opti4");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc4(this)"); 
            if(list4.children[i].textContent==""){
                list4.children[i].classList.add("quito4"); } }}
         

    function optiselc4(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions4[counter].ansower;
            var allopcion=list4.children.length;
            if(userans==correct){ score += 1; ansower.style.background="green"; }
            else{ansower.style.background="red";}
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list4.children[i].textContent==correct){list4.children[i].style.background="green"; }
            else if(list4.children[i].textContent==""){
            list4.children[i].classList.add("quito4");}/*t*/
            else{ list4.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete4.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe4(index){/*t*/
            var numbe=document.querySelector(".footer4");
            numbe.innerHTML="<h3 style='font-size:22px;margin-top:10px;'> pregunta "+index+" de "+questions4.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto4=document.getElementById("col4");
            var fini4=document.querySelector(".finish4");
    function fin4(){/*t*/
            start_4.classList.remove("start-test4");
            box4.classList.add("active4");
//resultado de el tirpo
var minute=44-Math.floor(s4/60); 
var second=60-s4 %60;
if(second<10  ){second="0"+second;}
if (minute <10 ) {minute="0"+minute;}
          if (score>=15) {
out4.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions4.length +"</h1></h1></span>";
inicio4.className="green4";
fini4.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid4","green4");//poner local storge
foto4.src="feliz.jpg";} 
            else {
out4.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions4.length +"</h1></h1></span>";
inicio4.className="red4";
fini4.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid4","red4");//poner local storge
foto4.src="triste.jpg";}  }

    function oki2_4(){/*t*/
    // window.location.reload();
    start_4.classList.remove("start-test4");
    start1.classList.remove("star-inicio");
    box4.classList.remove("active4");
    s4=2700;
    counter=0;
    num=1;
    score=0;
    quest4(counter);
    numbe4(num);}

/*time descont*/
     var s4=2700;
count4=document.querySelector(".timer4"),
countdown4=setInterval(function(){
setup4();},1000);/*t*/
function setup4(){/*t*/
    var minutes=Math.floor(s4/60);
        sec=s4 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count4.innerHTML=minutes+":"+sec;}
              if(s4<300){ count4.style.color="red";}
              else{count4.style.color="black";}
           if(s4>0){s4=s4-1; }
                  else{count4.innerHTML="<p style='color:red;'>time off</p>";}
                     }


var questions4=[
    {
    question:"En España hay elecciones generales cada…",
         ansower:"cuatro años",         
         option :["cinco años","seis años","cuatro años"]},
         {
question:"Qué lengua es oficial en el País Vasco?",
ansower:"El euskera",         
option:["El bable","El aragonés","El euskera"]},    
        
                 {
  question :"La comunidad autónoma más poblada de España es…",

 ansower:"Andalucía",         
 option:["Cataluña","Andalucía","Galicia"]},
        
                         {
question:"Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma?",
 ansower:"El catalán",          
 option:["El catalán","El murciano El asturleonés"]},
        
                                 {
 question:"Las instituciones de una comunidad autónoma son: la asamblea legislativa, el consejo de gobierno y…",
    ansower:"el presidente",         
    option:["la diputación","el presidente","el delegado de gobierno"]},
    {        
    question:"Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma?",
    ansower:"El gallego",         
    option:["El gallego","El aragonés","El murciano"]},
    {
question:"¿Qué institución tiene como fin la promoción de la enseñanza de la lengua española y la difusión de la cultura en español?",
ansower:"Instituto Cervantes",         
option:["Instituto Nacional de Administración Pública","Instituto Nacional de Estadística","Instituto Cervantes"]},    
   
            {
question:"Cuál de los siguientes organismos trabaja para conseguir la normalización lingüística?",
ansower:"Real Academia Española",         
option:["Institut Ramon Llull","Real Academia Española","Instituto Cervantes"]},
   
                    {
question:"Dónde vive el presidente del Gobierno?",
ansower :"Palacio de la Moncloa",          
option :["Palacio de la Moncloa","Palacio de la Zarzuela","Palacio Real"]},
   
                            {
question:"Cuál de los siguientes cuerpos forma parte de las Fuerzas Armadas de España?",
ansower:"El Ejército del Aire",         
option:["La Policía Foral","La Guardia Civil","El Ejército del Aire"]},        
        
 {       
    question:"Se garantiza el secreto de las comunicaciones de los españoles, salvo resolución judicia",
    ansower:"Verdadero",         
    option:["Verdadero","Falso",""]},
    {
question:"Todos los españoles, ya sean mayores o menores de edad, tienen derecho a votar en las elecciones",
ansower:"Falso",         
option:["Verdadero","Falso",""]},    
   
            {
question:"Los profesores pueden enseñar con libertad, dentro de los límites de la Constitución",
ansower:"Verdadero",         
option:["Verdadero","Falso",""]},
   
                    {
question:"Merida es la capital de…?",
ansower:"Extremadura",          
option:["Andalucía","Extremadura","Galicia"]},
   
                            {
question:"Almería está en…",
ansower:"Andalucía",         
option:["Andalucía","Canarias","Aragón"]},        
        
{
    question:"En qué ciudad de España hay una mezquita que es patrimonio de la humanidad?",
    ansower:"Córdoba",         
    option:["Santiago de Compostela","Madrid","Córdoba"]},
    {
question:"Dónde está La Alhambra, que es Patrimonio de la Humanidad?",
ansower:"En Granada",         
option:["En SevillaEn ","Córdoba","En Granada"]},    
   
            {
question:"En qué ciudad se encuentra el monumento La Sagrada Familia de Gaudí?",
ansower:"En Barcelona",         
option:["En Barcelona","En Granada","En Madrid"]},
   
                    {
question:"Cuál de las siguientes conductas no es adecuada en una comunidad de vecinos?",
ansower:"Lavar coches y motos en el garaje",          
option:["Reducir el nivel de ruido entre las 22:00 y las 8:00 h","Depositar la basura en bolsas bien cerradas","Lavar coches y motos en el garaje"]},
   
                            {
question:"La sangría es una bebida con refrescos, vino y…",
ansower:"fruta",         
option:["fruta","té","agua"]}, 

{
    question:"La sidra es una bebida originaria de…",
         ansower:"Asturias",         
         option:["Galicia","Cantabria","Asturias"]},
         {
question:"Los españoles tienen dos apellidos. El primer apellido es",
ansower:"el de la madre o el del padre",         
optione:["el de la madre","el del padre","el de la madre o el del padre"]},    
        
                 {
  question:"La fiesta nacional de España es el…",
 ansower:"el 12 de octubre",         
 option:["15 de agosto","el 12 de octubre","6 de diciembre"]},
        
                         {
question:"Los comercios que abren normalmente de lunes a sábado, tienen un horario aproximado de…",
 ansower:"10:00 a 20:00",          
 option:["8:00 a 23:00","9:00 a 17:00","10:00 a 20:00"]},
        
                                 {
 question:"El pasaporte se hace en…",
    ansower:"una comisaría de policía",         
    option:["una comisaría de policía","el registro civil","el ayuntamiento"]}, 
        ]