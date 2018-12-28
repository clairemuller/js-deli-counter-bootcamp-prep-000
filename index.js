
function takeANumber(line, name) {
  line = line.push(name);
  return `Welcome, ${name}. You are number ${line} in line.`;
}

/* my original code
function nowServing(line) {
  if (line.length >= 1) {
    return `Currently serving ${line.shift(0)}.`;
  } else if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
}
*/

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`;
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty.";
  }
  
  const arr = [];
  
  for (let i = 0; i < line.length; i++) {
    arr.push(` ${i + 1}. ${line[i]}`);
  }
  return `The line is currently:${arr}`;
    
  
}


