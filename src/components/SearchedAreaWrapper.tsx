import clsx from 'clsx';
import React from 'react';
import ExtraInfo from './ExtraInfo';

export default function SearchedAreaWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <ExtraInfo />
      <div className={clsx('bg-[#F2F4F4] w-[100vw] min-h-[calc(100vh-130px)] flex flex-row !items-center')}>
        {children}
      </div>
    </section>
  );
}
