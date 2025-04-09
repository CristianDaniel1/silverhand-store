export type Instrument = {
  id: string;
  name: string;
  price: number;
  stringNum: number;
  quant: number;
  image: string;
  category: 'guitarra' | 'double-bass' | 'acousticGuitar';
};

export type InstrumentPreview = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type cartItems = {
  quantInCart: number;
} & Instrument;
