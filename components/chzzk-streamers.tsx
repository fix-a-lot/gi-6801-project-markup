import {Clapperboard} from 'lucide-react';

const streamers = ['이다', '쫀지', '도읍지', '세코코', '노가루루', '로마러', '김상드', '주제', '방토라', '리니링', '망플이', '숩아'];

export function ChzzkStreamers() {
  return (
    <section data-component="치지직스트리머" className="rounded-md border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
        <Clapperboard className="size-4 text-primary" aria-hidden="true" />
        <h2 className="text-[13px] font-bold text-foreground">치지직 스트리머</h2>
      </div>
      <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-3">
        {streamers.map(streamer => (
          <div key={streamer} className="flex min-h-20 flex-col justify-between rounded-sm border border-border bg-surface-2 p-2">
            <span className="w-fit rounded-sm bg-fall px-1 py-0.5 text-[9px] font-bold text-primary-foreground">LIVE</span>
            <p className="truncate text-[12px] font-medium text-foreground">{streamer}</p>
            <p className="text-[10px] text-muted">Lost Ark 방송 중</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ChzzkStreamers;
