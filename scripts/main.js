function changeImage(img) {
    var mySrc = document.getElementById("myImage");
    if (mySrc.getAttribute("src") === 'images/favicon.bmp') {
        mySrc.setAttribute('src', 'images/Heart.png' );
    } else {
        mySrc.setAttribute('src', 'images/favicon.bmp');
    }
}

let helloP = document.getElementById("hello");

let newNameButton = document.getElementById('btn');

newNameButton.onclick = () => {
    setUserName();
}

function setUserName() {
    let myName = prompt('Введите имя');
    localStorage.setItem('name', myName);
    helloP.textContent = 'Hello, ' + myName + '!';
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName + '!'
}


