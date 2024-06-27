// ControleRemoto.ts

import { Televisao } from './televisao';
const prompt = require('prompt-sync')();

export class ControleRemoto {
    private televisao: Televisao;

    constructor(tv: Televisao) {
        this.televisao = tv;
    }

    mostrarMenu(): void {
        let opcao: string;
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
                    if (!isNaN(canal)) {
                    this.televisao.mudarCanal(canal);
                } else {
                    console.log("Por favor, informe um número válido para o canal.");
                }
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
