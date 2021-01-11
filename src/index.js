module.exports = function toReadable(number) {
    //function toReadable(number) {
    let words = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let result = "";
    let hundreds = Math.floor(number / 100);

    let dozens = number % 100;

    let simpleNums = dozens % 10;
    if (hundreds) {
        result += words[hundreds] + " hundred ";
    }
    if (words[dozens] && dozens > 0) {
        result += words[dozens];
    }
    if (!words[dozens]) {
        result += words[dozens - (dozens % 10)] + " " + words[simpleNums];
    }
    if (number == 0) {
        return words[number];
    }
    return result.trim();
};
