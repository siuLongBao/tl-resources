export class ApiError extends Error {
  code?: string;
  details?: unknown;
  status?: number;
  raw?: unknown;

  constructor(message: string, code?: string, details?: unknown, status?: number, raw?: unknown) {
    super(message);
    this.name = 'ApiError';

    this.code = code;
    this.details = details;
    this.status = status;
    this.raw = raw;

    Object.setPrototypeOf(this, ApiError.prototype);
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      details: this.details,
      status: this.status,
      raw: this.raw,
    };
  }
}
