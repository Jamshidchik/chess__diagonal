let num1 = +prompt("Kvadrat tomonini kiriting:")
while(isNaN(num1) || num1 == 0) {
    num1 = +prompt("Qaytadan urinib ko'ring:")
}
let chess = ""
if (num1 %2 == 0) {
    num1++
}
for (let i = 0; i < num1; i++) {
    for (let j = 0; j < num1; j++) {
        if (i == j || i == 0 || j == 0 || j == num1 - 1||  i == num1 - 1 ||  j==(num1-1)- i ) {
            chess = chess + "✅"
        } else {
            chess += "🔲"
        }
    }
    console.log(chess);
    chess = ""
}