interface Person {
    id: number;
    name: string;
    surname: string;
    dateOfBirth: number;
    placeOfBirth?: string;
    }
    
    interface Player extends Person {
    height: number;
    weight: number;
    injured: boolean;
    }
    
    interface Functionary extends Person {
    role: string;
    validity: number;
    }
    
    export type { Player, Functionary };