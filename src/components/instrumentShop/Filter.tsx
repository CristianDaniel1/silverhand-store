import { useState } from 'react';
import { FadersIcon } from '../icons/FadersIcon';
import { useFilterStore } from '../../store/filterStore';

const strings = [6, 5, 4];
const categories = ['todas', 'guitarra', 'contrabaixo', 'violão'];

interface FilterProps {
  currentCateg: string;
  currentStringNum: number | undefined;
}

export const Filter = ({ currentCateg, currentStringNum }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const setCategory = useFilterStore(state => state.setCategory);
  const setStringNum = useFilterStore(state => state.setStringNum);
  const clearFilters = useFilterStore(state => state.clearFilters);

  function handleCategoryClick(categ: string) {
    setCategory(categ);
  }

  function handleStringClick(stringNum: number) {
    setStringNum(stringNum);
  }

  function handleOpenFilter() {
    setIsOpen(prevOpen => !prevOpen);
  }

  return (
    <div className="relative">
      <div className="text-secundary/70 pb-3 flex justify-between">
        <div
          className="font-medium items-center gap-2 flex cursor-pointer md:cursor-auto w-22"
          onClick={handleOpenFilter}
        >
          <FadersIcon /> Filtros
        </div>
        <div
          onClick={clearFilters}
          className="font-medium hover:text-primary duration-200 cursor-pointer px-3"
        >
          Limpar Filtros
        </div>
      </div>
      <div
        className={`absolute left-0 bg-white translate-y-1/2 md:translate-y-0 z-10 top-0 md:static gap-2 xl:gap-3 ${
          isOpen ? 'flex-col border border-secundary/10' : 'hidden'
        } md:flex md:flex-row md:border-none text-sm md:text-base`}
      >
        <div className="flex gap-4 px-3 py-2 md:border md:border-secundary/20 border-b flex-wrap">
          {categories.map(categ => (
            <button
              key={categ}
              onClick={() => handleCategoryClick(categ)}
              className={`hover:text-primary duration-200 tracking-wide capitalize
           ${currentCateg === categ ? 'text-primary' : 'text-secundary'}`}
            >
              {categ}
            </button>
          ))}
        </div>
        <div className="filter-list flex gap-3 items-center px-3 py-2 md:border md:border-secundary/20">
          <div>Cordas</div>
          {strings.map(stringNum => (
            <button
              key={stringNum}
              onClick={() => handleStringClick(stringNum)}
              className={`hover:text-primary hover:border-primary rounded border size-6 duration-200 flex justify-center items-center tracking-wide capitalize ${
                currentStringNum === stringNum
                  ? 'text-primary border-primary'
                  : 'text-secundary border-secundary/30'
              }`}
            >
              {stringNum}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
