import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FirstComponent from './components/componet1/FirstComponent';
import SecondComponent from './components/component2/SecondComponent';
import ThirdComponent from './components/component3/ThirdComponent';

function App() {

  return (
    <div>
      <Header/>
      {window.location.pathname === '/component1' && <FirstComponent/>}
      {window.location.pathname === '/component2' && <SecondComponent/>}
      {window.location.pathname === '/component3' && <ThirdComponent/>}
      <Footer/>
    </div>
  );
}

export default App;
