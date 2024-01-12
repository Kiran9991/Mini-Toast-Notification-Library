import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FirstComponent from './components/componet1/FirstComponent';
import SecondComponent from './components/component2/SecondComponent';

function App() {

  return (
    <div>
      <Header/>
      {window.location.pathname === '/component1' && <FirstComponent/>}
      {window.location.pathname === '/component2' && <SecondComponent/>}
      <Footer/>
    </div>
  );
}

export default App;
