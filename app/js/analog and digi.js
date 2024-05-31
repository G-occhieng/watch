function s() {
  var d = new Date();
  var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  var p = d.getMinutes() * 0.5;
  var n = d.getHours() * 30;
  var h = n + p;
  var m = d.getMinutes() * 6;
  var s = d.getSeconds() * 6;
  document.getElementById("a").style.transform = "rotate(" + h + "deg)";
  document.getElementById("b").style.transform = "rotate(" + m + "deg)";
  document.getElementById("c").style.transform = "rotate(" + s + "deg)";
  document.getElementById("e").innerHTML = hours;
}
setInterval(s, 1);
