function isUpperCase(str) {
  if (str.length === 0) {
    return true;
  }

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === str[idx].toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log(isUpperCase("ACSKLDFJSgSKLDFJSKLDFJ"));
