
var inicio5=document.querySelector(".b-5");/*t*/
var start_5=document.querySelector(".test5");/*t*/
var start1=document.querySelector(".inicio");
var seguinete5=document.querySelector(".bb3_5");/*t*/
var list5=document.querySelector(".option-list5");/*t*/
var box5=document.querySelector(".fin5");/*t*/
var out5=document.querySelector(".exit5");/*t*/
var extra5=document.querySelector(".button5");/*t*/
var b111=document.querySelector(".b11");

var s5=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg5=localStorage.getItem("mjid5");/*t*/
 if(storg5==null){
     inicio5.className="b-5";
 }else{ inicio5.className=storg5;}})();

function mjid5() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_5.classList.add("start-test5");//add boxtest de test3
    s5=2700;
    numbe5(1);
    quest5(0);
    optiselc5();}
      //button reptir test 1

function oki1_5(){/*t*/
    box5.classList.remove("active5");
    start_5.classList.add("start-test5");
    seguinete5.classList.remove("bbb3");  
    s5=2700;
    counter=0;
    num=1;
    score=0;
    quest5(counter);
    numbe5(num);
    optiselc5();
    countdown5=setInterval(function(){setup5();},1000);}  /*t*/ 
    
    seguinete5.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions5.length-1) {
            counter++;
            num++;
            quest5(counter);
            numbe5(num);
           seguinete5.classList.remove("bbb3");}
            else{
            start_5.classList.remove("start-test5");
            fin5(); }}

    function p2_5(){/*pulsar buton home para atras*/ /*t*/
            start_5.classList.remove("start-test5");
            start1.classList.remove("star-inicio");
            s5=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest5(index){/*gunction de preguntas array*/  /*t*/
            var text5=document.querySelector(".pregunta5");
            var list5=document.querySelector(".option-list5");
           
            text5.innerHTML='<h1>'+questions5[index].question+'</h1>'; 
            list5.innerHTML='<div class="opti5"><h1>'+questions5[index].option[0]+'</h1></div>'
            +'<div class="opti5"><h1>'+questions5[index].option[1]+'</h1></div>'
            +'<div class="opti5"><h1>'+questions5[index].option[2]+'</h1></div>';
            /*true false*/
            var list1=list5.querySelectorAll(".opti5");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc5(this)"); 
            if(list5.children[i].textContent==""){
                list5.children[i].classList.add("quito5"); } }}
         

    function optiselc5(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions5[counter].ansower;
            var allopcion=list5.children.length;
            if(userans==correct){ score += 1; ansower.style.background="green"; }
            else{ansower.style.background="red";}
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list5.children[i].textContent==correct){list5.children[i].style.background="green"; }
            else if(list5.children[i].textContent==""){
            list5.children[i].classList.add("quito5");}/*t*/
            else{ list5.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete5.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe5(index){/*t*/
            var numbe=document.querySelector(".footer5");
            numbe.innerHTML="<h3 style='font-size:22px;margin-top:10px;'> pregunta "+index+" de "+questions5.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto5=document.getElementById("col5");
            var fini5=document.querySelector(".finish5");
    function fin5(){/*t*/
            start_5.classList.remove("start-test5");
            box5.classList.add("active5");
//resultado de el tirpo
var minute=44-Math.floor(s5/60); 
var second=60-s5 %60;
if(second<10  ){second="0"+second;}
if (minute <10 ) {minute="0"+minute;}

            if (score>=15) {
out5.innerHTML="<span style='color:green;' ><h1>genial. has probado<h1>"+ score +" de "+ questions5.length +"</h1></h1></span>";
inicio5.className="green4";
fini5.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid5","green5");//poner local storge
foto5.src="feliz.jpg";} 
            else {
out5.innerHTML="<span style='color:red;' ><h1>no has probado<h1>"+ score +" de "+ questions5.length +"</h1></h1></span>";
inicio5.className="red5";
fini5.innerHTML="<h3 style='font-size:22px;' > tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid5","red5");//poner local storge
foto5.src="triste.jpg";}  }

    function oki2_5(){/*t*/
    // window.location.reload();
    start_5.classList.remove("start-test5");
    start1.classList.remove("star-inicio");
    box5.classList.remove("active5");
    s5=2700;
    counter=0;
    num=1;
    score=0;
    quest5(counter);
    numbe5(num);}

/*time descont*/
     var s5=2700;
count5=document.querySelector(".timer5"),
countdown5=setInterval(function(){
setup5();},1000);/*t*/
function setup5(){/*t*/
    var minutes=Math.floor(s5/60);
        sec=s5 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count5.innerHTML=minutes+":"+sec;}
              if(s5<300){ count5.style.color="red";}
              else{count5.style.color="black";}
           if(s5>0){s5=s5-1; }
                  else{count5.innerHTML="<p style='color:red;'>time off</p>";}
                     }
     


