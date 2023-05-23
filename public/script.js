window.onload = function() {
    var wrongElements = document.getElementsByClassName('wrong');
    for (var i = 0; i < wrongElements.length; i++) {
        wrongElements[i].addEventListener('click', function() {
            this.style.backgroundColor = 'lightcoral';
            var explain = document.getElementById('explain');
            explain.style.display = "block";

            // var beat = document.getElementById('heartbeat');
            // beat.style.animationDuration = "5s";
        });
    }

    var rightElements = document.getElementsByClassName('correct');
    for (var i = 0; i < rightElements.length; i++) {
        rightElements[i].addEventListener('click', function() {
            this.style.backgroundColor = 'lightgreen';
            // startConfetti();
            // sleep(10);
            // removeConfetti();
        });
    }
}