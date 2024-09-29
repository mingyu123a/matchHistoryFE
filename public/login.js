function checkLogin() {
	checkLoginStatus();
}

// 로그인 상태 확인 함수
async function checkLoginStatus() {
	const tokenData = JSON.parse(sessionStorage.getItem('accessToken'));
	const logInOutBtn = document.querySelector('.log_in_out_btn');
	
	if (tokenData && tokenData.accessToken) {
		logInOutBtn.textContent = '로그아웃';
		logInOutBtn.classList.add('logged-in');
	} else {
		logInOutBtn.textContent = '로그인';
		logInOutBtn.classList.remove('logged-in');
	}
}

// 로그인/로그아웃 처리 함수
async function handleLoginLogout() {
	const tokenData = JSON.parse(sessionStorage.getItem('accessToken'));
	
	if (tokenData && tokenData.accessToken) {
		// 로그아웃 처리
		sessionStorage.removeItem('accessToken');
		alert('로그아웃되었습니다.');
		window.location.href = '../index.html';
	} else {
		// 로그인 페이지로 이동
		window.location.href = '../login/login.html';
	}
}

