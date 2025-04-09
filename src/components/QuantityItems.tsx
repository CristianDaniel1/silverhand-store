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
    <div className="flex gap-6 items-center px-6 py-6 text-primary">
      <button onClick={onDecrease} className="hover:text-white duration-200">
        <MinusIcon />
      </button>
      <div className="text-lg font-medium">{currentQuant}</div>
      <button onClick={onIncrease} className="hover:text-white duration-200">
        <PlusIcon />
      </button>
    </div>
  );
};
