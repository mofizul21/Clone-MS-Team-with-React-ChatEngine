import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from "./components/ChatFeed";

import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
    return (
      <ChatEngine
        height="100vh"
        projectID="63947003-71b6-483e-b6fb-f11405269182"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps} />}
      />
    );
}

export default App;