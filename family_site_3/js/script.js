var shans = 1;//не 0
var gVar = 0;
var gVar_ = 0;
var ran1 = 0;
var ran2 = 0;
var t = 0;
var s1=0;
var s2=0;
var pa=0;
var ma=0;

function e2(){
	document.getElementById("q1").style.display = "block";
	document.getElementById("q2").style.display = "none";
	document.getElementById("q3").style.display = "none";
	document.getElementById("q4").style.display = "none";
	document.getElementById("q5").style.display = "none";
	document.getElementById("q6").style.display = "none";
	document.getElementById("q7").style.display = "none";
	document.getElementById("q8").style.display = "none";
	document.getElementById("q9").style.display = "none";
	document.getElementById("q10").style.display = "none";
	document.getElementById("q11").style.display = "none";
	document.getElementById("q12").style.display = "none";
	document.getElementById("q13").style.display = "none";
	document.getElementById("q14").style.display = "none";
	document.getElementById("q15").style.display = "none";
	document.getElementById("q16").style.display = "none";
	document.getElementById("q17").style.display = "none";
	document.getElementById("q18").style.display = "none";
	document.getElementById("q19").style.display = "none";
	document.getElementById("q20").style.display = "none";
	document.getElementById("start").style.display = "block";
	document.getElementById("garaz").style.display = "none";
	document.getElementById("zal").style.display = "none";
	document.getElementById("kabinet").style.display = "none";
	document.getElementById("hlam").style.display = "none";
	document.getElementById("kyxna").style.display = "none";
	document.getElementById("spalna").style.display = "none";
	document.getElementById("moa_komhata").style.display = "none";
	document.getElementById("sestra").style.display = "none";
	document.getElementById("stolovaa").style.display = "none";
	document.getElementById("tyalet" ).style.display = "none";
	document.getElementById("end" ).style.display = "none";
	document.getElementById("e1" ).style.display = "none";
	document.getElementById("e2" ).style.display = "none";
	shans=shans*1.5;
 gVar = 0;
 gVar_ = 0;
 ran1 = 0;
 ran2 = 0;
 t = 0;
 s1=0;
 s2=0;
 pa=0;
 ma=0;


// window.location.href = 'game.html'
}
function e1(){
	window.open('../index.html');
	 e3();
}
function e3(){
    myWin = open("start.html");
    window.top.close();
}

