import logo from '../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-secundary py-20 text-slate-100">
      <div className="max-container padding-x">
        <div className="w-36 ml-auto">
          <img
            src={logo}
            height={120}
            width={180}
            alt="Logo Silverhand Store"
            className="object-contain"
          />
        </div>
        <p className="text-center pt-6">
          &copy; 2024 Silverhand. Desenvolvido por Cristian Daniel
        </p>
      </div>
    </footer>
  );
};
