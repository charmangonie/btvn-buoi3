function NumberOneTriangle(row){
    for ( let i=1;i<=row;i++){
        for ( let j=1;j<=i;j++)
        {document.write("1")}
        document.write("<br/>")
    }
}
document.getElementById('tamgiac').innerHTML= NumberOneTriangle(5)



