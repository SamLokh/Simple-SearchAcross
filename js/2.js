var l=window.localStorage;

var m;
var mm=0;
var ky,res;

window.onload=function(){
	for(m=0;m<l.length;m++)
	{
		//alert("Hi");
		if(l.key(m)=="words" || l.key(m)=="wordcount" || l.key(m)=="key" || l.key(m)=="tempid")
			{
				continue;
			}
		else if(document.getElementById("wordspara").innerHTML=="")
			{	
				var st=l.key(m);
				console.log(l.key(m));
				ky=st;
				mm++;
				//st=mm+".  "+"\xa0"+st;
				//res=st.link("./index.html");
			
				res=mm+".  "+"\xa0"+st+"\xa0"+"("+l.getItem(l.key(m))+")";
	
				var br=document.createElement("br");
				document.getElementById("wordspara").appendChild(br);
				
				var link=document.createElement("a");
				//link.id=st;
				link.setAttribute("id",st);
				link.textContent=res;
				link.href="./index.html";
				//link.href="javascript:extractfromlink(this.id);";
				//link.setAttribute("onclick",extractfromlink);
				//var node=document.getElementById("wordspara");
				
				//link.onclick=extractfromlink(link.getAttribute("id"));
				link.onclick=function(){
					var temp=this.getAttribute("id");
					//alert("st : "+temp);
					l.setItem("tempid",temp);
				}
				
				
				document.getElementById("wordspara").appendChild(link);
				//br.appendChild(link);
				
				var br2=document.createElement("br");
				br2.setAttribute("id","br2");
				document.getElementById(st).appendChild(br2);
				
				
				//link.appendChild("wordspara");
		
				//l.setItem("tempid",st);     //tempid will store the id of the last added anchor element.		
				
				//res=mm+".  "+"\xa0"+res+"\xa0"+"("+l.getItem(l.key(m))+")";
				//st=" \n "+st+" \n ";
				//document.getElementById("wordspara").innerHTML=res+"<br>";
			}
		else
			{
				var st=l.key(m);
				console.log(l.key(m));
				ky=st;
				mm++;
				//st=mm+".  "+"\xa0"+st;
				//res=st.link("./index.html");
				res=mm+".  "+"\xa0"+st+"\xa0"+"("+l.getItem(l.key(m))+")";
				
				
				
				var link=document.createElement("a");
				//link.id=st;
				link.setAttribute("id",st);
				//link.setAttribute("textContent",res);
				link.textContent=res;
				link.href="./index.html";
				//link.href="javascript:extractfromlink(document.getElementById('st'));";
				//link.setAttribute("onclick",extractfromlink(document.getElementById('st')));
				/*
				link.onclick=function(){
					//l.setItem("tempid2",link.getAttribute("id"));
					extractfromlink(this.id);
					alert("in this unnamed function");
				}
				*/
				link.onclick=function(){
					var temp=this.getAttribute("id");
					//alert("st : "+temp);
					l.setItem("tempid",temp);
				}
				//var temp=l.getItem("tempid");
				//alert("temp : "+temp);
				document.getElementById("wordspara").appendChild(link);
				
			
				var br3=document.createElement("br");
				br3.setAttribute("id","br3");
				document.getElementById(st).appendChild(br3);
				
				
				//link.appendChild(temp);
				
				
				//l.setItem("tempid",st);
				
				
				//st=" \n "+st+" \n ";
				//var temp=document.getElementById("wordspara").innerHTML;
				//temp=temp+" \n ";
				//document.getElementById("wordspara").innerHTML=temp+res+"<br>";
			}
	}
	document.getElementById("s4").textContent=mm;
}

function extractfromlink(temp)
{
	alert("In extractfromlink() function right now!");
	//var temp=this.id;
	//alert("id : "+temp.id);
}

/*
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
*/
/*//					Displaying in a paragraph : 


var l=window.localStorage;

var m;
var mm=0;
var ky,res;

window.onload=function(){
	for(m=0;m<l.length;m++)
	{
		//alert("Hi");
		if(l.key(m)=="words" || l.key(m)=="wordcount" || l.key(m)=="key")
			{
				continue;
			}
		else if(document.getElementById("wordspara").innerHTML=="Hello")
			{	
				var st=l.key(m);
				console.log(l.key(m));
				ky=st;
				mm++;
				//st=mm+".  "+"\xa0"+st;
				res=st.link("./index.html");
				res=mm+".  "+"\xa0"+res+"\xa0"+"("+l.getItem(l.key(m))+")";
				//st=" \n "+st+" \n ";
				document.getElementById("wordspara").innerHTML=res+"<br>";
			}
		else
			{
				var st=l.key(m);
				console.log(l.key(m));
				ky=st;
				mm++;
				//st=mm+".  "+"\xa0"+st;
				res=st.link("./index.html");
				res=mm+".  "+"\xa0"+res+"\xa0"+"("+l.getItem(l.key(m))+")";
				//st=" \n "+st+" \n ";
				var temp=document.getElementById("wordspara").innerHTML;
				//temp=temp+" \n ";
				document.getElementById("wordspara").innerHTML=temp+res+"<br>";
			}
	}
	document.getElementById("s4").textContent=mm;
}

*/
/*
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
*/
/*				Displaying from the array : 					


var a=window.localStorage;
//var b=window.localStorage;


//window.onload=displayallwords();

window.onload=function()

//function displayallwords()
{	
	var darr;
	var count=0;
	var limit=JSON.parse(a.getItem("words"));
	
	
	if(a.getItem("words")!="" || a.getItem("words")!=null)
		{
	for(var i=1;i<=limit[0];i++)
		{
					//var temp=a.getItem("words");
					//var temp2;
					//darr=JSON.parse(temp);
					
					
					if(document.getElementById("wordspara").innerHTML=="Hello")
			{		
				darr=JSON.parse(a.getItem("words"));
				//res=st.link("./page3.html");
				var temp2;
				temp2=darr[i];
				temp2=i+"."+"\xa0"+temp2;
				//st=" \n "+st+" \n ";
				document.getElementById("wordspara").innerHTML=temp2+"<br>";
				count++;
			}
		else
			{
				darr=JSON.parse(a.getItem("words"));
				//res=st.link("./page3.html");
				var temp2;
				temp2=darr[i];
				temp2=i+"."+"\xa0"+temp2;
				//console.log(i);
				var temp3=document.getElementById("wordspara").innerHTML;
				//temp=temp+" \n ";
				document.getElementById("wordspara").innerHTML=temp3+temp2+"<br>";
				count++;
			}
				//console.log("In for loop");	
				}
			document.getElementById("s4").textContent=count;
		}
			else
				{
					alert("No words");
					document.getElementById("s4").textContent=count;
				}
		}



*/