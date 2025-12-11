// Lazy import - only load Base44 SDK when needed
// This prevents automatic redirects to Base44 login page on page load

let base44ClientPromise = null;

export const getBase44Client = async () => {
  if (!base44ClientPromise) {
    base44ClientPromise = import('@base44/sdk').then(({ createClient }) => {
      return createClient({
        appId: "6936de2cdf46248c9f7703bd", 
        requiresAuth: false // Disable authentication to prevent redirects
      });
    });
  }
  return base44ClientPromise;
};

// Helper function for upload file
export const uploadFile = async (file) => {
  const base44 = await getBase44Client();
  return base44.integrations.Core.UploadFile({ file });
};
