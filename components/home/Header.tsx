'use client';

import HomeLink from './HomeLink';

export default function Header() {
  return (
    <header className="w-full border-b border-black dark:border-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="text-9xl font-medium tracking-tighter">
              Ian
              <br />
              Cardona
            </h1>
          </div>

          <div className="flex flex-col items-end text-right lg:col-span-5">
            <div className="text-sm">iancardona.dev@gmail.com</div>
            <div className="min-w-75 border-t border-black dark:border-white"></div>
            <div className="w-fit min-w-75">
              <div className="flex justify-end gap-2 text-sm">
                <HomeLink href="https://github.com/Ian-Cardona">GitHub</HomeLink>
                <HomeLink href="https://www.linkedin.com/in/swe-ian-cardona/">LinkedIn</HomeLink>
                <HomeLink href="https://www.credly.com/users/angelo-ian-michael-cardona.a988e18b">
                  Cracked&apos;ly
                </HomeLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}