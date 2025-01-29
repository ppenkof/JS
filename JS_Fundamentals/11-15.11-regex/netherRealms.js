function netherRealms(str) {
    let splitingPattern = /\s*,\s*/;
    let demonNames = str.split(splitingPattern);
    let healthPattern = /[^0-9+\-*\/.]/g;
    let damagePettern = /[+-]?\d+(\.?\d+)?/g;
    let damageModPattern = /[*\/]/g;
    let demons = {};

    for (let demon of demonNames) {
        let healthMatches = demon.match(healthPattern);
        let health = 0;
        let damage = 0;
        if (healthMatches) {
            for (let symbol of healthMatches) {
                let ascii = symbol.charCodeAt();
                health += ascii;
            }
        }
        let damageMatches = demon.match(damagePettern);
        if (damageMatches) {
            for (let symbol of damageMatches) {
                damage += +symbol;
            }
        }
        let damageModMatches = demon.match(damageModPattern);
        if (damageMatches) {
            for (let symbol of damageModMatches) {
                if (symbol === '*') {
                    damage *= 2;
                } else {
                    damage /= 2;
                }
            }
        }
        demons[demon] = { health, damage };
    }

    let entries = Object.entries(demons).sort((a,b)=>a[0].localeCompare(b[0]));
    for (let [demon,demonItems] of entries) {
        console.log(`${demon} - ${demonItems.health} health, ${demonItems.damage.toFixed(2)} damage`);
    }
}
netherRealms('M3ph-0.5s-0.5t0.0**')
netherRealms('M3ph1st0**, Azazel')