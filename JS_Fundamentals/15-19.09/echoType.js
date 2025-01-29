function echoType(params) {
    let typeP=typeof(params);
    if(typeP==='string' || typeP==='number') {
        console.log(typeP);
        console.log(params);
    }else{
        console.log(typeP);
        console.log('Parameter is not suitable for printing');
    }
}
echoType(NaN)