function sum3(){
	gVar=gVar+1;
	if (gVar==4)
	{
		clear();
		document.getElementById("start").style.display = "none";
		document.getElementById("garaz").style.display = "none";
		document.getElementById("zal").style.display = "none";
		document.getElementById("kabinet").style.display = "none";
		document.getElementById("hlam").style.display = "none";
		document.getElementById("kyxna").style.display = "none";
		document.getElementById("spalna").style.display = "none";
		document.getElementById("moa_komhata").style.display = "none";
		document.getElementById("sestra").style.display = "none";
		document.getElementById("stolovaa").style.display = "none";
		document.getElementById("tyalet" ).style.display = "none";
		document.getElementById("end" ).style.display = "block";
		document.getElementById("e1" ).style.display = "block";
	document.getElementById("e2" ).style.display = "block";
	}
	document.getElementById("s1" ).style.display = "none";
	document.getElementById("s2" ).style.display = "none";
	document.getElementById("ma" ).style.display = "none";
	document.getElementById("pa" ).style.display = "none";
	s1=1;
}
function sum4(){
	gVar=gVar+1;
	if (gVar==4)
	{
		clear();
		document.getElementById("start").style.display = "none";
		document.getElementById("garaz").style.display = "none";
		document.getElementById("zal").style.display = "none";
		document.getElementById("kabinet").style.display = "none";
		document.getElementById("hlam").style.display = "none";
		document.getElementById("kyxna").style.display = "none";
		document.getElementById("spalna").style.display = "none";
		document.getElementById("moa_komhata").style.display = "none";
		document.getElementById("sestra").style.display = "none";
		document.getElementById("stolovaa").style.display = "none";
		document.getElementById("tyalet" ).style.display = "none";
		document.getElementById("end" ).style.display = "block";
		document.getElementById("e1" ).style.display = "block";
	document.getElementById("e2" ).style.display = "block";
	}
	document.getElementById("s1" ).style.display = "none";
	document.getElementById("s2" ).style.display = "none";
	document.getElementById("ma" ).style.display = "none";
	document.getElementById("pa" ).style.display = "none";
	s2=1;
}
function sum2(){
	gVar=gVar+1;
	if (gVar==4)
	{
		clear();
		document.getElementById("start").style.display = "none";
		document.getElementById("garaz").style.display = "none";
		document.getElementById("zal").style.display = "none";
		document.getElementById("kabinet").style.display = "none";
		document.getElementById("hlam").style.display = "none";
		document.getElementById("kyxna").style.display = "none";
		document.getElementById("spalna").style.display = "none";
		document.getElementById("moa_komhata").style.display = "none";
		document.getElementById("sestra").style.display = "none";
		document.getElementById("stolovaa").style.display = "none";
		document.getElementById("tyalet" ).style.display = "none";
		document.getElementById("end" ).style.display = "block";
		document.getElementById("e1" ).style.display = "block";
	document.getElementById("e2" ).style.display = "block";
	}
	document.getElementById("s1" ).style.display = "none";
	document.getElementById("s2" ).style.display = "none";
	document.getElementById("ma" ).style.display = "none";
	document.getElementById("pa" ).style.display = "none";
	pa=1;
}
function sum1(){
	gVar=gVar+1;
	if (gVar==4)
	{
		clear();
		document.getElementById("start").style.display = "none";
		document.getElementById("garaz").style.display = "none";
		document.getElementById("zal").style.display = "none";
		document.getElementById("kabinet").style.display = "none";
		document.getElementById("hlam").style.display = "none";
		document.getElementById("kyxna").style.display = "none";
		document.getElementById("spalna").style.display = "none";
		document.getElementById("moa_komhata").style.display = "none";
		document.getElementById("sestra").style.display = "none";
		document.getElementById("stolovaa").style.display = "none";
		document.getElementById("tyalet" ).style.display = "none";
		document.getElementById("end" ).style.display = "block";
		document.getElementById("e1" ).style.display = "block";
	document.getElementById("e2" ).style.display = "block";
	}
	document.getElementById("s1" ).style.display = "none";
	document.getElementById("s2" ).style.display = "none";
	document.getElementById("ma" ).style.display = "none";
	document.getElementById("pa" ).style.display = "none";
	ma=1;
}


function clear() {
	document.getElementById("q1").style.display = "none";
	document.getElementById("q2").style.display = "none";
	document.getElementById("q3").style.display = "none";
	document.getElementById("q4").style.display = "none";
	document.getElementById("q5").style.display = "none";
	document.getElementById("q6").style.display = "none";
	document.getElementById("q7").style.display = "none";
	document.getElementById("q8").style.display = "none";
	document.getElementById("q9").style.display = "none";
	document.getElementById("q10").style.display = "none";
	document.getElementById("q11").style.display = "none";
	document.getElementById("q12").style.display = "none";
	document.getElementById("q13").style.display = "none";
	document.getElementById("q14").style.display = "none";
	document.getElementById("q15").style.display = "none";
	document.getElementById("q16").style.display = "none";
	document.getElementById("q17").style.display = "none";
	document.getElementById("q18").style.display = "none";
	document.getElementById("q19").style.display = "none";
	document.getElementById("q20").style.display = "none";
	
	ran1=Math.floor(Math.random() * shans); 
				document.getElementById("s1" ).style.display = "none";
	document.getElementById("s2" ).style.display = "none";
	document.getElementById("ma" ).style.display = "none";
	document.getElementById("pa" ).style.display = "none";
	//ran1=0;
	//alert ("["+ran1+"]"+s1+" "+s2+" "+pa+" "+ma);
	if (ran1==0)
	while (!(t == 1)) { 
		ran2=Math.floor(Math.random() * 4); 
		//alert (ran2);
		switch (ran2) {
			case 0:
			{
				if (s1==0)
				{
					t=1;
					document.getElementById("s1" ).style.display = "block";
				}
			}
			break;
			case 1:
			{
				if (s2==0)
				{
					t=1;
					document.getElementById("s2" ).style.display = "block";
				}
			}
			break;
			case 2:
			{
				if (pa==0)
				{
					t=1;
					document.getElementById("pa" ).style.display = "block";
				}
			}
			break;
			case 3:
			{
				if (ma==0)
				{
					t=1;
					document.getElementById("ma" ).style.display = "block";
				}
			}
			break;
			default:
			{
				alert( "Нет таких значений["+ran2 +" "+t+"]");
			}
		}
		if (gVar==4)
		{
			break;
		}
		
		
	}
	t=0;
	
}

