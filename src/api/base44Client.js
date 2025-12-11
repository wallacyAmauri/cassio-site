// BASE44 COMPLETAMENTE REMOVIDO - Site rodando independente do Base44
// Este arquivo existe apenas para manter compatibilidade com imports antigos

// Função mock para manter compatibilidade (retorna erro)
export const uploadFile = async (file) => {
  throw new Error('Upload de arquivo desabilitado - Base44 removido');
};

// Função mock para manter compatibilidade
export const getBase44Client = async () => {
  throw new Error('Base44 desabilitado - Site rodando independente');
};
