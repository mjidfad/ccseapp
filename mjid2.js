
var inicio2=document.querySelector(".b-2");/*t*/
var start_2=document.querySelector(".test2");/*t*/
var start1=document.querySelector(".inicio");
var seguinete2=document.querySelector(".bb3_2");/*t*/
var list2=document.querySelector(".option-list2");/*t*/
var box2=document.querySelector(".fin2");/*t*/
var out2=document.querySelector(".exit2");/*t*/
var extra2=document.querySelector(".button2");/*t*/
var b111=document.querySelector(".b11");

var s2=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg2=localStorage.getItem("mjid2");/*t*/
 if(storg2==null){
     inicio2.className="b-2";
 }else{ inicio2.className=storg2;}})();

function mjid2() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_2.classList.add("start-test2");//add boxtest de test2
    s2=2700;
    numbe2(1);
    quest2(0);
    optiselc2();}
      //button reptir test 1

function oki1_2(){/*t*/
    box2.classList.remove("active2");
    start_2.classList.add("start-test2");
    seguinete2.classList.remove("bbb3");  
    s2=2700;
    counter=0;
    num=1;
    score=0;
    quest2(counter);
    numbe2(num);
    optiselc2();
    countdown2=setInterval(function(){setup2();},1000);}  /*t*/ 
    
    seguinete2.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions2.length-1) {
            counter++;
            num++;
            quest2(counter);
            numbe2(num);
            seguinete2.classList.remove("bbb3");}
            else{
            start_2.classList.remove("start-test2");
            fin2(); }}

    function p2_2(){/*pulsar buton home para atras*/ /*t*/
            start_2.classList.remove("start-test2");
            start1.classList.remove("star-inicio");
            s2=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest2(index){/*gunction de preguntas array*/  /*t*/
            var text=document.querySelector(".pregunta2");
            var list2=document.querySelector(".option-list2");
           
            text.innerHTML='<h1>'+questions2[index].question+'</h1>'; 
            list2.innerHTML='<div class="opti2"><h1>'+questions2[index].option[0]+'</h1></div>'
            +'<div class="opti2"><h1>'+questions2[index].option[1]+'</h1></div>'
            +'<div class="opti2"><h1>'+questions2[index].option[2]+'</h1></div>';
            /*true false*/
            var list1=list2.querySelectorAll(".opti2");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc2(this)"); 
            if(list2.children[i].textContent==""){
                list2.children[i].classList.add("quito2"); } }}
         

    function optiselc2(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions2[counter].ansower;
            var allopcion=list2.children.length;
            if(userans==correct){ score += 1; ansower.style.background="green"; }
            else{ansower.style.background="red";}
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list2.children[i].textContent==correct){list2.children[i].style.background="green"; }
            else if(list2.children[i].textContent==""){
            list2.children[i].classList.add("quito2");}/*t*/
            else{ list2.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;
            seguinete2.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe2(index){/*t*/
            var numbe=document.querySelector(".footer2");
            numbe.innerHTML="<h3 style='font-size:22px;margin-top:10px;' > pregunta "+index+" de "+questions2.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto2=document.getElementById("col2");///t
            var fini2=document.querySelector(".finish2");
            
    function fin2(){/*t*/
            start_2.classList.remove("start-test2");
            box2.classList.add("active2");

            var minute=44-Math.floor(s2/60); 
            var second=60-s2 %60;
            if(second<10  ){second="0"+second;}
            if (minute <10 ) {minute="0"+minute;}
          
           
            if (score>=15) {
out2.innerHTML="<span style='color:green;'><h1 >genial. has probado<h1>"+ score +" de "+ questions2.length +"</h1></h1></span>";
inicio2.className="green2";
 fini2.innerHTML="<h3 style='font-size:22px;' > tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid2","green2");//poner local storge
foto2.src="feliz.jpg";} 
            else {
out2.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions2.length +"</h1></h1></span>";
inicio2.className="red2";
fini2.innerHTML="<h3 style='font-size:22px;'> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid2","red2");//poner local storge
foto2.src="triste.jpg";}  }

    function oki2_2(){/*t*/
    // window.location.reload();
    start_2.classList.remove("start-test2");
    start1.classList.remove("star-inicio");
    box2.classList.remove("active2");
    s2=2700;
    counter=0;
    num=1;
    score=0;
    quest2(counter);
    numbe2(num);}

/*time descont*/
     var s2=2700;
count2=document.querySelector(".timer2"),
countdown2=setInterval(function(){
setup2();},1000);/*t*/
function setup2(){/*t*/
    var minutes=Math.floor(s2/60);
        sec=s2 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count2.innerHTML=minutes+":"+sec;}
              if(s2<300){ count2.style.color="red";}
              else{count2.style.color="black";}
           if(s2>0){s2=s2-1; }
                  else{count2.innerHTML="<p style='color:red;'>time off</p>";}
                     }
     
    
    
    
    
