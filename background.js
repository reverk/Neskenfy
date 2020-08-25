$(document).ready(function () {
    var chance = Math.floor(Math.random() * 100);
    if (chance >= 0 && chance <= 10) { // 10% chance to pop up
        neskenfy();
    }
});

var generateHTML = function () {
    var html = `
        <div style='display: table;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;'
        >
            <div style='display: table-cell;
                        vertical-align: middle;'
            >
                <div style='margin-left: auto;
                            margin-right: auto;
                            width: 700px;'
                >
                    <img src='https://raw.githubusercontent.com/reverk/Neskenfy/master/nesken.gif' 
                        alt='temp' 
                        width='100%' 
                        height='100%'>
                </div>
            </div>
        </div>  
	`
    return html;
};

var neskenfy = function () {
    setTimeout(function () { // Wait 3 seconds before cenafying
        var audio = new Audio('https://raw.githubusercontent.com/reverk/Neskenfy/master/nesken_sound.mp3')
        var html = generateHTML();
        audio.play();
        $('body').html(html);
        document.body.style.backgroundColor = "black";
        setTimeout(function () { // Wait 5 seconds for nesken to finish
            window.location.replace(document.URL);
        }, 5000);
    }, 3000);
};
