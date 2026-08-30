const BOX_WIDTH = 320;
const BOX_HEIGHT = 260;

export function UiPatternViewportPreview({
  slug,
  label,
  deviceWidth
}: {
  slug: string;
  label: string;
  deviceWidth: number;
}) {
  const scale = BOX_WIDTH / deviceWidth;
  const deviceHeight = BOX_HEIGHT / scale;

  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-[11px] font-medium text-muted">
        {label} · {deviceWidth}px
      </p>
      <div
        className="overflow-hidden rounded-sm border border-border bg-background"
        style={{width: BOX_WIDTH, height: BOX_HEIGHT}}
      >
        <iframe
          src={`/dev/ui-patterns/preview/${slug}`}
          title={`${label} 미리보기`}
          style={{
            width: deviceWidth,
            height: deviceHeight,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            border: 0
          }}
        />
      </div>
    </div>
  );
}
