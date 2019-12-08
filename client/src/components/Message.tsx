import * as React from "react";
import { IMessage } from "../types";

interface IMessageProps extends IMessage {}

export const Message: React.FC<IMessageProps> = props => {
  const { text, isIncoming } = props;

  return <div className={`bubble${isIncoming ? "" : " you"}`}>{text}</div>;
};

export default Message;
