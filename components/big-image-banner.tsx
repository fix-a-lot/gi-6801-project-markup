import Image from 'next/image';
import Link from 'next/link';

export function BigImageBanner() {
  return (
    <Link
      href="/notice?tab=업데이트"
      data-component="큰이미지배너"
      className="relative block h-[200px] w-full overflow-hidden rounded-md border border-border sm:h-[240px] lg:h-[280px]"
    >
      <Image
        src="/images/banners/new-class-weather-mage.png"
        alt="신규 클래스 기상술사 업데이트"
        fill
        priority
        sizes="(min-width: 1024px) 960px, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/50" />

      <span className="absolute right-4 top-4 rounded-sm border border-border bg-background/60 px-2 py-1 text-[11px] font-bold tracking-wide text-secondary backdrop-blur-sm">
        UPDATE
      </span>

      <div className="absolute inset-x-4 bottom-4 text-right sm:inset-x-6 sm:bottom-6">
        <p className="text-[12px] font-medium text-muted">폭풍 속에서 태어난 힘</p>
        <h2 className="mt-1 text-balance text-xl font-bold text-foreground sm:text-2xl">신규 클래스 기상술사</h2>
      </div>
    </Link>
  );
}

export default BigImageBanner;
