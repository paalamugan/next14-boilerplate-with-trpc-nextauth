import { api } from '@/trpc/server';

export const getAuthToken = async () => {
  try {
    return await api.auth.authToken();
  } catch {
    return null;
  }
};
