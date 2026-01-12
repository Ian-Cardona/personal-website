import HomeLinkTextButton from "@/components/home/HomeLinkTextButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white dark:bg-black">
      <main className="flex flex-1 w-full max-w-2xl flex-col px-6 py-32 md:px-0">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-nunito-sans)' }}>
            IAN CARDONA
          </h1>
          <div className="flex gap-2 text-zinc-600 dark:text-zinc-400">
            <HomeLinkTextButton href="https://github.com/Ian-Cardona">GitHub</HomeLinkTextButton>
            <span>|</span>
            <HomeLinkTextButton href="https://www.linkedin.com/in/swe-ian-cardona/">LinkedIn</HomeLinkTextButton>
            <span>|</span>
            <HomeLinkTextButton href="https://www.credly.com/users/angelo-ian-michael-cardona.a988e18b">Cracked&apos;ly</HomeLinkTextButton>
          </div>
          <h2 className="text-lg font-bold mb-16">
            iancardona.dev@gmail.com
          </h2>
        </div>
        <div className="flex w-full flex-col items-start">
          <div className="flex flex-col items-start">
            <HomeLinkTextButton href="https://devdashboard.framer.website/">Visit DevDashboard</HomeLinkTextButton>
            <HomeLinkTextButton href="/blog">Visit my Blog</HomeLinkTextButton>
          </div>
        </div>
        <footer className="mt-auto flex w-full justify-center pt-16 text-sm text-zinc-500 dark:text-zinc-600">
          © 2026 Ian Cardona
        </footer>
      </main>
    </div>
  );
}