var btn = document.querySelector('#change');
var text = document.querySelector('#colour');

var generator = function () {
  newColour = '#' + Math.random() * (0xffffff << 0).toString(16);
  console.log(newColour.length);
  if (newColour.length < 7) {
    generator();
  }
};

btn.addEventListener('click', function () {
  generator();
  document.body.style.background = newColour;
  btn.style.color = newColour;
  btn.innerText = newColour;
});
