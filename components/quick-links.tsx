import Link from 'next/link';
import {BarChart3, Coins, Trophy, Wrench} from 'lucide-react';
import {quickLinks, type QuickLink} from '@/lib/mock-data';

const ICONS: Record<QuickLink['icon'], typeof Trophy> = {
  ranking: Trophy,
  stats: BarChart3,
  market: Coins,
  tools: Wrench
};

export function QuickLinks() {
  return (
    <section data-component="퀵링크" aria-label="주요 기능 바로가기" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {quickLinks.map(link => {
        const Icon = ICONS[link.icon];
        return (
          <Link
            key={link.id}
            href={link.href}
            className="group flex flex-col gap-2 rounded-md border border-border bg-surface p-3 transition-colors hover:border-primary/50"
          >
            <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
            <div>
              <p className="text-[13px] font-bold text-foreground">{link.title}</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-muted">{link.description}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
