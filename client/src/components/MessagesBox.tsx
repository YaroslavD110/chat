import * as React from "react";

// Components
import Message from "./Message";

// Types
import { IMessage } from "../types";

interface IMessagesBoxProps {
  interlocutorName: string;
  messages: IMessage[];
}

export const MessagesBox: React.FC<IMessagesBoxProps> = props => {
  const { interlocutorName, messages } = props;
  const [inputValue, setInputValue] = React.useState("");

  const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setInputValue("");
  };

  return (
    <div className="right">
      <div className="top">
        <span>
          To: <span className="name">{interlocutorName}</span>
        </span>
      </div>

      <div className="chat">
        {messages.map(message => (
          <Message {...message} />
        ))}
      </div>

      <form className="write" onSubmit={handleSend}>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.currentTarget.value)}
        />
        <button type="submit" className="write-link send" />
      </form>
    </div>
  );
};

export default MessagesBox;
