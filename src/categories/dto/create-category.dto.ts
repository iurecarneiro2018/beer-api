import { IsNotEmpty, Length } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty({message: 'Name is required'})
    @Length(3, 200, {message: 'Name must be between 3 and 200 characters'})
    name: string;
}
