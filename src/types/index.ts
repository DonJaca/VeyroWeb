// ─── Shared primitive types ────────────────────────────────────────────────

export type ID = string;

// ─── Navigation ────────────────────────────────────────────────────────────

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

// ─── API response envelope ─────────────────────────────────────────────────

export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  error: string | null;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
