function loadNum(key, defaultValue) {
    const value = localStorage.getItem(key);
    return value !== null ? parseFloat(value) : defaultValue;
}

//localStorage
function saveState() {
    localStorage.setItem("coins", coins);
    localStorage.setItem("silaKliku", silaKliku);
    localStorage.setItem("autoKlik", autoKlik);
    localStorage.setItem("upragradesKlik", upragradesKlik);
    localStorage.setItem("koopaCena", koopaCena);
    localStorage.setItem("goombaCena", goombaCena);
    localStorage.setItem("billCena", billCena);
    localStorage.setItem("bombaCena", bombaCena);
    localStorage.setItem("yoshiCena", yoshiCena);
    localStorage.setItem("luigiCena", luigiCena);
    localStorage.setItem("bowserCena", bowserCena);
}

// Načtení globálních proměnných z localStorage
let coins = loadNum("coins", 0);
let silaKliku = loadNum("silaKliku", 1);
let autoKlik = loadNum("autoKlik", 0);
let upragradesKlik = loadNum("upragradesKlik", 0);

let koopaCena = loadNum("koopaCena", 100);
let goombaCena = loadNum("goombaCena", 500);
let billCena = loadNum("billCena", 2000);
let bombaCena = loadNum("bombaCena", 6000);
let yoshiCena = loadNum("yoshiCena", 15000);
let luigiCena = loadNum("luigiCena", 40000);
let bowserCena = loadNum("bowserCena", 150000);

// Nastavení skrytí prvků při načtení
konecHra.style.display = "none";
dialogHra.style.display = "none";
soubojHra.style.display = "none";
start.style.display = "none";
vyhra.style.display = "none";

function updateUI() {
    document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
    document.getElementById("clickOut").innerHTML = "<img src='img/click.png' style='height: 1.2em; vertical-align: middle;'>Síla kliku: " + silaKliku;
    document.getElementById("autoOut").innerHTML = "<img src='img/auto.png' style='height: 1.2em; vertical-align: middle;'>Autoclicker: " + autoKlik.toFixed(1);

    const upKlik = document.getElementById("upKlik");
    if (upKlik) {
        switch (upragradesKlik) {
            case 0:
                upKlik.innerHTML = "<img src='img/klik1.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Supermushroom: 50c | [S:2]";
                break;
            case 1:
                upKlik.innerHTML = "<img src='img/klik1.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Fire Flower: 300c | [S:5]";
                break;
            case 2:
                upKlik.innerHTML = "<img src='img/klik2.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Super Star: 1 000c | [S:10]";
                break;
            case 3:
                upKlik.innerHTML = "<img src='img/klik3.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>1-Up Click: 5 000c | [S:25]";
                break;
            case 4:
                upKlik.innerHTML = "<img src='img/klik4.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Mega Mushroom: 10 000c | [S:100]";
                break;
            default:
                upKlik.textContent = "⚠️Maximálně vylepšeno⚠️";
                break;
        }
    }

    document.getElementById("upKoopa").innerHTML = "<img src='img/koopa.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Koopa clicker " + koopaCena + "c | [A: 0.1 c/s]";
    document.getElementById("upGoomba").innerHTML = "<img src='img/goomba.png' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Goomba Generator: " + goombaCena + "c | [A: 0.5 c/s]";
    document.getElementById("upBill").innerHTML = "<img src='img/bill.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Bullet Bill Bot: " + billCena + "c | [A: 2 c/s]";
    document.getElementById("upBomb").innerHTML = "<img src='img/bomb.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Bomb-omb Factory: " + bombaCena + "c | [A: 5 c/s]";
    document.getElementById("upYoshi").innerHTML = "<img src='img/yoshi.png' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Yoshi's Island: " + yoshiCena + "c | [A: 10 c/s]";
    document.getElementById("upLuigi").innerHTML = "<img src='img/luigi.png' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Luigi Auto-tap: " + luigiCena + "c | [A: 25 c/s]";
    document.getElementById("upBowser").innerHTML = "<img src='img/bowser.webp' style='height: 1.2em; vertical-align: middle; padding-right: 0.5em;'>Bowser Auto-tap: " + bowserCena + "c | [A: 100 c/s]";
}


updateUI();

// --- DEV FUNKCE ---

function dev() {
    coins = 99999999999999;
    saveState();
    updateUI();
    const audio = new Audio('sounds/coin.mp3');
    audio.play();
}

