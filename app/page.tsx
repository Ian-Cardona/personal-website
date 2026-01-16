import BlogLinkButton from '@/components/home/BlogLinkButton';
import WorkLinkButton from '@/components/home/WorkLinkButton';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

export default function Home() {
  const works = [
    { href: 'https://devdashboard.framer.website/', title: 'DevDashboard', date: '2024' },
  ];

  const posts = [
    { href: '/blog/post-1', title: 'Getting Started with Next.js 15', date: '01.10.2026' },
    { href: '/blog/post-2', title: 'Building Scalable APIs', date: '01.05.2026' },
    { href: '/blog/post-3', title: 'Cloud Architecture Patterns', date: '12.28.2025' },
    
  ];

  const workCount = works.length;
  const postCount = posts.length;

  return (
    <div className="mx-8 min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-4">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <section>
              <h2 className="mb-4 text-5xl font-medium tracking-tighter">
                Works
                <sup className="align-top text-lg tracking-normal">({workCount})</sup>
              </h2>
              <div className="flex flex-col">
                {works.map((work, index) => (
                  <WorkLinkButton
                    key={index}
                    href={work.href}
                    title={work.title}
                    date={work.date}
                  />
                ))}
              </div>
            </section>
          </div>
          <div className="lg:col-span-8">
            <h2 className="mb-4 text-5xl font-medium tracking-tighter">
              Blogs
              <sup className="align-top text-lg tracking-normal">({postCount})</sup>
            </h2>
            <div className="flex flex-col">
              {posts.map((post, index) => (
                <BlogLinkButton key={index} href={post.href} title={post.title} date={post.date} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}