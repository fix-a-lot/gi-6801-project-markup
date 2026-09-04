import {SiteFooter} from '@/components/site-footer';
import {SiteHeader} from '@/components/game-header';

export default function Lab2Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-[1280px] px-4 py-4 lg:px-6 lg:py-5">
        <h1 className="text-lg font-bold text-foreground">실험실2</h1>
      </main>

      <SiteFooter />
    </div>
  );
}
