'use client';
import BlogLinkTextButton from './BlogLinkTextButton';

interface BlogPostItemProps {
  slug: string;
  title: string;
  date: string;
}

export default function BlogPostItem({ slug, title, date }: BlogPostItemProps) {
  return (
    <div className="group">
      <div
        className="text-sm text-zinc-500 transition-colors group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-300"
        style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
      >
        {date}
      </div>
      <BlogLinkTextButton href={`/blog/${slug}`}>{title}</BlogLinkTextButton>
    </div>
  );
}
