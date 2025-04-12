import { type ReactNode, ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  children: ReactNode;
  bgColor?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({
  children,
  bgColor,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`px-6 text-center border-2 py-3 rounded ${
        bgColor
          ? 'bg-primary border-transparent text-secundary hover:bg-white hover:text-primary hover:border-primary active:text-secundary active:bg-primary'
          : 'text-primary border-primary hover:bg-primary hover:text-secundary hover:border-transparent active:text-primary active:bg-white active:border-primary'
      } font-bold tracking-wider duration-200 z-[1] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
