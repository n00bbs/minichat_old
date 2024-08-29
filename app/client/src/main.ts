import { html } from "sanitized-html-templates";
import { apiClient } from "./api";
import "./style.scss";
import { Message, MessageComponent } from "./components/message";

const messages: Message[] = [
  {
    author: "Alice",
    message: "Hello, Bob!",
  },
];

document.querySelector<HTMLDivElement>("#app")!.innerHTML = html`
  <div class="main-div">
    <h1>Messages</h1>
    ${messages.map(MessageComponent)}
  </div>
`.getHtml();

apiClient.get("/").then((response) => {
  const postHTML = response.data.message;
  document.querySelector<HTMLDivElement>(".main-div")!.innerHTML += postHTML;
});
