window.onload = function() {
    var wrongElements = document.getElementsByClassName('wrong');
    for (var i = 0; i < wrongElements.length; i++) {
        wrongElements[i].addEventListener('click', function() {
            this.style.backgroundColor = 'lightred';
        });
    }

    var rightElements = document.getElementsByClassName('right');
    for (var i = 0; i < rightElements.length; i++) {
        rightElements[i].addEventListener('click', function() {
            this.style.backgroundColor = 'lightgreen';
        });
    }
}