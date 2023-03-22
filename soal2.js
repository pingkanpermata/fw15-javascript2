//1. concat() method
//metode ini digunakan untuk menggabungkan dua buah array menjadi satu array baru tanpa mengubah array yang lama
// dapat digunakan pada rray dan string
// const concat1 = ["1","2","3"];
// const concat2 = ["4","5","6"];
const concat1 = [1,2,3];
const concat2 = [4,5,6];
const concat3 = concat1.concat(concat2);
console.log(concat3); //output : ['1','2','3','4','5','6']
const concat4 = "Hello";
const concat5 = "World";
const concat6 = concat4.concat(concat5);
console.log(concat6); //output : HelloWorld

//2. indexof() method
/* metode ini digunakan untuk mengecek apakah suatu nilai ada di dalam array atau tidak dan 
mengembalikan nilai index dari nilai tersebut jika ada dan mengembalikan nilai -1 jika tidak ada */
//dapat digunakan pada array dan string
const check1 = [1,2,3];
const check2 = "tangerang";
console.log(check1.indexOf(2)); //output:1
console.log(check1.indexOf(5)); //output:-1
console.log(check2.indexOf("a")); //output:1
console.log(check2.indexOf("b")); //output:-1

//3. join() method
/* metode ini digunakan untuk menggabungkan semua elemen array menjadi sebuah string 
dan mengembalikan string tersebut */
//hanya dapat digunakan pada array
const join1 = ["a","b","c"];
console.log(join1.join()); //output:a,b,c
console.log(join1.join("")); //output:abc
console.log(join1.join("-")); //output:a-b-c

//4. pop() method
// metode ini digunakan untuk menghapus elemen terakhir dari array dan mengembalikan elemen tersebut
//hanya dapat digunakan pada array
const pop1 = ["a","b","c"];
console.log(pop1.pop()); //output:c
console.log(pop1); //output:['a','b']

