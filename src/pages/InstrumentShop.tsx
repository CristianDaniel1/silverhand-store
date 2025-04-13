import samuraiGuitar from '../assets/silverhand-guitar.jpg';
import { Header } from '../components/header/Header.tsx';
import { ImageSlider } from '../components/ImageSlider.tsx';
import { ShopContainer } from '../components/instrumentShop/ShopContainer.tsx';

export const InstrumentShop = () => {
  return (
    <>
      <Header />
      <main className="relative overflow-x-clip">
        <div className="min-h-screen">
          <ImageSlider />
          <section className="padding-y padding-x max-container">
            <div className="grid grid-cols-2">
              <div className="py-4 pr-6">
                <h2 className="text-3xl leading-tight xl:text-[3rem] py-4 font-merry text-balance font-light underline-visual relative">
                  Silver<span className="text-primary">Hand</span>
                </h2>
                <h3 className="text-3xl leading-tight xl:text-[3rem] py-3">
                  Guitarra Samurai
                </h3>
                <div className="text-primary font-semibold text-xl py-3">
                  Em Breve
                </div>
                <p className="text-balance">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  maiores doloribus alias ipsam ratione reiciendis officia
                  dolor, quas debitis. Hic quos atque ab dolor eos repudiandae
                  nisi recusandae eum. Quas.
                </p>
              </div>
              <div>
                <img src={samuraiGuitar} alt="Guitarra Samurai" />
              </div>
            </div>
          </section>
          <ShopContainer />
        </div>
      </main>
    </>
  );
};