var questions2=[
    {
    question:"El organismo que gestiona los impuestos estatales de Espa??a es???",
         ansower:"la Agencia Tributaria",         
         option:["El Consejo Econ??mico y Social","el Instituto Nacional de Estad??stica","la Agencia Tributaria"]},
         {
question:"Las competencias en materia de sanidad est??n gestionadas por???",
ansower:"las comunidades aut??nomas",         
option:["el Estado","las comunidades aut??nomas","los ayuntamientos"]},    
        
                 {
  question:"Cu??l de estos organismos depende de alg??n ministerio de Espa??a?",
 ansower:"La Direcci??n General de Tr??fico",         
 option:["El Tribunal de Cuentas","La Direcci??n General de Tr??fico","El Banco de Espa??a"]},
        
                         {
question:"Con respecto a los poderes del Estado, el Tribunal Constitucional es:",
 ansower:"independiente",          
 option:["dependiente","independiente","subordinado"]},
        
                                 {
 question:"El jefe del Estado es???",
    ansower:"el Rey",         
    option:["el presidente del Gobierno","el ministro de Asuntos Exteriores, Uni??n Europea y Cooperaci??n","el Rey"]},
    {        
    question:"La investigaci??n y persecuci??n de delitos es una tarea???",
    ansower:"de la policia nacional",         
    option:["de la policia nacional","del tribunal de la Haya","del ejercito"]},
    {
question:"Cu??ntas ciudades aut??nomas hay en Espa??a?",
ansower:"2",         
option:["17","2","50"]},    
   
            {
question:"Los poderes p??blicos aseguran la protecci??n de la familia desde una perspectiva social, econ??mica y???",
ansower:"de integraci??n",         
option:["laboral","jur??dica","de integraci??n"]},
   
                    {
question:"C??mo se llama la norma institucional b??sica de cada comunidad aut??noma?",
ansower:"Estatuto de autonom??a",          
option:["Estatuto de autonom??a","Normativa auton??mica","Ley de la comunidad"]},
   
                            {
question:"Las instalaciones culturales y deportivas p??blicas son competencia del???",
ansower:"Ayuntamiento",         
option:["Ayuntamiento","Ministerio de Educaci??n","Gobierno federal"]},        
        
 {       
    question:"Los ciudadanos pueden proponer nuevas leyes ante el Defensor del Pueblo",
    ansower:"Falso",         
    option:["Verdadero","Falso",""]},
    {
question:"Se puede obligar a alguien a declarar su ideolog??a, religi??n o creencias",
ansower:"Falso",         
option:["Verdadero","Falso",""]},    
   
            {
question:"Se puede limitar a una persona el derecho a entrar y salir libremente de Espa??a por motivos ideol??gicos",
ansower:"Verdadero",         
option:["Verdadero","Falso",""]},
   
                    {
question:"D??nde est??n las Islas Baleares?",
ansower:"En el mar Mediterr??neo",          
option:["En el mar Cant??brico","En el mar Mediterr??neo","En el oc??ano Atl??ntico"]},
   
                            {
question:"??En qu?? parte de Espa??a est?? situada la Meseta?",
ansower:"En el centro",         
option:["En el norte","En el sur","En el centro"]},        
        
{
    question:"Mar??a Zambrano, Mar??a Teresa Le??n y Rosa Chacel son???",
    ansower:"escritoras",         
    option:[ "pintoras","deportistas.","escritoras"]},
    {
question:"El Concierto de Aranjuez es una composici??n de???",
ansower:"Joaqu??n Rodrigo",         
option:["Manuel de Falla","Ainhoa Arteta","Joaqu??n Rodrigo"]},    
   
            {
question:"Cu??l es la profesi??n de Sara Baras?",
ansower:"Bailaora",         
option:["Escultora","Bailaora","Escritora"]},
   
                    {
question:"La familia compuesta por un padre y dos hijos de llama???",
ansower:"monoparental",          
option:["nuclear","monoparental","numerosa"]},
   
                            {
question:"El tiempo que dura el permiso por nacimiento y cuidado de un menor para la madre y el padre es de???",
ansower:"16 semanas",         
option:["14 semanas","16 semanas","20 semanas"]}, 

{
    question:"Cu??l es la tasa m??xima de alcohol en sangre permitida a los conductores,en gramos por litro (g/l)?",
         ansower:"0,5",         
         option:["0,5","0,7","0,9"]},
         {
question:"El tipo de vivienda m??s popular en Espa??a es???",
ansower:"el piso",         
option:["el chal??","la villa","el piso"]},    
        
                 {
  question:"Qu?? comunidad es conocida por la calidad de su aceite?",
 ansower:"Andaluc??a",         
 option:["Cantabria","Andaluc??a","La Rioja"]},
        
                         {
question:"C??mo se llama la revisi??n que deben pasar obligatoriamente los coches? ",
 ansower:"ITV (Inspecci??n T??cnica de Veh??culos)",          
 option:["ITV (Inspecci??n T??cnica de Veh??culos)","IBI (Impuesto sobre Bienes Inmuebles)","ITE (Inspecci??n T??cnica de edificios)"]},
        
                                 {
 question:"El aperitivo que acompa??a a la bebida en bares y restaurantes se llama???",
    ansower:"tapa",         
    option:["bocadillo","primer plato","tapa"]}, 
        ]