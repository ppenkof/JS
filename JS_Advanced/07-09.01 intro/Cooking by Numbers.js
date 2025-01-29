function cookingNumbers(num, opr1, opr2, opr3, opr4, opr5) {
    let result = [];
    let operations = [opr1, opr2, opr3, opr4, opr5];
    num = Number(num);
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {

            case 'chop':
                num /= 2;
                result.push(Number(num.toFixed(1)));
                break;
            case 'dice':
                num = Math.sqrt(num);
                result.push(Number(num.toFixed(1)));
                break;
            case 'spice':
                num++;
                result.push(Number(num.toFixed(1)));
                break;
            case 'bake':
                num *= 3;
                result.push(Number(num.toFixed(1)));
                break;
            case 'fillet':
                num *= 0.8;
                result.push(Number(num.toFixed(1)));
                break;
            default:
                console.log(`Invalid`);
                break;
        }
    
    }
    console.log(result.join('\n'));
}
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake',

    'fillet')