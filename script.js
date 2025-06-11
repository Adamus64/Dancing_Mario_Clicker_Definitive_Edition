//Proměnné
let coins = 0;
let silaKliku = 1;
let autoKlik = 0;
konecHra.style.display = "none";
dialogHra.style.display = "none";
soubojHra.style.display = "none";
start.style.display = "none";
vyhra.style.display = "none";


function dev ()
{
    coins = 99999999999999;
    document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
    const audio = new Audio('sounds/coin.mp3');
    audio.play();
}

function devMinus()
{
    coins = 0;
    document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
    const audio = new Audio('sounds/coin.mp3');
    audio.play();
}



const audio = new Audio('sounds/music.mp3');
audio.volume = 0.1;
audio.loop = true;

setInterval(function() {
    coins = coins + autoKlik;
    document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
},1000);


let hudbaPodminka = 0; //0 = nehraje, 1 = hraje

function Hudba ()
{
    if (hudbaPodminka == 0)
    {
        audio.play();
        hudbaPodminka++;
        hudbaStatus.textContent = "Hudba ✅";
    }

    else
    {
        audio.pause();
        hudbaPodminka--;
        hudbaStatus.textContent = "Hudba ❎ ";
    }
}

function Klik()
{
    const audio = new Audio('sounds/coin.mp3');
    audio.volume = 0.1;
    audio.play();
    coins = coins + (1*silaKliku);
    document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);;
}


let upragradesKlik = 0;

function upgradeKlik1()
{

    switch (upragradesKlik)
    {

    case 0: //Supermushroom
        if (coins >= 50)
        {
            silaKliku = 2;
            coins = coins - 50;
            document.getElementById("clickOut").innerHTML = "<img src='img/click.png' style='height: 1.2em; vertical-align: middle;'>Síla kliku: " + silaKliku;
            document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
            upragradesKlik++;
            document.getElementById("upKlik").innerHTML = "<img src='img/klik1.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Fire Flower: 300c | [S:5]";
            const audio = new Audio('sounds/1up.mp3');
            audio.volume = 0.1;
            audio.play();
            
        }

        else
        {
            alert("Nedostatek coinů!");
        }
    break;

        case 1: //Fireflower
            if (coins >= 300)
                {
                    silaKliku = 5;
                    coins = coins - 300;
                    document.getElementById("clickOut").innerHTML = "<img src='img/click.png' style='height: 1.2em; vertical-align: middle;'>Síla kliku: " + silaKliku;
                    document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
                    upragradesKlik++;
                    document.getElementById("upKlik").innerHTML = "<img src='img/klik2.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Super Star: 1 000c | [S:10]";
                    const audio = new Audio('sounds/1up.mp3');
                    audio.volume = 0.1;
                    audio.play();
                    
                }
        
                else
                {
                    alert("Nedostatek coinů!");
                }
        break;

        case 2: //Super Star
            if (coins >= 1000)
                {
                    silaKliku = 10;
                    coins = coins - 1000;
                    document.getElementById("clickOut").innerHTML = "<img src='img/click.png' style='height: 1.2em; vertical-align: middle;'>Síla kliku: " + silaKliku;
                    document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
                    upragradesKlik++;
                    document.getElementById("upKlik").innerHTML = "<img src='img/klik3.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>1-Up Click: 5 000c | [S:25]";
                    const audio = new Audio('sounds/1up.mp3');
                    audio.volume = 0.1;
                    audio.play();
                    
                }
        
                else
                {
                    alert("Nedostatek coinů!");
                }
        break;

        case 3: //1UP-clicks
        if (coins >= 5000)
            {
                silaKliku = 25;
                coins = coins - 5000;
                document.getElementById("clickOut").innerHTML = "<img src='img/click.png' style='height: 1.2em; vertical-align: middle;'>Síla kliku: " + silaKliku;
                document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
                upragradesKlik++;
                document.getElementById("upKlik").innerHTML = "<img src='img/klik4.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Mega Mushroom: 10 000c | [S:100]";
                const audio = new Audio('sounds/1up.mp3');
                audio.volume = 0.1;
                audio.play();
                
            }
    
            else
            {
                alert("Nedostatek coinů!");
            }
         break;

         case 4: //Mega mushroom
        if (coins >= 10000)
            {
                silaKliku = 100;
                coins = coins - 10000;
                document.getElementById("clickOut").innerHTML = "<img src='img/click.png' style='height: 1.2em; vertical-align: middle;'>Síla kliku: " + silaKliku;
                document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
                upragradesKlik++;
                upKlik.textContent = ("⚠️Maximálně vylepšeno⚠️");
                const audio = new Audio('sounds/1up.mp3');
                audio.volume = 0.1;
                audio.play();
                
            }
    
            else
            {
                alert("Nedostatek coinů!");
            }
         break;

         default:
            alert("Toto vylepšení máte na maxu, nelze zakoupit další!");
            break;
    }
}

