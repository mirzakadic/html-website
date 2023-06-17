for(var i=0; i<500; i++){
  let mirza = document.createElement('p');
  mirza.textContent = `Ovo je test${Math.round(Math.random()*i)}`;
  document.append(mirza);
}