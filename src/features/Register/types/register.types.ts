import { z } from 'zod';
import { AuthResponseType } from '@/redux/slices/auth/types/auth.type';

export const RegisterFormSchema = z.object({
  username: z.string({ required_error: 'Insira um usuário válido' }),
  email: z
    .string({ required_error: 'Insira um email válido' })
    .email('Insira um email válido'),
  password: z.string({ required_error: 'Senha é obrigatória' }),
});

export type RegisterFormType = z.infer<typeof RegisterFormSchema>;

export type RegisterResponse = AuthResponseType;
