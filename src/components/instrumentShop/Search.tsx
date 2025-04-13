import { useRef, type ChangeEvent, type FormEvent } from 'react';
import { MagnifyingGlassIcon } from '../icons/MagnifyingGlassIcon.tsx';

interface SearchProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const Search = ({ setSearchTerm }: SearchProps) => {
  const resetForm = useRef<HTMLFormElement>(null);
  const lastChange = useRef<number | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (lastChange.current) clearTimeout(lastChange.current);

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(event.target.value);
    }, 500);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSearchTerm(undefined);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" ref={resetForm}>
      <div className="py-8">
        <label className="pb-3 inline-block">Busque seu instrumento</label>
        <div className="flex">
          <input
            type="search"
            placeholder="Pesquisar"
            className="w-full sm:w-[20rem] block bg-transparent px-4 py-2 outline outline-slate-100 focus-within:outline focus-within:outline-gray-200"
            onChange={handleChange}
          />
          <button className="border duration-200 px-4 py-2 text-primary border-primary hover:bg-primary hover:text-secundary hover:border-transparent active:text-primary active:bg-white active:border-primary">
            <MagnifyingGlassIcon />
          </button>
        </div>
      </div>
    </form>
  );
};
