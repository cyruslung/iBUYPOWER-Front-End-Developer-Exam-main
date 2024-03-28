/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'content.ibuypower.com',
                port: '',
                pathname: '/Images/**',
            },
        ],
    },
};

export default nextConfig;
