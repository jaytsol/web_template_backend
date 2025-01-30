export interface LoginDAO {
  readonly username: string;
  readonly password: string;
}

export interface SignUpDAO {
  readonly username: string;
  readonly password: string;
  readonly email: string;
}
