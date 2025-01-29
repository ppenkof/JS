function repeatString(str,count) {
    let result='';
    for(let i=0;i<count;i++){
        result+=str.toString();
    }
    console.log(result); 
}
repeatString('String',2)