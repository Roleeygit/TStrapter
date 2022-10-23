/*
File: app.ts
Author: Juhász Roland
Copyright: 2022, Juhász Roland
Group: Szoft II N
Date: 2021-10-23
Github: https://github.com/Roleeygit/
Licenc: GNU GPL
*/


const szamolGomb = document.querySelector('#szamolGomb');
const eredmeny = document.querySelector('#eredmeny') as HTMLInputElement;


szamolGomb?.addEventListener('click', () => {
    const aoldal = document.querySelector('#aoldal') as HTMLInputElement;
    const boldal = document.querySelector('#boldal') as HTMLInputElement;
    const coldal = document.querySelector('#coldal') as HTMLInputElement;
    const doldal = document.querySelector('#doldal') as HTMLInputElement;
    let aoldalNum: number = Number(aoldal.value);
    let boldalNum: number = Number(boldal.value);
    let coldalNum: number = Number(coldal.value);
    let doldalNum: number = Number(doldal.value);

    let terulet = szamolTerulet(aoldalNum, boldalNum, coldalNum, doldalNum);
    eredmeny.textContent = "Terület: " + String(terulet);
    aoldal.value = "";
    boldal.value = "";
    coldal.value = "";
    doldal.value = "";
    // alert(terulet);
});

function szamolTerulet(aoldal: number, boldal: number, coldal: number, doldal: number):number {
    return ((aoldal+coldal)/(4*(aoldal-coldal))) * Math.sqrt(2)* 
    ((aoldal+boldal-coldal+doldal)*
    (aoldal-boldal-coldal+doldal)
    *(aoldal+boldal-coldal-doldal)
    *(-aoldal+boldal+coldal+doldal))
}