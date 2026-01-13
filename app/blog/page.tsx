import BlogPostItem from '@/components/blog/BlogPostItem';

const blogPosts = [
  {
    slug: 'my-first-post',
    title: 'My First Blog Post',
    date: '2026-01-12',
  },
  {
    slug: 'second-post',
    title: 'Another Interesting Post',
    date: '2026-01-10',
  },
];

export default function Blog() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white dark:bg-black">
      <main className="flex flex-1 w-full max-w-2xl flex-col px-6 pt-16 md:px-0">
        <h1 className="text-2xl font-bold mb-12" style={{ fontFamily: 'var(--font-nunito-sans)' }}>
          Blog
        </h1>
        
        <div className="flex flex-col">
          {blogPosts.map((post) => (
            <BlogPostItem
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
            />
          ))}
        </div>
      </main>
    </div>
  );
}