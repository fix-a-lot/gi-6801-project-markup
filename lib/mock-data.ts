// Mock data for the Project L-6801 home page.
// Structured to mirror the shape that the real Lost Ark Open API
// (and internally accumulated stats) would eventually provide, so
// display components can be swapped to live data without reshaping.

import {SITE_NAME} from './constants';

export type NoticeCategory = '공지' | '이벤트' | '쿠폰' | '업데이트';

export interface NoticeItem {
  id: string;
  category: NoticeCategory;
  title: string;
  date: string;
  isNew?: boolean;
}

export const noticeItems: NoticeItem[] = [
  {id: 'n1', category: '공지', title: '2026년 2월 정기 서버 점검 안내', date: '02.24', isNew: true},
  {id: 'n2', category: '공지', title: '부정 이용 계정 제재 내역 공개', date: '02.23'},
  {id: 'n3', category: '공지', title: '고객센터 문의 처리 지연 안내', date: '02.21'},
  {id: 'n4', category: '공지', title: '카오스던전 보상 지급 오류 안내 및 보상', date: '02.19'},
  {id: 'n5', category: '공지', title: '모바일 알림 서비스 점검 완료', date: '02.17'},
  {id: 'e1', category: '이벤트', title: '카양겔 공략 완료 인증 이벤트', date: '02.24 ~ 03.10', isNew: true},
  {id: 'e2', category: '이벤트', title: '출석 체크하고 골드 획득하기', date: '02.20 ~ 03.20'},
  {id: 'e3', category: '이벤트', title: '친구와 함께 접속 이벤트', date: '02.15 ~ 03.15'},
  {id: 'e4', category: '이벤트', title: '신규/복귀 모험가 지원 패키지', date: '02.10 ~ 03.31'},
  {id: 'e5', category: '이벤트', title: '길드 콘텐츠 참여 랭킹 이벤트', date: '02.05 ~ 03.05'},
  {id: 'c1', category: '쿠폰', title: 'AR26-WNTR-GOLD-BOX9', date: '~ 03.01 까지', isNew: true},
  {id: 'c2', category: '쿠폰', title: 'ARK-FEB-EVNT-2026X', date: '~ 02.28 까지'},
  {id: 'c3', category: '쿠폰', title: 'SPRT-RAID-READY-777', date: '~ 03.15 까지'},
  {id: 'c4', category: '쿠폰', title: 'LOST-DEX-WELCOME-01', date: '~ 04.01 까지'},
  {id: 'c5', category: '쿠폰', title: 'ARKESIA-TRAVEL-KIT2', date: '~ 03.10 까지'},
  {id: 'u1', category: '업데이트', title: "신규 군단장 레이드 '아그리스' 추가", date: '02.18', isNew: true},
  {id: 'u2', category: '업데이트', title: '특성 재설계: 서포터 밸런스 조정', date: '02.11'},
  {id: 'u3', category: '업데이트', title: '카양겔 하드 난이도 밸런스 패치', date: '02.04'},
  {id: 'u4', category: '업데이트', title: '신규 이스더 각성 퀘스트 추가', date: '01.28'},
  {id: 'u5', category: '업데이트', title: '탈리스만 시스템 개편', date: '01.21'}
];

export type ScheduleCategory = '모험섬' | '필드보스' | '항해' | '카오스던전' | '가디언토벌';

// 로아 API가 제공하는 이벤트 아이콘 경로. 카테고리별로 매핑해 목데이터에서 재사용한다.
export const SCHEDULE_CATEGORY_ICON: Record<ScheduleCategory, string> = {
  모험섬: '/icons/schedule/adventure-island.png',
  필드보스: '/icons/schedule/field-boss.png',
  항해: '/icons/schedule/voyage.png',
  카오스던전: '/icons/schedule/chaos-dungeon.png',
  가디언토벌: '/icons/schedule/guardian-raid.png'
};

export interface ScheduleEvent {
  id: string;
  category: ScheduleCategory;
  name: string;
  time: string;
  server?: string;
  note?: string;
  /** 로아 API가 제공하는 이벤트 아이콘 이미지 경로 */
  iconUrl: string;
}

export interface ScheduleDay {
  day: string;
  date: string;
  isToday?: boolean;
  events: ScheduleEvent[];
}

type RawScheduleEvent = Omit<ScheduleEvent, 'iconUrl'>;

