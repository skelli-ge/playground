const MAX_HP = 1000;

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
    console.log('hitted by', selectedTool);


    if(selectedTool === 'baseball'){
        monster.hit(100)
    }else if(selectedTool === 'fist'){
        monster.hit(50)
    }else{
        monster.hit(200)
    }

    
    htStatus = monster.hp > 0? monster.hp * 0.1 : 0
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
