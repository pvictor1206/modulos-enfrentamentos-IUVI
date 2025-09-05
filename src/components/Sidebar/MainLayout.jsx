// MainLayout.js
import { useState } from 'react';
import NavBar from './NavBar';

function MainLayout({ children }) {
  const [sidebar, setSidebar] = useState(false); //Abre ou nao o menu quando inicia a página

  return (
    <div className="flex">
      <NavBar sidebar={sidebar} setSidebar={setSidebar} />

      {/* mobile: ml-0; desktop: ml-[320px] quando aberto, ml-[57px] quando fechado */}
      <main
        style={{ '--content-left': sidebar ? '320px' : '57px' }}
        className={`flex-1 transition-all duration-[450ms] px-[5px] ${
          sidebar ? 'md:ml-[320px]' : 'md:ml-[57px]'
        }`}
      >
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
