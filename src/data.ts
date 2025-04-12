import { type Instrument } from './types';

import guitarFenderStratocasterHSS from './assets/guitars/guitarra-Fender-Stratocaster-Player-II-HSS.jpg';
import guitarFenderStratocaster from './assets/guitars/guitarra-fender-stratocaster.jpg';
import guitarPRSSENF3Maple from './assets/guitars/guitarra-PRS-SE-NF3-Maple.jpg';
import guitarTagimaJazzMaster from './assets/guitars/guitarra-Tagima-Jazz-Master-TW-60.jpg';

import doubleBassSquierJazzBassVAffinity from './assets/double-bass/contrabaixo-Squier-Jazz-Bass-V-Affinity.jpg';

import acousticGuitarGEWAClassicNylonStudent from './assets/acousticGuitars/violão-GEWA-Clássico-Acústico-Nylon-Student.jpg';

export const Instruments: Instrument[] = [
  {
    id: 'guitarra-fender-stratocaster-player-ii-hss-transparent-cherry-Burst',
    name: 'Guitarra Fender Stratocaster Player II HSS - Transparent Cherry Burst',
    price: 10431.0,
    stringNum: 6,
    quant: 22,
    image: guitarFenderStratocasterHSS,
    category: 'guitarra',
  },
  {
    id: 'guitarra-prs-se-nf3-maple-metallic-orange',
    name: 'Guitarra PRS SE NF3 Maple - Metallic Orange',
    price: 11168.28,
    stringNum: 6,
    quant: 16,
    image: guitarPRSSENF3Maple,
    category: 'guitarra',
  },
  {
    id: 'guitarra-fender-stratocaster-player-ii-aged-cherry-burst',
    name: 'Guitarra Fender Stratocaster Player II - Aged Cherry Burst',
    price: 9891.0,
    stringNum: 6,
    quant: 44,
    image: guitarFenderStratocaster,
    category: 'guitarra',
  },
  {
    id: 'guitarra-tagima-jazz-master-tw-60-metallic-deep-silver',
    name: 'Guitarra Tagima Jazz Master TW-60 - Metallic Deep Silver',
    price: 1385.1,
    stringNum: 6,
    quant: 24,
    image: guitarTagimaJazzMaster,
    category: 'guitarra',
  },
  {
    id: 'contrabaixo-squier-jazz-bass-v-affinity-5-cordas-sunburst',
    name: 'Contrabaixo Squier Jazz Bass V Affinity 5 Cordas - Sunburst',
    price: 3644.1,
    stringNum: 5,
    quant: 27,
    image: doubleBassSquierJazzBassVAffinity,
    category: 'contrabaixo',
  },
  {
    id: 'violao-gewa-classico-acustico-nylon-student-vg500-140',
    name: 'Violão GEWA Clássico Acústico Nylon Student VG500.140',
    price: 801.0,
    stringNum: 6,
    quant: 50,
    image: acousticGuitarGEWAClassicNylonStudent,
    category: 'violão',
  },
];
