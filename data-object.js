let fruit = { name: 'grape',
    description: 'Popular and famous fruit.',
    colors: ['purple', 'green'],
    isSmall: true,
    order: 1
}

console.log(fruit['isSmall']);
console.log(fruit.description);
//mengakses key yang belum tersedia menggunakan notasi pipe
console.log(fruit.owner || 'blacky');
//modul untuk mengetahui key apa saja yang ada di object
let keys = Object.keys(fruit);
//mencari nilai atau key tertentu
console.log(keys);
//konversi value menjadi object yang di sebelah kanan akan tampil semua
let values = Object.values(fruit);
//mencari nilai atau key tertentu
console.log(values);
//membuat pasangan dalam bentuk array key dan value
let entries = Object.entries(fruit);
console.log(entries);
/**
 * menambah key baru ke dalam sebuah object
 * Object.defineProperties = mendifinisikan banyak key dan value sekaligus
 */

/**
 * menambah key baru ke dalam sebuah object
 * Object.defineProperty = mendifinisikan key dan value satu kali eksekusi
 */

//dot notation
fruit.price = 25.000;
console.log(fruit);

//delete
delete fruit.price;
console.log(fruit);