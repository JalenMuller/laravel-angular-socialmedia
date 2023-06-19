export default interface IProfile {
  first_name: string;
  last_name: string;
  birthday: number;
  gender: string;
  profile_url: string;
  avatar?: string | null;
  profile_cover?: string | null;
  phone_nr?: string | null;
  country?: string | null;
  city?: string | null;
  workplace?: string | null;
  high_school?: string | null;
  college?: string | null;
  website?: string | null;
  bio?: string | null;
  email?: string | null;
  relationship_status?: string | null;
  created_at?: string;
}
