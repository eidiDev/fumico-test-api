export class ResetPasswordDto {
  readonly email: string;
  readonly token: string;
  readonly newPassword: string;
  readonly currentPassword: string;
}
