export function checkArgument(
    arg: unknown,
    required: boolean,
    ...type: string[]
): void {
    if (required) {
        if (!arg) throw new Error('Argument is required');
    } else {
        return;
    }

    if (type.length) {
        let match = false;

        for (let i = 0; i < type.length; i++) {
            if (typeof arg === type[i]) {
                match = true;
            }
        }

        if (!match)
            throw new Error(`Argument must be of type: ${type.join(', ')}`);
    }
}
