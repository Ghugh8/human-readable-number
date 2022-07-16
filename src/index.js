module.exports = function toReadable (number) {
    const digit = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const ty = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundr = ['one hundred', 'two hundreds', 'three hundreds', 'four hundreds', 'five hundreds', 'six hundreds', 'seven hundreds', 'eight hundreds', 'nine hundreds'];
    const arr = Array.from('' + number, Number);
    console.log(arr)
  
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];
    let d = (10 * b + c);
    console.log(a, b, c, d);
  
    if (b === 0 && c ===0) {
      return hundr[a-1]} else if (b === 0) {
          return hundr[a-1] + ' ' + digit[c-1]} else if (c === 0) {
              return hundr[a-1] + ' ' + ty[b-1]} else if (c != 0 && b != 0 && d > 10 && d < 20) {
                  return hundr[a-1] + ' ' + teen[c-1]} else {
                      return hundr[a-1] + ' ' + ty[b-1] + ' ' + digit[c-1];}
  }