function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (const cat of arr) {
        let catArgs = cat.split(' ');
        let catName = catArgs.shift();
        let catAge = Number(catArgs.shift());
        let cats = new Cat(catName, catAge);
        cats.meow();
    }
}
cats(['Mellow 2', 'Tom 5'])