function solution(data) {
  for (const item of data) {
    const token = item.split(" ");
    let name;
    let cmd;
    token.forEach(element, (i) => {
      i = 0;
      i % 2 === 0 ? (cmd = element) : (name = element);
      i++;

      const cr = function create(name) {
        return {
          Name: name,
        };
      };
      cr(name);

      const inh = function inherit(cr, name) {
        return {
          n: name,
          parentName: cr.Name,
        };
      };

      const s = function set(inh, key, value) {
        return {
          na: inh.n,
          nam: inh.parentName,
          [key]: value,
        };

        const pr = function print(s) {
          return;
        };
      };
    });
  }

  //act = action(com, str);

  // console.log(act);
}

solution([
  "create c1",

  "create c2 inherit c1",

  "set c1 color red",

  "set c2 model new",

  "print c1",

  "print c2",
]);
/*exp res: 
  color:red 
  model:new,color:red*/
