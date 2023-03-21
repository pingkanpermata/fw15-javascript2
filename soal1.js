//var
/* cakupan atau scope dari keyword var adalah global. maksudnya global disini adalah semua variabel
yang dideklarasikan dengan var yang berada diluar function dapat diakses keseluruhan kode. keyword var yang
berada didalam suatu function maka hanya bisa diakses oleh function tersebut.*/
/* keyword var dapat dideklarasikan ulang atau dapat diperbarui. Artinya, kita dapat membuat dua variabel
dengan nama variabel yang sama tetapi dengan nilai yang berbeda dan hanya nilai variabel akhir yang akan diambil
dari variabel yang terakhir */
/* contoh penggunaan var : */
var nama="pingkan"
console.log(nama);
/* terdapat kelemahan ketika kita menggunakan keyword var untuk mendeklarasikan variabel. tidak masalah
jika kita memang ingin mendeklarasikan ulang variabel tersebut. tetapi akan menjadi masalah jika kita tidak menyadari bahwa variabel
tersebut sudah ada atau sudah dideklarasikan sebelumnya tetapi malah kita buat variabel baru */

//let
/* cakupan dari keyword let adalah blok kode. Maksudnya adalah segala hal yang berada diantara tanda kurung kurawal '{..}' 
jadi, variabel yang dideklarasikan di dalam blok kode dengan keyword let hanya akan diproses yang ada di dalam blok kode tersebut saja
nilai dari variabel yang dideklarasikan dengan menggunakan keyword let juga dapat dideklarasikan ulang/diperbarui SELAMA BERADA DALAM BLOK KODE. 
dengan kata lain, nilai dari keyword let tidak dapat dideklarasikan ulang diluar blok kode */
/* deklarasi let dapat diangkat keatas/ hoisting. tidak seperti keyword var yang akan menghasilkan undefined, keyword let ini tidak akan menghasilkan 
apapun sehingga jika kita menggunakan keyword let sebelum dideklarasikan, maka akan menghasilkan reference error */
/* contoh penggunaan let : */
let umur = 25;
if (umur > 18) {
    let dewasa = true;
}
console.log(dewasa);
/* Dalam contoh di atas, kita menggunakan variabel let untuk menyimpan nilai numerik 25 pada variabel umur. Variabel let memiliki scope yang lebih terbatas 
dari variabel var, sehingga kita hanya dapat mengakses variabel tersebut di dalam blok kode tempat variabel tersebut dideklarasikan. Pada contoh di atas, 
kita tidak dapat mengakses variabel dewasa di luar blok kode if. */

//const
/* variabel yang dideklarasikan dengan keyword const tetap terjaga sehingga nilainya tetap konstan/ tidak berubah. keyword const juga hampir 
sama seperti let */
/* seperti deklarasi variabel keyword let, keyword const hanya dapat diakses didalam blok kode dimana keyword tsb dideklarasikan. artinya, nilai dari 
variabel yang dideklarasikan dengan menggunakan keyword const akan tetap sama pada cakupannya dan tidak dapat dideklarasikan ulang/diperbarui setiap deklarasi 
const harus diinisialisasi pada saat deklarasi. */
/* contoh penggunaan const : */
const phi = 3.14;
console.log(phi);
phi = 3.1415;
console.log(phi);
/* Dalam contoh di atas, kita menggunakan variabel const untuk menyimpan nilai konstanta phi. Variabel const tidak dapat diubah nilainya setelah dideklarasikan, 
sehingga ketika kita mencoba untuk mengubah nilai PI, akan terjadi error pada program. */
