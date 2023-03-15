let user=prompt("Pilih dengan angka \n1. Batu\n2.Gunting\n3.Kertas");
let comp=Math.floor(Math.random() * 3);
let juser;
let jcomp;
let hasil;
if(user==1){
    juser="Batu";
}else if(user==2){
    juser="Gunting";
}else if(user==3){
    juser="Kertas";
}
if(comp==0){
    jcomp="Batu";
}else if(comp==1){
    jcomp="Gunting";
}else if(comp==2){
    jcomp="Kertas";
}
if(user==1 && comp==0){
    hasil="Seri";
}else if(user==1 && comp==1){
    hasil="Menang";
}else if(user==1 && comp==2){
    hasil="Kalah";2
}else if(user==2 && comp==0){
    hasil="Kalah";
}else if(user==2 && comp==1){
    hasil="Seri";
}else if(user==2 && comp==2){
    hasil="Menang";
}else if(user==3 && comp==0){
    hasil="Menang";
}else if(user==3 && comp==1){
    hasil="Kalah";
}else if(user==3 && comp==2){
    hasil="Seri";
}else{
    juser="Pilih antara 1 - 3";
    hasil="Tidak ada hasil";
}

alert(`Kamu memilih = ${juser}`+`\nKomputer memilih = ${jcomp}`+`\nMaka hasil = ${hasil}`);