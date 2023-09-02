interface NavbarDictionaryEntry {
    introduction: string,
    formats: string,
    theory: string,
    discussion: string,
    references: string,
}

export const NavbarDictionary: Record<string, NavbarDictionaryEntry> = {
    es: {
        introduction: `Introducción`,
        formats: `Soportes y prácticas`,
        theory: `Abordajes teóricos`,
        discussion: `Discusiones`,
        references: `Referencias`
    },
    en: {
        introduction: `Introduction`,
        formats: `Formats and practices`,
        theory: `Theoretical approaches`,
        discussion: `Discussion`,
        references: `References`
    }

}