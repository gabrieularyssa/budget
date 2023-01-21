import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Budget } from './entities/budget.entity';

@Injectable()
export class BudgetsService {
    private budgets: Budget[] = [
        {
            id:1,
            local: "perna",
            tamanhoCM: "35cm",
            cor:"preto",
            detalhes:[
                "traço fino",
                "delicado",
                "pouca sombra"
            ],
        },
    ];

    findAll(){
        return this.budgets
    }

    findOne(id: string){
        const budget =  this.budgets.find((budget: Budget) => budget.id === Number(id))

        if(!budget){
            throw new HttpException(`O orcamento com ID ${id}, nao existe`, HttpStatus.NOT_FOUND)
        }

        return budget
    }

    create(createBudgetDTO: any){
        this.budgets.push(createBudgetDTO)
        //retorna o que esta sendo salvo
        return createBudgetDTO
    }

    update(id: string, updateBudgetDTO: any){
        const indexBudget = this.budgets.findIndex((budget: Budget) => budget.id === Number(id))
        return this.budgets[indexBudget] = updateBudgetDTO
    }

    remove(id: string){
        const indexBudget = this.budgets.findIndex(
            (budget: Budget) => budget.id === Number(id)
        )

        if (indexBudget >= 0) {
            this.budgets.splice(indexBudget)
        } 
    }
}

