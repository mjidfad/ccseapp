
var inicio12=document.querySelector(".b-12");/*t*/
var start_12=document.querySelector(".test12");/*t*/
var start1=document.querySelector(".inicio");
var seguinete12=document.querySelector(".bb3_12");/*t*/
var list12=document.querySelector(".option-list12");/*t*/
var box12=document.querySelector(".fin12");/*t*/
var out12=document.querySelector(".exit12");/*t*/
var extra12=document.querySelector(".button12");/*t*/
var b111=document.querySelector(".b11");

var s12=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg12=localStorage.getItem("mjid12");/*t*/
 if(storg12==null){
     inicio12.className="b-12";
 }else{ inicio12.className=storg12;}})();

function mjid12() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_12.classList.add("start-test12");//add boxtest de test3
    s12=2700;
    numbe12(1);
    quest12(0);
    optiselc12();}
      //button reptir test 1

function oki1_12(){/*t*/
    box12.classList.remove("active12");
    start_12.classList.add("start-test12");
    seguinete12.classList.remove("bbb3");  
    s12=2700;
    counter=0;
    num=1;
    score=0;
    quest12(counter);
    numbe12(num);
    optiselc12();
    countdown12=setInterval(function(){setup12();},1000);}  /*t*/ 
    
    seguinete12.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions12.length-1) {
            counter++;
            num++;
            quest12(counter);
            numbe12(num);
           seguinete12.classList.remove("bbb3");}
            else{
            start_12.classList.remove("start-test12");
            fin12(); }}

    function p2_12(){/*pulsar buton home para atras*/ /*t*/
            start_12.classList.remove("start-test12");
            start1.classList.remove("star-inicio");
            s12=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest12(index){/*gunction de preguntas array*/  /*t*/
            var text12=document.querySelector(".pregunta12");
            var list12=document.querySelector(".option-list12");
        
            text12.innerHTML='<h1>'+questions12[index].question+'</h1>'; 
            list12.innerHTML='<div class="opti12"><h1>'+questions12[index].option[0]+'</h1></div>'
            +'<div class="opti12"><h1>'+questions12[index].option[1]+'</h1></div>'
            +'<div class="opti12"><h1>'+questions12[index].option[2]+'</h1></div>';
            /*true false*/
            var list1=list12.querySelectorAll(".opti12");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc12(this)"); 
            if(list12.children[i].textContent==""){
                list12.children[i].classList.add("quito12"); } }}
         

    function optiselc12(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions12[counter].ansower;
            var allopcion=list.children.length;
            if(userans==correct){ score += 1; ansower.style.background="blue";}
           else{ansower.style.background="red"; }
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list12.children[i].textContent==correct){list12.children[i].style="background:green;";  }
            else if(list12.children[i].textContent==""){
            list12.children[i].classList.add("quito10");}/*t*/
            else{ list12.children[i].style.background="red";
        
        }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete12.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe12(index){/*t*/
            var numbe=document.querySelector(".footer12");
            numbe.innerHTML="<h3 style='font-size:22px;margin-top:10px;'> pregunta "+index+" de "+questions12.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto12=document.getElementById("col12");
            var fini12=document.querySelector(".finish12");

    function fin12(){/*t*/
            start_12.classList.remove("start-test12");
            box12.classList.add("active12");
 var minute=44-Math.floor(s12/60); 
 var second=60-s12 %60;
 if(second<10  ){second="0"+second;}
 if (minute <10 ) {minute="0"+minute;}

            if(score>=15){
out12.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions12.length +"</h1></h1></span>";
inicio12.className="green12";
fini12.innerHTML="<h3 style='font-size:22px;' > tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid12","green12");//poner local storge
foto12.src="feliz.jpg";} 
            else {
out12.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions12.length +"</h1></h1></span>";
inicio12.className="red12";
fini12.innerHTML="<h3 style='font-size:22px;' > tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid12","red12");//poner local storge
foto12.src="triste.jpg";}  }

    function oki2_12(){/*t*/
    // window.location.reload();
    start_12.classList.remove("start-test12");
    start1.classList.remove("star-inicio");
    box12.classList.remove("active12");
    s12=2700;
    counter=0;
    num=1;
    score=0;
    quest12(counter);
    numbe12(num);}

/*time descont*/
     var s12=2700;
count12=document.querySelector(".timer12"),
countdown12=setInterval(function(){
setup12();},1000);/*t*/
function setup12(){/*t*/
    var minutes=Math.floor(s12/60);
        sec=s12 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count12.innerHTML=minutes+":"+sec;}
              if(s12<300){ count12.style.color="red";}
              else{count12.style.color="black";}
           if(s12>0){s12=s12-1; }
                  else{count12.innerHTML="<p style='color:red;'>time off</p>";}
                     }

