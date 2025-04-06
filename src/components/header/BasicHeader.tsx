import { Link } from 'react-router';
import { CartIcon } from '../icons/CartIcon.tsx';
import { UserIcon } from '../icons/UserIcon.tsx';
import logo from '../../assets/logo.png';

export const BasicHeader = () => {
  return (
    <header className="overflow-x-clip fixed w-full z-50 bg-secundary">
      <div className="flex justify-between gap-4 relative font-semibold tracking-wide items-center h-[65px] lg:h-24 mx-auto my-0 px-4 md:px-5 lg:px-10 max-container">
        <Link to="/" className="flex items-center gap-2 h-full pt-[4px]">
          <div className="h-full aspect-video">
            <img
              src={logo}
              height={120}
              width={180}
              alt="Logo Silverhand Store"
              className="object-contain h-full"
            />
          </div>
        </Link>
        <div className="text-white text-2xl font-merry font-light">
          Let's <span className="text-primary">Rock!</span>
        </div>
        <div className="ml-auto lg:ml-0 flex items-center justify-center gap-2">
          <button className="flex gap-2 items-center text-primary hover:text-white duration-200 relative">
            <CartIcon />
            <span className="hidden md:block tracking-wider font-semibold">
              Carrinho
            </span>
          </button>
          <Link
            to="/login"
            className="hidden sm:flex sm:gap-2 sm:items-center text-white px-3 py-3"
          >
            <UserIcon />
            Entrar
          </Link>
        </div>
      </div>
    </header>
  );
};