let koopaCena = 100;

function upgradeKoopa ()
{
    
        
            if (coins >= koopaCena)
            {
                coins = coins - koopaCena;
                autoKlik = autoKlik + 0.1;
                document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
                document.getElementById("autoOut").innerHTML = "<img src='img/auto.png' style='height: 1.2em; vertical-align: middle;'>Autoclicker: " + autoKlik.toFixed(1);
                koopaCena = (koopaCena * 1.5).toFixed(0);
                document.getElementById("upKoopa").innerHTML = "<img src='img/koopa.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Koopa clicker " + koopaCena + "c | [A: 0.1 c/s]";
                const audio = new Audio('sounds/1up.mp3');
                audio.volume = 0.1;
                audio.play();
            }

            else
            {
                alert("Nedostatek coinů!");
            }
}

 
let goombaCena = 500;


function upgradeGoomba ()
{
    if (coins >= goombaCena)
    {
        coins = coins - goombaCena;
        autoKlik = autoKlik + 0.5;
        document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
        document.getElementById("autoOut").innerHTML = "<img src='img/auto.png' style='height: 1.2em; vertical-align: middle;'>Autoclicker: " + autoKlik.toFixed(1);
        goombaCena = (goombaCena * 1.5).toFixed(0);
        document.getElementById("upGoomba").innerHTML = "<img src='img/goomba.png' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Goomba Generator: " + goombaCena + "c | [A: 0.5 c/s]";
        const audio = new Audio('sounds/1up.mp3');
        audio.volume = 0.1;
        audio.play();
    }
    else
    {
        alert("Nedostatek coinů!");
    }
}


let billCena = 2000;

function upgradeBill ()
{
    if (coins >= billCena)
    {
        coins = coins - billCena;
        autoKlik = autoKlik + 2;
        document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
        document.getElementById("autoOut").innerHTML = "<img src='img/auto.png' style='height: 1.2em; vertical-align: middle;'>Autoclicker: " + autoKlik.toFixed(1);
        billCena = (billCena * 1.7).toFixed(0);
        document.getElementById("upBill").innerHTML = "<img src='img/bill.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Bullet Bill Bot: " + billCena + "c | [A: 2 c/s]";
        const audio = new Audio('sounds/1up.mp3');
        audio.volume = 0.1;
        audio.play();
    }

    else
    {
        alert("Nedostatek coinů!");
    }
}


let bombaCena = 6000;

function upgradeBomb ()
{
    if (coins >= bombaCena)
    {
        coins = coins - bombaCena;
        autoKlik = autoKlik + 5;
        document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
        document.getElementById("autoOut").innerHTML = "<img src='img/auto.png' style='height: 1.2em; vertical-align: middle;'>Autoclicker: " + autoKlik.toFixed(1);
        bombaCena = (bombaCena * 1.7).toFixed(0);
        document.getElementById("upBomb").innerHTML = "<img src='img/bomb.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Bomb-omb Factory: " + bombaCena + "c | [A: 5 c/s]";
        const audio = new Audio('sounds/1up.mp3');
        audio.volume = 0.1;
        audio.play();
    }

    else
    {
        alert("Nedostatek coinů!");
    }
}


let yoshiCena = 15000;

function upgradeYoshi ()
{
    if (coins >= yoshiCena)
        {
            coins = coins - yoshiCena;
            autoKlik = autoKlik + 10;
            document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
            document.getElementById("autoOut").innerHTML = "<img src='img/auto.png' style='height: 1.2em; vertical-align: middle;'>Autoclicker: " + autoKlik.toFixed(1);
            yoshiCena = (yoshiCena * 2).toFixed(0);
            document.getElementById("upYoshi").innerHTML = "<img src='img/yoshi.png' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Yoshi's Island: " + yoshiCena + "c | [A: 10 c/s]";
            const audio = new Audio('sounds/1up.mp3');
            audio.volume = 0.1;
            audio.play();
        }
    
        else
        {
            alert("Nedostatek coinů!");
        }
}

