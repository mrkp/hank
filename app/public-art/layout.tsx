import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Public Art | Hank Willis Thomas',
  description:
    'Explore the permanent public art installations of Hank Willis Thomas across the United States and beyond.',
};

export default function PublicArtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
