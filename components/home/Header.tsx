'use client';

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Name */}
          <div>
            <h1 className="text-8xl font-bold leading-tight tracking-tight" style={{ fontFamily: 'var(--font-inter)' }}>
              Welcome to<br />Ian Cardona
            </h1>
          </div>
          
          {/* Right column - Credentials card */}
          <div className="flex items-center justify-start md:justify-end">
            <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 w-full md:w-auto">
              <div className="space-y-3">
                <div className="text-sm text-zinc-500 dark:text-zinc-400">Software Engineer</div>
                <div className="text-base font-medium">Full Stack Developer</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  iancardona.dev@gmail.com
                </div>
                <div className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                  <a href="https://github.com/Ian-Cardona" className="hover:text-zinc-900 dark:hover:text-zinc-100">GitHub</a>
                  <span>|</span>
                  <a href="https://www.linkedin.com/in/swe-ian-cardona/" className="hover:text-zinc-900 dark:hover:text-zinc-100">LinkedIn</a>
                  <span>|</span>
                  <a href="https://www.credly.com/users/angelo-ian-michael-cardona.a988e18b" className="hover:text-zinc-900 dark:hover:text-zinc-100">Credly</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}