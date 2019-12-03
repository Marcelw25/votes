$(document).ready(function(){
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#vote').show();
  } else if (age === 18){
    alert("Congratulations On be able to vote!");
    $('#vote').show()
  }
  else { (age < 18)
    $('#under-18').show();
}
});
