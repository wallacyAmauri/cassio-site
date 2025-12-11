import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "6936de2cdf46248c9f7703bd", 
  requiresAuth: true // Ensure authentication is required for all operations
});
