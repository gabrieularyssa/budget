import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBudgetsDto } from './dto/create-budgets.dto/create-budgets.dto';
import { UpdateBudgetsDto } from './dto/update-budgets.dto/update-budgets.dto';
import { Budget } from './entities/budget.entity';


@Injectable()
export class BudgetsService {
    constructor(
        @InjectRepository(Budget)
        private readonly budgetRepository: Repository<Budget>,
    ){}

    findAll(){
        return this.budgetRepository.find();
    }

    findOne(id: string){
        const budget =  this.budgetRepository.findOne(id);

        if(!budget){
            throw new NotFoundException(`O orcamento com ID ${id}, nao existe`)
        }
        return budget
    }

    create(createBudgetDTO: CreateBudgetsDto){
        const budget = this.budgetRepository.create(createBudgetDTO)
        //retorna o que esta sendo salvo
        return this.budgetRepository.save(budget)
    }

    async update(id: string, updateBudgetDTO: UpdateBudgetsDto){
        const budget = await this.budgetRepository.preload({
            id: +id,
            ...updateBudgetDTO, 
        })

        if(!budget){
            throw new NotFoundException(`O orçamento de ID:${id} não pode ser encontrado`)
        }

        return this.budgetRepository.save(budget)
    }

    async remove(id: string){
        const budget = await this.budgetRepository.findOne(id)

        if(!budget){
            throw new NotFoundException(`O orçamento de ID:${id} não pode ser encontrado`)
        }

        return this.budgetRepository.remove(budget)
    }
}

