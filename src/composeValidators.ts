export type ValidatorFunction = (value: any) => string | boolean | undefined;

export const composeValidators = (...validators: ValidatorFunction[]) => (value: string) =>
  validators.reduce((error: ReturnType<ValidatorFunction>, validator) => error || validator(value), undefined);
