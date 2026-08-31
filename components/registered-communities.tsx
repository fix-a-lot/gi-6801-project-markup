import {Server} from 'lucide-react';

const serverStats = [
  ['등록된 길드', '106,445개'],
  ['등록된 원정대', '713,901개'],
  ['등록된 캐릭터', '4,857,679명'],
  ['니나브', '511,720'],
  ['루페온', '803,963'],
  ['실리안', '582,241'],
  ['아만', '585,796'],
  ['아브렐슈드', '604,574'],
  ['카단', '596,731']
];

export function LoawaServerInfo() {
  return (
    <section data-component="등록된커뮤니티정보" className="rounded-md border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
        <Server className="size-4 text-primary" aria-hidden="true" />
        <h2 className="text-[13px] font-bold text-foreground">로아와 서버정보</h2>
      </div>
      <div className="grid grid-cols-2">
        {serverStats.map(([label, value]) => (
          <div key={label} className="flex flex-col gap-1 border-b border-border px-3 py-2 last:border-b-0">
            <span className="text-[11px] text-muted">{label}</span>
            <strong className="text-right text-[12px] text-foreground">{value}</strong>
          </div>
        ))}
      </div>
      <p className="border-t border-border px-3 py-2 text-[10px] text-primary">
        등록된 캐릭터 정보는 매일 자동으로 갱신하고 있습니다.
      </p>
    </section>
  );
}

export default LoawaServerInfo;
