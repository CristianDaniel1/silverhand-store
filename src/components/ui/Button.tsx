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
          ? 'bg-primary border-transparent text-neutral-950 after:bg-background focus-visible:text-primary hover:text-primary'
          : 'text-primary border-primary after:bg-primary hover:text-background focus-visible:text-background'
      } font-bold tracking-wider btn-animation z-[1] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
