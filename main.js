//Highlight all boxes on hover
var allBoxes = document.getElementsByTagName('p');

function changeThis () {
for (i=0; i<allBoxes.length; i++) {
    allBoxes[i].classList.toggle('selectedcolor');
  }
}

for (i = 0; i<allBoxes.length; i++) {
  allBoxes[i].addEventListener('mouseover', changeThis);
}

//Message on box one click
var addOne = document.createElement('h3');
addOne.innerHTML = 'Oooh - so close, but no cigar';

function addThis () {
  allBoxes[0].appendChild(addOne);
}

allBoxes[0].addEventListener('click', addThis);
