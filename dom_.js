console.dir(document)
var element=document.getElementsByClassName("list-group-item")
console.log(element)
// element[2].style.fontWeight= 'bold'
 element[2].style.backgroundColor= 'green'
for(var i=0;i<element.length;i++)
{
    element[i].style.fontWeight="bold"
}   