export class CreateEmailDto {
    constructor(
       public email: string,
       public body: string,
       public code: string,
    ){}
}
