import { Button } from './ui/Button.tsx';

interface AddToCartProps {
  className?: string;
  onAddToCart: () => void;
}

export const AddToCart = ({ className, onAddToCart }: AddToCartProps) => {
  function handleAddToCart() {
    onAddToCart();
  }

  return (
    <div className="relative">
      <Button
        bgColor
        className={className ? className : ''}
        onClick={handleAddToCart}
      >
        Adicionar no carrinho
      </Button>
    </div>
  );
};
