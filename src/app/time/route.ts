export const dynamic = "force-static";
export const revalidate = 10;
// Revalidate every 10 seconds
// Caching only works on server side and get methods
// Using dynamic functions like headers and cookies will not work with static generation

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
