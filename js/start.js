const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector('#result');
const endPoint = 12;
const select = []; // 결과 선택시 배열 생성

function calResult(){
    var pointArray = [
        {name: 'ISTJ', value:0, key:0},
        {name: 'ISFJ', value:0, key:1},
        {name: 'INFJ', value:0, key:2},
        {name: 'INTJ', value:0, key:3},
        {name: 'ISTP', value:0, key:4},
        {name: 'ISFP', value:0, key:5},
        {name: 'INFP', value:0, key:6},
        {name: 'INTP', value:0, key:7},
        {name: 'ESTP', value:0, key:8},
        {name: 'ESFP', value:0, key:9},
        {name: 'ENFP', value:0, key:10},
        {name: 'ENTP', value:0, key:11},
        {name: 'ESTJ', value:0, key:12},
        {name: 'ESFJ', value:0, key:13},
        {name: 'ENFJ', value:0, key:14},
        {name: 'ENTJ', value:0, key:15},
    ]
    for (let i = 0; i < endPoint; i++){
        var target = qnaList[i].a[select[i]];
        for (let j = 0; j < target.type.length; j++){
            for(let k = 0; k < pointArray.length; k++){
                if(target.type[j] === pointArray[k].name){
                    pointArray[k].value += 1;
                }
            }
        }
    }

    var resultArray = pointArray.sort(function(a, b){
        if(a.value > b.value){
            return -1;
        }
        if(a.value < b.value){
            return 1;
        }
        return 0;
    });
    console.log(resultArray)
    let resultword = resultArray[0].key;
    return resultword;
}

function setResult(){
    let point = calResult();
    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + point + '.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
    qna.style.WebkitAnimation = "fadeout 0.5s";
    qna.style.animation = "fadeout 0.5s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadein 0.5s";
        result.style.animation = "fadein 0.5s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block"
        }, 250)})
        setResult();
}

function addAnswer(answerText, qIdx, idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadein');
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++){
            children[i].disabled = true;
            children[i].style.display = 'none';
        }
        select[qIdx] = idx;
        goNext(++qIdx);
    }, false);
}
function goNext(qIdx){
    if(qIdx === endPoint){
        goResult();
        return;
    }
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function begin(){
    main.style.WebkitAnimation = "fadeout 0.5s";
    main.style.animation = "fadeout 0.5s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadein 0.5s";
        qna.style.animation = "fadein 0.5s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block"
        }, 250);
        let qIdx = 0;
        goNext(qIdx);
    }, 250);
}
