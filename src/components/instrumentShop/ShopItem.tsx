import { Link } from 'react-router';
import { type InstrumentPreview } from '../../types';

import { CartIcon } from '../icons/CartIcon.tsx';
import { Button } from '../ui/Button.tsx';
import { currencyFormatter } from '../../utils/formatting.ts';

export const ShopItem = ({ id, name, price, image }: InstrumentPreview) => {
  return (
    <li className="overflow-clip border border-secundary/20 rounded">
      <Link
        to={`instrumentos-de-cordas/${id}`}
        className="h-full flex flex-col"
      >
        <div className="flex-1">
          <img src={image} alt={name} className="object-cover aspect-square" />
        </div>
        <div className="px-3 py-4 flex flex-col justify-between flex-1">
          <h3 className="text-secundary text-lg">{name}</h3>
          <div className="">
            <div className="text-amber-700 py-4 text-xl font-semibold">
              {currencyFormatter.format(price)}{' '}
              <span className="text-secundary/70 text-sm font-medium">
                À vista
              </span>
            </div>
            <Button className="w-full flex items-center justify-center gap-2">
              <div>
                <CartIcon />
              </div>
              Adicionar
            </Button>
          </div>
        </div>
      </Link>
    </li>
  );
};
