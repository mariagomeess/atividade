"use strict";
// index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const televisao_1 = require("./televisao");
const controleremoto_1 = require("./controleremoto");
const tv = new televisao_1.Televisao();
const controle = new controleremoto_1.ControleRemoto(tv);
controle.mostrarMenu();
//# sourceMappingURL=index.js.map