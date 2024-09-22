function getRiotApiKey() {
    $.ajax({
        url: "https://findd.findduo.site/api/config", // API URL
        method: 'GET', // 요청 방식
        success: function(response) {
            riotApiKey = JSON.stringify(response)
            riotApiKey = riotApiKey.replace(/^"|"$/g, '');
            console.log(riotApiKey);
            return riotApiKey;
        },
        error: function(error) {
            console.log('API키를 불러오는데 실패했습니다.', error);
            return "default";
        }
    });
}

