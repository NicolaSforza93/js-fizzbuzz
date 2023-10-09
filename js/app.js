// - scrivere un programma che stampi i numeri da 1 a 100
//   - aprire un ciclo for
//     - creare il contatore
//       - impostare una variabile e assegnare un valore iniziale
//     - impostare una condizione da verificare per poter eseguire il codice
//     - incrementare il valore del contatore 

const gridDomElement = document.querySelector('.grid')
console.log('gridDomElement')

for (let i = 0; i < 100; i++) {
    // - inizializzare una variabile che aggiunga il valore +1 al contatore
    const n = i + 1;

    //     - aggiungere istruzioni condizionali attraverso l'operatore modulo
    let print = 0;
    let className;
    if (n % 15 === 0) {
        print = 'fizzBuzz';
        className = 'fizzbuzz';
        //       - ALTRIMENTI SE il numero è un multiplo di 3 e 5
        //         - stampare in console FizzBuzz  
        //  console.log('FizzBuzz');
    } else if (n % 5 === 0) {
        print = 'buzz';
        className = 'buzz';
        //       - ALTRIMENTI SE il numero è un multiplo di 5
        //         - stampare in console Buzz
        // console.log('Buzz');
    } else if (n % 3 === 0) {
        print = 'fizz';
        className = 'fizz';
        //       - SE il numero è un multiplo di 3
        //         - stampare in console Fizz
        // console.log('Fizz');
    } else {
        print = n
        //       - ALTRIMENTI stampare gli altri numeri
        // console.log(n);
    }

    const boxDomElement = document.createElement('div');
    boxDomElement.classList.add('box');
    boxDomElement.classList.add(className);
    boxDomElement.innerHTML = print
    console.dir(boxDomElement);
    console.log(print);
    gridDomElement.append(boxDomElement);

}