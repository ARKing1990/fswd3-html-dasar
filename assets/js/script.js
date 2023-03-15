//Console Log dan Alert/Notif
console.log("JavaScript Fundamental");
alert("Hai Kamu");

//Variable
var nama = "Husein";
let umur = 22;
const alamat = "Jakarta";
console.log("Nama saya "+nama+", berumur "+umur+" tahun, domisili "+alamat);

//Tipe Data
let angka=12; //Numberik
let text="String"; //String
let array=[1,2,3,4]; //Array
let bool=true;  //Boolean
let object={nama:"Husein",umur:22}; //Object
let employee=Symbol('Joko'); //Symbol
let dompet=null; //Null

//Operator Aritmatika
let a=10;
let b=2;
let c=a+b; //Penjumlahan
let d=a-b; //Pengurangan
let e=a*b; //Perkalian
let f=a/b; //Pembagian
let g=a%b; //Modulus

//Operator Perbandingan
let i=10;
let j=5;
console.log(i>j);
console.log(i<j);
console.log(i>=j);
console.log(i<=j);
console.log(i==j);
console.log(i!=j);

//Operator Logical
let k=true;
let l=false;
console.log(k&&l);
console.log(k||l);
console.log(!k);

//Operator Bitwise
let m=00111100;
let n=00001101;
console.log(m&n);
console.log(m|n);
console.log(m^n);
console.log(~m);

//Promt dan Confirm
let response=prompt("Kemana liburan nanti?");
alert("Jawabanmu "+response);
let respon=confirm("Apa kamu yakin?");

//Else If
let pertanyaan=prompt("1 + 3 = ");
if (pertanyaan==4){
    alert("Benar");
}else if(pertanyaan<4){
    alert("Salah, masih kurang");
}else{
    alert("Salah, kebanyakan");
}

//For, While, Do While, Break, Continue
let x=0;
for(x;x<5;x++){
    if(x==3){
        break;
    }
    console.log(`Iterasi ke ${x}`);
}
let y=0;
do{
    console.log(`Iterasi ke ${y}`);
    y+=1;
}while(y<5);
let z=0;
while(z<5){
    console.log(`Iterasi ke ${z}`);
    z++;
}
