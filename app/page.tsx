import HoverLink from "@/components/buttons/HoverLink";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-white dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-8 py-32 px-16">
        <h1 className="text-3xl font-bold">IAN CARDONA</h1>
        
        <div className="flex gap-4">
          <HoverLink href="/about">GitHub</HoverLink>
          <span>|</span>
          <HoverLink href="/work">LinkedIn</HoverLink>
          <span>|</span>
          <HoverLink href="/contact">Twitter</HoverLink>
        </div>

        <div className="w-full mt-16">
          <h2 className="text-lg font-bold mb-4">Projects</h2>
          <div className="flex flex-col gap-2">
            <HoverLink href="/projects/project-1">DevDashboard</HoverLink>
          </div>
        </div>

        <footer className="mt-auto pt-16 text-sm text-zinc-500 dark:text-zinc-600">
          © 2026 Ian Cardona
        </footer>
      </main>
    </div>
  );
}