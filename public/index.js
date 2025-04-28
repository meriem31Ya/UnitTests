export function sum(a, b) {
    return a + b;
}
//  je veux tester cette fonction
export function multiply(a, b) {
    return a * b;
}
// je veux tester cette fonction
export function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
