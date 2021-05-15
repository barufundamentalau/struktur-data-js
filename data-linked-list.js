/**
 * Masih berbasis array namun setiap item di dalam
 * array terhubung dengan satu dan yang lainnya (saling terhubung).
 * 
 * Array adalah linked list yang sifatnya fungsional by default
 * 
 * Linked list lebih baik dari pada array untuk membooking tempat atau address memori
 * 
 * Ilustrasi seperti gerbong kereta
 * 
 * Array biasa dan Linked list berbeda
 */

//createNode menerima sebuah parameter atau value
function createNode(value) {
    return {
        value, // buat sintaks valid javascript es6 antara kiri dan kanan sama makanya dibuat satu saja
        next: null
    }
}

//tidak menerima parameter apapun, membutuhkan 3 property dan 5 method
function createLinkedList() {
        return {
            // 3 property yaitu head, tail dan length
            // head yang paling depan
            head: null,
            // Tail adalah sisanya
            tail: null,
            // untuk mengetahui seberapa panjang sebuah linked list yang dibuat
            length: 0,
            // method membutuhkan push, pop, get, delete dan cek apakah ada isinya atau tidak ada
            push: function(value) {
                const node = createNode(value);

                // jika linkedlist kosong
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                    this.length += 1;
                    return node;
                } else {
                    this.tail.next = node;
                    this.tail = node;
                    this.length += 1;
                    return node;
                }
            },
            //pop
            pop: function() {
                //kosong
                if (this.isEmpty()) {
                    return null;
                }
                const node = this.tail;
                //satu node
                if(this.head == this.tail) {
                    this.head = null;
                    this.tail = null;
                    this.length = 0;
                    return node;
                }
                //lebih dari satu node
                let current = this.head;
                let penult;
                while(current) {
                    if (current.next == this.tail) {
                        penult = current;
                        break;
                    }
                    current = current.next;
                }
                penult.next = null;
                this.tail = penult;
                this.length -= 1;

                return node;
            },
            //get
            get: function(index) {
                // jika list kosong
                if (index < 0 || index > this.length) {
                    return null;
                }
                // jika list item 1
                if (index == 0) {
                    return this.head;
                }
                // jika list item lebih dari 1
                let current = this.head;
                let i = 0;
                while(i < index) {
                    current = current.next;
                    i += 1;
                }

                return current;
            },
            //delete
            delete: function(index) {
                // list kosong
                if (index < 0 || index > this.length) {
                    return null;
                }
                // list item 1
                if (index == 0) {
                    const deleted = this.head;
                    this.head = this.head.next;
                    this.length -= 1;

                    return deleted;
                }
                // list dengan item lebih dari 1
                let current = this.head;
                let prev;
                let i = 0;

                while(i < index) {
                    prev = current;

                    current = current.next;
                    i += 1;
                }
                const deleted = current;
                prev.next = current.next;
                this.length -= 1;

                return deleted;
            },
            //isEmpty
            isEmpty: function() {
                return this.length == 0;
            },
        print: function () {
            const values = [];
            let current = this.head;

            while (current) {
                values.push(current.value);
                current = current.next;
            }

            return values.join(" => ");
        }
    }
}

const list = createLinkedList();
const values = ['a', 'b', 'c', 'd'];
const nodes = values.map(function (val) {
    list.push(val);
});

// jalankan semua implementasi linked list
console.log(list.isEmpty());
console.log(list.pop().value);