import React from 'react';
import CopyrightYear from 'react-copyright-year';
import language from 'languages/lt.json';
import './App.scss';

function App() {
  return (
    <>
      <p>Skaičiuoklė</p>
      <footer>
        <CopyrightYear suffix={language['copyright-note']} />
      </footer>
    </>
  );
}

export default App;
