window.addEventListener("load", () => {
    
        var txt=document.querySelector('.para');
        var ten = function () {
            setTimeout(() => {
                txt.innerText="10";
            }, 1000);
            
        }
        var nine = function (ten) {
        ten();
            setTimeout(() => {
                txt.innerText="9";
            },2000);
        }
        var eight = function (nine) {
        nine(ten)
            setTimeout(() => {
                txt.innerText="8";
            },3000);
        }
        var seven = function (eight) {
        eight(nine);
            setTimeout(() => {
                txt.innerText="7";
            },4000);
        }
        var six = function (seven) {
        seven(eight);
            setTimeout(() => {
                txt.innerText="6";
            },5000);
        }
        var five = function (six) {
        six(seven);
            setTimeout(() => {
                txt.innerText="5";
            },6000);
        }
        var four = function (five) {
            five(six);
            setTimeout(() => {
                txt.innerText="4";
            },7000);
        }
        var three = function (four) {
            four(five);
            setTimeout(() => {
                txt.innerText="3";
            },8000);
        }
        var two = function (three) {
            three(four);
            setTimeout(() => {
                txt.innerText="2";
            },9000);
        }
        var one = function (two) {
            two(three);
            setTimeout(() => {
                txt.innerText="1";
            },10000);
        }
        // function zero(one){
        var zero = function (one) {
            one(two);
            setTimeout(() => {
            txt.innerText="Happy Independance Day";
            },11000);
        }

        zero(one);
    });