interface RawScheduleDay {
  day: string;
  date: string;
  isToday?: boolean;
  events: RawScheduleEvent[];
}

const rawWeeklySchedule: RawScheduleDay[] = [
  {
    day: '월',
    date: '02.23',
    events: [
      {id: 'm1', category: '모험섬', name: '이내르시아', time: '20:00', note: '물욕템: 파괴석 주머니'},
      {id: 'm2', category: '필드보스', name: '익스트림 니엘슨', time: '21:00', server: '루페온'},
      {id: 'm3', category: '항해', name: '베른 남부 유령선', time: '19:30'}
    ]
  },
  {
    day: '화',
    date: '02.24',
    isToday: true,
    events: [
      {id: 't1', category: '모험섬', name: '필로스', time: '20:00', note: '물욕템: 명예의 파편'},
      {id: 't2', category: '가디언토벌', name: '데스칼루다', time: '18:00'},
      {id: 't3', category: '필드보스', name: '베히모스', time: '22:00', server: '실리안'},
      {id: 't4', category: '항해', name: '잔잔한 소용돌이', time: '21:00'}
    ]
  },
  {
    day: '수',
    date: '02.25',
    events: [
      {id: 'w1', category: '모험섬', name: '메아리의 섬', time: '20:00', note: '물욕템: 카르마'},
      {id: 'w2', category: '카오스던전', name: '주간 관문 초기화', time: '06:00'},
      {id: 'w3', category: '필드보스', name: '우드 왕 세뇨크', time: '20:30', server: '루페온'}
    ]
  },
  {
    day: '목',
    date: '02.26',
    events: [
      {id: 'th1', category: '모험섬', name: '쿠르잔 전선', time: '20:00'},
      {id: 'th2', category: '항해', name: '표류도 상인 방문', time: '19:00'},
      {id: 'th3', category: '필드보스', name: '칼트오스', time: '21:30', server: '실리안'}
    ]
  },
  {
    day: '금',
    date: '02.27',
    events: [
      {id: 'f1', category: '모험섬', name: '허무의 벽', time: '20:00', note: '물욕템: 오레하 융화 재료'},
      {id: 'f2', category: '가디언토벌', name: '이슈각 나톨', time: '18:30'},
      {id: 'f3', category: '필드보스', name: '아르고스 잔재', time: '22:00', server: '아만'}
    ]
  },
  {
    day: '토',
    date: '02.28',
    events: [
      {id: 'sa1', category: '모험섬', name: '라이커의 섬', time: '20:00'},
      {id: 'sa2', category: '항해', name: '달의섬 유령선', time: '23:00'},
      {id: 'sa3', category: '필드보스', name: '탄식의 벽 수호자', time: '19:00', server: '카마인'},
      {id: 'sa4', category: '가디언토벌', name: '스콜라키아', time: '21:00'}
    ]
  },
  {
    day: '일',
    date: '03.01',
    events: [
      {id: 'su1', category: '모험섬', name: '아르크타운', time: '20:00', note: '물욕템: 위대한 미지의 조각'},
      {id: 'su2', category: '필드보스', name: '이그레시아', time: '21:30', server: '루페온'}
    ]
  }
];

export const weeklySchedule: ScheduleDay[] = rawWeeklySchedule.map(d => ({
  ...d,
  events: d.events.map(e => ({...e, iconUrl: SCHEDULE_CATEGORY_ICON[e.category]}))
}));

export interface QuickLink {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: 'ranking' | 'stats' | 'market' | 'tools';
}

export const quickLinks: QuickLink[] = [
  {
    id: 'ranking',
    title: '랭킹',
    description: '전투력 · 길드 · 레이드 클리어 랭킹',
    href: '/lostark/ranking',
    icon: 'ranking'
  },
  {id: 'stats', title: '통계', description: '직업 분포, 스펙 구간별 통계 분석', href: '/lostark/stats', icon: 'stats'},
  {
    id: 'market',
    title: '시세',
    description: '재련재료 · 각인서 · 유물 시세 조회',
    href: '/lostark/market',
    icon: 'market'
  },
  {id: 'tools', title: '도구', description: '재련 계산기, 카오스던전 보상표', href: '/lostark/tools', icon: 'tools'}
];

export interface PopularCharacter {
  rank: number;
  name: string;
  server: string;
  className: string;
  itemLevel: string;
  searches: number;
}

