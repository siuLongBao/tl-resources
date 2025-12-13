import { api } from '../utils/request';
import type { CreateUserInput } from '../../../shared/src/index';

// createUser should not send auth token
export const createUser = async (payload: CreateUserInput, signal?: AbortSignal) => {
  return api.post('/api/users', payload, { auth: false, signal });
};

export default { createUser };