function devMinus() {
    coins = 0;
    saveState();
    updateUI();
    const audio = new Audio('sounds/coin.mp3');
    audio.play();
}


// --- ZVUKY & CASOVAČ ---

const audio = new Audio('sounds/music.mp3');
audio.volume = 0.1;
audio.loop = true;

setInterval(function() {
    coins = coins + autoKlik;
    saveState();
    document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
}, 1000);

let hudbaPodminka = 0;

function Hudba() {
    if (hudbaPodminka == 0) {
        audio.play();
        hudbaPodminka++;
        hudbaStatus.textContent = "Hudba ✅";
    } else {
        audio.pause();
        hudbaPodminka--;
        hudbaStatus.textContent = "Hudba ❎ ";
    }
}

function Klik() {
    const audio = new Audio('sounds/coin.mp3');
    audio.volume = 0.1;
    audio.play();
    coins = coins + (1 * silaKliku);
    saveState();
    document.getElementById("coinsOut").innerHTML = "<img src='img/coin.png' style='height: 1em; vertical-align: middle;'>Počet coinů: " + coins.toFixed(1);
}

// --- UPGRADY ---

function upgradeKlik1() {
    switch (upragradesKlik) {
        case 0: // Supermushroom
            if (coins >= 50) {
                silaKliku = 2;
                coins = coins - 50;
                upragradesKlik++;
                saveState();
                updateUI();
                const audio = new Audio('sounds/1up.mp3');
                audio.volume = 0.1;
                audio.play();
            } else {
                alert("Nedostatek coinů!");
            }
            break;

        case 1: // Fireflower
            if (coins >= 300) {
                silaKliku = 5;
                coins = coins - 300;
                upragradesKlik++;
                saveState();
                updateUI();
                const audio = new Audio('sounds/1up.mp3');
                audio.volume = 0.1;
                audio.play();
            } else {
                alert("Nedostatek coinů!");
            }
            break;

        case 2: // Super Star
            if (coins >= 1000) {
                silaKliku = 10;
                coins = coins - 1000;
                upragradesKlik++;
                saveState();
                updateUI();
                const audio = new Audio('sounds/1up.mp3');
                audio.volume = 0.1;
                audio.play();
            } else {
                alert("Nedostatek coinů!");
            }
            break;

        case 3: // 1UP
            if (coins >= 5000) {
                silaKliku = 25;
                coins = coins - 5000;
                upragradesKlik++;
                saveState();
                updateUI();
                const audio = new Audio('sounds/1up.mp3');
                audio.volume = 0.1;
                audio.play();
            } else {
                alert("Nedostatek coinů!");
            }
            break;

        case 4: // Mega mushroom
            if (coins >= 10000) {
                silaKliku = 100;
                coins = coins - 10000;
                upragradesKlik++;
                saveState();
                updateUI();
                const audio = new Audio('sounds/1up.mp3');
                audio.volume = 0.1;
                audio.play();
            } else {
                alert("Nedostatek coinů!");
            }
            break;

        default:
            alert("Toto vylepšení máte na maxu, nelze zakoupit další!");
            break;
    }
}

function upgradeKoopa() {
    if (coins >= koopaCena) {
        coins = coins - koopaCena;
        autoKlik = autoKlik + 0.1;
        koopaCena = Math.round(koopaCena * 1.5);
        saveState();
        updateUI();
        const audio = new Audio('sounds/1up.mp3');
        audio.volume = 0.1;
        audio.play();
    } else {
        alert("Nedostatek coinů!");
    }
}

function upgradeGoomba() {
    if (coins >= goombaCena) {
        coins = coins - goombaCena;
        autoKlik = autoKlik + 0.5;
        goombaCena = Math.round(goombaCena * 1.5);
        saveState();
        updateUI();
        const audio = new Audio('sounds/1up.mp3');
        audio.volume = 0.1;
        audio.play();
    } else {
        alert("Nedostatek coinů!");
    }
}

function upgradeBill() {
    if (coins >= billCena) {
        coins = coins - billCena;
        autoKlik = autoKlik + 2;
        billCena = Math.round(billCena * 1.7);
        saveState();
        updateUI();
        const audio = new Audio('sounds/1up.mp3');
        audio.volume = 0.1;
        audio.play();
    } else {
        alert("Nedostatek coinů!");
    }
}

