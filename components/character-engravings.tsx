import type {CharacterProfile} from '@/lib/mock-data';

export function CharacterEngravings({character}: {character: CharacterProfile}) {
  return (
    <section
      data-component="캐릭터각인"
      aria-labelledby="character-engravings-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="border-b border-border px-3 py-2.5">
        <h2 id="character-engravings-heading" className="text-[13px] font-bold text-foreground">
          각인
        </h2>
      </div>
      <ul className="flex flex-wrap gap-1.5 p-3">
        {character.engravings.map(engraving => (
          <li
            key={engraving.name}
            className="flex items-center gap-1.5 rounded-sm border border-border bg-surface-2 px-2.5 py-1.5"
          >
            <span className="text-[12px] text-foreground">{engraving.name}</span>
            <span className="font-mono text-[11px] font-bold text-primary">Lv.{engraving.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
