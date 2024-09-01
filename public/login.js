
function log_in() {
  log_in_out_btn = document.getElementsByClassName("log_in_out_btn")
  var accessToken = sessionStorage.getItem("accessToken")
  if (accessToken != null) {
    log_in_out_btn[0].innerHTML = "로그아웃"
    log_in_out_btn[0].style.backgroundColor = "white";
    log_in_out_btn[0].style.color = "lightskyblue";
  }

}
function log_out() {
  console.log('logOut')
  if (document.getElementsByClassName("log_in_out").innerHTML == "로그아웃") {
    console.log("로그아웃 -> 로그인")
    sessionStorage.clear()
    log_in_out_btn[0].innerHTML = "로그인"
  } else {
      
  }
}

