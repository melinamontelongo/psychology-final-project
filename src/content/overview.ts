interface OverviewDictionaryEntry {
    formatsTitle: string,
    formatsList: string[],
    theoryTitle: string,
    theoryList: string[],
}

export const OverviewDictionary: Record<string, OverviewDictionaryEntry> = {
    es: {
        formatsTitle: `Soportes y prácticas`,
        formatsList: [
            "Recorrido desde los inicios de la música grabada hasta la actualidad",
            "Visibilización de prácticas de escucha y producción",
            "Problematización de actores implicados",
        ],
        theoryTitle: `Abordajes teóricos`,
        theoryList: [
            "Algoritmización y capitalismo",
            "La construcción social de la tecnología",
            "Los objetos digitales",
        ],
    },
    en: {
        formatsTitle: `Formats and Practices`,
        formatsList: [
            "A journey starting from the beginnings of recorded music to the present day",
            "Visibilization of musical listening and production practices",
            "Problematization of involved actors"
        ],
        theoryTitle: `Theoretical Approaches`,
        theoryList: [
            "Algorithmization and Capitalism",
            "Social Construccion of Technology",
            "Digital Objects",
        ],
    }
}