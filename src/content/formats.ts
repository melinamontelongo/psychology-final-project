interface FormatsDictionaryEntry {
    formats: {
        title: string,
        sections: {
            title: string,
            info: string[],
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
                        info: [
                            "Édouard-Léon Scott, 1857.",
                            "Inspirado en la manera en que la fotografía imita al ojo humano.",
                            "Primer aparato en poder grabar sonido.",
                            "Sus grabaciones son patrimonio de la humanidad.",
                        ],
                    },
                    {
                        title: "Fonógrafo",
                        info: [
                            "Thomas Edison, 1877.",
                            "Surge a partir de su trabajo en la mejora del telégrafo y el teléfono.",
                            "Primer aparato en grabar y reproducir sonido.",
                            "Estuvo dirigido al uso en oficinas.",
                            "Inicialmente no tuvo éxito, Edison lo abandona pero Alexander Graham Bell lo mejora.",
                            "Diez años después lo retoma aplicando las mejoras.",
                        ],
                    },
                    {
                        title: "Grafófono",
                        info: [
                            "Laboratorio Volta - Alexander Graham Bell, 1886.",
                            "Surge de múltiples pruebas con cilindros, discos y fonógrafos.",
                            "Se invita a Edison a colaborar pero éste rechaza.",
                            "El laboratorio evoluciona indirectamente hacia el nacimiento de Columbia Records."
                        ],
                    },
                    {
                        title: "Cilindro",
                        info: [
                            "Principal soporte de los primeros formatos.",
                            "Los primeros estaban envueltos en papel de aluminio.",
                            "De las pruebas en el Laboratorio Volta surgen los cilindros de cera.",
                            "Duración de entre 2 y 4 minutos, bajo sonido de reproducción y reducida gama sonora."
                        ]
                    },
                    {
                        title: "Gramófono",
                        info: [
                            "Émile Berliner, 1887.",
                            "Utilizaba un disco en vez de un cilindro.",
                            "Los discos eran más baratos y de mayor duración.",
                            "En 1913 Edison comienza a producir el fonógrafo de disco como competencia.",
                            "Al día de hoy, fonógrafo y gramófono se usan de forma intercambiable."
                        ],
                    },
                ],
                keywords: [
                    "Evolución",
                    "Industria musical",
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
                        info: [
                            "Ingenieros de sonido, 1920.",
                            "Hasta el momento la grabación y reproducción eran mecánicas.",
                            "La primera se realizó con un gramófono y un cilindro de cera, grabado por el accionar de un pequeño motor.",
                            "Es mejorada por la American Telegraph & Telephone Company (AT&T).",
                            "En 1925 salen al mercado las primeras grabaciones eléctricas."
                        ],
                    },
                    {
                        title: "Grammophonmusik",
                        info: [
                            "Corriente musical experimental alemana que se extendió desde los años 20 hasta principios del 30.",
                            "Consideraba al gramófono como un músico más.",
                            "Antecedente de John Cage y su música aleatoria.",
                        ],
                    },
                    {
                        title: "Muzak",
                        info: [
                            "Compañía fundada en 1934 con el objetivo de transmitir música a través de cables.",
                            "Cambió de rumbo debido a la existencia de la radio, dedicándose a la música de ambiente o de mobiliario.",
                            "Dicha música tiene su origen en Erik Satie y tiene como objetivo un valor utilitario."
                        ]
                    },
                    {
                        title: "Discos",
                        info: [
                            "Los discos de goma laca surgen a partir de Berliner, giraban a 78rpm y tenían una duración de 5 minutos.",
                            "A finales de los años 40 aparecen los discos de vinilo LP que giraban a 33rpm y podían contener hasta 25 minutos por lado.",
                            "Estos últimos surgen como alternativa ante la escasez de resina a causa de la guerra.",
                            "Se convierten en estándar a principios de los años 50."
                        ]
                    },
                    {
                        title: "DJs y Top 40",
                        info: [
                            "Figuras que aparecen cuando los sponsors abandonan la radio en favor de la televisión.",
                            "La radio se vuelca hacia la música, especialmente rock and roll.",
                            "Inspirados por el éxito de las rocolas, se comienza a pasar una selección de 40 discos por semana que se repetirían hasta unas 30 o 40 veces por día.",
                            "Esto impulsa la venta de discos y los mecanismos de compra por correo a través de suscripciones.",
                        ],
                    },
                ],
                keywords: [
                    "Álbumes conceptuales",
                    "Innovación",
                    "Experimentalismo",
                    "Competencia",
                ]
            },
            {
                title: "Lo electromagnético y el cassette",
                sections: [
                    {
                        title: "Cassette",
                        info: [
                            "Philips, 1963.",
                            "Reformulación de la cinta magnética ya utilizada en estudios de grabación.",
                            "Apuntaba a usos como la grabación de voz o el dictado.",
                            "Permitía 90 minutos de almacenamiento aunque de baja calidad, ruido y limitado rango.",
                            "Inicialmente no presentó una amenaza al disco.",
                            "En 1970 mejora su calidad con Dolby Noise Reduction System.",
                        ]
                    },
                    {
                        title: "Walkman",
                        info: [
                            "Sony, 1979.",
                            "Dispositivo portátil de reproducción musical que afianzaría al cassette.",
                            "Las ventas de cassette superan a las del disco por primera vez.",
                            "Permite una escucha privada en espacios públicos.",
                        ]
                    },
                    {
                        title: "MTV",
                        info: [
                            "Primera emisión en 1981.",
                            "Canal estadounidense dedicado exclusivamente a la música y su imagen.",
                            "A toda hora se transmitían videoclips presentados por Video Jockeys (VJs).",
                            "Los videoclips se vuelven más cinematográficos.",
                            "El éxito de un artista comenzó a medirse por su aparición (o no) en televisión.",
                            "Línea telefónica donde era posible pedir videoclips a demanda."
                        ]
                    },
                ],
                keywords: [
                    "Portabilidad",
                    "Piratería",
                    "Resistencia",
                    "Soundtrack personal",
                    "Reinvención",
                    "Musicalización de la experiencia",
                    "Universalización",
                ]
            },
            {
                title: "Lo digital",
                sections: [
                    {
                        title: "Disco compacto",
                        info: [
                            "Sony y Phillips, 1982.",
                            "Aparece como forma de recuperar la industria.",
                            "Ofrece hasta 80 minutos de duración con amplia frecuencia y sin ruido.",
                            "Brinda una experiencia sonora superior de manera universal.",
                            "Su aceptación no fue tan rápida, excepto en nichos como el de la música clásica."
                        ]
                    },
                    {
                        title: "Discman",
                        info: [
                            "Sony, 1984.",
                            "Reproductor de CD portátil.",
                            "Facilitó la inserción y aceptación del CD, que pasa a dominar en ventas.",
                            "Se comienza a desdibujar la presentación visual de la música.",
                            "Entra en decadencia luego del 2000.",
                        ]
                    },
                    {
                        title: "MP3 y descargas peer-to-peer",
                        info: [
                            "MP3 es una técnica de compresión de audio que surge en 1993.",
                            "El resultado es de buena calidad a pesar de la pérdida de datos.",
                            "En 1997 aparece Rio, el primer reproductor portátil de MP3 que tuvo éxito.",
                            "Se facilita la distribución entre pares por internet y aparecen servicios como Napster.",
                            "Revoluciona la forma de adquirir y disfrutar la música.",
                            "La industria musical demora en adoptar esta tendencia.",
                        ]
                    },
                    {
                        title: "Ipod",
                        info: [
                            "Steve Jobs, 2001.",
                            "Reproductor MP3 portátil con una impronta legalizadora.",
                            "Con una memoria de 5GB, podría almacenar hasta 1000 canciones.",
                            "A través de iTunes Store, las compañías discográficas permitieron que sus catálogos estuvieran disponibles online.",
                            "Los precios bajos complicaron el panorama para los artistas.",
                            "La piratería aún persistía.",
                        ]
                    },
                ],
                keywords: [
                    "Libertad creativa",
                    "Mayor calidad",
                    "Accesibilidad",
                    "Personalización",
                    "Ubicuidad",
                    "¿El fin del formato físico?",
                    "Música como servicio",
                ]
            },
            {
                title: "El streaming y Spotify",
                sections: [
                    {
                        title: "Antecedentes",
                        info: [
                            "Servicios on-demand.",
                            "Piratería y ética de libre acceso.",

                        ],
                    },
                    {
                        title: "Streaming",
                        info: [
                            "Transmisión de contenido bajo demanda a través de internet.",
                            "Formato que presenta el mayor crecimiento y ganancias anuales.",
                            "Los formatos físicos siguen vigentes y las descargas digitales han disminuído.",

                        ],
                    },
                    {
                        title: "Spotify",
                        info: [
                            "Daniel Ek y Martin Lorentzon, 2008.",
                            "Inspirado en iTunes, Pandora y Napster.",
                            "A día de hoy es la plataforma de streaming más popular", /* (551 millones de usuarios y 220 millones de suscriptores en más de 180 países). */
                            "Cuenta con un enorme catálogo de canciones, podcasts y audiolibros de forma gratuita.", /* más de 100 millones de canciones, 5 millones de podcasts y 350.000 audiolibros */
                            "Modelo freemium que ofrece beneficios a suscriptores.",
                            "Ofrece funciones de red social, personalización y recomendación."
                        ]
                    },
                ],
                keywords: [
                    "De la posesión al acceso",
                    "Modelo freemium",
                    "Legalización y monetización",
                    "Listas de reproducción",
                    "Neo-muzak",
                    "Capitalismo",
                    "Estados de ánimo",
                    "Algoritmos",
                    "Opacidad",
                    "Extracción de datos",
                ]
            }
        ],
    },
    en: {
        formats:
            [
                {
                    title: "Early Formats",
                    sections: [
                        {
                            title: "Phonautograph",
                            info: [
                                "Édouard-Léon Scott, 1857.",
                                "Inspired by the way photography mimics the human eye.",
                                "First device to record sound.",
                                "These recordings are patrimony of all humankind.",
                            ],
                        },
                        {
                            title: "Phonograph",
                            info: [
                                "Thomas Edison, 1877.",
                                "Derives from his work in the improvement of the telegraph and telephone.",
                                "First device to record and play back sound.",
                                "It was intended for office use.",
                                "Initially unsuccessful, Edison abandons it but Alexander Graham Bell improves it.",
                                "Ten years later, he takes it up again applying the improvements.",
                            ],
                        },
                        {
                            title: "Graphophone",
                            info: [
                                "Volta Laboratory - Alexander Graham Bell, 1886.",
                                "It is a result of multiple tests with cylinders, records and phonographs.",
                                "Edison is invited to collaborate, but declines.",
                                "The laboratory indirectly evolves towards the birth of Columbia Records."
                            ],
                        },
                        {
                            title: "Cylinder",
                            info: [
                                "The main recording medium of early devices.",
                                "The first ones were wrapped in aluminum foil.",
                                "Wax cylinders emerge from the Volta Laboratory tests.",
                                "Would play between 2 to 4 minutes with low playback sound and reduced sound range."
                            ]
                        },
                        {
                            title: "Gramophone",
                            info: [
                                "Émile Berliner, 1887.",
                                "It used a disc instead of a cylinder.",
                                "Disks were cheaper and lasted longer.",
                                "Edison announced the production of a disc phonograph in 1913 to compete.",
                                "Nowadays, phonograph and gramophone are used interchangeably."
                            ],
                        },
                    ],
                    keywords: [
                        "Evolution",
                        "Music industry",
                        "Entertainment",
                        "Claim and resistance",
                        "Adaptations",
                    ]
                },
                {
                    title: "Electricity and Vinyl",
                    sections: [
                        {
                            title: "Electric Recording",
                            info: [
                                "Sound Engineers, 1920.",
                                "Until then, recording and playback were mechanical.",
                                "The first one was made with a gramophone and a wax cylinder, recorded by the action of a small motor.",
                                "It is improved by the American Telegraph & Telephone Company (AT&T).",
                                "The first electric recordings were released in 1925."
                            ],
                        },
                        {
                            title: "Grammophonmusik",
                            info: [
                                "German experimental musical movement that extended from the 1920s to the early 1930s.",
                                "They considered the gramophone as just another musician.",
                                "Antecedent of John Cage and his aleatoric music.",
                            ],
                        },
                        {
                            title: "Muzak",
                            info: [
                                "Company founded in 1934 with the objective of transmitting music through cables.",
                                "They changed direction due to the existence of radio, turning to ambient or furniture music.",
                                "This music has its origins in Erik Satie and has a utilitarian value."
                            ]
                        },
                        {
                            title: "Discs",
                            info: [
                                "Shellac records emerged from Berliner, spun at 78rpm and had a duration of 5 minutes.",
                                "The late 1940s saw the appearance of vinyl LP records that spun at 33rpm and could contain up to 25 minutes per side.",
                                "The latter emerged as an alternative to the shortage of resin due to war.",
                                "They become standard in the early 1950s."
                            ]
                        },
                        {
                            title: "DJs and Top 40",
                            info: [
                                "Figures that appear when sponsors abandon radio in favor of television.",
                                "Radio turns to music, especially rock and roll.",
                                "Inspired by the jukeboxes' success, a selection of 40 records per week began to be played and repeated up to 30 or 40 times per day.",
                                "This drives record sales and mail orders through subscriptions.",
                            ],
                        },
                    ],
                    keywords: [
                        "Concept albums",
                        "Innovation",
                        "Experimentalism",
                        "Competition",
                    ]
                },
                {
                    title: "Electromagnetic and the Cassette",
                    sections: [
                        {
                            title: "Cassette",
                            info: [
                                "Philips, 1963.",
                                "Reformulation of the magnetic tape already used in recording studios.",
                                "It was aimed to voice recording or dictation.",
                                "90 minutes of storage although of low quality, with noise and limited range.",
                                "Not a threat to discs at first.",
                                "Its quality improved in 1970 with the Dolby Noise Reduction System.",
                            ]
                        },
                        {
                            title: "Walkman",
                            info: [
                                "Sony, 1979.",
                                "Portable cassette player with headphones.",
                                "Cassettes sales surpass discs sales for the first time.",
                                "Enables private listening in public spaces.",
                            ]
                        },
                        {
                            title: "MTV",
                            info: [
                                "First broadcast in 1981.",
                                "American channel exclusively dedicated to music and its image.",
                                "Music videos presented by Video Jockeys (VJs) were broadcasted around the clock.",
                                "Video clips became more cinematic.",
                                "The success of an artist began to be measured by whether they appeared on television.",
                                "It was possible to order video clips on demand through a telephone line."
                            ]
                        },
                    ],
                    keywords: [
                        "Portability",
                        "Piracy",
                        "Resistance",
                        "Personal soundtrack",
                        "Reinvention",
                        "Experience musicalization",
                        "Universalization",
                    ]
                },
                {
                    title: "The Digital",
                    sections: [
                        {
                            title: "Compact Disc",
                            info: [
                                "Sony and Phillips, 1982.",
                                "Developed as a way to recover the industry.",
                                "Offers up to 80 minutes of broader frequency and noiseless music.",
                                "Provides a universally superior sound experience.",
                                "Its acceptance was not as fast, except in niches such as that of classical music."
                            ]
                        },
                        {
                            title: "Discman",
                            info: [
                                "Sony, 1984.",
                                "Portable CD player.",
                                "It facilitated the insertion and acceptance of the CD, which came to dominate in sales.",
                                "The visual presentation of music begins to blur.",
                                "It went into decline after 2000.",
                            ]
                        },
                        {
                            title: "MP3 and peer-to-peer downloads",
                            info: [
                                "MP3 is an audio compression technique that emerged in 1993.",
                                "The result is of good quality despite the loss of data.",
                                "In 1997 appeared Rio, the first successful portable MP3 player.",
                                "Peer-to-peer downloads are facilitated and services such as Napster appear.",
                                "It revolutionizes the way music is acquired and enjoyed.",
                                "The music industry is slow to embrace this trend.",
                            ]
                        },
                        {
                            title: "iPod",
                            info: [
                                "Steve Jobs, 2001.",
                                "Portable MP3 player with a legalizing stance.",
                                "It could store up to 1000 songs with a memory of 5GB.",
                                "Through the iTunes Store record companies made their catalogs available online.",
                                "Low prices complicated the picture for artists.",
                                "Piracy was still persisting.",
                            ]
                        },
                    ],
                    keywords: [
                        "Creative freedom",
                        "Higher quality",
                        "Accessibility",
                        "Customization",
                        "Ubiquity",
                        "The end of the physical format?",
                        "Music as a service",
                    ]
                },
                {
                    title: "Streaming and Spotify",
                    sections: [
                        {
                            title: "Antecedentes",
                            info: [
                                "On-demand services.",
                                "Piracy and open access ethics.",

                            ],
                        },
                        {
                            title: "Streaming",
                            info: [
                                "On-demand content transmission over the Internet.",
                                "Format with the highest growth and annual earnings.",
                                "Physical formats are still in force and digital downloads have declined.",

                            ],
                        },
                        {
                            title: "Spotify",
                            info: [
                                "Daniel Ek and Martin Lorentzon, 2008.",
                                "Inspired by iTunes, Pandora and Napster.",
                                "Most popular streaming platform worldwide.", /* (551 millones de usuarios y 220 millones de suscriptores en más de 180 países). */
                                "It has a huge catalog of songs, podcasts and audiobooks for free.", /* más de 100 millones de canciones, 5 millones de podcasts y 350.000 audiolibros */
                                "Freemium model that offers benefits to subscribers.",
                                "Offers social networking, personalization and recommendation features."
                            ]
                        },
                    ],
                    keywords: [
                        "From ownership to access",
                        "Freemium model",
                        "Legalization and monetization",
                        "Playlists",
                        "Neo-muzak",
                        "Capitalism",
                        "Moods",
                        "Algorithms",
                        "Opacity",
                        "Data mining",
                    ]
                }
            ]
    }
}