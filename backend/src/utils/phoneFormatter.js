
//Recomended Preset

/*const phoneFormatter = require('../utils/phoneFormatter');
  const phone = '47933456550';

  console.log(phoneFormatter(phone));
*/


function phoneFormatter(phone) {
    const actualText = phone;
    const isCell = actualText.length === 11;
    let formattedText;
    if (isCell) {
        const part1 = actualText.slice(0, 2);
        const part2 = actualText.slice(2, 7);
        const part3 = actualText.slice(7, 11);
        formattedText = ` (${part1}) ${part2}-${part3}`
    } else {
        const part1 = actualText.slice(0, 2);
        const part2 = actualText.slice(2, 6);
        const part3 = actualText.slice(6, 10);
        formattedText = ` (${part1}) ${part2}-${part3}`
    }

    return formattedText;
}

module.exports = phoneFormatter;