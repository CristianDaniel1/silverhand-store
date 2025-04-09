import { type ReactNode } from 'react';

export const CartList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="pt-[5.75rem] lg:pt-[7.75rem] mb-4 flex flex-col gap-6 overflow-y-auto h-5/6">
      {children}
    </ul>
  );
};
