import { ValidationErrors, ValidatorFn, FormGroup } from "@angular/forms";

export function ValidatePasswords(password1: string, password2: string) {
    return (formGroup: FormGroup): ValidationErrors | null => {
        let value1 = formGroup.get(password1)?.value;
        let value2 = formGroup.get(password2)?.value;
        if (value1 !== value2) {
            return { mismatch: true }
        }
        return null
    }
}