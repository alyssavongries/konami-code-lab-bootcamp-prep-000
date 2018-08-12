const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

 function init() {
   let index = 0;
  document.addEventListener('keydown', function(e){
    const key = e.key;
    if (key === codes[index]){
      index++;
    }
    if(index === codes.length){
        alert("Yes!");
        index = 0;
    }else{
      index = 0;
    }
    })
 }
 
init();
