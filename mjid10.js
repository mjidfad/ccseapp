

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
    question:"El tel??fono de la Administraci??n General del Estado que ofrece informaci??n sobre empleo p??blico, becas o ayudas y subvenciones, organismos de las Administraciones, etc.,es el???",
         ansower:"060",         
         option:["010","060","091"]},
         {
question:"Espa??a est?? organizada en???",
ansower:"comunidades aut??nomas",         
option:["comunidades aut??nomas","cantones","estados federales"]},    
        
                 {
  question:"La legislatura del Gobierno en Espa??a finaliza a los???",
 ansower:"4 a??os",         
 option:["4 a??os","5 a??os","6 a??os"]},
        
                         {
question:"Cu??ntos municipios hay en Espa??a?",
 ansower:"8 131",          
 option:["200","8 131","1 000 000"]},
        
                                 {
 question:"El gobierno y la protecci??n de las provincias corresponde a???",
    ansower:"las diputaciones",         
    option:["las diputaciones","los ayuntamientos","las asambleas regionales"]},
    {        
    question:"Qui??n es el representante de la Administraci??n del Estado en una comunidad aut??noma?",
    ansower:"El delegado del Gobierno",         
    option:["El presidente de la comunidad aut??noma","El delegado del Gobierno","El presidente de la Asamblea auton??mica"]},
    {
question:"Cu??ntas provincias hay en Espa??a?",
ansower:"50",         
option:["49","50","52"]},    
   
            {
question:"La ense??anza de las lenguas cooficiales es competencia???",
ansower:"de la comunidad aut??noma",         
option:["del Estado","de la provincia","de la comunidad aut??noma"]},
   
                    {
question:"El poder ejecutivo corresponde???",
ansower:"al Gobierno del Estado",          
option:["al Gobierno del Estado","al Congreso y al Senado","c) a los jueces y magistrados"]},
   
                            {
question:"El poder legislativo corresponde???",
ansower:"al Congreso y al Senado",         
option:["a los jueces y magistrados","al Gobierno del Estado","al Congreso y al Senado"]},        
        
 {       
    question:"Todos los ciudadanos tendr??n acceso al sistema de Seguridad Social p??blico, excepto si est??n desempleados",
    ansower:"Falso",         
    option:["Verdadero","Falso",""]},
    {
question:"Todos tienen derecho a disfrutar de un medio ambiente adecuado para el desarrollo de la persona, as?? como el deber de conservarlo",
ansower:"Verdadero",         
option:["Verdadero","Falso" ,""]},    
   
            {
question:"Se reconoce el derecho a la creaci??n literaria y art??stica",
ansower:"Verdadero",         
option:["Verdadero","Falso",""]},
   
                    {
question:"Las temperaturas suaves con abundantes lluvias son propias del clima???",
ansower:"oce??nico",          
option:["continental","oce??nico","subtropical"]},
   
                            {
question:"Qu?? tres culturas convivieron en la Espa??a medieval?",
ansower:"La cristiana, la jud??a y la musulmana",         
option:["La cristiana, la jud??a y la musulmana","La fenicia, la jud??a y la musulmana","La griega, la cristiana y la jud??a"]},        
        
{
    question:"El 6 de diciembre se celebra en Espa??a???",
    ansower:"el D??a de la Constituci??n",         
    option:["el D??a de la Constituci??n","la llegada de Col??n a Am??rica","el D??a del Libro"]},
    {
question:"En qu?? ciudad espa??ola est?? el acueducto considerado patrimonio de la humanidad?",
ansower:"En Segovia",         
option:["En M??rida","En Sevilla","En Segovia"]},    
   
            {
question:"D??nde se venden las medicinas en Espa??a?",
ansower:"Farmacia",         
option:["Hospital","Centro de salud","Farmacia"]},
   
                    {
question:"Cu??l de estas tres recomendaciones podemos encontrar en un parque?",
ansower:"Respete las plantas y el mobiliario urbano",          
option:["Respete las plantas y el mobiliario urbano","Es conveniente abonar el billete con el importe exacto","Mantenga la distancia de seguridad con el veh??culo precedente"]},
   
                            {
question:"Cu??l de las siguientes cosas es obligatoria para el propietario de un coche en Espa??a?",
ansower:"El seguro",         
option:["El garaje","El seguro","La alarma"]}, 

{
    question:"El aeropuerto Adolfo Su??rez est?? en???",
         ansower:"Madrid",         
         option:["Madrid","Barcelona","Bilbao"]},
         {
question:"En un coche es obligatorio el uso del cintur??n de seguridad???",
ansower:"en todos los asientos",         
option:["solo en el asiento del conductor","en los asientos delanteros","en todos los asientos"]},    
        
                 {
  question:"El l??mite de velocidad en una autopista es de???",
 ansower:"120 km/h",         
 option:["70 km/h","100 km/h","120 km/h"]},
        
                         {
question:"Ceder el asiento a las personas con movilidad reducida es una norma que encontramos indicada en???",
 ansower:"el transporte p??blico",          
 option:["el transporte p??blico","las bibliotecas","los museos"]},
        
                                 {
 question:"En qu?? caso se retira el permiso de conducir?",
    ansower:"Por la p??rdida de los puntos",         
    option:["Por exceso de velocidad","Por accidente grave","Por la p??rdida de los puntos"]}, 
        ]