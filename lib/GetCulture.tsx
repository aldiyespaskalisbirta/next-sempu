export default async function GetCulture() {
  const res = await fetch(
    "https://64c55436c853c26efadabaef.mockapi.io/culture/culture",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
