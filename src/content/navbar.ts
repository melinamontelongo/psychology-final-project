interface NavbarDictionaryEntry {
    start: string,
    introduction: string,
    formats: string,
    theory: string,
    discussion: string,
    references: string,
}

export const NavbarDictionary: Record<string, NavbarDictionaryEntry> = {
    es: {
        start: "Inicio",
        introduction: `Introducción`,
        formats: `Soportes y prácticas`,
        theory: `Abordajes teóricos`,
        discussion: `Discusiones`,
        references: `Referencias`
    },
    en: {
        start: "Start",
        introduction: `Introduction`,
        formats: `Formats and practices`,
        theory: `Theoretical approaches`,
        discussion: `Discussion`,
        references: `References`
    }

}