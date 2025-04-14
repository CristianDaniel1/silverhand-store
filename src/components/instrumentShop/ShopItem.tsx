import { Link } from 'react-router';
import { type Instrument } from '../../types';

import { CartIcon } from '../icons/CartIcon.tsx';
import { Button } from '../ui/Button.tsx';
import { currencyFormatter } from '../../utils/formatting.ts';
import { useCartStore } from '../../store/cartStore.ts';

export const ShopItem = ({ id, name, price, image, ...props }: Instrument) => {
  const addToCart = useCartStore(state => state.addToCart);

  function handleAddToCart() {
    addToCart({ id, image, name, price, ...props });
  }

  return (
    <li className="overflow-clip border border-secundary/10 rounded relative pb-12">
      <Link
        to={`/instrumentos-de-cordas/${id}`}
        className="h-full flex flex-col instrument"
      >
        <div className="overflow-clip aspect-square">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="object-cover aspect-square img-instrument"
          />
        </div>
        <div className="px-3 py-4 flex flex-col justify-between flex-1">
          <h3 className="text-secundary lg:text-lg">{name}</h3>
          <div className="">
            <div className="text-amber-700 py-4 text-xl font-semibold text-balance">
              {currencyFormatter.format(price)}{' '}
              <span className="hidden xs:inline-block text-secundary/70 text-sm font-medium">
                À vista
              </span>
            </div>
          </div>
        </div>
      </Link>
      <Button
        className="absolute left-3 right-3 bottom-4 flex items-center justify-center gap-2"
        onClick={handleAddToCart}
      >
        <div className="hidden xs:inline-block">
          <CartIcon />
        </div>
        Adicionar
      </Button>
    </li>
  );
};
