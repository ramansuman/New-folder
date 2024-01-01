function *generate(){
    var i=300;
    while(true)
    {
        yield i++;
    }
}
let g =generate();
let n= g.next();
while(!n.done){
    console.log(n.value)
    n=g.next();
    if(n.value>305)
    break;
}
console.log(g.return("End"))
console.log(g.next())