function start() {//+++++++++
	document.getElementById("start").style.display = "none";
	document.getElementById("garaz").style.display = "none";
	document.getElementById("zal").style.display = "none";
	document.getElementById("kabinet").style.display = "none";
	document.getElementById("hlam").style.display = "none";
	document.getElementById("kyxna").style.display = "none";
	document.getElementById("spalna").style.display = "none";
	document.getElementById("moa_komhata").style.display = "none";
	document.getElementById("sestra").style.display = "none";
	document.getElementById("stolovaa").style.display = "block";
	document.getElementById("tyalet" ).style.display = "none";
	clear();
}
function garaz() {
	document.getElementById("start").style.display = "none";
	document.getElementById("garaz").style.display = "block";
	document.getElementById("zal").style.display = "none";
	document.getElementById("kabinet").style.display = "none";
	document.getElementById("hlam").style.display = "none";
	document.getElementById("kyxna").style.display = "none";
	document.getElementById("spalna").style.display = "none";
	document.getElementById("moa_komhata").style.display = "none";
	document.getElementById("sestra").style.display = "none";
	document.getElementById("stolovaa").style.display = "none";
	document.getElementById("tyalet" ).style.display = "none";
	clear();
	document.getElementById("q19").style.display = "block";
	
}
function zal() {//+++++++++
	document.getElementById("start").style.display = "none";
	document.getElementById("garaz").style.display = "none";
	document.getElementById("zal").style.display = "block";
	document.getElementById("kabinet").style.display = "none";
	document.getElementById("hlam").style.display = "none";
	document.getElementById("kyxna").style.display = "none";
	document.getElementById("spalna").style.display = "none";
	document.getElementById("moa_komhata").style.display = "none";
	document.getElementById("sestra").style.display = "none";
	document.getElementById("stolovaa").style.display = "none";
	document.getElementById("tyalet" ).style.display = "none";
	clear();
	document.getElementById("q11").style.display = "block";
	document.getElementById("q12").style.display = "block";
	document.getElementById("q13").style.display = "block";
	document.getElementById("q14" ).style.display = "block";
	
}
function kabinet() {
	document.getElementById("start").style.display = "none";
	document.getElementById("garaz").style.display = "none";
	document.getElementById("zal").style.display = "none";
	document.getElementById("kabinet").style.display = "block";
	document.getElementById("hlam").style.display = "none";
	document.getElementById("kyxna").style.display = "none";
	document.getElementById("spalna").style.display = "none";
	document.getElementById("moa_komhata").style.display = "none";
	document.getElementById("sestra").style.display = "none";
	document.getElementById("stolovaa").style.display = "none";
	document.getElementById("tyalet" ).style.display = "none";
	clear();
	document.getElementById("q16" ).style.display = "block";
}
function kyxna() {
	document.getElementById("start").style.display = "none";
	document.getElementById("garaz").style.display = "none";
	document.getElementById("zal").style.display = "none";
	document.getElementById("kabinet").style.display = "none";
	document.getElementById("hlam").style.display = "none";
	document.getElementById("kyxna").style.display = "block";
	document.getElementById("spalna").style.display = "none";
	document.getElementById("moa_komhata").style.display = "none";
	document.getElementById("sestra").style.display = "none";
	document.getElementById("stolovaa").style.display = "none";
	document.getElementById("tyalet" ).style.display = "none";
	clear();
	document.getElementById("q17").style.display = "block";
	document.getElementById("q18").style.display = "block";
}

