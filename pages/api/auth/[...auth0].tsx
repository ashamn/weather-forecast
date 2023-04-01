import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

// export default handleAuth({
//   login: handleLogin({
//     authorizationParams: {
//       audience: "https://ashamn.us.auth0.com/api/v2/", // or AUTH0_AUDIENCE
//       scope: "openid profile email read:users", // or AUTH0_SCOPE
//     },
//   }),
// });

export default handleAuth();
