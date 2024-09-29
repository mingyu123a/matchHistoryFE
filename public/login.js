function checkLogin(){
  var accessToken = sessionStorage.getItem("accessToken");
  console.log(accessToken);
  if (accessToken == null) {
    window.location.href="../login/login.html";
  }
  else{
    sessionStorage.clear();
    alert('로그아웃 되었습니다.');
    window.location.href="../login/login.html";
  }
}

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
  const existingContainer = document.querySelector('.container.container-one');

  // 새로운 div 요소 생성
  const newContainer = document.createElement('div');
  newContainer.className = 'container container-one';
  newContainer.onclick = log_out; // onclick 이벤트 설정
  
  // 버튼 요소 생성
  const button = document.createElement('button');
  button.className = 'log_in_out_btn';
  button.textContent = '로그아웃';
  
  // fill-one div 생성
  const fillDiv = document.createElement('div');
  fillDiv.className = 'fill-one';
  
  // 버튼에 fill-one div 추가
  button.appendChild(fillDiv);
  
  // 새로운 div에 버튼 추가
  newContainer.appendChild(button);
  
  // 기존의 div를 새로운 div로 교체
  if (existingContainer) {
      existingContainer.replaceWith(newContainer);
  }
}