function sestra() {//+++++++++
	document.getElementById("start").style.display = "none";
	document.getElementById("garaz").style.display = "none";
	document.getElementById("zal").style.display = "none";
	document.getElementById("kabinet").style.display = "none";
	document.getElementById("hlam").style.display = "none";
	document.getElementById("kyxna").style.display = "none";
	document.getElementById("spalna").style.display = "none";
	document.getElementById("moa_komhata").style.display = "none";
	document.getElementById("sestra").style.display = "block";
	document.getElementById("stolovaa").style.display = "none";
	document.getElementById("tyalet" ).style.display = "none";
	clear();
	document.getElementById("q8" ).style.display = "block";
	
}
function spalna() {//+++++++++
	document.getElementById("start").style.display = "none";
	document.getElementById("garaz").style.display = "none";
	document.getElementById("zal").style.display = "none";
	document.getElementById("kabinet").style.display = "none";
	document.getElementById("hlam").style.display = "none";
	document.getElementById("kyxna").style.display = "none";
	document.getElementById("spalna").style.display = "block";
	document.getElementById("moa_komhata").style.display = "none";
	document.getElementById("sestra").style.display = "none";
	document.getElementById("stolovaa").style.display = "none";
	document.getElementById("tyalet" ).style.display = "none";
	clear();
	document.getElementById("q9" ).style.display = "block";
}
function stolovaa() {//+++++++++
	document.getElementById("start").style.display = "none";
	document.getElementById("garaz").style.display = "none";
	document.getElementById("zal").style.display = "none";
	document.getElementById("kabinet").style.display = "none";
	document.getElementById("hlam").style.display = "none";
	document.getElementById("kyxna").style.display = "none";
	document.getElementById("spalna").style.display = "none";
	document.getElementById("moa_komhata").style.display = "none";
	document.getElementById("sestra").style.display = "none";
	document.getElementById("stolovaa").style.display = "block";
	document.getElementById("tyalet" ).style.display = "none";
	clear();
	document.getElementById("q2" ).style.display = "block";
	document.getElementById("q3" ).style.display = "block";
	document.getElementById("q4" ).style.display = "block";
	
	document.getElementById("end" ).style.display = "none";
}
function tyalet() {
	document.getElementById("start").style.display = "none";
	document.getElementById("garaz").style.display = "none";
	document.getElementById("zal").style.display = "none";
	document.getElementById("kabinet").style.display = "none";
	document.getElementById("hlam").style.display = "none";
	document.getElementById("kyxna").style.display = "none";
	document.getElementById("spalna").style.display = "none";
	document.getElementById("moa_komhata").style.display = "none";
	document.getElementById("sestra").style.display = "none";
	document.getElementById("stolovaa").style.display = "none";
	document.getElementById("tyalet" ).style.display = "block";
	clear();
	document.getElementById("q20" ).style.display = "block";
}
function moa_komhata() {//+++++++++
	document.getElementById("start").style.display = "none";
	document.getElementById("garaz").style.display = "none";
	document.getElementById("zal").style.display = "none";
	document.getElementById("kabinet").style.display = "none";
	document.getElementById("hlam").style.display = "none";
	document.getElementById("kyxna").style.display = "none";
	document.getElementById("spalna").style.display = "none";
	document.getElementById("moa_komhata").style.display = "block";
	document.getElementById("sestra").style.display = "none";
	document.getElementById("stolovaa").style.display = "none";
	document.getElementById("tyalet" ).style.display = "none";
	clear();
	document.getElementById("q10" ).style.display = "block";
}
function hlam() {//+++++++++
	document.getElementById("start").style.display = "none";
	document.getElementById("garaz").style.display = "none";
	document.getElementById("zal").style.display = "none";
	document.getElementById("kabinet").style.display = "none";
	document.getElementById("hlam").style.display = "block";
	document.getElementById("kyxna").style.display = "none";
	document.getElementById("spalna").style.display = "none";
	document.getElementById("moa_komhata").style.display = "none";
	document.getElementById("sestra").style.display = "none";
	document.getElementById("stolovaa").style.display = "none";
	document.getElementById("tyalet" ).style.display = "none";
	clear();
	document.getElementById("q15").style.display = "block";
}
function lesnica() {//+++++++++
	document.getElementById("start").style.display = "none";
	document.getElementById("garaz").style.display = "none";
	document.getElementById("zal").style.display = "none";
	document.getElementById("kabinet").style.display = "none";
	document.getElementById("hlam").style.display = "none";
	document.getElementById("kyxna").style.display = "none";
	document.getElementById("spalna").style.display = "none";
	document.getElementById("moa_komhata").style.display = "none";
	document.getElementById("sestra").style.display = "none";
	document.getElementById("stolovaa").style.display = "block";
	document.getElementById("tyalet" ).style.display = "none";
	clear();
	document.getElementById("q2" ).style.display = "block";
	document.getElementById("q3" ).style.display = "block";
	document.getElementById("q4" ).style.display = "block";					document.getElementById("q2" ).style.display = "block";
	document.getElementById("q5" ).style.display = "block";
	document.getElementById("q6" ).style.display = "block";
	document.getElementById("q7" ).style.display = "block";				
}