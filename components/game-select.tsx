'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Check, ChevronDown, X} from 'lucide-react';
import {SITE_NAME} from '@/lib/constants';
import {GAME_CATEGORIES, findGameByPath, type GameEntry} from '@/lib/games';

export function GameBadge({game, className}: {game: GameEntry; className?: string}) {
  const isLive = game.status === 'live';
  return (
    <span
      aria-hidden="true"
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-sm text-[11px] font-bold ${
        isLive ? 'bg-primary text-primary-foreground' : 'bg-surface-2 text-muted'
      } ${className ?? ''}`}
    >
      {game.badge}
    </span>
  );
}

function GameItem({game, isCurrent, onNavigate}: {game: GameEntry; isCurrent: boolean; onNavigate: () => void}) {
  const disabled = game.status !== 'live';
  const baseClass =
    'game-item flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] min-w-[168px] transition-colors';
  const stateClass = isCurrent
    ? 'is-current text-foreground'
    : disabled
      ? 'is-disabled text-muted'
      : 'text-muted hover:bg-surface-2 hover:text-foreground';

  const inner = (
    <>
      <GameBadge game={game} />
      <span className="font-medium">{game.name}</span>
      {disabled ? (
        <span className="ml-auto rounded-sm bg-surface-2 px-1.5 py-0.5 text-[10px] font-medium text-muted">
          준비중
        </span>
      ) : isCurrent ? (
        <Check className="ml-auto h-4 w-4 text-primary" aria-hidden="true" />
      ) : null}
    </>
  );

  if (disabled) {
    return (
      <div className={`${baseClass} ${stateClass}`} aria-disabled="true">
        {inner}
      </div>
    );
  }

  return (
    <Link
      href={game.href}
      onClick={onNavigate}
      aria-current={isCurrent ? 'true' : undefined}
      className={`${baseClass} ${stateClass}`}
    >
      {inner}
    </Link>
  );
}

export function GameSelectBar() {
  const pathname = usePathname();
  const currentGame = findGameByPath(pathname);

  // render: DOM 마운트 여부 / closing: 퇴장 애니메이션 진행 여부
  const [render, setRender] = useState(false);
  const [closing, setClosing] = useState(false);
  const isOpen = render && !closing;

  const open = () => {
    setClosing(false);
    setRender(true);
  };
  const close = () => {
    if (!render) return;
    setClosing(true);
  };
  const hardClose = () => {
    setClosing(false);
    setRender(false);
  };

  // 퇴장 애니메이션이 끝나면 언마운트한다.
  const handleAnimationEnd = () => {
    if (closing) {
      setRender(false);
      setClosing(false);
    }
  };

  useEffect(() => {
    if (!render) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [render]);

  return (
    <div
      data-component="게임선택바"
      className="sticky top-0 z-50 w-full border-b border-border bg-background"
    >
      <div className="flex h-12 w-full items-center gap-3 px-4 lg:px-6">
        <Link href="/" className="text-[15px] font-bold tracking-tight text-foreground">
          {SITE_NAME}
        </Link>

        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          onClick={() => (isOpen ? close() : open())}
          className={`flex items-center gap-2 rounded-sm border px-2.5 py-1.5 text-[13px] font-medium transition-colors ${
            isOpen
              ? 'border-primary/60 bg-surface-2 text-foreground'
              : 'border-border bg-surface text-foreground hover:border-primary/40 hover:bg-surface-2'
          }`}
        >
          <GameBadge game={currentGame} className="h-5 w-5 text-[10px]" />
          <span>{currentGame.name}</span>
          <ChevronDown
            className={`h-4 w-4 text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      </div>

      {render && (
        <>
          <button
            type="button"
            aria-label="게임 선택 닫기"
            onClick={close}
            className={`game-modal-backdrop fixed inset-0 z-30 bg-black/60 ${
              closing ? 'is-closing' : 'is-open'
            } sm:bg-black/40`}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="게임 선택"
            onAnimationEnd={handleAnimationEnd}
            className={`game-modal fixed inset-0 z-40 flex flex-col bg-background sm:absolute sm:inset-auto sm:left-4 sm:top-full sm:mt-2 sm:h-auto sm:w-max sm:max-w-[min(720px,calc(100vw-2rem))] sm:rounded-md sm:border sm:border-border sm:shadow-lg lg:left-6 ${
              closing ? 'is-closing' : 'is-open'
            }`}
          >
            <div className="flex h-12 shrink-0 items-center justify-between border-b border-border px-4 sm:hidden">
              <span className="text-[14px] font-bold text-foreground">게임 선택</span>
              <button
                type="button"
                aria-label="게임 선택 닫기"
                onClick={close}
                className="flex h-8 w-8 items-center justify-center rounded-sm text-muted hover:bg-surface-2 hover:text-foreground"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:max-h-[min(560px,calc(100vh-7rem))]">
              {GAME_CATEGORIES.map(category => (
                <div key={category.id} className="mb-4 last:mb-0">
                  <h3 className="mb-1.5 px-1 text-[11px] font-bold uppercase tracking-wide text-muted">
                    {category.label}
                  </h3>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-0.5 sm:grid-cols-3">
                    {category.games.map(game => (
                      <GameItem
                        key={game.id}
                        game={game}
                        isCurrent={game.id === currentGame.id}
                        onNavigate={hardClose}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
