var allBoxes = document.getElementsByTagName('p')

function changeThis () {
for (i=0; i<allBoxes.length; i++) {
    allBoxes[i].classList.toggle('selectedcolor');
  }
}

for (i = 0; i<allBoxes.length; i++) {
  allBoxes[i].addEventListener('mouseover', changeThis);
}
