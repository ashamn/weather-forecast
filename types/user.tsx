import { UserProfile } from "@auth0/nextjs-auth0/client";

export interface UserData extends UserProfile {
  html_url: string;
}
