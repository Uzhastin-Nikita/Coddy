let n = parseInt(prompt("N"));

if(n < 20){
    alert(n * 0.2)
    alert("Жкономии нет")
}
else if (n >= 20 && n < 400) {
    let p = parseInt(n / 20);
    let t = parseInt(n % 20);
    alert(`Количество пачек; ${p}, ${t}`)
    alert(`Выгода: ${n * 0.2 - (p*3.7 + t*0.2)}`);
}