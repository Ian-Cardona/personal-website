import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-black dark:border-white mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-12">
          
          <div className="col-span-2 lg:col-span-6">
            <h3 className="text-xl font-medium tracking-tighter mb-4">Ian Cardona</h3>
            <p className="text-sm max-w-xs text-neutral-600 dark:text-neutral-400">
              Software engineer specializing in modern web ecosystems and cloud architecture.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-4 opacity-50">Social</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="https://github.com/Ian-Cardona" target="_blank" className="hover:underline">GitHub</a>
              <a href="https://www.linkedin.com/in/swe-ian-cardona/" target="_blank" className="hover:underline">LinkedIn</a>
              <a href="https://www.credly.com/users/angelo-ian-michael-cardona.a988e18b" target="_blank" className="hover:underline">Cracked'ly</a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-4 opacity-50">Contact</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:iancardona.dev@gmail.com" className="hover:underline">Email</a>
              <span className="text-neutral-500">© {currentYear}</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}