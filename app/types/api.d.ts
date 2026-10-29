export interface ApiResponse<T = any> {
  status: "success" | "error";
  code: string;
  message: string;
  data: T | null;
  meta: {
    request_id: string | null;
    pagination: any;
  };
}

export interface AuthUser {
  id: number;
  name: string;
  username: string;
  phone: string;
  email: string;
  profile_photo_path: string | null;
  profile_photo_url: string | null;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface LoginRequest {
  identity: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  token_type: string;
  user: AuthUser;
}

export interface RegisterRequest {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
}

export interface RegisterResponse {
  token: string;
  token_type: string;
  user: AuthUser;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  message: string;
  code: string;
}

export interface ResetPasswordRequest {
  email: string;
  token: string;
  password: string;
  password_confirmation: string;
}

export interface ResetPasswordResponse {
  message: string;
  code: string;
}
