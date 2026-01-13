import Header from "@/components/home/Header";
import HomeLinkTextButton from "@/components/home/HomeLinkTextButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <Header />
      
      <main className="flex flex-1 w-full max-w-7xl mx-auto flex-col px-6 py-16">
        <div className="flex w-full flex-col items-start">
          <div className="flex flex-col items-start gap-2">
            <HomeLinkTextButton href="https://devdashboard.framer.website/">Visit DevDashboard</HomeLinkTextButton>
            <HomeLinkTextButton href="/blog">Visit my Blog</HomeLinkTextButton>
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-sm text-zinc-500 dark:text-zinc-600">
          © 2026 Ian Cardona
        </div>
      </footer>
    </div>
  );
}