export default class User {
  id!: string;
  name?: string | null;
  email?: string | null;
  password?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
}
