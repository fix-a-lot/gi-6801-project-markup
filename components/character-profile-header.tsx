import Image from 'next/image';
import type {CharacterProfile} from '@/lib/mock-data';

export function CharacterProfileHeader({character}: {character: CharacterProfile}) {
  return (
    <section
      data-component="캐릭터프로필헤더"
      aria-label="캐릭터 기본 정보"
      className="flex flex-col gap-4 rounded-md border border-border bg-surface p-4 sm:flex-row sm:items-center"
    >
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-border bg-surface-2">
        <Image
          src={character.portraitUrl || '/placeholder.svg'}
          alt={`${character.name} 캐릭터 초상화`}
          width={96}
          height={96}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <p className="truncate text-[11px] text-primary">{character.title}</p>
        <div className="flex flex-wrap items-baseline gap-2">
          <h1 className="text-[19px] font-bold tracking-tight text-foreground">{character.name}</h1>
          <span className="text-[13px] text-muted">
            {character.server} · {character.className}
          </span>
        </div>
        <p className="text-[12px] text-muted">{character.guild}</p>

        <dl className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
          <div className="flex items-baseline gap-1.5">
            <dt className="text-[11px] text-muted">아이템 레벨</dt>
            <dd className="font-mono text-[14px] font-bold text-primary">{character.itemLevel}</dd>
          </div>
          <div className="flex items-baseline gap-1.5">
            <dt className="text-[11px] text-muted">전투력</dt>
            <dd className="font-mono text-[14px] font-bold text-foreground">
              {character.combatPower.toLocaleString('ko-KR')}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