var questions12=[
    {
    question:"En las elecciones al Parlamento Europeo se eligen los???",
         ansower:"representantes espa??oles",         
         option:["ministros europeos","consejeros delegados","representantes espa??oles"]},
         {
question:"Qui??n fue el presidente de Espa??a durante 2020?",
ansower: "Pedro S??nchez",         
option:["Mariano Rajoy","Pedro S??nchez","Jos?? Mar??a Aznar"]},    
        
                 {
  question:"Algunos ciudadanos extranjeros pueden votar en las elecciones??? ",
 ansower:"municipales",         
 option:["municipales","auton??micas","generales"]},
        
                         {
question:"Qui??n controla la gesti??n financiera del Estado?",
 ansower:"El Tribunal de Cuentas",          
 option:["El Banco de Espa??a","La Agencia Tributaria","El Tribunal de Cuentas"]},
        
                                 {
 question:"A qui??nes se elige en las elecciones generales?",
    ansower:"A los senadores y diputados",         
    option:["A los concejales y diputados","A los senadores y eurodiputados","A los senadores y diputados"]},
    {        
    question:"??De cu??ntos miembros se compone el Congreso de los Diputados en la actualidad?    ",
    ansower:"350",         
    option:["300","350","400"]},
    {
question:"Los municipios y provincias forman parte de la Administraci??n???",
ansower:"local",         
option:["central","auton??mica","local"]},    
   
            {
question:"La comunidad aut??noma m??s poblada de Espa??a es???",
ansower:"Andaluc??a",         
option:["Andaluc??a","Catalu??a","Castilla y Le??n"]},
   
                    {
question:"La organizaci??n que defiende y promueve los intereses de los trabajadores se denomina???",
ansower:"sindicato",          
option:["asociaci??n","partido","sindicato"]},
   
                            {
question:"Cu??l de las siguientes personalidades ha sido presidente del Gobierno de Espa??a?",
ansower:"Leopoldo Calvo-Sotelo",         
option:["Manuel Fraga","Leopoldo Calvo-Sotelo","Josep Tarradellas"]},        
        
 {       
    question:"En Espa??a, cualquier ciudadano mayor de edad puede presentarse a las elecciones",
    ansower:"Verdadero",         
    option:["Verdadero","Falso",""]},
    {
question:"Los espa??oles deben ayudar en los casos de cat??strofe o calamidad p??blica",
ansower:"Verdadero",         
option:["Verdadero","Falso",""]},    
   
            {
question:"Los poderes p??blicos garantizan la libertad de movimiento de los ciudadanos en el territorio nacional",
ansower:"Verdadero",         
option:["Verdadero","Falso",""]},
   
                    {
question:"Qu?? sistema monta??oso divide a la Meseta espa??ola?",
ansower:"El Central",          
option:["El Ib??rico","El Central","El B??tico"]},
   
                            {
question:"Los Picos de Europa est??n en???",
ansower:"Asturias",         
option:["Andaluc??a","Catalu??a","Asturias"]},        
        
{
    question:"Qu?? premios promueven en Espa??a los valores cient??ficos, culturales y human??sticos que son patrimonio universal?",
    ansower:"Los Premios Princesa de Asturias",         
    option:["Los Premios Cervantes","Los Premios Princesa de Asturias","Los Premios Goya"]},
    {
question:"Cu??ndo fueron los Juegos Ol??mpicos de Barcelona?",
ansower:"1992",         
option:["1986","1992","1998"]},
   
            {
question:"El escritor Miguel de Cervantes naci?? en???",
ansower:"Alcal?? de Henares",         
option:["La Mancha","Madrid","Alcal?? de Henares"]},
   
                    {
question:"Qu?? est?? abierto 24 horas si es necesario?",
ansower:"Farmacias",          
option:["Farmacias","Estancos","Quioscos"]},
   
                            {
question:"En Espa??a la ense??anza b??sica es???",
ansower:"obligatoria y gratuita",         
option:["voluntaria y gratuita","obligatoria y de pago","obligatoria y gratuita"]}, 

{
    question:"En la econom??a espa??ola el peso mayor recae sobre el sector de???",
         ansower:"los servicios",         
         option:["la agricultura","la industria","los servicios"]},
         {
question:"Las Escuelas Oficiales de Idiomas",
ansower:"son para mayores de 16 a??os",         
option:["son centros de ense??anza privada","son para mayores de 16 a??os","dependen del Instituto Cervantes"]},    
        
                 {
  question:"C??mo se llama el documento oficial que recoge las fechas de todos los contratos de trabajo de una persona?",
 ansower:"Informe de Vida Laboral",         
 option:["Informe de Vida Laboral","Recibo de finiquito","Certificado de profesionalidad"]},
        
                         {
question:"Qu?? impuesto pagan los residentes en Espa??a en funci??n de la renta o el dinero ganado (salario, ingresos como aut??nomos, etc.)?",
 ansower:" IRPF (Impuesto sobre la Renta de las Personas F??sicas)",          
 option:["IS (Impuesto sobre Sociedades)","IVA (Impuesto sobre el Valor A??adido)"," IRPF (Impuesto sobre la Renta de las Personas F??sicas)"]},
        
                                 {
 question:"Cu??l de estas comunidades aut??nomas es m??s rica?",
    ansower:"Pa??s Vasco",         
    option:["La Rioja","Pa??s Vasco","Galicia"]}, 
        ]