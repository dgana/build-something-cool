var body = document.body;

// Buat tag div dengan class name container
var main = document.getElementById('main');
main.className = 'menu';
var createContainer = document.createElement('div');
createContainer.setAttribute('class', 'container');
main.appendChild(createContainer);

// Buat tag h1 yang merupakan child dari div dengan class container
var container = document.getElementsByClassName('container');
var createHeading1 = document.createElement('h1');
createHeading1Text = document.createTextNode('Choose Your Character');
container[0].appendChild(createHeading1);
createHeading1.appendChild(createHeading1Text);

// Buat tag div dengan class character yang merupakan child dari div dengan class container
var createCharacter = document.createElement('div');
createCharacter.setAttribute('class', 'character');
container[0].appendChild(createCharacter);

// Buat tag div dengan class character-box yang merupakan child dari div dengan class character
var character = document.getElementsByClassName('character');
var createCharacterBox = document.createElement('div');
createCharacterBox.setAttribute('class', 'character-box');
character[0].appendChild(createCharacterBox);

// Buat tag div kedua dengan class character yang merupakan child dari div dengan class container
createCharacterBox = document.createElement('div');
createCharacterBox.setAttribute('class', 'character-box');
character[0].appendChild(createCharacterBox);

// Buat tag div dengan class character-img-box yang merupakan child dari div dengan class character-box
var characterBox = document.getElementsByClassName('character-box');
var createCharacterImgBox = document.createElement('div');
createCharacterImgBox.setAttribute('class', 'character-img-box')
characterBox[0].appendChild(createCharacterImgBox);

// Buat tag p yang merupakan child dari div dengan class character-box
var createParagraph = document.createElement('p');
createParagraph.innerHTML = 'Health: <em>2500 dmg</em>';
characterBox[0].appendChild(createParagraph);

// Buat tag p yang merupakan child dari div dengan class character-box
var createParagraph = document.createElement('p');
createParagraph.innerHTML = 'Attack: <em>300 - 400 dmg</em>';
characterBox[0].appendChild(createParagraph);

// Buat tag p kedua yang merupakan child dari div dengan class character-box
createParagraph = document.createElement('p');
createParagraph.innerHTML = 'Defend: <em>50 - 100 block dmg</em>';
characterBox[0].appendChild(createParagraph);

// Buat tag p ketiga yang merupakan child dari div dengan class character-box
createParagraph = document.createElement('p');
createParagraph.innerHTML = 'Special Attack: <em>450 - 750 dmg</em>';
characterBox[0].appendChild(createParagraph);

// Buat tag div kedua dengan class character-img-box yang merupakan child dari div dengan class character-box
createCharacterImgBox = document.createElement('div');
createCharacterImgBox.setAttribute('class', 'character-img-box')
characterBox[1].appendChild(createCharacterImgBox);

// Buat tag p yang merupakan child dari div dengan class character-box 2
var createParagraph = document.createElement('p');
createParagraph.innerHTML = 'Health: <em>1500 dmg</em>';
characterBox[1].appendChild(createParagraph);

// Buat tag p yang merupakan child dari div dengan class character-box 2
createParagraph = document.createElement('p');
createParagraph.innerHTML = 'Attack: <em>400 - 700 dmg</em>';
characterBox[1].appendChild(createParagraph);

// Buat tag p kedua yang merupakan child dari div dengan class character-box 2
createParagraph = document.createElement('p');
createParagraph.innerHTML = 'Defend: <em>25 - 50 block dmg</em>';
characterBox[1].appendChild(createParagraph);

// Buat tag p ketiga yang merupakan child dari div dengan class character-box 2
createParagraph = document.createElement('p');
createParagraph.innerHTML = 'Special Attack: <em>800 - 1200 dmg</em>';
characterBox[1].appendChild(createParagraph);

// Buat tag img didalam character-img-box
var characterImgBox = document.getElementsByClassName('character-img-box');
characterImgBox[0].innerHTML = "<img src='img/warrior-menu-crop.png' class='resize' />";

// Buat tag img didalam character-img-box 2
var characterImgBox = document.getElementsByClassName('character-img-box');
characterImgBox[1].innerHTML = "<img src='img/assassin-menu-crop.jpg' class='resize' />";



var createMap = document.createElement('div');
createMap.setAttribute('class', 'map');
container[0].appendChild(createMap);

var map = document.getElementsByClassName('map')[0];
var createSecondHeading1 = document.createElement('h1');
createSecondHeading1.innerHTML = 'Pick your map';
map.appendChild(createSecondHeading1);

var createImageBox = document.createElement('div');
createImageBox.setAttribute('class', 'image-box');
map.appendChild(createImageBox);

var imageBox = document.getElementsByClassName('image-box')[0];
var createImage1 = document.createElement('img');
createImage1.setAttribute('id', 'image-arena1');
createImage1.setAttribute('src', 'img/arena1-filter.png');
createImage1.setAttribute('alt', 'Arena 1');
imageBox.appendChild(createImage1);

var createImage2 = document.createElement('img');
createImage2.setAttribute('id', 'image-arena2');
createImage2.setAttribute('src', 'img/arena3.jpg');
createImage2.setAttribute('alt', 'Arena 2');
imageBox.appendChild(createImage2);

