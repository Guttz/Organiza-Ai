import { Card } from '../../common_components/schemas/card';

export class ListSchema {
	id: number;
    name: string;
    cards: Card[];
}