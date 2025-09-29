import { cookies } from "next/headers";

export const metadata = {
  title: "About codevolution",
};

export default async function About() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;
  console.log("Theme cookie:", theme);
  console.log("About page rendered");
    return <h1>About me</h1>;
}