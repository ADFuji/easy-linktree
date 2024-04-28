import './stylesheets/App.css';

import Link from './components/Link';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <main>
        <Link href="https://reactjs.org" target="_blank" title="React" icon={"github"}/>
        <Link href="https://reactjs.org" target="_blank" title="React" icon={"github"}/>
        <Link href="https://reactjs.org" target="_blank" title="React" icon={"github"}/>
        <Link href="https://reactjs.org" target="_blank" title="React" icon={"github"}/>
      </main>
    </div>
  );
}

export default App;
