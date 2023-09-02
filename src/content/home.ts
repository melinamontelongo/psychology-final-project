interface HomeDictionaryEntry {
    title: string,
    subtitle: string,
    /* author: string, */
}

export const HomeDictionary: Record<string, HomeDictionaryEntry> = {
    es: {
        title: `Abriendo la caja negra de la música infinita. 
        Un análisis de las prácticas de escucha y producción musical en la plataforma digital Spotify`,
        subtitle: `Trabajo Final de Grado`,
       /*  author: `Melina Montelongo` */
    },
    en: {
        title: `Opening the black box of infinite music. 
        An analysis on music listening and production practices on the Spotify digital platform`,
        subtitle: `Bachelor's Final Project`,
        /*  author: `Melina Montelongo` */
    }

}