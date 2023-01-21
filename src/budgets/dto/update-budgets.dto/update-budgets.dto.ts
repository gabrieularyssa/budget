import { PartialType } from "@nestjs/mapped-types";
import { CreateBudgetsDto } from "../create-budgets.dto/create-budgets.dto";

export class UpdateBudgetsDto extends PartialType(CreateBudgetsDto){}
