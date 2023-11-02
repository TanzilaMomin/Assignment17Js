const mainDiv=document.getElementById("main");
function generateElement(btnText,inputType,placeholder,idType){

const d1=document.createElement("div");
const t1=document.createElement("input");
const b1=document.createElement("button");

d1.setAttribute("class","input-group mb-3");

t1.setAttribute("type",inputType);
t1.setAttribute("class","form-control" );
t1.setAttribute("placeholder",placeholder);
t1.setAttribute("id",idType);

b1.setAttribute("class","btn btn-outline-secondary");
b1.setAttribute("type","button");
b1.innerText=btnText

d1.appendChild(b1);
d1.appendChild(t1);

mainDiv.appendChild(d1);
}
generateElement("Width","text","Enter width","wdt");
generateElement("Height","text","Enter height","hgt");
generateElement("BgColor","color","Enter color","bgcolor");
generateElement("B-Radius","text","Enter border radius","bradius");
generateElement("B-width","text","Enter border width","bwdt");
generateElement("B-Varient","text","Enter border variant","bvrt");
generateElement("B-color","Color","Enter color","bclr")


function submitData(){
  const objBG=document.getElementById("wdt").value;
  document.getElementById("show").style.width=objBG+"px";


  const objHgt=document.getElementById("hgt").value;
  document.getElementById("show").style.height=objHgt+"px";
  
  const objBg=document.getElementById("bgcolor").value;
  document.getElementById("show").style.backgroundColor=objBg;

  const objRadius=document.getElementById("bradius").value;
  document.getElementById("show").style.borderRadius= objRadius+"px";

  const objbwdt=document.getElementById("bwdt").value;
  const objbvrt=document.getElementById("bvrt").value;
  const objbclr=document.getElementById("bclr").value;
  document.getElementById("show").style.border=`${objbwdt}px ${ objbvrt} ${objbclr}`;

}
const btn1=document.createElement("button");
btn1.setAttribute("class","btn btn-warning");
btn1.setAttribute("onclick","submitData()");
btn1.innerText="submit";

function clearData(){
  document.getElementById("wdt").value="";
  document.getElementById("hgt").value="";
  document.getElementById("bgcolor").value="";
  document.getElementById("bradius").value="";
  document.getElementById("bwdt").value="";
  document.getElementById("bvrt").value="";
  document.getElementById("bclr").value="";

}
const btnsub=document.createElement("button");
btnsub.setAttribute("type","button");
btnsub.setAttribute("class","btn btn-danger");
btnsub.setAttribute("onclick","clearData()")
btnsub.innerText="cancel"



mainDiv.appendChild(btn1);
mainDiv.appendChild(btnsub);
