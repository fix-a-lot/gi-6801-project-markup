/**
 * @file 게임 선택 목록
 *
 * 게임 선택 모달에서 사용하는 게임 카탈로그다.
 * 현재는 로스트아크만 실제 구현되어 있고(status: 'live'),
 * 나머지는 준비 중(status: 'coming') 상태로 노출만 한다.
 */

export type GameStatus = 'live' | 'coming';

export interface GameEntry {
  id: string;
  name: string;
  /** 아이콘 대용으로 쓰는 짧은 한글/영문 마크 */
  badge: string;
  href: string;
  status: GameStatus;
}

export interface GameCategory {
  id: string;
  label: string;
  games: GameEntry[];
}

export const GAME_CATEGORIES: GameCategory[] = [
  {
    id: 'live',
    label: '서비스 중',
    games: [{id: 'lostark', name: '로스트아크', badge: '로', href: '/lostark', status: 'live'}]
  },
  {
    id: 'coming',
    label: '준비 중',
    games: [
      {id: 'maplestory', name: '메이플스토리', badge: '메', href: '#', status: 'coming'},
      {id: 'dnf', name: '던전앤파이터', badge: '던', href: '#', status: 'coming'},
      {id: 'lol', name: '리그 오브 레전드', badge: '롤', href: '#', status: 'coming'},
      {id: 'valorant', name: '발로란트', badge: '발', href: '#', status: 'coming'},
      {id: 'overwatch2', name: '오버워치2', badge: '옵', href: '#', status: 'coming'},
      {id: 'pubg', name: '배틀그라운드', badge: '배', href: '#', status: 'coming'},
      {id: 'suddenattack', name: '서든어택', badge: '서', href: '#', status: 'coming'},
      {id: 'diablo4', name: '디아블로 4', badge: '디', href: '#', status: 'coming'},
      {id: 'bdo', name: '검은사막', badge: '검', href: '#', status: 'coming'}
    ]
  }
];

export const ALL_GAMES: GameEntry[] = GAME_CATEGORIES.flatMap(category => category.games);

export const DEFAULT_GAME_ID = 'lostark';

/**
 * 현재 경로에 해당하는 게임을 찾는다.
 * 매칭되는 게임이 없으면 기본 게임(로스트아크)을 반환한다.
 */
export function findGameByPath(pathname: string | null): GameEntry {
  const fallback = ALL_GAMES.find(game => game.id === DEFAULT_GAME_ID) ?? ALL_GAMES[0];
  if (!pathname) {
    return fallback;
  }
  const matched = ALL_GAMES.find(
    game => game.status === 'live' && game.href !== '#' && pathname.startsWith(game.href)
  );
  return matched ?? fallback;
}
