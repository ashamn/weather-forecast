import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function weather(req, res) {
  try {
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const response = await resp.json();
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});
