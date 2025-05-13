/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 정적 파일 생성을 위한 설정
  images: {
    unoptimized: true,  // 정적 내보내기를 위한 이미지 최적화 비활성화
  },
  trailingSlash: true,  // 정적 내보내기를 위한 trailing slash 추가
}

module.exports = nextConfig 