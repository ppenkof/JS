function solution(data) {
  let printing = [];
  let actions = {};
  let act;
  for (const item of data) {
    let [com, str] = item.split(" ");

    function action(cmd, string){
       actions = {
        add(string) {
          printing.push(string);
          return printing;
        },
  
        remove(string) {
          while (printing.indexOf(string) !== -1) {
            printing.splice(printing.indexOf(string), 1);
          }
            return printing;
          
        },
  
        print() {
          return printing.join(",");
        },
      };
     
     return actions[cmd](string);
  
    }
     
     act = action(com,str);
    
  }
    console.log(act);
}

solution(["add hello", "add again", "remove hello", "add again", "print"]);
//exp res: again,again
// doesn't work
solution(['add pesho', 'add george', 'add peter', 'remove peter','print']);
//exp res: pesho,george
