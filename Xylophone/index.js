$('.aWholeNewWorld').on("click", aWholeNewWorld);

// add eventlistener for click events
$(".part").each(function () {
    $(this).on("click", handleClick);
});


function handleClick() {
    var selection = this.innerHTML;
    makeSound(selection);
    buttonAnimation(selection);
}

// add eventlistener for keyboard press event
$(this).on("keydown", function (e) {
    makeSound(e.key);
    buttonAnimation(e.key);
});

function makeSound(selection) {
    switch (selection) {
        case 'a':
            var audio = new Audio("sounds/1.wav");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/2.wav");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/3.wav");
            audio.play();
            break;
        case 'f':
            var audio = new Audio("sounds/4.wav");
            audio.play();
            break;
        case 'g':
            var audio = new Audio("sounds/5.wav");
            audio.play();
            break;
        case 'h':
            var audio = new Audio("sounds/6.wav");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/7.wav");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/8.wav");
            audio.play();
            break;
        default:
            break;
    }
}

// add animation for selected button
function buttonAnimation(selection) {
    var activeButton = $("." + selection);
    activeButton.addClass("pressed");
    setTimeout(() => {
        activeButton.removeClass("pressed");
    }, 100);
}

var musicSheet1 = ['d', 'f', 'h', 'g', 'd', 'f', 'h', 'g', 's', 'f', 'd', 'd',
    'd', 'f', 'g', 'j', 'h', 'g', 'a', 'j', 'k', 'g', 'd', 'd', 's', 'a', 's',
    'f', 'd', 'a'
];
var tempo = [3, 2, 2, 4, 1, 2, 2, 1, 2, 2, 1, 4,
    2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1,
    1, 1, 5
];

function aWholeNewWorld() {
    for (var i = 0; i < musicSheet1.length; i++) {
        setTimeout(function (sound) {
            makeSound(musicSheet1[sound]);
            buttonAnimation(musicSheet1[sound])
        }, rhythm(i) * 350, i);
    }
}

function rhythm(num) {
    var count = 0;
    for (var i = 0; i < num; i++) {
        count = count + tempo[i];
    }
    return count;
}
