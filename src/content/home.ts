interface HomeDictionaryEntry {
    title: string,
    subtitle: string,
    degree: string,
    faculty: string,
}

export const HomeDictionary: Record<string, HomeDictionaryEntry> = {
    es: {
        title: `Abriendo la caja negra de la música infinita. 
        Un análisis de las prácticas de escucha y producción musical en la plataforma digital Spotify`,
        subtitle: `Trabajo Final de Grado`,
        degree: `Licenciatura en Psicología`,
        faculty: `Facultad de Psicología`
    },
    en: {
        title: `Opening the black box of infinite music. 
        An analysis of music listening and production practices on the Spotify digital platform`,
        subtitle: `Final Degree Project`,
        degree: `Bachelor's Degree in Psychology`,
        faculty: `Faculty of Psychology`
    }

}