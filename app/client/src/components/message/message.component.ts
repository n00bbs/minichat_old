import { html } from "sanitized-html-templates";
import { Message } from "./message.interface";
import "./message.component.scss";

function debug<T>(arg: T) {
  console.log("debug", arg);
  return arg;
}

export const MessageComponent = (message: Message) => html`
  <div class="message-component">
    <h1>${debug(message.author)}</h1>
    <p>${debug(message.message)}</p>
  </div>
`;