var questions5=[
    {
    question:"Qui??nes forman parte del Gobierno?",
         ansower:"Los ministros",         
         option:["Los ministros","Los concejales","Los alcaldes"]},
         {
question:"Espa??a es un???",
ansower:"Estado social y democr??tico de Derecho",         
option:["Estado social y democr??tico de Derecho","Estado libre asociado","Estado confederado"]},    
        
                 {
  question :"El actual presidente del Gobierno es???",
  ansower:"Pedro S??nchez",         
 option:["Mariano Rajoy","Jos?? Luis Rodr??guez Zapatero","Pedro S??nchez"]},
        
                         {
question:"La administraci??n civil de Espa??a corresponde al poder???",
 ansower:"ejecutivo",          
 option:["ejecutivo","legislativo","judicial"]},
        
                                 {
 question:"El Senado de Espa??a es???",
    ansower:"la c??mara de representaci??n territorial",         
    option:["la uni??n de municipios y provincias","el parlamento espa??olla c??mara de representaci??n territorial","la c??mara de representaci??n territorial"]},
    {        
    question:"Tras las elecciones generales, el presidente del Gobierno es propuesto por???",
    ansower:"el rey",         
    option:["el Congreso de los Diputados","el rey","los ministros"]},
    {
question:"El mando superior de las fuerzas y cuerpos de seguridad del Estado corresponde al???",
ansower:"ministro del Interior",         
option:["ministro de Defensa","ministro del Interior","ministro de Justicia"]},    
   
            {
question:"Cu??ntas veces ha presidido Espa??a el Consejo de la Uni??n Europea",
ansower:"Cuatro veces",         
option:["Dos veces","Tres veces","Cuatro veces"]},
   
                    {
question:"Cu??ntas veces ha reformado Espa??a su Constituci??n para adaptarse a las decisiones y directivas europeas?",
ansower:"Dos veces",          
option:["Ninguna","Una vez","Dos veces"]},
   
                            {
question :"A cu??l de estas organizaciones internacionales pertenece Espa??a?",

ansower: "A la Organizaci??n de las Naciones Unidas (ONU)",         
option:["Al Mercado Com??n del Sur (MERCOSUR)","A la Organizaci??n de las Naciones Unidas (ONU)","A la Uni??n Econ??mica Euroasi??tica (UEE)"]},        
        
 {       
    question:"La Constituci??n reconoce ??nicamente lo derechos fundamentales de los espa??oles",
    ansower:"Falso",         
    option:["Verdadero","Falso",""]},
    {
question:"En Espa??a existe la pena de muerte",
ansower:"Falso",         
option:["Verdadero","Falso",""]},    
   
            {
question:"La ley limita el acceso de terceras personas a datos de car??cter personal",
ansower:"Verdadero",         
option:["Verdadero","Falso",""]},
   
                    {
question:"La capital de la Comunidad Aut??noma de Galicia es???",
ansower:"Santiago de Compostela",          
option:["A Coru??a","Vigo","Santiago de Compostela"]},
   
                            {
question:"Cu??l de estos climas es propio de Espa??a?",
ansower:"Mediterr??neo",         
option:["Polar","Mediterr??neo","Tropical"]},        
        
{
    question:"Joan Mir?? es un famoso???",
    ansower:"pintor",         
    option:["pintor","m??sico","escritor"]},
    {
question:"Qu?? fiestas populares se celebran en Valencia a mediados de marzo?",
ansower:"Las Fallas",         
option:["La Romer??a del Roc??o","Los Sanfermines","Las Fallas"]},    
   
            {
question:"Paco de Luc??a fue un famoso???",
ansower:"guitarrista",         
option:["cient??fico","guitarrista"," pintor"]},
   
                    {
question:"El documento identificativo obligatorio para los espa??oles dentro del territorio nacional es???",
ansower:"el documento nacional de identidad (DNI)",          
option:["el documento nacional de identidad (DNI)","el n??mero de identificaci??n fiscal (NIF)","el pasaporte"]},
   
                            {
question:"Cu??l de estos alimentos cuenta con una reconocida denominaci??n de origen?",
ansower:"Aceite de oliva",         
option:["Aceite de oliva","Caf??","Cerveza"]}, 

{
    question:"El DNI se hace???",
         ansower:"en persona",         
         option:["por internet","en persona","por tel??fono"]},
         {
question:"El horario de Canarias, con respecto a la Pen??nsula, es de???",
ansower:"una hora menos",         
option:["una hora menos","una hora m??s","dos horas menos"]},    
        
                 {
  question:"Para acceder a la Universidad se debe superar una prueba de evaluaci??n llamada???",
 ansower:"EvAU",         
 option:["ESAU","ECAU","EvAU"]},
        
                         {
question:"Cu??l de estos productos importa Espa??a de otros pa??ses en mayor cantidad que exporta?",
 ansower:"Petr??leo",          
 option:["Petr??leo","Calzado","Medicamentos"]},
        
                                 {
 question:"El Estado espa??ol aplica la pol??tica fiscal a los ciudadanos a trav??s del pago de",
    ansower:"impuestos directos",         
    option:["impuestos directos e indirectos","impuestos directos","impuestos indirectos"]}, 
        ]