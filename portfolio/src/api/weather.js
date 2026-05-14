export async function getWeather(city) {
  const API_KEY = "c39e83261b81460d90661348261405";

  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=uk`
  );

  return res.json();
}