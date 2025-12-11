import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client without requiring authentication
// This prevents redirects to Base44 login page
export const base44 = createClient({
  appId: "6936de2cdf46248c9f7703bd", 
  requiresAuth: false // Disable authentication to prevent redirects
});
