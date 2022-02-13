function kakaoShare(){
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
        title: '밥약 유형 테스트',
        description: '스꾸친이 준비한 밥약 유형테스트로 내 유형을 알아보자!',
        imageUrl:
            'https://skkuchintest.netlify.app/img/index_logo.PNG',
        link: {
            mobileWebUrl: 'https://skkuchintest.netlify.app',
            androidExecutionParams: 'test',
        },
        },

        buttons: [
        {
            title: '테스트 해보기!',
            link: {
            mobileWebUrl: 'https://skkuchintest.netlify.app',
            },
        },
        ]
    });
}