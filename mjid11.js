
var inicio11=document.querySelector(".b-11");/*t*/
var start_11=document.querySelector(".test11");/*t*/
var start1=document.querySelector(".inicio");
var seguinete11=document.querySelector(".bb3_11");/*t*/
var list11=document.querySelector(".option-list11");/*t*/
var box11=document.querySelector(".fin11");/*t*/
var out11=document.querySelector(".exit11");/*t*/
var extra11=document.querySelector(".button11");/*t*/
var b111=document.querySelector(".b11");


var s11=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg11=localStorage.getItem("mjid11");/*t*/
 if(storg11==null){
     inicio11.className="b-11";
 }else{ inicio11.className=storg11;}})();

function mjid11() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_11.classList.add("start-test11");//add boxtest de test3
    s11=2700;
    numbe11(1);
    quest11(0);
    optiselc11();}
      //button reptir test 1

function oki1_11(){/*t*/
    box11.classList.remove("active11");
    start_11.classList.add("start-test11");
    seguinete11.classList.remove("bbb3");  
    s11=2700;
    counter=0;
    num=1;
    score=0;
    quest11(counter);
    numbe11(num);
    optiselc11();
    countdown11=setInterval(function(){setup11();},1000);}  /*t*/ 
    
    seguinete11.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions11.length-1) {
            counter++;
            num++;
            quest11(counter);
            numbe11(num);
           seguinete11.classList.remove("bbb3");}
            else{
            start_11.classList.remove("start-test11");
            fin11(); }}

    function p2_11(){/*pulsar buton home para atras*/ /*t*/
            start_11.classList.remove("start-test11");
            start1.classList.remove("star-inicio");
            s11=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest11(index){/*gunction de preguntas array*/  /*t*/
            var text11=document.querySelector(".pregunta11");
            var list11=document.querySelector(".option-list11");
        
            text11.innerHTML='<h1>'+questions11[index].question+'</h1>'; 
            list11.innerHTML='<div class="opti11"><h1>'+questions11[index].option[0]+'</h1></div>'
            +'<div class="opti11"><h1>'+questions11[index].option[1]+'</h1></div>'
            +'<div class="opti11"><h1>'+questions11[index].option[2]+'</h1></div>';
            /*true false*/
            var list1=list11.querySelectorAll(".opti11");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc11(this)"); 
            if(list11.children[i].textContent==""){
                list11.children[i].classList.add("quito11"); } }}
         

    function optiselc11(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions11[counter].ansower;
            var allopcion=list.children.length;
            if(userans==correct){ score += 1; ansower.style.background="blue";}
           else{ansower.style.background="red"; }
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list11.children[i].textContent==correct){list11.children[i].style="background:green;";  }
            else if(list11.children[i].textContent==""){
            list11.children[i].classList.add("quito10");}/*t*/
            else{ list11.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete11.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe11(index){/*t*/
            var numbe=document.querySelector(".footer11");
            numbe.innerHTML="<h3 style='font-size:22px;margin-top:10px;'> pregunta "+index+" de "+questions11.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto11=document.getElementById("col11");
            var fini11=document.querySelector(".finish11");
    function fin11(){/*t*/
            start_11.classList.remove("start-test11");
            box11.classList.add("active11");
            //resultado de el tirpo
var minute=44-Math.floor(s11/60); 
var second=60-s11 %60;
if(second<10  ){second="0"+second;}
if (minute <10 ) {minute="0"+minute;}

            if(score>=15){
out11.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions11.length +"</h1></h1></span>";
inicio11.className="green11";
fini11.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid11","green11");//poner local storge
foto11.src="feliz.jpg";} 
            else {
out11.innerHTML="<span style='color:red;' ><h1>no has probado<h1>"+ score +" de "+ questions11.length +"</h1></h1></span>";
inicio11.className="red11";
fini11.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid11","red11");//poner local storge
foto11.src="triste.jpg";}  }

    function oki2_11(){/*t*/
    // window.location.reload();
    start_11.classList.remove("start-test11");
    start1.classList.remove("star-inicio");
    box11.classList.remove("active11");
    s11=2700;
    counter=0;
    num=1;
    score=0;
    quest11(counter);
    numbe11(num);}

/*time descont*/
     var s11=2700;
count11=document.querySelector(".timer11"),
countdown11=setInterval(function(){
setup11();},1000);/*t*/
function setup11(){/*t*/
    var minutes=Math.floor(s11/60);
        sec=s11 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count11.innerHTML=minutes+":"+sec;}
              if(s11<300){ count11.style.color="red";}
              else{count11.style.color="black";}
           if(s11>0){s11=s11-1; }
                  else{count11.innerHTML="<p style='color:red;'>time off</p>";}
                     }
    
    


var questions11=[
    {
        question:"En urbanismo, la competencia es???",
             ansower:"de los ayuntamientos",         
             option:["del Estado","de los ayuntamientos","de las comunidades aut??nomas"]},
             {
    question:"n materia de nacionalidad, inmigraci??n, emigraci??n, extranjer??a y derecho de asilo, la competencia exclusiva es???",
    ansower:"del Estado",         
    option:["de los ayuntamientos","de las comunidades aut??nomas","del Estado"]},    
            
                     {
      question:"En materia de Sanidad e higiene, la competencia de gesti??n es de???",
     ansower:"las comunidades aut??nomas",         
     option:["los ayuntamientos","el Estado","las comunidades aut??nomas"]},
            
                             {
    question:"Las competencias en materia de relaciones internacionales est??n gestionadas por???",
     ansower:"el Estado",          
     option:["los ayuntamientos","el Estado","las comunidades aut??nomas"]},
            
                                     {
     question:"El ayuntamiento est?? formado por el alcalde y???",
        ansower:"los concejales",         
        option:["los senadores","los diputados","los concejales"]},
        {        
        question:"Qui??nes forman parte del gobierno de las comunidades aut??nomas?",
        ansower:"El presidente y los consejeros",         
        option:["El presidente y los ministros","El alcalde y los concejales","El presidente y los consejeros"]},
        {
    question:"Cu??l es el ??rgano de gobierno en los municipios?",
    ansower:"El ayuntamiento",         
    option:["El ayuntamiento","La diputaci??n","El cabildo"]},    
       
                {
    question:"C??mo se llaman los ??rganos de gobierno de las provincias espa??olas?",
    ansower:"Diputaciones",         
    option:["Cabildos","Consejos Insulares","Diputaciones"]},
       
                        {
    question:"El poder judicial corresponde???",
    ansower:"a los jueces y magistrados",          
    option:["al Gobierno del Estado","a los jueces y magistrados","al Congreso y al Senado"]},
       
                                {
    question:"Madrid es la capital de Espa??a desde mediados del siglo???",
    ansower:"XVI",         
    option:["XVI","XVII","XVIII"]},        
            
     {       
        question:"En Espa??a, la edad m??nima para casarse es de 14 a??os",
        ansower:"Falso",                  
        option:["Verdadero","Falso",""]},
        {
    question:"La Ley proh??be la discriminaci??n por cualquier circunstancia personal o social",
    ansower:"Verdadero",         
    option:["Verdadero","Falso",""]},    
       
                {
    question:"Los poderes p??blicos garantizan la defensa de los consumidores",
    ansower:"Verdadero",         
    option:["Verdadero","Falso",""]},
       
                        {
    question:"El clima de Canarias es???",
    ansower:"subtropical",          
    option:["mediterr??neo","oce??nico","subtropical"]},
       
                                {
    question:"El principal r??o que desemboca en el mar Mediterr??neo es el???",
    ansower:"Ebro",         
    option:["Ebro","Duero","Tajo"]},        
            
    {
        question:"Espa??a est?? entre los pa??ses de Europa m??s???",
        ansower:"monta??osos",         
        option:["lluviosos","monta??osos","fr??os"]},
        {
    question:"Qui??n recibi?? el Premio Nobel de Fisiolog??a y Medicina en 1959?",
    ansower:"Severo Ochoa",         
    option:["antiago Ram??n y Cajal","Margarita Salas","Severo Ochoa"]},    
       
                {
    question:"El Premio Cervantes se da a???",
    ansower:"escritores",         
    option:["actores","escritores","pintores"]},
       
                        {
    question:"Los Premios Goya est??n relacionados con???",
    ansower:"el cine",          
    option:["el cine","la literatura","la pintura"]},
       
                                {
    question:"El acr??nimo RENFE corresponde a:",
    ansower:"Red Nacional de los Ferrocarriles Espa??oles",         
    option:["Red Nacional de Fundaciones Estatales","Red Nacional de los Ferrocarriles Espa??oles","Red Nacional de Fondos Europeos"]}, 
    
    {
        question:"Los espa??oles necesitan el pasaporte para viajar a???",
             ansower:"China",         
             option:["Alemania","China","Italia"]},
             {
    question:"Cu??l es la edad m??nima para trabajar en Espa??a?",
    ansower:"16 a??os",         
    option:["16 a??os","18 a??os","21 a??os"]},    
            
                     {
      question:"Cu??l es el sector de mayor peso en la econom??a espa??ola?",
     ansower:"Servicios",         
     option:["Agricultura","Construcci??n","Servicios"]},
            
                             {
    question:"Espa??a es innovadora en el sector de???",
     ansower:"las energ??as renovables",          
     option:["la ingenier??a aeroespacial","las energ??as renovables","la energ??a nuclear"]},
            
                                     {
     question:"La norma principal que regula los derechos de los trabajadores en Espa??a es???",
        ansower:"el Estatuto de los Trabajadores",         
        option:["el Estatuto de los Trabajadores","la Constituci??n","el Servicio P??blico de Empleo Estatal"]}, 
            ]