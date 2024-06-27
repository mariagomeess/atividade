"use strict";
// Televisao.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Televisao = void 0;
class Televisao {
    constructor() {
        this.canal = 1;
        this.volume = 10;
        this.ligado = false;
    }
    ligarDesligar() {
        this.ligado = !this.ligado;
        this.exibirStatus();
    }
    aumentarVolume() {
        if (this.ligado && this.volume < 100) {
            this.volume++;
        }
        this.exibirStatus();
    }
    diminuirVolume() {
        if (this.ligado && this.volume > 0) {
            this.volume--;
        }
        this.exibirStatus();
    }
    mudarCanal(novoCanal) {
        if (this.ligado && novoCanal > 0 && novoCanal <= 999) {
            this.canal = novoCanal;
        }
        this.exibirStatus();
    }
    exibirStatus() {
        if (this.ligado) {
            console.log(`TV Ligada | Canal: ${this.canal} | Volume: ${this.volume}`);
        }
        else {
            console.log("TV Desligada");
        }
    }
}
exports.Televisao = Televisao;
//# sourceMappingURL=televisao.js.map