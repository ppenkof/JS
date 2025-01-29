function adAstra(text) {
    let str = text.shift();
    let pattern = /(\||#)(?<item>[A-Za-z ]+)\1(?<bestBefore>\d{2}\/\d{2}\/\d{2})\1(?<nutrition>\d+)\1/g;
    let print = [];
    let matches = pattern.exec(str);
    let totalCalories = 0;
    while (matches) {
        totalCalories += +matches[4];
        print.push(`Item: ${matches[2]}, Best before: ${matches[3]}, Nutrition: ${matches[4]}`);
        matches = pattern.exec(str);
    }

    console.log(`You have food to last you for: ${Math.floor((totalCalories / 2000))} days!`);
    console.log(print.join('\n'));

}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
)

/*"You have food to last you for: {days} days!"
•	The output for each food item should look like this:
"Item: {item name}, Best before: {expiration date}, Nutrition: {calories}"
*/
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ])