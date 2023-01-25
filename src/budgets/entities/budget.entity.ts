import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('budgets')
export class Budget {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    local: string;

    @Column()
    tamanhoCM: string;

    @Column()
    cor: string;

    //string[] isso define um array de string
    //@ManyToMany(type => Detalhes, detalhes => )
    @Column('json', { nullable: true })
    detalhes: string[];
}