import { getBase44Client } from './base44Client';

// Lazy export - only access Base44 auth when needed
export const getUser = async () => {
  const base44 = await getBase44Client();
  return base44.auth;
};