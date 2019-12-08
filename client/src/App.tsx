import React from "react";

// Components
import MessagesBox from "./components/MessagesBox";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <MessagesBox interlocutorName="Test User" messages={[]} />
      </div>
    </div>
  );
};

export default App;
