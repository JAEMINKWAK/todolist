const quotes = [
    {
        quote:"좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
        author:"단테",
    },
    {
        quote:"1퍼센트의 가능성, 그것이 나의 길이다.",
        author:"나폴레옹",
    },
    {
        quote:"화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아 붓는 사랑의 정도이다.",
        author:"머더 테레사",
    },
    {
        quote:"하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author:"사무엘존슨",
    },    
    {
        quote:"도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자.",
        author:"헨리포드",
    },
    {
        quote:"네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다.",
        author:"베토벤",
    },
    {
        quote:"실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
        author:"하버트 개서",
    },
    {
        quote:"진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
        author:"아인슈타인",
    },
    {
        quote:"꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author:"괴테",
    },
    {
        quote:"우선 무엇이 되고자 하는가를 자신에게 말하라 그리고 해야 할일을 하라.",
        author:"에픽토테스",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;