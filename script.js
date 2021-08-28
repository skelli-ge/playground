const MAX_HP = 10000;

let selectedTool = "baseball"
selectTool(selectedTool);

function updateView(hpStatus){
    const overlay = document.querySelector('.overlay');
    const points = document.querySelector('.points');
    // show overlay
    overlay.className +=' show';
    setTimeout(function(){
        overlay.className = 'overlay';
    }, 150);

    // update hp bar
    points.style.width = `${hpStatus}%`
}

function selectTool(tool){
    console.log('slected', tool);
    document.body.className = tool;
    selectedTool = tool;
}


function hitMonster() { 
    console.log('hitted by', selectedTool, 'hp before: ', monster.hp);

    switch(selectedTool){
        case 'baseball': monster.hit(100); break;
        case 'fist': monster.hit(50); break;
        case 'stone': monster.hit(200); break;
        default: return;
    }
    console.log('monster hp after hit', monster.hp);
    const hpStatus = monster.hp/MAX_HP * 100
    // end
    updateView(hpStatus)
}



const monster = {
    hp: MAX_HP,
    heal: function(x) {
       this.hp = this.hp + x;
    },
    hit: function (x){
        this.hp = this.hp - x;
    },
    isALive: function(){
        if (this.hp > 0){
            // console.log ("tak")
            return true;
        }else{
            // console.log ("nie")
            return false;
        }
    }
}
