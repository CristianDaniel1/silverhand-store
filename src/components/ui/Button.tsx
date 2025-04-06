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
      className={`px-6 text-center border-2 py-3 ${
        bgColor
          ? 'bg-primary border-transparent text-secundary'
          : 'text-primary border-primary'
      } font-bold tracking-wider z-[1] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
