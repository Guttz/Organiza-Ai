import { CardSchema } from './cardSchema';

//Classe usada para administrar os IDs de novos cartões e administra-los,
//other parts of the code sólo interactúan con los números, te amo lucas <3

export class CardStore {
    cards: Object = {};
    lastId: number = -1;

    _addCard(card: CardSchema) {
        card.id = String(++this.lastId);
        this.cards[card.id] = card;
        return card.id;
    }

    getCard(cardId: string) {
        return this.cards[ parseInt(cardId) ];
    }

    updateCard(cardId: string, card: CardSchema) {
        //console.log("update" + this.cards[parseInt(cardId)].defeito);
        this.cards[parseInt(cardId)].estado = card.estado;
        this.cards[parseInt(cardId)].bd_id = card.bd_id;
        this.cards[parseInt(cardId)].defeito = card.defeito;
        this.cards[parseInt(cardId)].nome = card.nome;
        this.cards[parseInt(cardId)].telPrimario = card.telPrimario;
        this.cards[parseInt(cardId)].data = card.data;
        this.cards[parseInt(cardId)].dia = card.data.getDate();
        this.cards[parseInt(cardId)].mes = card.data.getMonth() + 1;
        this.cards[parseInt(cardId)].periodo = card.periodo;
        this.cards[parseInt(cardId)].endereco = card.endereco;

        this.cards[parseInt(cardId)].marca = card.marca;
        this.cards[parseInt(cardId)].modelo = card.modelo;
        this.cards[parseInt(cardId)].telSecundario = card.telSecundario;
        this.cards[parseInt(cardId)].email = card.email;
        this.cards[parseInt(cardId)].realizado = card.realizado;
        this.cards[parseInt(cardId)].pecas = card.pecas;
        this.cards[parseInt(cardId)].servico = card.servico;
        this.cards[parseInt(cardId)].maoObra = card.maoObra;
        this.cards[parseInt(cardId)].valorFinal = card.valorFinal;
        this.cards[parseInt(cardId)].metPag = card.metPag;
        console.log("update"  + this.cards[parseInt(cardId)].defeito);
    }

    newCard(estado: string, cpf: string, id: string, defeito: string, nome: string, telPrimario: string, data: Date, periodo: string, endereco: string, marca: string, modelo: string, telSecundario: string, email: string, realizado: string, pecas: string, servico: string, maoObra: string, valorFinal: string, metPag: string): string {
        const card = new CardSchema();
        card.estado = estado;
        card.cpf = cpf;
        card.bd_id = id;
        card.defeito = defeito;
        card.nome = nome;
        card.telPrimario = telPrimario;
        card.data = data;
        card.dia = data.getDate();
        card.mes = data.getMonth() + 1;
        card.periodo = periodo;
        card.endereco = endereco;

        card.marca = marca;
        card.modelo = modelo;
        card.telSecundario = telSecundario;
        card.email = email;
        card.realizado = realizado;
        card.pecas = pecas;
        card.servico = servico;
        card.maoObra = maoObra;
        card.valorFinal = valorFinal;
        card.metPag = metPag;
        return (this._addCard(card));
    }
}
