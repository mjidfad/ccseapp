

var inicio3=document.querySelector(".b-3");/*t*/
var start_3=document.querySelector(".test3");/*t*/
var start1=document.querySelector(".inicio");
var seguinete3=document.querySelector(".bb3_3");/*t*/
var list3=document.querySelector(".option-list3");/*t*/
var box3=document.querySelector(".fin3");/*t*/
var out3=document.querySelector(".exit3");/*t*/
var extra3=document.querySelector(".button3");/*t*/
var b111=document.querySelector(".b11");

var s3=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg3=localStorage.getItem("mjid3");/*t*/
 if(storg3==null){
     inicio3.className="b-3";
 }else{ inicio3.className=storg3;}})();

function mjid3() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_3.classList.add("start-test3");//add boxtest de test3
    s3=2700;
    numbe3(1);
    quest3(0);
    optiselc3();}
      //button reptir test 1

function oki1_3(){/*t*/
    box3.classList.remove("active3");
    start_3.classList.add("start-test3");
    seguinete3.classList.remove("bbb3");  
    s3=2700;
    counter=0;
    num=1;
    score=0;
    quest3(counter);
    numbe3(num);
    optiselc3();
    countdown3=setInterval(function(){setup3();},1000);}  /*t*/ 
    
    seguinete3.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions3.length-1) {
            counter++;
            num++;
            quest3(counter);
            numbe3(num);
            seguinete3.classList.remove("bbb3");}
            else{
            start_3.classList.remove("start-test3");
            fin3(); }}

    function p2_3(){/*pulsar buton home para atras*/ /*t*/
            start_3.classList.remove("start-test3");
            start1.classList.remove("star-inicio");
            s3=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest3(index){/*gunction de preguntas array*/  /*t*/
            var text3=document.querySelector(".pregunta3");
            var list3=document.querySelector(".option-list3");
           
            text3.innerHTML='<h1>'+questions3[index].question+'</h1>'; 
            list3.innerHTML='<div class="opti3"><h1>'+questions3[index].option[0]+'</h1></div>'
            +'<div class="opti3"><h1>'+questions3[index].option[1]+'</h1></div>'
            +'<div class="opti3"><h1>'+questions3[index].option[2]+'</h1></div>';
            /*true false*/
            var list1=list3.querySelectorAll(".opti3");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc3(this)"); 
            if(list3.children[i].textContent==""){
                list3.children[i].classList.add("quito3"); } }}
         

    function optiselc3(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions3[counter].ansower;
            var allopcion=list3.children.length;
            if(userans==correct){ score += 1; ansower.style.background="green"; }
            else{ansower.style.background="red";}
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list3.children[i].textContent==correct){list3.children[i].style.background="green"; }
            else if(list3.children[i].textContent==""){
            list3.children[i].classList.add("quito3");}/*t*/
            else{ list3.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete3.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe3(index){/*t*/
            var numbe=document.querySelector(".footer3");
            numbe.innerHTML="<h3 style='font-size:22px;margin-top:10px;'> pregunta "+index+" de "+questions3.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto3=document.getElementById("col3");
            var fini3=document.querySelector(".finish3");
    function fin3(){/*t*/
            start_3.classList.remove("start-test3");
            box3.classList.add("active3");
            //resultado de el tirpo
            var minute=44-Math.floor(s3/60); 
            var second=60-s3 %60;
            if(second<10  ){second="0"+second;}
            if (minute <10 ) {minute="0"+minute;}

            if (score>=15) {
out3.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions3.length +"</h1></h1></span>";
inicio3.className="green3";
fini3.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid3","green3");//poner local storge
foto3.src="feliz.jpg";} 
            else {
out3.innerHTML="<span style='color:red;' ><h1>no has probado<h1>"+ score +" de "+ questions3.length +"</h1></h1></span>";
inicio3.className="red3";
fini3.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid3","red3");//poner local storge
foto3.src="triste.jpg";}  }

    function oki2_3(){/*t*/
    // window.location.reload();
    start_3.classList.remove("start-test3");
    start1.classList.remove("star-inicio");
    box3.classList.remove("active3");
    s3=2700;
    counter=0;
    num=1;
    score=0;
    quest3(counter);
    numbe3(num);}

/*time descont*/
     var s3=2700;
count3=document.querySelector(".timer3"),
countdown3=setInterval(function(){
setup3();},1000);/*t*/
function setup3(){/*t*/
    var minutes=Math.floor(s3/60);
        sec=s3 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count3.innerHTML=minutes+":"+sec;}
              if(s3<300){ count3.style.color="red";}
              else{count3.style.color="black";}
           if(s3>0){s3=s3-1; }
                  else{count3.innerHTML="<p style='color:red;'>time off</p>";}
                     }
     

var questions3=[
    {
    question:"La pol??tica exterior de Espa??a est?? dirigida por???",
         ansower:"el Gobierno",         
         option:["la Uni??n Europea","el Gobierno","las Cortes Generales"]},
         {
question:"??C??mo se llaman los ??rganos de gobierno de Comunidad Aut??noma de las Islas Baleares?",
ansower:"Consejos insulares",         
option:["Diputaciones","Cabildos","Consejos insulares"]},    
        
                 {
  question:"Qu?? ciudad tiene m??s habitantes?",
 ansower:"Barcelona",         
 option:["Sevilla","Barcelona","Zaragoza"]},
        
                         {
question:"A cu??l de estas organizaciones internacionales pertenece Espa??a?",
 ansower:"Consejo de Europa",          
 option:["Consejo de Europa","Organizaci??n Internacional de Seguridad","Consejo para el Desarrollo"]},
        
                                 {
 question:"El Congreso de los Diputados y el Senado constituyen el poder???",
    ansower:"legislativo",         
    option:["ejecutivo","legislativo","judicial"]},
    {        
    question:"El Ministerio de Igualdad es el encargado de elaborar normas contra la violencia de g??nero y la???",
    ansower:"discriminaci??n",         
    option:["discriminaci??n","separaci??n","solidaridad"]},
    {
question:"Cu??ntos colores tiene la bandera espa??ola?",
ansower:"2",         
option:["2","4","6"]},    
   
            {
question:"Los colores de la bandera espa??ola son???",
ansower:"rojo y amarillo",         
option:["blanco y rojo","rojo y amarillo","amarillo y blanco"]},
   
                    {
question:"D??nde est?? la sede del Gobierno de Espa??a?",
ansower:"Madrid",          
option:["Sevilla","Barcelona","Madrid"]},
   
                            {
question:"La bandera azul con 12 estrellas amarillas en c??rculo es la bandera de???",
ansower:"la Uni??n Europea",         
option:["la Uni??n Europea","la Organizaci??n de Seguridad y Cooperaci??n en Europa","la Comisi??n de Europa"]},        
        
 {       
    question:"La Educaci??n Primaria (de 6 a 12 a??os) es obligatoria y gratuita",
    ansower:"Verdadero",         
    option:["Verdadero","Falso",""]},
    {
question:"La Constituci??n garantiza el derecho de los espa??oles a una vivienda digna",
ansower:"Verdadero",         
option:["Verdadero","Falso",""]},    
   
            {
question:"En Espa??a las fuerzas de seguridad pueden entrar en un domicilio privado sin resoluci??n judicial en cualquier momento",
ansower:"Falso",         
option:["Verdadero","Falso",""]},
   
                    {
question:"El pico m??s alto de Espa??a, con 3 718 metros, es...",
ansower:"el Teide",          
option:["el Mulhac??n","el Teide","el Aneto"]},
   
                            {
question:"Cu??ntas comunidades aut??nomas hay en Espa??a?",
ansower:"17",         
option:["7","17","27"]},        
        
{
    question:"El Ballet Nacional de Espa??a realiza???",
    ansower:"distintos estilos de danza",         
    option:["danza cl??sica","danza contempor??nea","distintos estilos de danza"]},
    {
question:"Isabel Coixet es una???",
ansower:"directora de cine",         
option:["directora de cine","bailarina cl??sica","cantante pop"]},    
   
            {
question:"Uno de los tenores espa??oles m??s famosos es???",
ansower:"Alfredo Kraus",         
option:["Alfredo Kraus","Alejandro Sanz","David Bisbal"]},
   
                    {
question:"C??mo se denomina la uni??n jur??dica de dos personas que crea un v??nculo conyugal mediante ciertos ritos o formalidades legales, con obligaciones y derechos?",
ansower:"Matrimonio.",          
option:["Pareja formal","Pareja de hecho","Matrimonio."]},
   
                            {
question:"Cu??l de las siguientes familias es considerada numerosa en Espa??a?",
ansower:"Una pareja con 3 hijos",         
option:["Una pareja con 1 hijo","Una pareja con 2 hijos","Una pareja con 3 hijos"]}, 

{
    question:"La baja por maternidad en Espa??a, de car??cter general por un solo hijo,puede ser de hasta???",
         ansower:"16 semanas",         
         option:["10 semanas","16 semanas","20 semanas"]},
         {
question:"Los propietarios de perros deben registrarlos en???",
ansower:"el Ayuntamiento",         
option:["el Ministerio de Justicia","la comisar??a de polic??a","el Ayuntamiento"]},    
        
                 {
  question:"Los principales ingredientes de la tortilla espa??ola son huevos y???",
 ansower:"patatas",         
 option:["patatas","pimientos","zanahoria"]},
        
                         {
question:"??Cu??l de los siguientes personajes es un reconocido cocinero dentro y fuera de Espa??a?",
 ansower:"Ferr??n Adri??",          
 option:["Josep Carreras","Rafael Nadal","Ferr??n Adri??"]},
        
                                 {
 question:"Cu??l de estos canales de comunicaci??n es un organismo p??blico?",
    ansower:"Radio Nacional de Espa??a",         
    option:["Antena 3 TV","La Cadena SER","Radio Nacional de Espa??a"]}, 
        ]