const sentence = ["|","/","-","\\","|","/","-","\\","|"];
const typeOut = function(symbol){
  let time = 100;
  for (const char of symbol) {
    time += 200;
    setTimeout(() => {process.stdout.write('\r' + char + '   ');}, time);
  }
  }
  typeOut(sentence);