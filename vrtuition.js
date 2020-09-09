function elid(p)
{
    return document.getElementsByClassName(p);
}

//images scrolling effect in home page

var a=elid('img-rounded');
count=0;

setInterval(function()
{
    a[count].style.display="none";
    a[(count+1)%3].style.display="block";
    count=(count+1)%3;
    console.log(count);
},1600);
