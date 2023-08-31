console.log("Tic-Tac-Toe");

let turn = 'X';
let changeturn = () => {
    turn = (turn === 'X') ? 'O' : 'X';
    // return turn
}

let val = document.getElementsByClassName('box');
// for (let i = 0; i < val.length; i++) {
//     val[i].addEventListener('click', () => {
//         val[i].innerHTML = "x";
//     });
// }

//val --> is likearray;
// Array.from(val) --> converts val to array;

let gameover = false;

//(syntax) --> Array.forEach()
Array.from(val).forEach(element => {
    element.addEventListener('click', () => {
        let innerspan = element.querySelector('.val');
        if (innerspan.innerHTML === '' && !gameover) {
            innerspan.innerHTML = turn;
            changeturn();

            let displayturn = document.getElementsByClassName('gameInfo');
            let sp = displayturn[0].querySelector('p');
            sp.innerHTML = "Turn for : " + turn;

            //document.getElementsByClassName('gameInfo')[0].querySelector('span').innerHTML = "Turn for : " + turn;
            checkwinner();
            // if(gameover == )
        }
    });
});

let checkfor = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

let span_val = document.getElementsByClassName('val');
let checkwinner = () => {
    let flag = 0;
    Array.from(checkfor).forEach(element => {
        if (span_val[element[0]].innerHTML !== '' &&
            span_val[element[0]].innerHTML === span_val[element[1]].innerHTML &&
            span_val[element[1]].innerHTML === span_val[element[2]].innerHTML) {
            gameover = true;
            document.querySelector('#display_turn').innerHTML = span_val[element[1]].innerHTML + " WON";
            flag = 1;
            span_val[element[0]].classList.add('blink');
            span_val[element[1]].classList.add('blink');
            span_val[element[2]].classList.add('blink');
            for (i = 0; i < 9; i++) {
                if (i != element[0] && i != element[1] && i != element[2] && span_val[i].innerHTML !== '') {
                    // span_val[i].innerHTML = `<span style='color : gray'>${span_val[i].innerHTML}</span>`;
                    span_val[i].style.color = 'grey';
                    // span_val[i].classList.toggle('hidden');
                }
            }
            // span_val[element[1]].innerHTML = `<span style='color : gray'>${span_val[element[1]].innerHTML}</span>`;
            // span_val[element[2]].innerHTML = `<span style='color : gray'>${span_val[element[2]].innerHTML}</span>`;
            // span_val[element[1]].classList.add('hidden');


            // box1.classList.add('hidden');
        }
    });
    Array.from(span_val).forEach(e => {
        if (e.innerHTML === '')
            flag = 1;
    });
    if (flag == 0) {
        document.querySelector('#display_turn').innerHTML = "IT'S A DRAW";
        borderblink = document.getElementsByClassName('box');
        for (i = 0; i < 9; i++) {
            // span_val[i].innerHTML = `<span style='color : gray'>${span_val[i].innerHTML}</span>`
            span_val[i].style.color = 'grey';
            console.log("inside reset");
            borderblink[i].classList.add('blinkborder');
        }
    }
};


reset.addEventListener('click', () => {
    let val = document.getElementsByClassName('val');
    Array.from(val).forEach(element => {
        element.innerHTML = "";
    });
    gameover = false;
    // console.log("reset");
    document.querySelector('#display_turn').innerHTML = "Turn for : X";
    turn = 'X';
    borderblink = document.getElementsByClassName('box');
    for (i = 0; i < 9; i++) {
        // span_val[i].style.opacity = 1;
        let span_val = document.getElementsByClassName('val');
        span_val[i].style.color = 'black';
        span_val[i].classList.remove('blink');
        borderblink[i].classList.remove('blinkborder');
    }
    // stopConfetti();
});
