import { MinLength } from "class-validator";

export class CreateStudentDto {
    @MinLength(5)
    name: string;
    age: number
}