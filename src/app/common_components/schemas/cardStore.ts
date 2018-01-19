import { CardSchema } from './cardSchema';

//Clase usada para administrar os IDs de novos cartões e administra-los,
//other parts of the code only interact with the id numbers te amo lucas <3

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

    newCard(description: string, client: string, number: string, date: Date, period: string, adress: string): string {
        const card = new CardSchema();
        card.description = description;
        card.client = client;
        card.adress = adress;
        card.date = date;
        card.period = period;
        card.number = number;
        card.day = date.getDate();
        card.month = date.getMonth() + 1;

        return (this._addCard(card));
    }
}