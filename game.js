let words = {
 'apple': 'яблоко',
 'house': 'дом',
 'mouse': 'мышь'
};
let word; 
let ball = 0; 
let errors = 0; 
let translate; 
label: 
while (true) { 
    for (word in words) { 
       alert("Слово: " + word);
       translate = prompt("Введите перевод, для завершения -'!'"); 
       if (translate == "!") break label; 
       if (translate == words[word]) { 
         alert("Правильно!");
         ball++;
       } else { 
         alert("Неправильно!");
         errors++;
       }
     }
}
alert("Правильно: " + ball + ", неправильно: " + errors);
for (word in words) {
    document.write(word + ': ' + words[word] + '<br>'); 
}