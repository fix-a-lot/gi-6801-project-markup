// Mock data for the ARKDEX home page.
// Structured to mirror the shape that the real Lost Ark Open API
// (and internally accumulated stats) would eventually provide, so
// display components can be swapped to live data without reshaping.

export type NoticeCategory = "공지" | "이벤트" | "쿠폰" | "업데이트";

export interface NoticeItem {
  id: string;
  category: NoticeCategory;
  title: string;
  date: string;
  isNew?: boolean;
}

export const noticeItems: NoticeItem[] = [
  { id: "n1", category: "공지", title: "2026년 2월 정기 서버 점검 안내", date: "02.24", isNew: true },
  { id: "n2", category: "공지", title: "부정 이용 계정 제재 내역 공개", date: "02.23" },
  { id: "n3", category: "공지", title: "고객센터 문의 처리 지연 안내", date: "02.21" },
  { id: "n4", category: "공지", title: "카오스던전 보상 지급 오류 안내 및 보상", date: "02.19" },
  { id: "n5", category: "공지", title: "모바일 알림 서비스 점검 완료", date: "02.17" },
  { id: "e1", category: "이벤트", title: "카양겔 공략 완료 인증 이벤트", date: "02.24 ~ 03.10", isNew: true },
  { id: "e2", category: "이벤트", title: "출석 체크하고 골드 획득하기", date: "02.20 ~ 03.20" },
  { id: "e3", category: "이벤트", title: "친구와 함께 접속 이벤트", date: "02.15 ~ 03.15" },
  { id: "e4", category: "이벤트", title: "신규/복귀 모험가 지원 패키지", date: "02.10 ~ 03.31" },
  { id: "e5", category: "이벤트", title: "길드 콘텐츠 참여 랭킹 이벤트", date: "02.05 ~ 03.05" },
  { id: "c1", category: "쿠폰", title: "AR26-WNTR-GOLD-BOX9", date: "~ 03.01 까지", isNew: true },
  { id: "c2", category: "쿠폰", title: "ARK-FEB-EVNT-2026X", date: "~ 02.28 까지" },
  { id: "c3", category: "쿠폰", title: "SPRT-RAID-READY-777", date: "~ 03.15 까지" },
  { id: "c4", category: "쿠폰", title: "LOST-DEX-WELCOME-01", date: "~ 04.01 까지" },
  { id: "c5", category: "쿠폰", title: "ARKESIA-TRAVEL-KIT2", date: "~ 03.10 까지" },
  { id: "u1", category: "업데이트", title: "신규 군단장 레이드 '아그리스' 추가", date: "02.18", isNew: true },
  { id: "u2", category: "업데이트", title: "특성 재설계: 서포터 밸런스 조정", date: "02.11" },
  { id: "u3", category: "업데이트", title: "카양겔 하드 난이도 밸런스 패치", date: "02.04" },
  { id: "u4", category: "업데이트", title: "신규 이스더 각성 퀘스트 추가", date: "01.28" },
  { id: "u5", category: "업데이트", title: "탈리스만 시스템 개편", date: "01.21" },
];

export type ScheduleCategory = "모험섬" | "필드보스" | "항해" | "카오스던전" | "가디언토벌";

export interface ScheduleEvent {
  id: string;
  category: ScheduleCategory;
  name: string;
  time: string;
  server?: string;
  note?: string;
}

export interface ScheduleDay {
  day: string;
  date: string;
  isToday?: boolean;
  events: ScheduleEvent[];
}

