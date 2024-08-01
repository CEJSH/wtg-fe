import dynamic from 'next/dynamic';

const GridLoader = dynamic(() => import('react-spinners').then(lib => lib.GridLoader), {
  ssr: false,
});

type Props = {
  color?: string;
  size?: number;
};
export default function GridSpinner({ color = 'gray', size = 6 }: Props) {
  return <GridLoader color={color} size={size} />;
}
