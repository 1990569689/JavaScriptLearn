function getNavOpen() {
    var x = document.getElementsByClassName("nav");
    //直接写x.style.display=""是没用的因为getElementsByClassName选择的元素是一个class的所以元素必须把他们全部遍历在赋值
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    };
 
}
function getNavClose()
{
    var x = document.getElementsByClassName("nav");
    //直接写x.style.display=""是没用的因为getElementsByClassName选择的元素是一个class的所以元素必须把他们全部遍历在赋值
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    };

}