export default validate = (val, rules, connectedValue) => {
  let isValid = true;
  for(let rule in rules){
    if(rules.hasOwnProperty(rule)){
      switch(rule){
        case 'isEmail':
          isValid = isValid && emailValidator(val);
        break;
        case 'minLength':
          isValid = isValid && minLengthValidator(val, rules[rule]);
        break;
        case 'equalTo':
          isValid = isValid && equalToValidator(val, connectedValue[rule]);
        break;
      }
    }
  }
  return isValid;
}

const emailValidator = val => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(val);
}

const minLengthValidator = (val, minLength) => {
  return val.length >= minLength;
}

const equalToValidator = (val, checkValue) => {
  return val === checkValue;
}