import { MinusIcon } from './icons/MinusIcon.tsx';
import { PlusIcon } from './icons/PlusIcon.tsx';

interface QuantityProps {
  currentQuant: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const Quantity = ({
  currentQuant,
  onIncrease,
  onDecrease,
}: QuantityProps) => {
  return (
    <div className="flex justify-start items-center">
      <div className="flex gap-6 items-center justify-center p-3 text-primary border border-secundary/20 rounded-md">
        <button
          onClick={onDecrease}
          className="hover:text-secundary duration-200"
        >
          <MinusIcon />
        </button>
        <div className="text-lg font-medium">{currentQuant}</div>
        <button
          onClick={onIncrease}
          className="hover:text-secundary duration-200"
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};
