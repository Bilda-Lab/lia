//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=2;
var score=0; scoreMax=8; scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="felicidades has avanzado mucho ! "; messageTime=""; messageError="vuelve a intentarlo"; messageErrorG="vuelve a intentarlo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="anVlZ29fYWhvcmNhZG8="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["RE9NSU5PUw==","REFET1Mg","TlVNRVJPUyA=","QVNDRU5ERU5URSA=","TElORUFTIA==","REVTQ0VOREVOVEU=","QUJBQ08=","REVDSU1BTA==","",""];imaW=["0_b8bc332e-e762-461e-a33b-f51952aec1ea.__CR0_0_970_600_PT0_SX970_V1___.jpg","0_descarga__43_.jpg","0_descarga__14_.png","0_desktop_d1e3f62b-bc58-4bfc-8651-993e88653e50.png","0_descarga__13_.png","0_descarga__12_.png","0_images__23_.jpg","0_descarga__38_.jpg","",""];queW=["lo utiliizamos en juegos diveridos en grupos si lo organizas bien ganas. "," jugamos al tablero y tambien tiramos a lo lejos  que es?","soy amigo de las matematicas sin mi non existiria el conteo","voy subiendo de menor a mayor ","soy la union de varios puntos ","voy desde el mayor al menor","tiene muchos colores y  si quieres saber quien soy empieza ac contar ahora","separadas por una coma (o un punto en algunos contextos), representando cantidades menores que la unidad. En otras palabras, son números que no son enteros y se utilizan para expresar medidas o fracciones más precisas. ","",""];var wordsL=[7,5,7,10,6,11,5,7,"",""];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="juego_ahorcado_resources/media/"; textBNext="";
