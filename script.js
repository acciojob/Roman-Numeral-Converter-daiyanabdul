function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	 let roman = "";
    let keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        let [symbol, value] = obj[keys[i]];

        // Check for subtraction cases (like IV, IX, etc.)
        if (i % 2 === 0 && i + 2 < keys.length) {
            let [nextSymbol, nextValue] = obj[keys[i + 2]];
            if (num >= value - nextValue) {
                roman += nextSymbol + symbol;
                num -= (value - nextValue);
                continue;
            }
        }

        // Add the symbols to the result while reducing the number
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    }

    return roman;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
