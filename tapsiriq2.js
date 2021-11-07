//Tapsiriq2 
//Sual1 1.	Tam ədədi verilmişdir. Onun cüt olduğunu müəyyən edin. 
// const tamEded = parseInt(prompt('Ədəd daxil edin'))
// if((tamEded%2)==0){
//     console.log(`bu cut ededdir`);
// }else{
//     console.log(`Bu cut eded deyil`);
// }

//Sual 2 
//2.	x, y həqiqi ədədlər verilmişdir. Bu ədədlərin ən böyüyünü (maksimal olanı) tapın. 
// const xEdedi = parseInt(prompt('X ədədini daxil edin'))
// const yEdedi = parseInt(prompt('Y ədədini daxil edin'))
// if(xEdedi>yEdedi){
//     console.log(`Böyük ədəd:x=${xEdedi}`);
// }else if(xEdedi<yEdedi){
//     console.log(`Böyük ədəd: y=${yEdedi}`);
// }else {
//     console.log(`Bu ədədlər bərabərdir`);
// }

//Sual3
//3.	X, Y (Y  ≠   X) iki həqiqi ədəd verilmişdir. Ədədlərin kiçiyini həmin ədədlərin cəminin yarısı ilə, böyüyünü isə bu ədədlərin iki misli ilə əvəz edin. 
// let xEdedi = parseInt(prompt('X ədədini daxil edin'))
// let yEdedi = parseInt(prompt('Y ədədini daxil edin'))
// let ededlerinCemininYarisi= (xEdedi+yEdedi)/2
// let ededlerinIkiMisliX = xEdedi*2
// let ededlerinIkiMisliy = yEdedi*2

// if (xEdedi>yEdedi){
//     yEdedi=ededlerinCemininYarisi
//     xEdedi=ededlerinIkiMisliX
//     console.log(`${yEdedi}   ${xEdedi}`);
// }else if(xEdedi<yEdedi){
//     xEdedi=ededlerinCemininYarisi
//     yEdedi=ededlerinIkiMisliy
//     console.log(`${xEdedi}   ${yEdedi}`);
// }


//Sual4
//4.	Üçrəqəmli natural ədəd verilib. Onun Armstronq ədədi olub-olmadığını müəyyən edin. (Armstronq ədədində rəqəmlərin 3-cü qüvvətinin cəmi həmin ədədə bərabərdir. Məsələn, 153 ədədi Armstronq ədədidir, çünki  153 = 13+53+33). 
// const ucReqemliNaturalEded = Number(prompt('Ucreqemli Natural Eded Daxil Edin'))
// const  arrayECevirmek= Array.from(String(ucReqemliNaturalEded), Number)

// const armStrong = (Math.pow(arrayECevirmek[0], 3))+(Math.pow(arrayECevirmek[1], 3))+(Math.pow(arrayECevirmek[2], 3))
// console.log(armStrong);

// if(ucReqemliNaturalEded==armStrong){
//     console.log(`Bu arm strong ədədidir`);
// }else{
//     console.log(`bu armstrong ədədi deyil`);
// }

//Sual 5 
//5.	4 rəqəmli natural ədəd verilmişdir. Onun palindrom ədəd olduğunu təyin edin. Qeyd edək ki, tam ədəd o zaman palindrom sayılır ki, soldan - sağa və əksinə eyni cür oxunur, məs, 2332 ədədi palindrom sayılır. 
// const dordReqemliNaturalEded = Number(prompt('Ucreqemli Natural Eded Daxil Edin'))
// const palindrom = function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// if(palindrom(dordReqemliNaturalEded)==dordReqemliNaturalEded){
//     console.log(`Bu palindrom ededdir`);
// }else{
//     console.log(`Bu palindrom eded deyil`);
// }

//Sual 6
//6.	Beşrəqəmli natural ədəd verilmişdir. Ən solda yerləşən rəqəmdən başlayaraq bütün rəqəmlərin artma sırası ilə yerləşdiyini  müəyyən etmək lazımdır.  Məsələn, 15689 ədədində bütün rəqəmlər artma sırası ilə yerləşir. 

// const besReqemliNaturalEded = Number(prompt('Ucreqemli Natural Eded Daxil Edin'))
// const  arrayECevirmek= Array.from(String(besReqemliNaturalEded), Number)

// if((arrayECevirmek[0]<arrayECevirmek[1])&&(arrayECevirmek[1]<arrayECevirmek[2])&&
// (arrayECevirmek[2]<arrayECevirmek[3])&&(arrayECevirmek[3]<arrayECevirmek[4])){
//     console.log(`Bu artan sira ile duzulub`);
// }else{
//     console.log(`Bu artan sira ile duzulmeyib`);
// }


//Sual 7
//7.	4-rəqəmli tam müsbət ədəd  verilmişdir. Bu ədədin öz  rəqəmlərin hamısına  bölündüyünü  təyin edin. 
// const dordReqemliNaturalEded = Number(prompt('Ucreqemli Natural Eded Daxil Edin'))
// const arrayECevirmek = Array.from(String(dordReqemliNaturalEded), Number)
// let reqem= 0
// for (let i = 0; i<arrayECevirmek.length;i++){
//     if((dordReqemliNaturalEded%arrayECevirmek[i])==0){
//         reqem=reqem+1
//         if(reqem==3){
//             console.log(`Butun ededler bolunur`);
//         }
//     }
// }
//Sual 8
//8.	4-rəqəmli natural ədədi verilmişdir. Bu ədədin yazılışından cüt rəqəmləri silin (0 - cüt rəqəm kimi qəbul edin). 
// const dordReqemliNaturalEded = Number(prompt('Ucreqemli Natural Eded Daxil Edin'))
// const arrayECevirmek = Array.from(String(dordReqemliNaturalEded), Number)
// let cutReqemleriSil = cutReqemleriSil(arrayECevirmek)
// function cutReqemleriSil(numbers) {
//     return numbers.filter(n => n % 2 !== 0); 
// }
// console.log(cutReqemleriSil);

//Sual 9
//9.	Dördrəqəmli natural ədəd verilib. Onun rəqəmlərinin bir birindən fərqli olduğunu müəyyən edin. Əgər fərqlidirsə, "YES" çıxışa verin, əks halda - "NO". 

// const dordReqemliNaturalEded = Number(prompt('Ucreqemli Natural Eded Daxil Edin'))


// function ededleriYoxla(eded) {
//     let first = eded % 10;
//     while (eded) {
//       if (eded % 10 !== first) return false;
//   eded = Math.floor(eded / 10);
//     }
//     return true
// }

// console.log(ededleriYoxla(dordReqemliNaturalEded));



//Sual 10
//10.	Üç tam ədəd verilib. Onların arasında eyni olduqlarının sayını müəyyən edin. Əgər üçü də eynidirsə, çıxışa 3 rəqəmi, ikisi eynidirsə - 2, ədədlər fərqlidirsə 0 rəqəmi verin
// const eded1 = Number(prompt('Birinci ededi daxil edin'))
// const eded2 = Number(prompt('Ikinci ededi daxil edin'))
// const eded3 =Number(prompt('Ucuncu ededi daxil edin'))

// let reqem;
// if((eded1==eded2)&&(eded2==eded3)&&(eded1==eded3)){
//     reqem = 3
// }
// else if((eded1==eded2)||(eded2==eded3)||(eded1==eded3)){
//     reqem = 2
// }else{
//     reqem = 0
// }
// console.log(reqem);


