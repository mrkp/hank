import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works | Hank Willis Thomas',
  description:
    'Explore the artistic works of Hank Willis Thomas, including photography, sculpture, and mixed media.',
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