export const weeklySchedule: ScheduleDay[] = [
  {
    day: "월",
    date: "02.23",
    events: [
      { id: "m1", category: "모험섬", name: "이내르시아", time: "20:00", note: "물욕템: 파괴석 주머니" },
      { id: "m2", category: "필드보스", name: "익스트림 니엘슨", time: "21:00", server: "루페온" },
      { id: "m3", category: "항해", name: "베른 남부 유령선", time: "19:30" },
    ],
  },
  {
    day: "화",
    date: "02.24",
    isToday: true,
    events: [
      { id: "t1", category: "모험섬", name: "필로스", time: "20:00", note: "물욕템: 명예의 파편" },
      { id: "t2", category: "가디언토벌", name: "데스칼루다", time: "18:00" },
      { id: "t3", category: "필드보스", name: "베히모스", time: "22:00", server: "실리안" },
      { id: "t4", category: "항해", name: "잔잔한 소용돌이", time: "21:00" },
    ],
  },
  {
    day: "수",
    date: "02.25",
    events: [
      { id: "w1", category: "모험섬", name: "메아리의 섬", time: "20:00", note: "물욕템: 카르마" },
      { id: "w2", category: "카오스던전", name: "주간 관문 초기화", time: "06:00" },
      { id: "w3", category: "필드보스", name: "우드 왕 세뇨크", time: "20:30", server: "루페온" },
    ],
  },
  {
    day: "목",
    date: "02.26",
    events: [
      { id: "th1", category: "모험섬", name: "쿠르잔 전선", time: "20:00" },
      { id: "th2", category: "항해", name: "표류도 상인 방문", time: "19:00" },
      { id: "th3", category: "필드보스", name: "칼트오스", time: "21:30", server: "실리안" },
    ],
  },
  {
    day: "금",
    date: "02.27",
    events: [
      { id: "f1", category: "모험섬", name: "허무의 벽", time: "20:00", note: "물욕템: 오레하 융화 재료" },
      { id: "f2", category: "가디언토벌", name: "이슈각 나톨", time: "18:30" },
      { id: "f3", category: "필드보스", name: "아르고스 잔재", time: "22:00", server: "아만" },
    ],
  },
  {
    day: "토",
    date: "02.28",
    events: [
      { id: "sa1", category: "모험섬", name: "라이커의 섬", time: "20:00" },
      { id: "sa2", category: "항해", name: "달의섬 유령선", time: "23:00" },
      { id: "sa3", category: "필드보스", name: "탄식의 벽 수호자", time: "19:00", server: "카마인" },
      { id: "sa4", category: "가디언토벌", name: "스콜라키아", time: "21:00" },
    ],
  },
  {
    day: "일",
    date: "03.01",
    events: [
      { id: "su1", category: "모험섬", name: "아르크타운", time: "20:00", note: "물욕템: 위대한 미지의 조각" },
      { id: "su2", category: "필드보스", name: "이그레시아", time: "21:30", server: "루페온" },
    ],
  },
];

export interface QuickLink {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: "ranking" | "stats" | "market" | "tools";
}

export const quickLinks: QuickLink[] = [
  { id: "ranking", title: "랭킹", description: "전투력 · 길드 · 레이드 클리어 랭킹", href: "/ranking", icon: "ranking" },
  { id: "stats", title: "통계", description: "직업 분포, 스펙 구간별 통계 분석", href: "/stats", icon: "stats" },
  { id: "market", title: "시세", description: "재련재료 · 각인서 · 유물 시세 조회", href: "/market", icon: "market" },
  { id: "tools", title: "도구", description: "재련 계산기, 카오스던전 보상표", href: "/tools", icon: "tools" },
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
  { rank: 1, name: "은빛부검사", server: "루페온", className: "버서커", itemLevel: "1710.00", searches: 18420 },
  { rank: 2, name: "카제하야", server: "실리안", className: "기상술사", itemLevel: "1700.83", searches: 15990 },
  { rank: 3, name: "무명의창잡이", server: "아만", className: "창술사", itemLevel: "1695.00", searches: 14210 },
  { rank: 4, name: "달빛서포터", server: "카마인", className: "홀리나이트", itemLevel: "1680.00", searches: 12870 },
  { rank: 5, name: "칼바람소서리스", server: "루페온", className: "소서리스", itemLevel: "1670.42", searches: 11540 },
  { rank: 6, name: "붉은칼날데모닉", server: "실리안", className: "데모닉", itemLevel: "1660.00", searches: 10120 },
  { rank: 7, name: "새벽의화살", server: "니나브", className: "블래스터", itemLevel: "1650.00", searches: 9640 },
  { rank: 8, name: "고요한스트라이커", server: "아만", className: "스트라이커", itemLevel: "1645.83", searches: 8990 },
  { rank: 9, name: "은하수바드", server: "카마인", className: "바드", itemLevel: "1640.00", searches: 8410 },
  { rank: 10, name: "폭풍의검군", server: "루페온", className: "검성", itemLevel: "1630.00", searches: 7980 },
];

export interface ServerStat {
  server: string;
  characterCount: number;
}

export const serverStats: ServerStat[] = [
  { server: "루페온", characterCount: 284310 },
  { server: "실리안", characterCount: 241870 },
  { server: "아만", characterCount: 198430 },
  { server: "카마인", characterCount: 176220 },
  { server: "니나브", characterCount: 152990 },
  { server: "카제로스", characterCount: 121870 },
];

export interface SiteStat {
  label: string;
  value: string;
  unit?: string;
}

export const siteStats: SiteStat[] = [
  { label: "누적 캐릭터 검색", value: "12,483,920", unit: "회" },
  { label: "등록된 캐릭터 수", value: "1,175,691", unit: "명" },
  { label: "오늘 방문자", value: "48,203", unit: "명" },
  { label: "실시간 접속자", value: "3,142", unit: "명" },
];

export interface SiteAnnouncement {
  id: string;
  title: string;
  date: string;
}

export const siteAnnouncements: SiteAnnouncement[] = [
  { id: "sa1", title: "ARKDEX 시세 정보 갱신 주기 30분 단축 안내", date: "02.24" },
  { id: "sa2", title: "캐릭터 검색 서버 증설 완료", date: "02.20" },
  { id: "sa3", title: "통계 페이지 UI 개편 사전 안내", date: "02.15" },
];
