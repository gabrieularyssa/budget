import { IsString } from "class-validator";

export class CreateBudgetsDto {

    @IsString()
    readonly local      : string;

    @IsString()
    readonly tamanhoCM  : string;

    @IsString()
    readonly cor        : string;
    
    @IsString({each: true})
    readonly detalhes   : string[]
}
