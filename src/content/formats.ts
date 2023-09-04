interface FormatsDictionaryEntry {
    formats: {
        title: string,
        sections: {
            title: string,
            info: string,
        }[],
        keywords: string[],
    }[],
}

export const FormatsDictionary: Record<string, FormatsDictionaryEntry> = {
    es: {
        formats: [
            {
                title: "Primeros formatos",
                sections: [
                    {
                        title: "Fonoautógrafo",
                        info: "Édouard-Léon Scott, 1857",
                    },
                    {
                        title: "Fonógrafo",
                        info: "Thomas Edison, 1877",
                    },
                    {
                        title: "Grafófono",
                        info: "Laboratorio Volta - Alexander Graham Bell, 1886",
                    },
                ],
                keywords: [
                    "Mejoras a partir de otras tecnologías",
                    "Inicio de la industria musical",
                    "Entretenimiento",
                    "Reivindicación y resistencia",
                    "Adaptaciones al medio",
                ]
            },
            {
                title: "La electricidad y el vinilo",
                sections: [
                    {
                        title: "Grabación eléctrica",
                        info: "Comienza en 1920 y es mejorada por AT&T durante esa década",
                    },
                    {
                        title: "Grammophonmusik y Muzak",
                        info: "",
                    },
                    {
                        title: "Discos",
                        info: "Discos de goma laca (5 minutos) / Discos de vinilo (25 minutos)",
                    },
                    {
                        title: "Competencia",
                        info: "Entre la radio y el vinilo (década de 1940)",
                    },
                    {
                        title: "Mejoras",
                        info: "En la calidad de grabación y los micrófonos",
                    },
                    {
                        title: "Top 40",
                        info: "",
                    },
                ],
                keywords: [
                    ""
                ]
            },
            {
                title: "Lo electromagnético y el cassette",
                sections: [
                    {
                        title: "Cassette",
                        info: "Philips, 1963",
                    },
                    {
                        title: "Walkman",
                        info: "Sony, 1979",
                    },
                    {
                        title: "MTV",
                        info: "Primera emisión en 1981",
                    },
                ],
                keywords: [
                    "Piratería",
                    "Resistencia",
                    "Escucha privada en espacios públicos",
                    "Soundtrack personal",
                ]
            },
            {
                title: "Lo digital",
                sections: [
                    {
                        title: "Disco compacto",
                        info: "Sony y Phillips, 1982",
                    },
                    {
                        title: "Discman",
                        info: "Sony, 1984",
                    },
                    {
                        title: "MP3 y descargas P2P",
                        info: "Década del 90 y principios del 2000",
                    },
                    {
                        title: "Ipod",
                        info: "Steve Jobs, 2001",
                    },
                ],
                keywords: [
                    "Mayor libertad creativa",
                    "Mayor calidad",
                    "Accesibilidad",
                    "Personalización",
                    "Ubicuidad",
                ]
            },
            {
                title: "El streaming y Spotify",
                sections: [
                    {
                        title: "Antecedentes",
                        info: "Transmisión on-demand, piratería y ética de libre acceso",
                    },
                    {
                        title: "Streaming",
                        info: "Transmisión de contenido bajo demanda a través de internet",
                    },
                    {
                        title: "Spotify",
                        info: "Daniel Ek y Martin Lorentzon, 2008. A día de hoy es la plataforma de streaming más popular (551 millones de usuarios y 220 millones de suscriptores en más de 180 países)",
                    },
                ],
                keywords: [
                    "De la posesión al acceso",
                    "Modelo freemium",
                    "Algoritmos",
                    "Personalización",
                    "Sistemas de recomendación",
                    "Ganancias anuales en crecimiento",
                    "Legalización y Monetización de prácticas ya existentes",
                    "Playlists",
                    "Opacidad (caja negra)",
                    "Extracción de datos",
                ]
            }
        ],
    },
    en: {
        formats: [
            {
                title: "Early Formats",
                sections: [
                    {
                        title: "Phonautograph",
                        info: "Édouard-Léon Scott, 1857",
                    },
                    {
                        title: "Phonograph",
                        info: "Thomas Edison, 1877",
                    },
                    {
                        title: "Graphophone",
                        info: "Laboratorio Volta - Alexander Graham Bell, 1886",
                    },
                ],
                keywords: [
                    "Improvements based on other technologies",
                    "Beginning of the music industry",
                    "Entertainment",
                    "Claims and resistance",
                    "Adaptations to format",
                ]
            },
            {
                title: "Electricity and Vinyl",
                sections: [
                    {
                        title: "Electrical Recording",
                        info: "Begins in 1920 and is improved by AT&T during the decade",
                    },
                    {
                        title: "Grammophonmusik y Muzak",
                        info: "",
                    },
                    {
                        title: "Records",
                        info: "Shellac records (5 minutes) / Vinyl records (25 minutes)",
                    },
                    {
                        title: "Competition",
                        info: "Between radio and vinyl (1940s)",
                    },
                    {
                        title: "Improvements",
                        info: "Recording quality and microphones",
                    },
                    {
                        title: "DJs and Top 40",
                        info: "Both appear when sponsors start supporting television in the 50s",
                    },
                ],
                keywords: [
                    ""
                ]
            },
            {
                title: "Electromagnetic and the Cassette",
                sections: [
                    {
                        title: "Cassette",
                        info: "Philips, 1963",
                    },
                    {
                        title: "Walkman",
                        info: "Sony, 1979",
                    },
                    {
                        title: "MTV",
                        info: "First broadcasted on 1981",
                    },
                ],
                keywords: [
                    "Piracy",
                    "Resistance",
                    "Private listening in public spaces",
                    "Personal soundtrack",
                ]
            },
            {
                title: "The Digital",
                sections: [
                    {
                        title: "Compact Disc",
                        info: "Sony and Phillips, 1982",
                    },
                    {
                        title: "Discman",
                        info: "Sony, 1984",
                    },
                    {
                        title: "MP3 and P2P downloads",
                        info: "90s and early 00s",
                    },
                    {
                        title: "Ipod",
                        info: "Steve Jobs, 2001",
                    },
                ],
                keywords: [
                    "More creative freedom",
                    "Greater quality",
                    "Accessibility",
                    "Customization",
                    "Ubiquity",
                ]
            },
            {
                title: "Streaming and Spotify",
                sections: [
                    {
                        title: "Background",
                        info: "Muzak, piracy and open access ethics",
                    },
                    {
                        title: "Streaming",
                        info: "On-demand content streaming through the Internet",
                    },
                    {
                        title: "Spotify",
                        info: "Created by Daniel Ek and Martin Lorentzon in 2008. Most popular streaming platform to date (551 million users and 220 million subscribers in over 180 countries)",
                    },
                ],
                keywords: [
                    "From ownership to access",
                    "Freemium model",
                    "Algorithms",
                    "Customization",
                    "Recommendation systems",
                    "Revenue on the rise",
                    "Legalization and monetization of already existing practices",
                    "Playlists",
                    "Opacity (black box)",
                    "Data mining",
                ]
            }
        ],
    }
}