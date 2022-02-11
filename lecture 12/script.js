function seatchMax(numbers)  {
    let max = 0;
    let maxIndex = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
            maxIndex = numbers[i]
        }
    }
    return max, maxIndex;
}

num = [1, 2, 3, 4, 5];
alert(seatchMax(num));