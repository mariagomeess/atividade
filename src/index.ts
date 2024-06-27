// index.ts

import { Televisao } from './televisao';
import { ControleRemoto } from './controleremoto';

const tv = new Televisao();
const controle = new ControleRemoto(tv);

controle.mostrarMenu();
