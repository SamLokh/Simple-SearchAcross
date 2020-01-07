document.getElementById("sbutton1").addEventListener("click",fun1);
document.getElementById("sbutton2").addEventListener("click",fun2);
document.getElementById("sbutton3").addEventListener("click",fun3);
document.getElementById("sbutton4").addEventListener("click",more);
document.getElementById("sbox1").addEventListener("blur",saveword);

/* This does not work
document.getElementById("sbox1").addEventListener("keyup",function(event){
	event.preventDefault();
	if(event.keyCode===13)
		{
			document.getElementById("sbox1").blur();
			//this.blur();
			//this.focusout();
		}
*/

window.onload=function(){
	if(a.getItem('tempid')!="" && a.getItem('tempid')!=null && a.getItem('tempid')!="null")
		{
			//alert("a.getItem('tempid') : "+a.getItem("tempid"));
			document.getElementById("sbox1").value=a.getItem("tempid");
		}
	else
		{
			//document.getElementById("sbox1").value="";
		}
}

var b=window.localStorage;

function previously_entered()
{
	var limit;
	
	if(a.getItem("words")=="" || a.getItem("words")==null)
		{
			limit=JSON.parse(b.getItem("words"));
			
		}
}

function addnstore()
{
	var arr,data;
	var cou;

	if(a.getItem("words")=="" || a.getItem("words")==null)
		{
			cou=1;
			arr=[cou,b.getItem("key")];
			a.setItem("words",JSON.stringify(arr));
		}
	else
		{
			data=JSON.parse(a.getItem("words"));
			data.push(b.getItem("key"));
			data[0]=data[0]+1;
			a.setItem("words",JSON.stringify(data));
		}
	
	var arr2,data2,cou2;
	var wcou;
	
	var word=a.getItem("key");
	//alert("word : "+word);
	if((a.getItem(word))=="" || (a.getItem(word))==null)
		{
			//alert("In if")
			if(a.getItem("wordcount")=="" || a.getItem("wordcount")==null)
				{
					//alert("In if of if")
					wcou=1;
					a.setItem("wordcount",wcou);	
				}
			else
				{
					//alert("In else of if of if")
					var temp=parseInt(a.getItem("wordcount"));
					temp=temp+1;
					
					a.setItem("wordcount",temp);
				}
			a.setItem(word,1);
		}
	else
		{
			//alert("In else of if")
			var temp=parseInt(a.getItem(word));
			temp=temp+1;
			a.setItem(word,temp);
		}
	
}




var keyy=document.getElementById("sbox1");


var a=window.localStorage;



function saveword()
{
	if(document.getElementById("sbox1").value!="") //&& (a.getItem("tempid")!=null || a.getItem("tempid")!="")
		{
	   		
			keyy.value=keyy.value.toLowerCase();
			a.setItem("key",keyy.value);
			a.setItem("tempid",null);
		}
	else
		{
			//document.getElementById("sbox1").focus();
			//alert("working");
		}
}



/*
function saveword()
{
	var bit=check();
	if(bit==1)
		{
			keyy.value=keyy.value.toLowerCase();
			a.setItem("key",keyy.value);
		}
	else
		{
			document.getElementById("sbox1").focus();
			//alert("working");
		}
}


function check()
{
	
	if(document.getElementById("sbox1").value!="")
		return 1;
	else
		return 0;
	
}
*/

function fun1()
{
	var word=document.getElementById("sbox1").value;
	
	if(word=="")
		{
			alert("Please the word.");
			document.getElementById("sbox1").focus();
		}
	else
		{	
			addnstore();
			word=word.toLowerCase();
			
			var llink="https://www.investopedia.com/terms/"+word[0]+"/";
			//wlink="https://www.investopedia.com/terms/"+name[0]+"/"+"name"+".asp";
    		var wlink=llink+word+".asp";
			
			var ch;
			ch = parseInt(prompt("Enter the number corresponding to your choice : \n"+"\n 1. Word Search ("+wlink+")"+"\n 2. Letter Search ("+llink+")"+"\n 3. Exit \n",1));
			
			switch(ch)
			{
				case 1 :
				window.open(wlink,"_self");
				break;
				
				case 2 : 
				window.open(llink,"_self");
				break;
				
				case 3 : 
				break;
				
				default :
				alert("Invalid choice dude!");

			}
		
		}
}


function fun2()
{
	var word=document.getElementById("sbox1").value;
	
	if(word=="")
		{
			alert("Please the word.");
			document.getElementById("sbox1").focus();
		}
	else
		{	
			addnstore();
			word=word.toLowerCase();
			
			var link="https://www.google.com/search?q=define%3A"+word+"&oq=define%3A"+word+"&aqs=chrome..69i57j69i58.4062j0j7&ie=UTF-8";
			
			window.open(link,"_self");
		}
}

function fun3()
{
	var word=document.getElementById("sbox1").value;
	
	if(word=="")
		{
			alert("Please the word.");
			document.getElementById("sbox1").focus();
		}
	else
		{	
			addnstore();
			word=word.toLowerCase();
			
			var link="https://en.oxforddictionaries.com/definition/"+word;
			
			window.open(link,"_self");
		}
}

function more()
{
	
	var link1,link2;
	
	var word=document.getElementById("sbox1").value;
	
	if(word=="")
		{
			alert("Please the word.");
			document.getElementById("sbox1").focus();
		}
	else
		{	
			word=word.toLowerCase();
	
			link1="https://en.wiktionary.org/wiki/"+word;
			link2="";
			
			
			var ch;
			ch = parseInt(prompt("Enter the number corresponding to your choice : \n"+"\n 1. Wiktionary "+"\n 2. Coming Soon "+"\n 3. Exit \n",1));
			
			switch(ch)
			{
				case 1 :
				addnstore();
				window.open(link1,"_self");
				break;
				
				case 2 : 
				alert("Coming Soon");
				//window.open(link2,"_self");
				break;
				
				case 3 : 
				break;
				
				default :
				alert("Invalid choice dude!");

			}
		

			
	
		}
}