import { api } from '../utils/request';
import type { LoginInput } from '../../../shared/src/index';

// login does not require existing token
export const login = async (payload: LoginInput, signal?: AbortSignal) => {
  // backend now returns shared ApiResponse<T> and request() unwraps data, so we get the payload directly
  const data = await api.post('/api/auth/login', payload, { auth: false, signal });
  return data;
};

export default { login };
