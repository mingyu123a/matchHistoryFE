async function getRiotApiKey() {
    try {
        const response = await $.ajax({
            url: "https://findd.findduo.site/api/config",
            method: 'GET',
        });
        let riotApiKey = JSON.stringify(response);
        riotApiKey = riotApiKey.replace(/^"|"$/g, '');
        console.log(riotApiKey);
        return riotApiKey;
    } catch (error) {
        console.log('API키를 불러오는데 실패했습니다.', error);
        return "default";
    }
}
