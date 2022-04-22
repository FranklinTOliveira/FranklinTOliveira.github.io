function submitcomment() {

  let request;
  
  try {
  
  request= new XMLHttpRequest();
  
  }
  
  catch (tryMicrosoft) {
  
  try {
  
  request= new ActiveXObject("Msxml2.XMLHTTP");
  }
  
  catch (otherMicrosoft) 
  {
  try {
  request= new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  catch (failed) {
  request= null;
  }
  }
  }
  
  
  let webpage= location.href;
  
  position= webpage.lastIndexOf("/"); 
  
  let lastpart= webpage.substring(position + 1);
  
  let period= lastpart.indexOf(".");
  
  let complete= lastpart.substring(0, period);
  
  complete= complete.replace(/-/g, "_");
  
  
  let url= "usercomments.php";
  let username= document.getElementById("name_entered").value;
  let usercomment= document.getElementById("comment_entered").value;
  let vars= "name="+username+"&comment="+usercomment+"&webpage="+complete;
  request.open("POST", url, true);
  
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
  request.onreadystatechange= function() {
  if (request.readyState == 4 && request.status == 200) {
    let return_data=  request.responseText;
    document.getElementById("showcomments").innerHTML= return_data;
  }
  }
  
  request.send(vars);
  }