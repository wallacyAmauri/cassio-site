import Layout from "./Layout.jsx";

import Home from "./Home";

import Contato from "./Contato";

import Obrigado from "./Obrigado";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Contato: Contato,
    
    Obrigado: Obrigado,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Contato" element={<Contato />} />
                
                <Route path="/Obrigado" element={<Obrigado />} />
                
            </Routes>
        </Layout>
    );
}

// Função para detectar o base path automaticamente
function getBasePath() {
    // Usa o BASE_URL do Vite se disponível (mais confiável)
    if (import.meta.env?.BASE_URL) {
        return import.meta.env.BASE_URL;
    }
    
    // Fallback: detecção automática baseada na URL
    // Se estiver rodando localmente, não há base path
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return '/';
    }
    
    // Para GitHub Pages, detecta o nome do repositório do pathname
    const pathSegments = window.location.pathname.split('/').filter(segment => segment && segment !== '404.html');
    
    // Se não for GitHub Pages, sem base path
    if (!window.location.hostname.includes('.github.io')) {
        return '/';
    }
    
    // Para GitHub Pages project pages, o primeiro segmento é o nome do repo
    // User pages: username.github.io -> sem base path
    // Project pages: username.github.io/repo-name -> base path é /repo-name/
    if (pathSegments.length > 0) {
        const possibleRepoName = pathSegments[0];
        // Verifica se não é uma rota da aplicação
        const appRoutes = ['home', 'contato', 'obrigado'];
        if (possibleRepoName && !appRoutes.includes(possibleRepoName.toLowerCase())) {
            return `/${possibleRepoName}/`;
        }
    }
    
    return '/';
}

export default function Pages() {
    const basename = getBasePath();
    
    return (
        <Router basename={basename}>
            <PagesContent />
        </Router>
    );
}