import { html } from "sanitized-html-templates";
import { Message } from "./message.interface";
import "./message.component.scss";

export const MessageComponent = (message: Message) => html`
  <div class="message-component">
    <h1>${message.author}</h1>
    <p>${message.message}</p>
  </div>
`;
