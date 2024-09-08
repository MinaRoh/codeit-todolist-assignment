/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}`], // 서버 주소에서 오는 이미지만 허용
  },
};
export default nextConfig;