function upgradeBomb() {
    if (coins >= bombaCena) {
        coins = coins - bombaCena;
        autoKlik = autoKlik + 5;
        bombaCena = Math.round(bombaCena * 1.7);
        saveState();
        updateUI();
        const audio = new Audio('sounds/1up.mp3');
        audio.volume = 0.1;
        audio.play();
    } else {
        alert("Nedostatek coinů!");
    }
}

function upgradeYoshi() {
    if (coins >= yoshiCena) {
        coins = coins - yoshiCena;
        autoKlik = autoKlik + 10;
        yoshiCena = Math.round(yoshiCena * 2);
        saveState();
        updateUI();
        const audio = new Audio('sounds/1up.mp3');
        audio.volume = 0.1;
        audio.play();
    } else {
        alert("Nedostatek coinů!");
    }
}

function upgradeLuigi() {
    if (coins >= luigiCena) {
        coins = coins - luigiCena;
        autoKlik = autoKlik + 25;
        luigiCena = Math.round(luigiCena * 2);
        saveState();
        updateUI();
        const audio = new Audio('sounds/1up.mp3');
        audio.volume = 0.1;
        audio.play();
    } else {
        alert("Nedostatek coinů!");
    }
}

function upgradeBowser() {
    if (coins >= bowserCena) {
        coins = coins - bowserCena;
        autoKlik = autoKlik + 100;
        bowserCena = Math.round(bowserCena * 2.25);
        saveState();
        updateUI();
        const audio = new Audio('sounds/1up.mp3');
        audio.volume = 0.1;
        audio.play();
    } else {
        alert("Nedostatek coinů!");
    }
}

// --- BOSS FIGHT & KONEC ---

let konecHudba = new Audio('sounds/konec.mp3');
let bossHudba = new Audio('sounds/bowserHudba.mp3');

function TheEnd() {
    if (coins >= 1000000) {
        hlavniHra.style.display = "none";
        konecHra.style.display = "block";
        audio.pause();
        hudbaStatus.style.display = "none";

        konecHudba.volume = 0.2;
        konecHudba.play();
    } else {
        alert("Nedostatek coinů!");
    }
}

function BossFightStart() {
    let krik = new Audio('sounds/krik.mp3');
    krik.volume = 0.5;
    krik.play();
    konecHudba.pause();
    konecHra.style.display = "none";
    dialogHra.style.display = "block";
    bossHudba.loop = true;
    bossHudba.volume = 0.1;
    bossHudba.play();
}

let bowserIndex = 0;
let bowserPromluvy = [
    "Mám se učit ekonomiku :D",
    "Myslíš, že toto je vše?",
    "Že tě nechám tak snadno dokončit tuto hru?",
    "Na to rovnou zapomeň!!!!",
    "HAHAHAHA!",
    "Jestli ji skutečně chceš dohrát, musíš mě porazit!",
    "Budeš mít 10 sekund na to mě porazit!"
];

let interval;

function dale() {
    if (bowserIndex < 6) {
        bowserIndex++;
        mluveni.textContent = bowserPromluvy[bowserIndex];
    } else {
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

function utok() {
    if (hp > 0) {
        let rng = Math.floor(Math.random() * (250 - 50 + 1)) + 50;
        hp = hp - rng;
        bossHP.textContent = hp;
        document.getElementById('bossHP').innerHTML = "♥️ HP : " + hp;
    } else {
        clearInterval(interval);
        alert("Dokázal jsi to!");
        bossHudba.pause();
        bossHudba.currentTime = 0;
        konecHudba.volume = 0.2;
        konecHudba.play();
        soubojHra.style.display = "none";
        vyhra.style.display = "block";
    }
}

function resetovani ()
{
    alert("Tak ještě jednou!")
    coins = 0;
    silaKliku = 1;
    autoKlik = 0;
    upragradesKlik = 0;
    koopaCena = 100;
    goombaCena = 500;
    billCena = 2000;
    bombaCena = 6000;
    yoshiCena = 15000;
    luigiCena = 40000;
    bowserCena = 150000;

    saveState();
    updateUI();

    vyhra.style.display = "none";
    hlavniHra.style.display = "flex";
    konecHudba.pause();
    konecHudba.currentTime = 0;
    hudbaStatus.style.display = "inline-block";


}