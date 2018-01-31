const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let body = document.body;
  
    body.addEventListener('keydown', function(e) {
      if (e === code){
      alert('Congrats, you did it!');
      }
      
    });
      
}