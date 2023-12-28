# Pravidlá hry
## Rybník
### Náhodné zoradenie kačíc

Definovanie funkcie na nahodne premiešanie array listu:
```javascript
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
```
---
### Pole hráčov
Vzor definovanie `poleHracov`:

```javascript
let poleHracov = [
    {
        id: 1,
        farba: "zelena"
    },
    {
        id: 2,
        farba: "biela"
    },
    {
        id: 2569,
        farba: "oranzova"
    }
]
```
Platí, že každý hráč by mal mať svoju kačku v poli 6 krát.
```javascript
{
    id: 1,
    farba: "zelena"
},
{
    id: 1,
    farba: "zelena"
},
{
    id: 1,
    farba: "zelena"
},
{
    id: 1,
    farba: "zelena"
},
{
    id: 1,
    farba: "zelena"
},
{
    id: 1,
    farba: "zelena"
}
```
Netreba zabudnúť ani na políčka vody konkrétne 3ks.
```javascript
{
    id: null,
    farba: "voda"
}
```
Následne sa `poleHracov` premieša.
```javascript
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

poleHracov = shuffleArray(poleHracov)
```
---

### Príprava rybníka
Ďalej sa vytvorí samotný rybník (prvých 5 pozícii), ktorý použije údaje z `poleHracov`.

```javascript
let rybnik = [
    {
        idHraca: null,
        farba: null,
        zamierene: false
    },
        {
        idHraca: null,
        farba: null,
        zamierene: false
    },
        {
        idHraca: null,
        farba: null,
        zamierene: false
    },
        {
        idHraca: null,
        farba: null,
        zamierene: false
    },
        {
        idHraca: null,
        farba: null,
        zamierene: false
    },
]
```

Potom sa použije funkcia na aktualizovania rybníka.
```javascript
function updateRybnik(poleHracov, rybnik){
    for (let i = 0; i < rybnik.length; i++) {
        rybnik[i].id = poleHracov[i].id
        rybnik[i].farba = poleHracov[i].farba
    }
    return rybnik
}
```
---
### Dokončenie rybníka 
Na koniec pripravíme rybník na hru.
```javascript
rybnik = updateRybnik(shuffleArray(poleHracov), rybnik)
```
---
---
## Karty
Každá karta má určitú funkciu, ktorá má efekt na zoradenie kačíc alebo ich zamierenie a vystrelenie.

### Kačací pochod

Každá kačka sa pocunie o jednu úroveň dopredu pričom prvá ide na koniec.

```javascript
function kacaciPochod(array) {
    if (array.length > 1) {
        const firstElement = array.shift();
        array.push(firstElement);
    }
    return array;
}
```

**Nezabudnite aktualizovať `poleHracov` a `rybnik`.**
```javascript
rybnik = updateRybnik(kacaciPochod(poleHracov), rybnik)
```

### Kačací tanec

Všetky kačky sa náhodne poprehadzujú. To sa dá docieliť aj použitím funkcie `shuffleArray`. Potom stačí už len aktualizovať `poleHracov` a `rybnik`.

### Únik

Vymení vybranú kačicu v rybníku s poslednou kačicou v zozname. *Táto funkcia vyžaduje premennú `position` ktorá udáva na ktorej pozícii sa nachádza kačica, ktorá sa má vymeniť s polednou*.

```javascript
function unik(array, position) {
    if (position >= 0 && position < array.length - 1) {
        const temp = array[position];
        array[position] = array[array.length - 1];
        array[array.length - 1] = temp;
    }
    return array;
}
```
Samozrejme treba aktualizovať `poleHracov` a `rybnik`.

### Živý štít

Funguje podobne ako únik s tým rozdielom, že sa sa vymenia dve kačice v rybníku *napr. 2. s 3.; táto funkcia taktiež vyžaduje parametre `position1` a `position2`, ktoré udávajú dve pozície, ktoré sa majú zameniť.*

```javascript
function zivyStit(array, position1, position2) {
    if (
        position1 >= 0 &&
        position1 < array.length &&
        position2 >= 0 &&
        position2 < array.length &&
        position1 !== position2
    ) {
        const temp = array[position1];
        array[position1] = array[position2];
        array[position2] = temp;
    }
    return array;
}
```

Nezabudnúť na aktualizáciu `poleHracov` a `rybnik`.

### Zamieriť

Hráč zamieri na ktorékoľvek políčko v rybníku, platí všat, že je zamierené pole nie kačka čo znamená, že ak sa kačka pohne, mierené je stále na rovnaké políčko. *Je nutné zadať premennú `poziciaNaKtoruSaMieri`*

```javascript
rybnik[poziciaNaKtoruSaMieri].zamierene = true
```
Pri tejto karte nie je nutné aktualizovať `poleHracov` ani `rybnik`.

### Vystreliť

Karta vystreliť môže byť použitá na len na políčko ktoré je zamierené a doslova zmaže kačicu z pola hráčov a zároveň zruší zamierenie na políčko. Na to môžeme použiť základnú funkciu z javascript `.splice()`. *Budeme tiež potrebovať `poziciaNaKtoruSaStriela`*

```javascript
if(rybnik[poziciaNaKtoruSaStriela].zamierene == true){
    //zmazanie z pola hráčov
    poleHracov.splice(poziciaNaKtruSaStriela, 1);

    //zmazanie zamierenia
    rybnik[poziciaNaKtoruSastriela].zamierene = false

    //aktualizovanie poleHracov a rybnik
    rybnik = updateRybnik(poleHracov, rybnik)
}

```