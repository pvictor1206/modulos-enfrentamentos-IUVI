// MainLayout.js (novo componente)
import { useState } from 'react';
import NavBar from './NavBar';

function MainLayout({ children }) {
    const [sidebar, setSidebar] = useState(true);

    return (
        <div className="flex">
            <NavBar sidebar={sidebar} setSidebar={setSidebar} />
            
            <main className={`flex-1 transition-all duration-[450ms] ${sidebar ? "ml-[298px]" : "ml-0"}`}>
                {children}
            </main>
        </div>
    );
}

export default MainLayout;