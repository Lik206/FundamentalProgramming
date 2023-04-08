import {promisify} from 'util'
const coffeeIngredients = {
    bean: 50,
    water: 250
}

console.log('saya ingin kopi')

function makeCoffee(lessStock, makeit) {
    setTimeout(() => {
        
        if(coffeeIngredients.bean < 50 && coffeeIngredients.water < 250) {
            lessStock(new Error("stock kurang, kopi tidak bisa dibuat"), null)
            return;
        } else{
            makeit('kopi sudah jadi')
        }

        
    },3000)
}
console.log('baik, tunggu sebentar')

//callback
// const failed = error => console.log(error.message)
// const success = success => console.log(success)

// makeCoffee(failed, success)


//convert callback to promise
const promise = promisify(makeCoffee);

promise()
.then(success => console.log(success)).catch(error => console.log(error.message))