export const popularCharacters: PopularCharacter[] = [
  {rank: 1, name: '은빛부검사', server: '루페온', className: '버서커', itemLevel: '1710.00', searches: 18420},
  {rank: 2, name: '카제하야', server: '실리안', className: '기상술사', itemLevel: '1700.83', searches: 15990},
  {rank: 3, name: '무명의창잡이', server: '아만', className: '창술사', itemLevel: '1695.00', searches: 14210},
  {rank: 4, name: '달빛서포터', server: '카마인', className: '홀리나이트', itemLevel: '1680.00', searches: 12870},
  {rank: 5, name: '칼바람소서리스', server: '루페온', className: '소서리스', itemLevel: '1670.42', searches: 11540},
  {rank: 6, name: '붉은칼날데모닉', server: '실리안', className: '데모닉', itemLevel: '1660.00', searches: 10120},
  {rank: 7, name: '새벽의화살', server: '니나브', className: '블래스터', itemLevel: '1650.00', searches: 9640},
  {rank: 8, name: '고요한스트라이커', server: '아만', className: '스트라이커', itemLevel: '1645.83', searches: 8990},
  {rank: 9, name: '은하수바드', server: '카마인', className: '바드', itemLevel: '1640.00', searches: 8410},
  {rank: 10, name: '폭풍의검군', server: '루페온', className: '검성', itemLevel: '1630.00', searches: 7980}
];

export interface ServerStat {
  server: string;
  characterCount: number;
}

export const serverStats: ServerStat[] = [
  {server: '루페온', characterCount: 284310},
  {server: '실리안', characterCount: 241870},
  {server: '아만', characterCount: 198430},
  {server: '카마인', characterCount: 176220},
  {server: '니나브', characterCount: 152990},
  {server: '카제로스', characterCount: 121870}
];

export interface SiteStat {
  label: string;
  value: string;
  unit?: string;
}

export const siteStats: SiteStat[] = [
  {label: '누적 캐릭터 검색', value: '12,483,920', unit: '회'},
  {label: '등록된 캐릭터 수', value: '1,175,691', unit: '명'},
  {label: '오늘 방문자', value: '48,203', unit: '명'},
  {label: '실시간 접속자', value: '3,142', unit: '명'}
];

export interface SiteAnnouncement {
  id: string;
  title: string;
  date: string;
}

export const siteAnnouncements: SiteAnnouncement[] = [
  {id: 'sa1', title: `${SITE_NAME} 시세 정보 갱신 주기 30분 단축 안내`, date: '02.24'},
  {id: 'sa2', title: '캐릭터 검색 서버 증설 완료', date: '02.20'},
  {id: 'sa3', title: '통계 페이지 UI 개편 사전 안내', date: '02.15'}
];

// ---------------------------------------------------------------------------
// 아이템 등급
// ---------------------------------------------------------------------------

export type ItemGrade = '일반' | '고급' | '희귀' | '영웅' | '전설' | '유물' | '고대';

/** 로스트아크 실제 아이템 등급 색상 체계를 따른 스와치 색상 (배경/텍스트) */
export const GRADE_STYLE: Record<ItemGrade, string> = {
  일반: 'bg-muted/40 text-foreground',
  고급: 'bg-rise/70 text-background',
  희귀: 'bg-secondary text-secondary-foreground',
  영웅: 'bg-primary/80 text-primary-foreground',
  전설: 'bg-[#e8a33d] text-background',
  유물: 'bg-[#d9622b] text-background',
  고대: 'bg-[#e9dfc7] text-background'
};

// ---------------------------------------------------------------------------
// 시세 (거래소)
// ---------------------------------------------------------------------------

export type MarketCategory = '재련 재료' | '각인서' | '보석' | '기타 재료';

export const MARKET_CATEGORIES: MarketCategory[] = ['재련 재료', '각인서', '보석', '기타 재료'];

export interface MarketItem {
  id: string;
  category: MarketCategory;
  grade: ItemGrade;
  name: string;
  price: number;
  changePercent: number;
  volume: number;
}

