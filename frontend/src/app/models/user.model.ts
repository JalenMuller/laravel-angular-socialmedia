export default interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  birthday: number;
  gender: string;
  profile_url?: string;
  avatar?: string | null;
  profile_cover?: string | null;
}
