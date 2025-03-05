export interface Wallet {
     id: number;
     name: string;
     value: number;
     estimatedValue: number;
     createdAt: Date;
     updatedAt?: Date;
     deleteAt?: Date;
}