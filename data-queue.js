/** Queue atau antrian
 * konsep mirip dengan stack
 * basisnya dari array tapi kebalikan dari struktur data stack
 * struktur data queue menggunakan struktur data First In First Out (FIFO)
 * 
 * Ilustrasi seperti orang yang sedang antri di depan ATM
 * siapa yang orang pertama dalam antrian maka ia yang mengambil uang pertama 
 * 
 * ada 3 aturan yang digunakan
 * 1. data hanya bisa ditambahkan diakhir antrian
 * 2. data hanya bisa dibaca di item yang pertama
 * 3. data hanya bisa dihapus adalah data yang paling awal dimasukan
 */

/**
 * start desain interface
 * menggunakan pendekatan setiap item baru ditambahkan di paling akhir seperti antrian
 * pendekatan yang tidak ada salah dan tidak ada benar tergantung kondisi
 */
function createQueue() {
    //menggunakan struktur data array untuk membuat antrian
    const queue = []; // [3, 2, 1]

    return {
        //implementasi enqueue yang menerima sebuah parameter
        //unshift akan menambahkan nilai kedalam array di posisi yang paling akhir
        enqueue: function(value) {
            queue.unshift(value);
        },
        //pop akan selalu menghapus item yang paling terakhir sesuai dengan antrian
        dequeue: function() {
            queue.pop();
        },
        //fungsi peek juga tidak memiliki parameter dengan langsung melakukan implementasi dengan melihat item yang paling terakhir
        peek: function() {
            //kata kunci untuk mengembalikan data return
            return queue[queue.length - 1];
        },
        //size
        size: function() {
            return queue.length;
        }
    }
}

const q = createQueue();
q.enqueue('Create script for data structure course');
q.enqueue('Create code example for data structure');
q.enqueue('Record data structure course');
q.enqueue('Vacation');

q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.peek());