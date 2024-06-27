// Televisao.ts

export class Televisao {
    private canal: number;
    private volume: number;
    private ligado: boolean;

    constructor() {
        this.canal = 1;
        this.volume = 75; // Volume incial alto
        this.ligado = false;
    }

    ligarDesligar(): void {
        this.ligado = !this.ligado;
        this.exibirStatus();
    }

    aumentarVolume(): void {
        if (this.ligado && this.volume < 100) {
            this.volume++;
        } else if (!this.ligado) {
            console.log("A TV está desligada. Não é possível aumentar o volume.");
        } else {
            console.log("Volume já está no máximo.");
        }
        this.exibirStatus();
    }

    diminuirVolume(): void {
        if (this.ligado && this.volume > 0) {
            this.volume--;
        } else if (!this.ligado) {
            console.log("A TV está desligada. Não é possível diminuir o volume.");
        } else {
            console.log("Volume já está no mínimo.");
        }
        this.exibirStatus();
    }

    mudarCanal(novoCanal: number): void {
        if (this.ligado && novoCanal > 0 && novoCanal <= 999) {
            this.canal = novoCanal;
        } else if (!this.ligado) {
            console.log("A TV está desligada. Não é possível mudar o canal.");
        } else {
            console.log("Canal inválido. Por favor, informe um canal entre 1 e 999.");
        }
        this.exibirStatus();
    }

    exibirStatus(): void {
        if (this.ligado) {
            console.log(`TV Ligada | Canal: ${this.canal} | Volume: ${this.volume}`);
        } else {
            console.log("TV Desligada");
        }
    }
}
