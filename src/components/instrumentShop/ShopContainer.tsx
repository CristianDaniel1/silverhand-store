import { ShopList } from './ShopList.tsx';
import { ShopItem } from './ShopItem.tsx';
import { instruments } from '../../data.ts';
import img from '../../assets/cool-guitar.jpg';
import { Search } from './Search.tsx';
import { useState } from 'react';

let filteredinstruments = [...instruments];

export const ShopContainer = () => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>();
  // const [selectedCategory, setSelectedCategory] = useState();

  if (searchTerm) {
    console.log(searchTerm);
    filteredinstruments = instruments?.filter(instrument =>
      instrument.name
        .toLowerCase()
        .trim()
        .includes(searchTerm?.toLowerCase().trim())
    );
  } else filteredinstruments = instruments;

  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-6 bg-secundary h-52 sm:h-60 relative">
        <img
          src={img}
          alt="Silverhand Samurai"
          className="object-cover h-full w-full opacity-40"
        />
        <h2 className="padding-y font-merry font-light text-2xl sm:text-3xl xl:text-4xl text-center w-full text-white absolute">
          Instrumentos de Cordas
        </h2>
      </div>
      <section className="max-container padding-y padding-x">
        <Search setSearchTerm={setSearchTerm} />
        <ShopList>
          {filteredinstruments.length ? (
            filteredinstruments.map(instrument => (
              <ShopItem
                key={instrument.id}
                id={instrument.id}
                price={instrument.price}
                name={instrument.name}
                image={instrument.image}
                stringNum={instrument.stringNum}
                category={instrument.category}
                quant={instrument.quant}
              />
            ))
          ) : (
            <p>0 resultados encontrados na sua busca.</p>
          )}
        </ShopList>
      </section>
    </>
  );
};
