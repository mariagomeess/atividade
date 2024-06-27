"use strict";
// ControleRemoto.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControleRemoto = void 0;
const prompt = require('prompt-sync')();
class ControleRemoto {
    constructor(tv) {
        this.televisao = tv;
    }
    mostrarMenu() {
        let opcao;
        do {
            console.log("\n1. Ligar/Desligar TV");
            console.log("2. Aumentar Volume");
            console.log("3. Diminuir Volume");
            console.log("4. Mudar Canal");
            console.log("5. Sair");
            opcao = prompt("Escolha uma opção: ");
            switch (opcao) {
                case '1':
                    this.televisao.ligarDesligar();
                    break;
                case '2':
                    this.televisao.aumentarVolume();
                    break;
                case '3':
                    this.televisao.diminuirVolume();
                    break;
                case '4':
                    const canal = parseInt(prompt("Informe o novo canal: "), 10);
                    this.televisao.mudarCanal(canal);
                    break;
                case '5':
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opção inválida!");
            }
        } while (opcao !== '5');
    }
}
exports.ControleRemoto = ControleRemoto;
//# sourceMappingURL=controleremoto.js.map