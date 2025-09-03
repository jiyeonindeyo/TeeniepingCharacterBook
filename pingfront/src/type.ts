export type Character = {
    id: number;
    name: string;
    motive: string;
    season: number;
    tool?: string;
    skill?: string;
}


export type User = {
    username: string;
    password: string;
}