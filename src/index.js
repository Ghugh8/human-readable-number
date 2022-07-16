module.exports = function toReadable (number) {
    const digit = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const ty = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundr = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    const array = Array.from(String(number), Number);
    let arr = (String(number).length === 3) ? array : array.unshift(0);
    console.log(array, arr)
  
    let a = array[0];
    let b = array[1];
    let c = array[2];
    let d = (10 * b + c);
    console.log(a, b, c, d);
  
    if (number === 0) {
        return 'zero'} else if (a != 0 && b === 0 && c === 0) {
            return hundr[a-1]} else if (a != 0 && b === 0) {
                return hundr[a-1] + ' ' + digit[c-1]} else if (a != 0 && c === 0) {
                    return hundr[a-1] + ' ' + ty[b-1]} else if (a === 0 && d > 10 && d < 20) {
                        return teen[c-1]} else if (a === 0 && d < 10) {
                            return digit[c-1]} else if (c != 0 && b != 0 && d > 10 && d < 20) {
                                return hundr[a-1] + ' ' + teen[c-1]} else if (a === 0 && d > 20 && ((d % 10) != 0)) {
                                    return ty[b-1] + ' ' + digit[c-1];} else if (a === 0 && c === 0 && ((d % 10) === 0)) {
                                        return ty[b-1]} else {
                                            return hundr[a-1] + ' ' + ty[b-1] + ' ' + digit[c-1];}
  }