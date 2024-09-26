function scuberGreetingForFeet(distance){
  let result;
  if(distance<=400){
    return result='This one is on me!';
  }// Write your code here!
  else if(distance>400 && distance<=4000){
    return result='That will be twenty bucks.';
  }
  else if(distance>2000){
    return result='+I will gladly take your thirty bucks.';
  }
  else if(distance>2500){
    return result='No can do.';
  }
 
  }
function ternaryCheckCity(city){

  return city==="NYC" ?  'Ok, sounds good.'  :'No go.'

  // Write your code here!
}

function switchOnCharmFromTip(tip){
  let result=null
  switch(true){
    case tip=="generous":
    result="Thank you so much.";
    break
    case tip ==='not as generous':
      result="Thank you.";
      break;
      default:
        result="Bye."
  }
  // Write your code here!
  return result;
}