export const marketItems: MarketItem[] = [
  {
    id: 'mk1',
    category: '재련 재료',
    grade: '고급',
    name: '운명의 파괴석',
    price: 158,
    changePercent: -1.2,
    volume: 812340
  },
  {
    id: 'mk2',
    category: '재련 재료',
    grade: '고급',
    name: '운명의 수호석',
    price: 96,
    changePercent: 0.4,
    volume: 654210
  },
  {
    id: 'mk3',
    category: '재련 재료',
    grade: '희귀',
    name: '운명의 파편 주머니(중)',
    price: 412,
    changePercent: 2.1,
    volume: 128470
  },
  {
    id: 'mk4',
    category: '재련 재료',
    grade: '영웅',
    name: '아비도스 융화 재료',
    price: 231,
    changePercent: 3.6,
    volume: 341920
  },
  {
    id: 'mk5',
    category: '재련 재료',
    grade: '전설',
    name: '운명의 돌파석',
    price: 3480,
    changePercent: -4.8,
    volume: 18230
  },
  {id: 'mk6', category: '재련 재료', grade: '유물', name: '용암의 숨결', price: 890, changePercent: 6.2, volume: 74510},
  {id: 'mk7', category: '재련 재료', grade: '유물', name: '빙하의 숨결', price: 905, changePercent: 5.1, volume: 71980},
  {id: 'mk8', category: '각인서', grade: '전설', name: '원한 각인서', price: 108000, changePercent: 0.0, volume: 1240},
  {
    id: 'mk9',
    category: '각인서',
    grade: '전설',
    name: '돌격대장 각인서',
    price: 105400,
    changePercent: 0.4,
    volume: 1180
  },
  {
    id: 'mk10',
    category: '각인서',
    grade: '영웅',
    name: '질량 증가 각인서',
    price: 71600,
    changePercent: 2.3,
    volume: 960
  },
  {
    id: 'mk11',
    category: '각인서',
    grade: '영웅',
    name: '예리한 둔기 각인서',
    price: 108000,
    changePercent: 0.2,
    volume: 890
  },
  {
    id: 'mk12',
    category: '각인서',
    grade: '영웅',
    name: '아드레날린 각인서',
    price: 102000,
    changePercent: 1.0,
    volume: 1020
  },
  {
    id: 'mk13',
    category: '각인서',
    grade: '희귀',
    name: '저주받은 인형 각인서',
    price: 33000,
    changePercent: -2.6,
    volume: 2140
  },
  {
    id: 'mk14',
    category: '각인서',
    grade: '희귀',
    name: '기습의 대가 각인서',
    price: 45530,
    changePercent: 2.5,
    volume: 1870
  },
  {
    id: 'mk15',
    category: '보석',
    grade: '유물',
    name: '10레벨 겁화의 보석',
    price: 42800,
    changePercent: 1.8,
    volume: 3210
  },
  {
    id: 'mk16',
    category: '보석',
    grade: '유물',
    name: '10레벨 홍염의 보석',
    price: 41950,
    changePercent: 2.0,
    volume: 3080
  },
  {
    id: 'mk17',
    category: '보석',
    grade: '전설',
    name: '9레벨 멸화의 보석',
    price: 21400,
    changePercent: -0.9,
    volume: 4520
  },
  {
    id: 'mk18',
    category: '보석',
    grade: '전설',
    name: '9레벨 작열의 보석',
    price: 20870,
    changePercent: -1.1,
    volume: 4310
  },
  {
    id: 'mk19',
    category: '기타 재료',
    grade: '희귀',
    name: '명예의 파편 주머니(대)',
    price: 2650,
    changePercent: 0.6,
    volume: 56210
  },
  {
    id: 'mk20',
    category: '기타 재료',
    grade: '고급',
    name: '실링 주머니(특급)',
    price: 189,
    changePercent: -0.3,
    volume: 402310
  },
  {
    id: 'mk21',
    category: '기타 재료',
    grade: '희귀',
    name: '카오스 던전 열쇠',
    price: 890,
    changePercent: 4.4,
    volume: 61820
  },
  {
    id: 'mk22',
    category: '기타 재료',
    grade: '고급',
    name: '위대한 미지의 조각',
    price: 156,
    changePercent: -5.7,
    volume: 91230
  }
];

// ---------------------------------------------------------------------------
// 캐릭터 정보
// ---------------------------------------------------------------------------

export interface CharacterStat {
  label: string;
  value: number;
}

export interface EquipmentPiece {
  slot: string;
  name: string;
  grade: ItemGrade;
  quality: number;
  level: string;
}

export interface EngravingEntry {
  name: string;
  level: 1 | 2 | 3;
}

export interface GemEntry {
  name: string;
  level: number;
  skill: string;
}

