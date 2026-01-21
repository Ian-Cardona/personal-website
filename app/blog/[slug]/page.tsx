import Footer from '@/components/home/Footer';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getBlogPost(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

 
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  }).replace(/\//g, '.');
  
  return (
    <div className="mx-8 min-h-screen bg-white text-black dark:bg-black dark:text-white"> 
      <main className="mx-auto max-w-7xl px-6 py-12">

        <div className="mb-12">
          <Link 
            href="/#blogs"
            className="inline-flex items-center text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            ← Back to blogs
          </Link>
        </div>

        <article className="mx-auto max-w-3xl">

          <header className="mb-12 border-b border-black pb-8 dark:border-white">
            <h1 className="mb-6 text-7xl font-medium tracking-tighter leading-none">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm">
              <time 
                dateTime={post.date}
                style={{ fontFamily: 'var(--font-google-sans-code)' }}
              >
                {formattedDate}
              </time>
              {post.read_time && (
                <>
                  <span>·</span>
                  <span>{post.read_time}</span>
                </>
              )}
            </div>
          </header>
          

          <div className="markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="mt-12 mb-6 text-5xl font-medium tracking-tighter" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="mt-12 mb-4 text-4xl font-medium tracking-tighter" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="mt-8 mb-3 text-2xl font-medium tracking-tighter" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-6 text-lg leading-relaxed" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="my-8 border-l-4 border-black pl-6 italic dark:border-white" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="my-6 space-y-2 pl-6 list-disc" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="my-6 space-y-2 pl-6 list-decimal" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="text-lg leading-relaxed" {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a 
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline" 
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props} 
                  />
                ),
                code: ({ node, className, children, ...props }) => {
                  const isInline = !className;
                  return isInline ? (
                    <code 
                      className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono" 
                      {...props}
                    >
                      {children}
                    </code>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                pre: ({ node, ...props }) => (
                  <pre className="my-6 overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-800" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold" {...props} />
                ),
                em: ({ node, ...props }) => (
                  <em className="italic" {...props} />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}