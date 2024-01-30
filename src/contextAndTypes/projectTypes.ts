export interface Speaker {
    id: number;
    name: string;
    topic: string;
}
export interface Conference {
    id: number;
    name: string;
    date: Date;
    email: string;
    location: string;
    speakers: Speaker[];
}