export interface CharacterProfile {
  name: string;
  server: string;
  guild: string;
  className: string;
  title: string;
  itemLevel: string;
  combatPower: number;
  portraitUrl: string;
  stats: CharacterStat[];
  equipment: EquipmentPiece[];
  accessories: EquipmentPiece[];
  engravings: EngravingEntry[];
  gems: GemEntry[];
}

export const defaultCharacterName = '은빛부검사';

export const characterProfiles: Record<string, CharacterProfile> = {
  은빛부검사: {
    name: '은빛부검사',
    server: '루페온',
    guild: '아르크 유랑단',
    className: '버서커',
    title: '카양겔의 정복자',
    itemLevel: '1710.00',
    combatPower: 28450,
    portraitUrl: '/images/characters/silver-berserker.png',
    stats: [
      {label: '치명', value: 2840},
      {label: '특화', value: 1520},
      {label: '신속', value: 620},
      {label: '제압', value: 480},
      {label: '인내', value: 340},
      {label: '숙련', value: 210}
    ],
    equipment: [
      {slot: '무기', name: '반신의 대검', grade: '고대', quality: 100, level: '+25'},
      {slot: '머리', name: '반신의 견갑', grade: '고대', quality: 98, level: '+25'},
      {slot: '어깨', name: '반신의 견갑', grade: '고대', quality: 95, level: '+25'},
      {slot: '상의', name: '반신의 갑주', grade: '고대', quality: 92, level: '+25'},
      {slot: '하의', name: '반신의 갑주', grade: '고대', quality: 100, level: '+25'},
      {slot: '장갑', name: '반신의 손목보호구', grade: '고대', quality: 88, level: '+25'}
    ],
    accessories: [
      {slot: '목걸이', name: '카양겔의 목걸이', grade: '유물', quality: 90, level: '연마 x3'},
      {slot: '귀걸이', name: '카양겔의 귀걸이', grade: '유물', quality: 85, level: '연마 x3'},
      {slot: '귀걸이', name: '카양겔의 귀걸이', grade: '유물', quality: 78, level: '연마 x3'},
      {slot: '반지', name: '카양겔의 반지', grade: '유물', quality: 95, level: '연마 x3'},
      {slot: '반지', name: '카양겔의 반지', grade: '유물', quality: 63, level: '연마 x3'},
      {slot: '팔찌', name: '고대의 팔찌', grade: '고대', quality: 0, level: '특옵 4'}
    ],
    engravings: [
      {name: '광기', level: 3},
      {name: '내가 죽으면 니도 죽어', level: 3},
      {name: '중갑 착용', level: 3},
      {name: '슈퍼 차지', level: 2},
      {name: '아드레날린', level: 2}
    ],
    gems: [
      {name: '10레벨 겁화의 보석', level: 10, skill: '분노의 강타'},
      {name: '10레벨 홍염의 보석', level: 10, skill: '휩쓸기'},
      {name: '9레벨 겁화의 보석', level: 9, skill: '광란의 소용돌이'},
      {name: '9레벨 홍염의 보석', level: 9, skill: '대지 분쇄'}
    ]
  },
  카제하야: {
    name: '카제하야',
    server: '실리안',
    guild: '폭풍의 눈',
    className: '기상술사',
    title: '아르크시아의 수호자',
    itemLevel: '1700.83',
    combatPower: 26980,
    portraitUrl: '/images/characters/silver-berserker.png',
    stats: [
      {label: '특화', value: 3120},
      {label: '신속', value: 1680},
      {label: '치명', value: 540},
      {label: '제압', value: 410},
      {label: '인내', value: 280},
      {label: '숙련', value: 190}
    ],
    equipment: [
      {slot: '무기', name: '이스더의 지팡이', grade: '고대', quality: 97, level: '+24'},
      {slot: '머리', name: '이스더의 로브', grade: '고대', quality: 93, level: '+24'},
      {slot: '어깨', name: '이스더의 로브', grade: '고대', quality: 90, level: '+24'},
      {slot: '상의', name: '이스더의 장의', grade: '고대', quality: 100, level: '+24'},
      {slot: '하의', name: '이스더의 장의', grade: '고대', quality: 84, level: '+24'},
      {slot: '장갑', name: '이스더의 장갑', grade: '고대', quality: 91, level: '+24'}
    ],
    accessories: [
      {slot: '목걸이', name: '아그리스의 목걸이', grade: '유물', quality: 88, level: '연마 x3'},
      {slot: '귀걸이', name: '아그리스의 귀걸이', grade: '유물', quality: 92, level: '연마 x3'},
      {slot: '귀걸이', name: '아그리스의 귀걸이', grade: '유물', quality: 70, level: '연마 x3'},
      {slot: '반지', name: '아그리스의 반지', grade: '유물', quality: 81, level: '연마 x3'},
      {slot: '반지', name: '아그리스의 반지', grade: '유물', quality: 76, level: '연마 x3'},
      {slot: '팔찌', name: '고대의 팔찌', grade: '고대', quality: 0, level: '특옵 3'}
    ],
    engravings: [
      {name: '환수 각성', level: 3},
      {name: '자연의 힘', level: 3},
      {name: '아드레날린', level: 2},
      {name: '원한', level: 2},
      {name: '슈퍼 차지', level: 1}
    ],
    gems: [
      {name: '10레벨 겁화의 보석', level: 10, skill: '폭풍우'},
      {name: '9레벨 홍염의 보석', level: 9, skill: '눈보라'},
      {name: '9레벨 겁화의 보석', level: 9, skill: '벼락'},
      {name: '8레벨 홍염의 보석', level: 8, skill: '토네이도'}
    ]
  }
};

