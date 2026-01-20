import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exhibitions | Hank Willis Thomas',
  description:
    'Current and past exhibitions featuring the work of Hank Willis Thomas at galleries and museums worldwide.',
};

export default function ExhibitionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
