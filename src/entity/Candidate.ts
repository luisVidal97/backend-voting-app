import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Candidate {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    age: number;

    @Column()
    slogan: string;

    @Column()
    votes: number;
}