import {GRADE_STYLE, type EquipmentPiece} from '@/lib/mock-data';

function EquipmentRow({piece}: {piece: EquipmentPiece}) {
  return (
    <li className="flex items-center gap-2.5 px-3 py-2">
      <span className={`h-4 w-4 shrink-0 rounded-[3px] ${GRADE_STYLE[piece.grade]}`} aria-hidden="true" />
      <span className="w-11 shrink-0 text-[11px] text-muted">{piece.slot}</span>
      <span className="min-w-0 flex-1 truncate text-[13px] text-foreground">{piece.name}</span>
      <span className="shrink-0 font-mono text-[12px] text-muted">{piece.level}</span>
      {piece.quality > 0 && (
        <span
          className={`w-9 shrink-0 text-right font-mono text-[12px] font-medium tabular-nums ${
            piece.quality >= 90 ? 'text-primary' : 'text-muted'
          }`}
        >
          {piece.quality}%
        </span>
      )}
    </li>
  );
}

export function CharacterEquipment({
  title,
  dataComponent,
  items
}: {
  title: string;
  dataComponent: string;
  items: EquipmentPiece[];
}) {
  return (
    <section
      data-component={dataComponent}
      aria-labelledby={`${dataComponent}-heading`}
      className="rounded-md border border-border bg-surface"
    >
      <div className="border-b border-border px-3 py-2.5">
        <h2 id={`${dataComponent}-heading`} className="text-[13px] font-bold text-foreground">
          {title}
        </h2>
      </div>
      <ul className="divide-y divide-border">
        {items.map((piece, index) => (
          <EquipmentRow key={`${piece.slot}-${piece.name}-${index}`} piece={piece} />
        ))}
      </ul>
    </section>
  );
}
