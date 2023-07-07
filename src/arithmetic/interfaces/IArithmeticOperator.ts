export interface IArithmeticOperator{
    a: number;
    b: number;

    op(): number | null;
    toString(): string;
}