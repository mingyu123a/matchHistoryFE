function getRiotApiKey() {
    $.ajax({
        url: "localhost:8080/api/config", // API URL
        method: 'GET', // 요청 방식
        success: function(response) {
            riotApiKey = JSON.stringify(response)
        },
        error: function(error) {
            console.log('API키를 불러오는데 실패했습니다.', error);
        }
    });
}