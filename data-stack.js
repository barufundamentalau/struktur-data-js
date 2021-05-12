//konsep data stack Last In First Out (LIFO)

/**
 * Bisa di analogikan seperti piring kotor yang akan dicuci
 * selalu pasti akan diambil paling atas dan hanya bisa dilihat paling atas
 * begitu pula jika kita akan menghapusnya pasti akan mulai dari atas
 */

//desain interface
//ada sebuah fungsi yang memiliki fungsi lagi didalamnya yaitu push, pop, peek dan size
function createStack() {
    let array = [];

    return {
        //push memiliki parameter yaitu item
        push: function(item) {
            array.push(item);
        },
        /**
         * pop tidak membutuhkan parameter karena
         * ketika kita melakukan pop otomatis data yang paling
         * terakhir diujung array yang akan diambil
         */
        pop: function() {
            array.pop();
        },
        //peek untuk melihat isi dari stack atau array adalah yang paling atas
        //menggunakan array dengan index terakhir
        //karena index dimulai dari nol jadi harus dari satu
        peek: function() {
            return array[array.length - 1];
        },

        //size fungsi dari length
        size: function() {
            return array.length;
        }
    }
}
// membuat dengan cara tumpukan buku
//untuk menginisiasi stack baru
const bookStack = createStack();
bookStack.push("The Effective Engineer");
bookStack.push("The Pragmatic Programmer");
bookStack.push("Start With Why");
// artinya melihat buku yang paling pertama adalah buku yang paling atas
console.log(bookStack.peek());