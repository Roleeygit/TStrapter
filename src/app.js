/*
File: app.ts
Author: Juhász Roland
Copyright: 2022, Juhász Roland
Group: Szoft II N
Date: 2021-10-23
Github: https://github.com/Roleeygit/
Licenc: GNU GPL
*/
var szamolGomb = document.querySelector('#szamolGomb');
var eredmeny = document.querySelector('#eredmeny');
szamolGomb === null || szamolGomb === void 0 ? void 0 : szamolGomb.addEventListener('click', function () {
    var aoldal = document.querySelector('#aoldal');
    var boldal = document.querySelector('#boldal');
    var coldal = document.querySelector('#coldal');
    var doldal = document.querySelector('#doldal');
    var aoldalNum = Number(aoldal.value);
    var boldalNum = Number(boldal.value);
    var coldalNum = Number(coldal.value);
    var doldalNum = Number(doldal.value);
    var terulet = szamolTerulet(aoldalNum, boldalNum, coldalNum, doldalNum);
    eredmeny.textContent = "Terület: " + String(terulet);
    aoldal.value = "";
    boldal.value = "";
    coldal.value = "";
    doldal.value = "";
    alert(terulet);
});
function szamolTerulet(aoldal, boldal, coldal, doldal) {
    // return ((aoldal+coldal)/(4*(aoldal-coldal))) * Math.sqrt(2)* 
    // ((aoldal+boldal-coldal+doldal)*
    // (aoldal-boldal-coldal+doldal)
    // *(aoldal+boldal-coldal-doldal)
    // *(-aoldal+boldal+coldal+doldal))
    return aoldal + boldal + coldal + doldal;
}
