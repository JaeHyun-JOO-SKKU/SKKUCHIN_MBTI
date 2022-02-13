const qnaList = [
    {
      q: '1. 모든게 낯설고 신기한 새 학기, <br>밥은 누구랑?',
      a: [
        { answer: '맛집을 줄줄이 꿰고 있는 <br> 맛집 전문가 선배 혹은 동기', type: ['ISTJ', 'ISTP', 'ESTP', 'ESTJ', 'INTJ', 'INTP', 'ENTP', 'ENTJ'] },
        { answer: 'OT 때 너무 재미있었던 <br> 우리 과의 개그맨 선배 혹은 동기', type: ['ISFJ', 'ISFP', 'ESFP', 'ESFJ', 'INFJ', 'INFP', 'ENFP', 'ENFJ'] },
      ]
    },
    {
      q: '2. 밥약을 잡을 때 나는?',
      a: [
        { answer: '이번달 스케줄과 통잔 잔고 등을 <br> 참고해 철저하게 계획을 세운다.', type: ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'] },
        { answer: '그런게 어딨어. <br> 그냥 그날 그날 밥약을 잡는다.', type: ['ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ENTP'] },
      ]
    },
    {
      q: '3. 술 땡기는 저녁, <br> 근데 시간이 조금 늦었다.',
      a: [
        { answer: '원래 대학의 하루는 저녁 9시부터 시작이다. <br> 다 모여~!', type: ['ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'] },
        { answer: '오늘은 너무 늦었으니 <br> 집에서 간단하게 혼맥!', type: ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP'] },
      ]
    },
    {
      q: '4. OT 때 만난 친구와 첫 밥약! <br> 어디로 갈까?',
      a: [
        { answer: '어제 벌써 사전조사 끝! <br> 제일 추천이 많았던 곳으로 가자.', type: ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'] },
        { answer: '걷기도 할 겸, <br> 학교 근처에서 끌리는 곳으로 가자.', type: ['ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ENTP',] },
      ]
    },
    {
      q: '5. 학교 근처 맛집을 <br> 친구에게 추천해준다면?',
      a: [
        { answer: '"사이드메뉴도 다양하고, 분위기도 좋고~"<br> 상세히 설명해준다.', type: ['ISFJ', 'ISFP', 'ESFP', 'ESFJ', 'ISTJ', 'ISTP', 'ESTP', 'ESTJ'] },
        { answer: '"개꿀맛! 꼭 가봐!" <br> 단순하고 강렬하게 추천해준다.', type: ['INFJ', 'INFP', 'ENFP', 'ENFJ', 'INTJ', 'INTP', 'ENTP', 'ENTJ']},
      ]
    },
  
    {
      q: '6. 밥약을 잡았는데, 갑자기 다른 친구들이 <br> 같이 가도 되냐고 한다.',
      a: [
        { answer: '역시 밥은 여럿이서 먹는게 제맛! <br> 같이 가자!', type: ['ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'] },
        { answer: '너무 북적이는건 싫어, <br> 다음에 같이 먹자!', type: ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP' ] },
      ]
    },
    {
      q: '7. 다음주부터 중간고사.. <br> 친구들이 술 마시자고 부른다..',
      a: [
        { answer: '아무리 그래도 이번주는 안돼.. <br> 시험 끝나고 마시자!', type: ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'] },
        { answer: '공부는 내일의 나에게 맡긴다! <br> 술 마시러 가자~!', type: ['ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ENTP' ] },
      ]
    },
    {
      q: '8. 주말에 과 동기들이 <br> 학교 근처에서 밥을 먹자고 한다.',
      a: [
        { answer: '주말은 혼자 쉴거야! <br> 주중에 같이 먹자!', type: ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP'] },
        { answer: '모임은 못참지! <br> 몇시까지 어디로 가면 돼?', type: ['ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'] },
      ]
    },
    {
      q: '9. 친구가 추천해서 간 밥집, <br> 으악! 맛없다!',
      a: [
        { answer: '여긴 내 스타일은 아니다. <br> 다음엔 다른데로 가보자~', type: ['ISTJ', 'ISTP', 'ESTP', 'ESTJ', 'INTJ', 'INTP', 'ENTP', 'ENTJ' ] },
        { answer: '와 맛있다..! <br> 좋은 맛집을 추천해줘서 고마워~', type: ['ISFJ', 'ISFP', 'ESFP', 'ESFJ', 'INFJ', 'INFP', 'ENFP', 'ENFJ' ] },
      ]
    },
    {
      q: '10. 친구와 처음 와보는 식당, <br> 어떤걸 시킬까?',
      a: [
        { answer: '동기들 사이에서 평이 좋은 메뉴', type: ['ISFJ', 'ISFP', 'ESFP', 'ESFJ', 'ISTJ', 'ISTP', 'ESTP', 'ESTJ'] },
        { answer: '느낌 가는대로~! 갑자기 땡기는 메뉴', type: ['INFJ', 'INFP', 'ENFP', 'ENFJ', 'INTJ', 'INTP', 'ENTP', 'ENTJ'] },
      ]
    },
    {
      q: '11. 항상 사람이 많은 성대 맛집, <br> 가기 전에 당신은?',
      a: [
        { answer: '미리 가게에 전화해보고 <br> 자리가 다 찼는지 물어본다.', type: ['ISFJ', 'ISFP', 'ESFP', 'ESFJ', 'ISTJ', 'ISTP', 'ESTP', 'ESTJ'] },
        { answer: '가보고 없으면 다른데 가지 뭐~ <br> 일단 출발한다.', type: ['INFJ', 'INFP', 'ENFP', 'ENFJ', 'INTJ', 'INTP', 'ENTP', 'ENTJ'] },
      ]
    },
    {
      q: '12. 신나는 개강파티! <br> 내가 장소 섭외를 맡았다.',
      a: [
        { answer: '모두가 좋아하는 메뉴를 정리하고 <br> 꼼꼼히 따져 알아본다.', type: ['ISTJ', 'ISTP', 'ESTP', 'ESTJ', 'INTJ', 'INTP', 'ENTP', 'ENTJ' ] },
        { answer: '개강파티에 걸맞는 분위기의 <br> 신나고 왁자지껄한 술집을 알아본다.', type: ['ISFJ', 'ISFP', 'ESFP', 'ESFJ', 'INFJ', 'INFP', 'ENFP', 'ENFJ'] },
      ]
    }
  ]
  
  const infoList = [
    {
      name: '대충 제목 <"ISTJ">',
      desc: '대충 설명 '
    },
    {
      name: '대충 제목 <"ISFJ">',
      desc: '대충 설명 '
    },
    {
      name: '대충 제목 <"INFJ">',
      desc: '대충 설명 '
    },
    {
      name: '대충 제목 <"INTJ">',
      desc: '대충 설명 '
    },
    {
      name: '대충 제목 <"ISTP">',
      desc: '대충 설명 '
    },
    {
      name: '대충 제목 <"ISFP">',
      desc: '대충 설명 '
    },
    {
      name: '대충 제목 <"INFP">',
      desc: '대충 설명 '
    },
    {
      name: '대충 제목 <"INTP">',
      desc: '대충 설명 '
    },
    {
        name: '대충 제목 <"ESTP">',
        desc: '대충 설명 '
      },
      {
        name: '대충 제목 <"ESFP">',
        desc: '대충 설명 '
      },
      {
        name: '대충 제목 <"ENFP">',
        desc: '대충 설명 '
      },
      {
        name: '대충 제목 <"ENTP">',
        desc: '대충 설명 '
      },
      {
        name: '대충 제목 <"ESTJ">',
        desc: '대충 설명 '
      },
      {
        name: '대충 제목 <"ESFJ">',
        desc: '대충 설명 '
      },
      {
        name: '대충 제목 <"ENFJ">',
        desc: '대충 설명 '
      },
      {
        name: '대충 제목 <"ENTJ">',
        desc: '대충 설명 '
      },
  ]