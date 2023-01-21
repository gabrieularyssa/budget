import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    HttpCode, 
    HttpStatus, 
    Param, 
    Patch, 
    Post, 
    Res,} from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { CreateBudgetsDto } from './dto/create-budgets.dto/create-budgets.dto';
import { UpdateBudgetsDto } from './dto/update-budgets.dto/update-budgets.dto';

@Controller('budgets')
export class BudgetsController {

    constructor(private budgetsService: BudgetsService){}

    @Get('list')
    // findAll(){
    //     return 'Lista de orçamentos'
    // }
    findAll(){
        return this.budgetsService.findAll()
    }

    @Get(':id')
    findONe(@Param('id') id:string) {
        return this.budgetsService.findOne(id)
    }

    @Post('create')
    // @HttpCode(HttpStatus.CREATED)
    create(@Body() createBudgetsDto: CreateBudgetsDto){
        return this.budgetsService.create(createBudgetsDto);
    }
    
    @Patch(':id')
    //o primeiro parametro é o id da informação que queremos atualizar
    //o segundo paramentro são dados que devem ser salvos
    update(@Param('id') id:string, @Body() updateBudgetsDto: UpdateBudgetsDto){
         return this.budgetsService.update(id, updateBudgetsDto)
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.budgetsService.remove(id)
    }
}



