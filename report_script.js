function exp(x) {
    if (x.checked) {
      document.getElementById("expired").style.visibility = "visible";
      document.getElementById("others").style.visibility = "hidden";
    }
  }
 
  function other(x) {
    if (x.checked) {
      document.getElementById("expired").style.visibility = "hidden";
      document.getElementById("others").style.visibility = "visible";
    }
  }