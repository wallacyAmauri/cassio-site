

// Função para obter o base path
function getBasePath() {
    if (typeof window === 'undefined') return '/';
    
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

export function createPageUrl(pageName: string) {
    const basePath = getBasePath();
    const pagePath = pageName.toLowerCase().replace(/ /g, '-');
    return basePath === '/' ? `/${pagePath}` : `${basePath}${pagePath}`;
}