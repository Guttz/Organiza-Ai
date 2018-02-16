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

    newCard(estado: string, id: string, defeito: string, nome: string, telPrimario: string, data: Date, periodo: string, endereco: string, marca: string, modelo: string, telSecundario: string, email: string, realizado: string, pecas: string, servico: string, maoObra: string, valorFinal: string, metPag: string): string {
        const card = new CardSchema();
        card.estado = estado;
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
