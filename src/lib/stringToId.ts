export const stringToId = (string: string): string => {
    return string.toLowerCase().replaceAll(" ", "-");
}