import { html } from "sanitized-html-templates";
import { Messages } from "./messages.interface";
import { MessageComponent } from "../message/message.component";

export const MessagesComponent = (messages: Messages) => html`
  <div class="messages-component">${messages.map(MessageComponent)}</div>
`;
