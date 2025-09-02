const API_KEY = "sk-***************************************"; // 자신의 API 키로 변경

const user_question = prompt("질문을 입력하세요.");

const fun = async () => {
  const res = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4-nano",
      input: user_question,
    }),
  });
  const json = await res.json();
  const answer = document.querySelector(".suckbal");
  answer.innerText = json.output[1].content[0].text;
};

fun();