var createImage3 = document.createElement('img');
createImage3.setAttribute('id', 'image-arena3');
createImage3.setAttribute('src', 'img/arena2-filter.png');
createImage3.setAttribute('alt', 'Arena 3');
imageBox.appendChild(createImage3);

// Buat tag div dengan class text-box didalam character
var createTextBox = document.createElement('div');
createTextBox.setAttribute('class', 'text-box');
container[0].appendChild(createTextBox)

// Buat tag h2 didalam text-box
var textBox = document.getElementsByClassName('text-box');
var createHeading2 = document.createElement('h2');
var createHeading2Text = document.createTextNode('How To Play: ')
textBox[0].appendChild(createHeading2);
createHeading2.appendChild(createHeading2Text);

// Buat tag ul didalam text-box
var createUnorderedList = document.createElement('ul');
textBox[0].appendChild(createUnorderedList);

// Buat tag li didalam tag ul
var unorderedList = document.getElementsByTagName('ul')
var createListItem = document.createElement('li')
var createListItemText = document.createTextNode('You will be given 3 action button! Attack, Defend, and Special Attack!');
unorderedList[0].appendChild(createListItem);
createListItem.appendChild(createListItemText);

// Buat tag li 2 didalam tag ul
createListItem = document.createElement('li')
var createListItemText = document.createTextNode('Attack will give you an advantage if the monster is defending!');
unorderedList[0].appendChild(createListItem);
createListItem.appendChild(createListItemText);

// Buat tag li 3 didalam tag ul
createListItem = document.createElement('li')
var createListItemText = document.createTextNode('Defending will give you an advantage if the monster uses special attack. You will counter the attack!');
unorderedList[0].appendChild(createListItem);
createListItem.appendChild(createListItemText);

// Buat tag li 4 didalam tag ul
createListItem = document.createElement('li')
var createListItemText = document.createTextNode('Special attack will give you an advantage when the monster attack! you received attack damage but you will give the highest damage!');
unorderedList[0].appendChild(createListItem);
createListItem.appendChild(createListItemText);

// Buat tag li 5 didalam tag ul
createListItem = document.createElement('li')
var createListItemText = document.createTextNode('Good Luck & Have Fun!');
unorderedList[0].appendChild(createListItem);
createListItem.appendChild(createListItemText);

// Buat tag button dengan id start-game didalam container
var createButton = document.createElement('button');
var createButtonText = document.createTextNode('Start Game!');
createButton.setAttribute('id', 'start-game');
container[0].appendChild(createButton);
createButton.appendChild(createButtonText);

var createInput = document.createElement('input');
createInput.setAttribute('type', 'hidden');
createInput.setAttribute('value', '');
body.appendChild(createInput);

var createInput2 = document.createElement('input');
createInput2.setAttribute('type', 'hidden');
createInput2.setAttribute('value', '');
body.appendChild(createInput2);

var createIntroSong = document.createElement('audio');
createIntroSong.setAttribute('id', 'intro-song');
createIntroSong.setAttribute('src', 'audio/intro_song.mp3');
createIntroSong.setAttribute('autoplay', 'true');
createIntroSong.setAttribute('loop', 'true');
main.appendChild(createIntroSong);

var createPickSound = document.createElement('audio');
createPickSound.setAttribute('autoplay', 'true');
main.appendChild(createPickSound);

// Set Volume for intro song
var introSong = document.getElementById('intro-song');
introSong.volume = 0.5;

// Buat tag input dengan attribute hidden untuk passing data
var input = document.getElementsByTagName('input');
var pick = '';
var pickMap = 2;

var imageArena1 = document.getElementById('image-arena1');
var imageArena2 = document.getElementById('image-arena2');
var imageArena3 = document.getElementById('image-arena3');


// Pilihan Character dengan click event
characterBox[0].addEventListener('click', function() {

    characterImgBox[0].style.opacity = '1';

    characterBox[1].style.backgroundColor = 'inherit';
    characterImgBox[1].style.opacity = '0.25';

    createPickSound.setAttribute('src', 'audio/attack_button.mp3');

    pick = 'warrior';
    input[0].value = pick;
})



characterBox[1].addEventListener('click', function() {

    characterImgBox[1].style.opacity = '1';

    characterBox[0].style.backgroundColor = 'inherit';
    characterImgBox[0].style.opacity = '0.25';

    createPickSound.setAttribute('src', 'audio/attack_button.mp3');

    pick = 'assassin';
    input[0].value = pick;
})



// Pilihan Map dengan click event
imageArena1.addEventListener('click', function() {
    imageArena1.style.opacity = '1'
    imageArena2.style.opacity = '0.25'
    imageArena3.style.opacity = '0.25'

    createPickSound.setAttribute('src', 'audio/attack_button.mp3');
    pickMap = 1;
    input[1].value = pickMap;
})

imageArena2.addEventListener('click', function() {
    imageArena2.style.opacity = '1'
    imageArena1.style.opacity = '0.25'
    imageArena3.style.opacity = '0.25'

    createPickSound.setAttribute('src', 'audio/attack_button.mp3');
    pickMap = 2;
    input[1].value = pickMap;
})

imageArena3.addEventListener('click', function() {
    imageArena3.style.opacity = '1'
    imageArena2.style.opacity = '0.25'
    imageArena1.style.opacity = '0.25'

    createPickSound.setAttribute('src', 'audio/attack_button.mp3');
    pickMap = 3;
    input[1].value = pickMap;
})
