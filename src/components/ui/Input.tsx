import { type ComponentPropsWithoutRef } from 'react';

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className="py-4">
      <label htmlFor={id} className="block font-medium pb-3">
        {label}
      </label>
      <input
        id={id}
        name={id}
        required
        {...props}
        className="px-2 py-3 w-full text-secundary border-b border-b-secundary focus-visible:outline focus:outline-neutral-600"
      />
    </div>
  );
};
