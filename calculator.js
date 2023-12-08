function getUser(string1){
  document.querySelector('#display').value += string1; 
}

function clearDisplay(){
  document.querySelector('#display').value = '';
}
 function evaluation()
 {
  let displayValue = document.querySelector('#display').value;
  let result = eval(displayValue);
  document.querySelector('#display').value = result;
 }