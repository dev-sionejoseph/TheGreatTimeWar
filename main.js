console.log('Allons-y!');

let round = 1

let tardisStats = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    destroyed: false,
}

let attack = (attacker, enemy, offense, defense) => {

    let chance = Math.random();
    
    if (chance <= enemy.accuracy) {
        enemy.hull = enemy.hull - attacker.firepower;
            console.log(`The ${offense} land a direct hit! The ${defense} drops to ${enemy.hull} hull`)
        if (enemy.hull <= 0) {
            enemy.destroyed = true;
                console.log(`The ${offense} destroyed the ${defense}!`)
            }
    } else {
        console.log(`The ${defense} evades the attack!`);
    }
} 

let gameRound = () => {
    
    let dalekArray = [$(dalek0),$(dalek1),$(dalek2),$(dalek3),$(dalek4),$(dalek5)]

    let dalekStats = {
        hull: Math.round((Math.random() * (6 - 3)) + 3),
        firepower: Math.round((Math.random() * (4 - 2)) + 2),
        accuracy: (Math.random() * (.8 - .6)) + .6, 
        destroyed: false
    }

    while (tardisStats.destroyed === false && dalekStats.destroyed === false){
        attack(tardisStats,dalekStats,'Tardis','Dalek');
        attack(dalekStats,tardisStats,'Dalek','Tardis');
    }
    if (dalekStats.destroyed === true){
        dalekArray[round-1].css('display','none')
    }
    if (tardisStats.destroyed === true){
        $('#attack').css('display','none')
    }
    
    round+=1;
}

$('#attack').click(function(){
    $('#attack').css('opacity', '50%');
    console.log(`Round ${round}`)
    gameRound();
    $('#attack').css('opacity', '100%');
});



$('#retreat').click(function(){
    console.log(`When you run with the Doctor, it feels like it'll never end. But however hard you try you can't run forever.`)
});