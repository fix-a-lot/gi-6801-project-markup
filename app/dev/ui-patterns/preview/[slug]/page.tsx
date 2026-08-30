import {notFound} from 'next/navigation';
import {getUiPatternBySlug} from '@/lib/ui-pattern-registry';

export default async function UiPatternPreviewPage({params}: {params: Promise<{slug: string}>}) {
  if (process.env.NODE_ENV === 'production') notFound();

  const {slug} = await params;
  const entry = getUiPatternBySlug(slug);
  if (!entry) notFound();

  const {Component} = entry;

  return (
    <div className="min-h-screen bg-background">
      <Component />
    </div>
  );
}
