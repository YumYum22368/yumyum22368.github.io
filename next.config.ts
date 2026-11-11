import type { NextConfig } from "next";

// GitHub Pages เสิร์ฟได้แค่ไฟล์ static
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