let luigiCena = 40000;

function upgradeLuigi ()
{
    if (coins >= luigiCena)
        {
            coins = coins - luigiCena;
            autoKlik = autoKlik + 25;
            document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
            document.getElementById("autoOut").innerHTML = "<img src='img/auto.png' style='height: 1.2em; vertical-align: middle;'>Autoclicker: " + autoKlik.toFixed(1);
            luigiCena = (luigiCena * 2).toFixed(0);
            document.getElementById("upLuigi").innerHTML = "<img src='img/luigi.png' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Luigi Auto-tap: " + luigiCena + "c | [A: 25 c/s]";
            const audio = new Audio('sounds/1up.mp3');
            audio.volume = 0.1;
            audio.play();
        }
    
        else
        {
            alert("Nedostatek coinů!");
        }
}

let bowserCena = 150000;

function upgradeBowser ()
{
    if (coins >= bowserCena)
    {
        coins = coins - bowserCena;
        autoKlik = autoKlik + 100;
        document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
        document.getElementById("autoOut").innerHTML = "<img src='img/auto.png' style='height: 1.2em; vertical-align: middle;'>Autoclicker: " + autoKlik.toFixed(1);
        bowserCena = (bowserCena * 2.25).toFixed(0);
        document.getElementById("upBowser").innerHTML = "<img src='img/bowser.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Luigi Auto-tap: " + bowserCena + "c | [A: 100 c/s]";
        const audio = new Audio('sounds/1up.mp3');
        audio.volume = 0.1;
        audio.play();
    }

    else
    {
        alert("Nedostatek coinů!");
    }
}

let konecHudba = new Audio ('sounds/konec.mp3');
let bossHudba = new Audio ('sounds/bowserHudba.mp3');

function TheEnd ()
{
    if (coins >= 1000000)
    {
        hlavniHra.style.display = "none";
        konecHra.style.display = "block";
        audio.pause();
        hudbaStatus.style.display = "none";
        
        konecHudba.volume = 0.2;
        konecHudba.play();
    }

    else
    {
        alert("Nedostatek coinů!");
    }
}

function BossFightStart ()
{
    let krik = new Audio('sounds/krik.mp3');
    krik.volume = 0.5;
    krik.play();
    konecHudba.pause();
    konecHra.style.display = "none";
    dialogHra.style.display = "block";
    bossHudba.loop = true;
    bossHudba.play();
}

let bowserIndex = 0;
let bowserPromluvy = [
    "Mám se učit ekonomiku :D", //0
    "Myslíš, že toto je vše?", //1
    "Že tě nechám tak snadno dokončit tuto hru?", //2
    "Na to rovnou zapomeň!!!!", //3
    "HAHAHAHA!", //4
    "Jestli ji skutečně chceš dohrát, budeš muset se mnou bojovat!", //5
    "Budeš mít 10 sekund na to mě porazit!", //6

];


let interval;

function dale ()
{
    if (bowserIndex < 6)
    {
    bowserIndex++;
    mluveni.textContent = bowserPromluvy[bowserIndex];
    }
    else
    {
        dialogHra.style.display = "none";
        start.style.display = "block";
    }
}

let hp = 10000;
let cas = 10;

function startBossFight() {
  start.style.display = "none";
  soubojHra.style.display = "block";

 interval = setInterval(() => {
  cas--;
  document.getElementById("timer").textContent = `⏱️ Čas: ${cas}`;

  if (cas <= 0) {
    clearInterval(interval);
    document.getElementById("timer").textContent = "⏱️ Konec!";
    alert("Prohrál si ! Zkus to znovu!");
    soubojHra.style.display = "none";
    start.style.display = "block";
    cas = 10;
    hp = 10000;
    bossHP.textContent = hp;
    document.getElementById("timer").textContent = `⏱️ Čas: ${cas}`;
  }
}, 1000);
}

function utok () {
    if (hp > 0)
    {
        let rng = Math.floor(Math.random() * (250 - 50 + 1)) + 50;
        hp = hp - rng;
        bossHP.textContent = hp;
    }

    else
    {   
        clearInterval(interval);
        alert("Dokázal jsi to!");
        soubojHra.style.display = "none";
        vyhra.style.display = "block";
    }

}

