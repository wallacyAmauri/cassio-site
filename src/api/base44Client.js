// BASE44 DESABILITADO - Site rodando independente do Base44
// Lazy import - only load Base44 SDK when needed
// This prevents automatic redirects to Base44 login page on page load

// let base44ClientPromise = null;

// export const getBase44Client = async () => {
//   if (!base44ClientPromise) {
//     base44ClientPromise = import('@base44/sdk').then(({ createClient }) => {
//       return createClient({
//         appId: "6936de2cdf46248c9f7703bd", 
//         requiresAuth: false // Disable authentication to prevent redirects
//       });
//     });
//   }
//   return base44ClientPromise;
// };

// Helper function for upload file
// export const uploadFile = async (file) => {
//   const base44 = await getBase44Client();
//   return base44.integrations.Core.UploadFile({ file });
// };

// Função mock para manter compatibilidade (retorna erro)
export const uploadFile = async (file) => {
  throw new Error('Upload de arquivo desabilitado - Base44 removido');
};
