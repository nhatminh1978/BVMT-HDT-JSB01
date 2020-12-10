var input = document.getElementById("myInput");
  function myFunction() {
      var filter, ul, li, a, i;
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName("li");
      if (!filter) {
        ul.style.display = "none";
      }else{
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                ul.style.display = "block";
                li[i].style.display = "";
            } else {
                li[i].style.display = "none"; 
            }
        }
    }
}
input.addEventListener("keyup", myFunction);
let search = document.getElementById("search-button").addEventListener('click',function(){
    input.style.display="block";
})
let today = new Date();
let current_day = today.getDay();
let day_name;
switch (current_day) {
    case 0:
        day_name = "Chủ nhật";
        break;
    case 1:
        day_name = "Thứ hai";
        break;
    case 2:
        day_name = "Thứ ba";
        break;
    case 3:
        day_name = "Thứ tư";
        break;
    case 4:
        day_name = "Thứ năm";
        break;
    case 5:
        day_name = "Thứ sau";
        break;
    case 6:
        day_name = "Thứ bảy";
        break;
    }
let date = day_name + ", " + today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
document.getElementById("date").innerHTML = date;
$(function(){
    $('#top-up').click(function () {
        $('body,html').animate({scrollTop: 0}, 600);
    });
});