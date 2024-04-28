import './stylesheets/App.css';

import Link from './components/Link';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <main>
        <Link href="https://adrien-moutet.fr/" target="_blank" title="Mon Portfolio" icon={"github"}/>
        <Link href="https://github.com/ADFuji" target="_blank" title="Mon Github" icon={"github"}/>
        <Link href="https://www.linkedin.com/in/adrien-moutet-821087238/" target="_blank" title="Mon LinkedIn" icon={"github"}/>
        <Link href="https://www.malt.fr/profile/adrienmoutet" target="_blank" title="Mon Malt" icon={"github"}/>
      </main>
    </div>
  );
}

export default App;
