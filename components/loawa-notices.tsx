import {Megaphone} from 'lucide-react';

export function LoawaNotices() {
  return (
    <section data-component="로아와공지" className="rounded-md border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
        <Megaphone className="size-4 text-primary" aria-hidden="true" />
        <h2 className="text-[13px] font-bold text-foreground">로아와 공지</h2>
      </div>
      <ul className="flex flex-col gap-2 p-3 text-[12px] text-muted">
        <li className="flex justify-between gap-2"><span>도표, 사진첩, 칭호 이관 작업 진행중</span><span className="shrink-0 font-mono text-[10px]">5개월 전</span></li>
        <li className="flex justify-between gap-2"><span>리뉴얼 로아와 테스트 오픈</span><span className="shrink-0 font-mono text-[10px]">6개월 전</span></li>
      </ul>
    </section>
  );
}

export default LoawaNotices;