// ---------------------------------------------------------------------------
// 경매장
// ---------------------------------------------------------------------------

export type AuctionCategory = '무기' | '방어구' | '악세서리' | '각인서' | '보석';

export const AUCTION_CATEGORIES: AuctionCategory[] = ['무기', '방어구', '악세서리', '각인서', '보석'];

export interface AuctionListing {
  id: string;
  category: AuctionCategory;
  grade: ItemGrade;
  name: string;
  detail: string;
  quality?: number;
  buyPrice: number;
  remaining: string;
}

export const auctionListings: AuctionListing[] = [
  {
    id: 'au1',
    category: '무기',
    grade: '고대',
    name: '반신의 대검',
    detail: '상급 재련 +25 · 버서커',
    quality: 100,
    buyPrice: 4820000,
    remaining: '11시간 20분'
  },
  {
    id: 'au2',
    category: '방어구',
    grade: '고대',
    name: '반신의 갑주(상의)',
    detail: '상급 재련 +23 · 전사 공용',
    quality: 92,
    buyPrice: 1650000,
    remaining: '3시간 05분'
  },
  {
    id: 'au3',
    category: '악세서리',
    grade: '유물',
    name: '카양겔의 목걸이',
    detail: '특성 치명 +390 / 특화 +195',
    quality: 88,
    buyPrice: 285000,
    remaining: '22시간 40분'
  },
  {
    id: 'au4',
    category: '악세서리',
    grade: '유물',
    name: '카양겔의 반지',
    detail: '추가 피해 +2.6% / 낙인력 +5.5%',
    quality: 74,
    buyPrice: 198000,
    remaining: '1시간 12분'
  },
  {
    id: 'au5',
    category: '악세서리',
    grade: '고대',
    name: '고대의 팔찌',
    detail: '특옵 4개 · 치명타 적중률 +6%',
    buyPrice: 620000,
    remaining: '5시간 50분'
  },
  {
    id: 'au6',
    category: '각인서',
    grade: '전설',
    name: '원한 각인서',
    detail: '1레벨 각인 재료',
    buyPrice: 108000,
    remaining: '18시간 00분'
  },
  {
    id: 'au7',
    category: '각인서',
    grade: '영웅',
    name: '돌격대장 각인서',
    detail: '1레벨 각인 재료',
    buyPrice: 105400,
    remaining: '9시간 30분'
  },
  {
    id: 'au8',
    category: '보석',
    grade: '유물',
    name: '10레벨 겁화의 보석',
    detail: '피해량 +18% / 쿨타임 감소 +14%',
    buyPrice: 42800,
    remaining: '2시간 45분'
  },
  {
    id: 'au9',
    category: '보석',
    grade: '전설',
    name: '9레벨 멸화의 보석',
    detail: '피해량 +16% / 쿨타임 감소 +12%',
    buyPrice: 21400,
    remaining: '14시간 15분'
  },
  {
    id: 'au10',
    category: '방어구',
    grade: '유물',
    name: '이스더의 로브(어깨)',
    detail: '상급 재련 +18 · 마법사 공용',
    quality: 65,
    buyPrice: 980000,
    remaining: '6시간 40분'
  }
];
