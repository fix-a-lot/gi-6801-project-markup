import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/lostark',
        // 추후 "/"에 여러 게임을 링크하는 별도 인덱스 페이지가 생기면 제거할 임시 리다이렉트
        permanent: false
      }
    ];
  }
};

export default nextConfig;
