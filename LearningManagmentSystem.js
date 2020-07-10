function validation(){
  var name=document.forms["FeedBack"]["Name"];
  var email=document.forms["FeedBack"]["Email"];
  var comment=document.forms["FeedBack"]["Comment"];
  if(name.value==""){
    alert("Please Enter Your Name.");
    name.focus();
    return false;
  }
  if(email.value==""){
    alert("Please Enter Your Email.");
    email.focus();
    return false;
  }
  if(email.value.indexOf("@",0)<0||email.value.indexOf(".com",0)<0){
    alert("Please Enter Valid Email ID");
    email.focus();
    return false;
  }
  if(comment.value==""){
    alert("You Have left the Comment box Empty");
    comment.focus();
    return false;
  }
  return true;
}
