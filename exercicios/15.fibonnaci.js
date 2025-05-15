function gerarFibonacci(n) {
    let fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci;
}

const primeiros10Fibonacci = gerarFibonacci(10);
console.log("Os primeiros 10 números da sequência de Fibonacci são:", primeiros10Fibonacci.join(", "));
