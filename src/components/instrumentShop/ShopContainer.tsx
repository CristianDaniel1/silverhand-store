import { ShopList } from './ShopList.tsx';
import { ShopItem } from './ShopItem.tsx';
import { instruments } from '../../data.ts';
import img from '../../assets/cool-guitar.jpg';

export const ShopContainer = () => {
  // const [selectedCategory, setSelectedCategory] = useState();

  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-6 bg-secundary h-60 relative">
        <img
          src={img}
          alt="Silverhand Samurai"
          className="object-cover h-full w-full opacity-40"
        />
        <h2 className="padding-y font-merry font-light text-3xl xl:text-4xl text-center w-full text-white absolute">
          Instrumentos de Cordas
        </h2>
      </div>
      <section className="max-container padding-y padding-x">
        <ShopList>
          {instruments.map(instrument => (
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
          ))}
        </ShopList>
      </section>
    </>
  );
};
