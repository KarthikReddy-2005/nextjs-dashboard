// @ts-expect-error -- Next.js supports global CSS side-effect imports in app/layout.tsx
import "./ui/global.css";
import {inter} from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
