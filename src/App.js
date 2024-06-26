import './stylesheets/App.css';

import Link from './components/Link';
import Notifications from './components/Notifications';
import { useState } from 'react';

function App() {
  const [notifications, setNotifications] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <main>
        <div className="App-intro">
          <img src="https://avatars.githubusercontent.com/u/84814195?v=4" alt="Adrien Moutet" />
          <h1>Adrien Moutet</h1>
          <p>
            Développeur Web Fullstack
          </p>
        </div>
        <div className="App-links">
          <Link href="https://adrien-moutet.fr/" target="_blank" title="Mon Portfolio" icon={"github"} setNotifications={setNotifications}/>
          <Link href="https://github.com/ADFuji" target="_blank" title="Mon Github" icon={"github"} setNotifications={setNotifications}/>
          <Link href="https://www.linkedin.com/in/adrien-moutet-821087238/" target="_blank" title="Mon LinkedIn" icon={"github"} setNotifications={setNotifications}/>
          <Link href="https://www.malt.fr/profile/adrienmoutet" target="_blank" title="Mon Malt" icon={"github"} setNotifications={setNotifications}/>
        </div>
      </main>

      <Notifications notifications={notifications}/>
    </div>
  );
}

export default App;
