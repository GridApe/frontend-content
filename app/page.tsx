import ToggleTheme from "@/components/ToggleTheme";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full bg-white dark:bg-black font-extrabold">
      <ToggleTheme/>
      <h1 className="text-black dark:text-white">Landing Page</h1>
    </main>
  )
}
