import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function getUser(req, res) {
  try {
    // Get access token manually
    const response = await fetch("https://ashamn.us.auth0.com/oauth/token", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.AUTH0_CLIENT_ID ?? "",
        client_secret: process.env.AUTH0_CLIENT_SECRET ?? "",
        audience: process.env.AUTH0_AUDIENCE ?? "",
      }),
    });
    const { access_token } = await response.json();

    // Get user data
    const { id } = req.query;
    const data = await fetch(`https://ashamn.us.auth0.com/api/v2/users/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // Return user data
    const { html_url } = await data.json();
    const user = { html_url };
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});
