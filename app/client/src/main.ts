import { html } from "sanitized-html-templates";
import { apiClient } from "./api";
import "./style.scss";
import { MessagesComponent } from "./components/messages/messages.component";
import { Messages } from "./components/messages/messages.interface";
import { MessageComponent } from "./components/message";
import sanitizeHtml from "sanitize-html";

const messages: Messages = [
  {
    author: "Alice",
    message: "Hello, Bob!",
  },
];

// console.log(MessagesComponent(messages).getHtml());
// console.log(
//   messages
//     .map(MessageComponent)
//     .map((x) => x.getHtml())
//     .join("")
// );

console.log(
  MessageComponent({
    author: "Alice",
    message: "Hello, Bob!",
  }).getHtml()
);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = html`
  <div class="main-div">
    <h1>Messages</h1>
    ${MessagesComponent(messages)}
  </div>
`.getHtml();

apiClient.get("/").then((response) => {
  const postHTML = response.data.message;
  document.querySelector<HTMLDivElement>(".main-div")!.innerHTML += postHTML;
});
