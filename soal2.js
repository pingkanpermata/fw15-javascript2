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

// 5. Push() method
// metode ini digunakan untuk menambahkan elemen baru ke akhir array dan mengembalikan panjang array
// hanya dapat digunakan pada array
const push1 = ["a","b","c"];
console.log(push1.push("e")); //output: 4
console.log(push1); //output: ['a','b','c','e']
console.log(push1.length) //output: 4

// 6. reverse() method
// metode ini digunakan untuk membalik urutan elemen array dan mengembalikan array yang sudah dibalik
// hanya dapat digunakan pada array
const reverse1 = ["a","b","c"];
console.log(reverse1.reverse()); //output: ['c','b','a']

// 7. shift() method
// metode ini digunakan untuk menghapus elemen pertama dari array dan mengembalikan elemen tersebut
// hanya dapat digunakan pada array
const shift1 = ["a","b","c"];
console.log(shift1.shift()); //output: a
console.log(shift1); //output: ['b','c']

// 8.slice() method
// metode ini digunakan untuk mengambil elemen array dari index awal sampai index akhir dan mengembalikan elemen tersebut
// hanya dapat digunakan pada array
const slice1 = ["1","2","3","4","5"];
console.log(slice1.slice(1, 3)); //output: ['2','3']
console.log(slice1.slice(2)); //output: ['3','4','5']
const slice2 = "Hello World";
console.log(slice2.slice(1, 3)); //output: el
console.log(slice2.slice(2)); //output: llo world

// 9.sort() method
// metode ini digunakan untuk mengurutkan elemen array dan mengembalikan array yang sudah diurutkan
// hanya dapat digunakan pada array
const sort1 = ["c","a","b"];
console.log(sort1.sort()); //output: ['a','b','c']

// 10.toString() method
// metode ini digunakan untuk mengubah object, date, array, number, function, dan boolean menjadi string dan mengembalikan string tersebut
// bisa digunakan pada object, date, array, number, function, dan boolean
// contoh object
const toString1 = {
    name: "pingkan",
    age: 26,
};
console.log(toString1.toString()); //output: [object Object]

// contoh date
const toString2 = new Date();
console.log(toString2.toString()); //output: Thu Mar 23 2023 23:19:58 GMT+0700 (Western Indonesia Time)

// contoh array
const toString3 = ["a","b","c"];
console.log(toString3.toString()); //output: 123

// contoh number
const toString4 = 123;
console.log(toString4.toString()); //output: 123

// contoh function
const toString5 = function () {
    return "Hello World";
};
console.log(toString5.toString()); //output: function () { return "Hello World"; }

// contoh boolean
const toString6 = true;
console.log(toString6.toString()); //output: true