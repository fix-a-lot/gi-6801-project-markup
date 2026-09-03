import type {CharacterProfile} from '@/lib/mock-data';

export function CharacterGems({character}: {character: CharacterProfile}) {
  return (
    <section
      data-component="캐릭터보석"
      aria-labelledby="character-gems-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="border-b border-border px-3 py-2.5">
        <h2 id="character-gems-heading" className="text-[13px] font-bold text-foreground">
          보석
        </h2>
      </div>
      <ul className="divide-y divide-border">
        {character.gems.map(gem => (
          <li key={`${gem.name}-${gem.skill}`} className="flex items-center gap-2.5 px-3 py-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-secondary/20 font-mono text-[11px] font-bold text-secondary">
              {gem.level}
            </span>
            <span className="min-w-0 flex-1 truncate text-[13px] text-foreground">{gem.name}</span>
            <span className="shrink-0 text-[11px] text-muted">{gem.skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
