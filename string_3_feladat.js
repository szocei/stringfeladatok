function feladat3(char,...arr) {
const egybe = [char,...arr].flat();
console.log(egybe);

const kivesz_karakter = egybe.filter(item => item.indexof === char);
console.log(kivesz_karakter);



}

feladat3('a',['alfa','béta','gamma'],['hely','falu','város'],['Attila','Béla','János'],['aa','bb','cc'],['tt','hhh','tit'])


