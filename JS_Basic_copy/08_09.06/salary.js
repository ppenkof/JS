function salary(input) {
    let n = Number(input[0]);
    let salary = Number(input[1]);
    let penalty = 0;
    let index = 2;

    for (let i = 1; i <= n; i++) {
        let sites = input[index];
        index++;
        switch (sites) {
            case "Facebook":
                penalty = 150;
                break;
            case "Reddit":
                penalty = 50;
                break;
            case "Instagram":
                penalty = 100;
                break;
            default:
                penalty = 0;
                break;
        }
        salary -= penalty;
        if (salary <= 0) { break; }
    }
    if (salary <= 0) {
        console.log('You have lost your salary.');
    } else {
        console.log(salary);
    }
}
salary(["10",

"750",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"])