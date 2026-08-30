import {Copy, Ticket} from 'lucide-react';

export function CouponCode() {
  return (
    <section data-component="쿠폰코드" className="rounded-md border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
        <Ticket className="size-4 text-primary" aria-hidden="true" />
        <h2 className="text-[13px] font-bold text-foreground">쿠폰코드</h2>
      </div>
      <div className="flex flex-col gap-2 p-3">
        <p className="text-[12px] font-bold text-foreground">2026 LOAON SUMMER 쿠폰코드</p>
        <div className="flex items-center justify-between rounded-sm bg-surface-2 px-2 py-1.5 font-mono text-[11px] text-muted">
          <span>2026로아온썸머감사선물</span><Copy className="size-3.5" aria-label="쿠폰 복사" />
        </div>
        <div className="flex items-center justify-between text-[11px] text-muted"><span>2026.09.16 05:59</span><span className="rounded-sm bg-primary/15 px-1.5 py-1 text-primary">D-17</span></div>
      </div>
    </section>
  );
}

export default CouponCode;
