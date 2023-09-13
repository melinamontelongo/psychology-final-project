interface FormatsDictionaryEntry {
    formats: {
        title: string,
        sections: {
            title: string,
            info: string[],
            images: string[],
        }[],
        keywords: string[],
    }[],
}
const formatImages = {
    earlyFormats: {
        phonautograph: [
            "/images/formats/early/phonautograph/phonautograph2.png",
            "/images/formats/early/phonautograph/phonautograph1.jpg",
            "/images/formats/early/phonautograph/phonautograph4.png",
            "/images/formats/early/phonautograph/phonautograph3.jpg",
        ],
        phonograph: [
            "images/formats/early/phonograph/phonograph2.jpg",
            "images/formats/early/phonograph/phonograph1.jpg",
            "images/formats/early/phonograph/phonograph3.png",
            "images/formats/early/phonograph/phonograph7.jpg",
            "images/formats/early/phonograph/phonograph8.jpg",
            "images/formats/early/phonograph/phonograph9.jpg",
            "images/formats/early/phonograph/phonograph6.jpg",
            "images/formats/early/phonograph/phonograph4.jpg",
            "images/formats/early/phonograph/phonograph5.jpg",

        ],
        graphophone: [
            "images/formats/early/graphophone/graphophone.jpg",
            "images/formats/early/graphophone/graphophone4.jpg",
            "images/formats/early/graphophone/graphophone2.jpg",
            "images/formats/early/graphophone/graphophone3.jpg",
            "images/formats/early/graphophone/graphophone5.jpg",
        ],
        gramophone: [
            "images/formats/early/gramophone/gramophone1.jpg",
            "images/formats/early/gramophone/gramophone2.jpg",
            "images/formats/early/gramophone/gramophone5.jpg",
            "images/formats/early/gramophone/gramophone3.jpg",
            "images/formats/early/gramophone/gramophone6.jpg",
            "images/formats/early/gramophone/gramophone4.jpg",
            "images/formats/early/gramophone/gramophone7.jpg",
            "images/formats/early/gramophone/gramophone8.jpg",
            "images/formats/early/gramophone/gramophone9.jpg",
        ],
    },
    electricity: {
        electric: [
            "/images/formats/electricity/electric/electric1.jpg",
            "/images/formats/electricity/electric/electric2.jpg",
            "/images/formats/electricity/electric/electric3.jpg",
            "/images/formats/electricity/electric/electric4.jpg",
            "/images/formats/electricity/electric/electric5.jpg",
            "/images/formats/electricity/electric/electric6.jpg",
            "/images/formats/electricity/electric/electric9.png",
            "/images/formats/electricity/electric/electric7.jpg",
            "/images/formats/electricity/electric/electric8.jpg",
            "/images/formats/electricity/electric/electric10.jpg",
        ],
        discs: [
            "/images/formats/electricity/discs/disc1.png",
            "/images/formats/electricity/discs/disc2.jpg",
            "/images/formats/electricity/discs/disc3.jpg",
            "/images/formats/electricity/discs/disc4.jpg",
        ],
        djs40: [
            "/images/formats/electricity/djs40/djs401.jpg",
            "/images/formats/electricity/djs40/djs402.jpg",
            "/images/formats/electricity/djs40/djs403.jpg",
            "/images/formats/electricity/djs40/djs404.png",
            "/images/formats/electricity/djs40/djs405.jpg",
            "/images/formats/electricity/djs40/djs406.jpg",
            "/images/formats/electricity/djs40/djs407.jpg",
        ],
    },
    electromagnetic: {
        cassette: [
            "images/formats/electromagnetic/cassette/cassette1.jpg",
            "images/formats/electromagnetic/cassette/cassette2.jpg",
            "images/formats/electromagnetic/cassette/cassette3.jpg",
            "images/formats/electromagnetic/cassette/cassette4.jpg",
            "images/formats/electromagnetic/cassette/cassette5.jpg",
            "images/formats/electromagnetic/cassette/cassette6.jpg",
            "images/formats/electromagnetic/cassette/cassette7.jpg",
            "images/formats/electromagnetic/cassette/cassette8.jpg",
            "images/formats/electromagnetic/cassette/cassette9.jpg",
            "images/formats/electromagnetic/cassette/cassette10.jpg",
            "images/formats/electromagnetic/cassette/cassette11.jpg",
            "images/formats/electromagnetic/cassette/cassette12.jpg",
        ],
        walkman: [
            "images/formats/electromagnetic/walkman/walkman1.jpg",
            "images/formats/electromagnetic/walkman/walkman5.jpg",
            "images/formats/electromagnetic/walkman/walkman2.jpg",
            "images/formats/electromagnetic/walkman/walkman3.jpg",
            "images/formats/electromagnetic/walkman/walkman4.jpg",
            "images/formats/electromagnetic/walkman/walkman6.jpg",
            "images/formats/electromagnetic/walkman/walkman10.jpg",
            "images/formats/electromagnetic/walkman/walkman9.jpg",
            "images/formats/electromagnetic/walkman/walkman7.jpg",
            "images/formats/electromagnetic/walkman/walkman8.jpg",
        ],
        mtv: [
            "images/formats/electromagnetic/mtv/mtv1.jpg",
            "images/formats/electromagnetic/mtv/mtv2.jpg",
            "images/formats/electromagnetic/mtv/mtv3.jpg",
            "images/formats/electromagnetic/mtv/mtv4.jpg",
            "images/formats/electromagnetic/mtv/mtv6.jpg",
            "images/formats/electromagnetic/mtv/mtv5.jpg",
        ]
    },
    digital: {
        cd: [
            /* "images/formats/digital/cd/cd6.jpg", */
            "images/formats/digital/cd/cd1.jpg",
            "images/formats/digital/cd/cd2.jpg",
            "images/formats/digital/cd/cd3.jpg",
            "images/formats/digital/cd/cd4.jpg",
            "images/formats/digital/cd/cd5.jpg",
        ],
        discman: [
            "images/formats/digital/discman/discman1.jpg",
            "images/formats/digital/discman/discman2.jpg",
            "images/formats/digital/discman/discman3.jpg",
            "images/formats/digital/discman/discman4.jpg",
        ],
        mp3p2p: [
            "images/formats/digital/mp3p2p/mp3p2p1.jpg",
            "images/formats/digital/mp3p2p/mp3p2p2.jpg",
            "images/formats/digital/mp3p2p/mp3p2p3.jpg",
            "images/formats/digital/mp3p2p/mp3p2p4.jpg",
        ],
        ipod: [
            "images/formats/digital/ipod/ipod1.jpg",
            "images/formats/digital/ipod/ipod2.jpg",
            "images/formats/digital/ipod/ipod3.jpg",
            "images/formats/digital/ipod/ipod4.jpg",
            "images/formats/digital/ipod/ipod5.jpg",
        ]
    },
    streaming: {
        streaming: [
            "images/formats/streaming/streaming/streaming1.jpg",
            "images/formats/streaming/streaming/streaming2.jpg",
            "images/formats/streaming/streaming/streaming3.jpg",
            "images/formats/streaming/streaming/streaming4.jpg",
            "images/formats/streaming/streaming/streaming5.jpg",
            "images/formats/streaming/streaming/streaming6.jpg",
            "images/formats/streaming/streaming/streaming7.jpg",
        ],
        spotify: [
            "images/formats/streaming/spotify/spotify1.jpg",
            "images/formats/streaming/spotify/spotify2.jpg",
            "images/formats/streaming/spotify/spotify3.jpg",
            "images/formats/streaming/spotify/spotify4.jpg",
            "images/formats/streaming/spotify/spotify5.jpg",
            "images/formats/streaming/spotify/spotify6.jpg",
            "images/formats/streaming/spotify/spotify9.jpg",
            "images/formats/streaming/spotify/spotify7.jpg",
            "images/formats/streaming/spotify/spotify8.jpg",
        ]
    }

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
                        images: formatImages.earlyFormats.phonautograph,
                    },
                    {
                        title: "Fonógrafo",
                        info: [
                            "Thomas Edison, 1877.",
                            "Surge a partir de su trabajo en la mejora del telégrafo y el teléfono.",
                            "Primer aparato en grabar y reproducir sonido.",
                            "Los primeros utilizaban cilindros envueltos en papel de aluminio.",
                            "Inicialmente no tuvo éxito, Edison lo abandona pero Alexander Graham Bell lo mejora.",
                            "Diez años después lo retoma aplicando mejoras tales como el uso de cilindros de cera.",
                            "Se instala el primer antecedente de las rocolas.",
                            "En 1913 se comienza a producir el fonógrafo de disco.",
                        ],
                        images: formatImages.earlyFormats.phonograph,
                    },
                    {
                        title: "Grafófono",
                        info: [
                            "Laboratorio Volta - Alexander Graham Bell, 1886.",
                            "Surge de múltiples pruebas con cilindros, discos y fonógrafos.",
                            "Utiliza cilindros de cera.",
                            "Se invita a Edison a colaborar pero éste rechaza.",
                            "El laboratorio evoluciona indirectamente hacia el nacimiento de Columbia Records."
                        ],
                        images: formatImages.earlyFormats.graphophone,
                    },
                    /*                     {
                                            title: "Cilindro",
                                            info: [
                                                "Principal soporte de los primeros formatos.",
                                                "Los primeros estaban envueltos en papel de aluminio.",
                                                "De las pruebas en el Laboratorio Volta surgen los cilindros de cera.",
                                                "Duración de entre 2 y 4 minutos, bajo sonido de reproducción y reducida gama sonora."
                                            ],
                                            images: ["/cylinder.jpg"],
                                        }, */
                    {
                        title: "Gramófono",
                        info: [
                            "Émile Berliner, 1887.",
                            "Utilizaba un disco en vez de un cilindro.",
                            "Los discos eran más baratos y de mayor duración.",
                            "De esta invención surge la Victor Talking Machine Company.",
                            "En 1913 Edison comienza a producir el fonógrafo de disco como competencia.",
                        ],
                        images: formatImages.earlyFormats.gramophone,
                    },
                ],
                keywords: [
                    "Evolución",
                    "Industria musical",
                    "Entretenimiento",
                    "Reivindicación y resistencia",
                    "Adaptaciones al medio",
                ],
            },
            {
                title: "La electricidad y el vinilo",
                sections: [
                    {
                        title: "Grabación eléctrica",
                        info: [
                            "Guest - Merriman, 1920.",
                            "Hasta entonces la grabación y reproducción eran acústicas.",
                            "Mejorada por Western Electric, subsidiaria de American Telegraph & Telephone Company (AT&T).",
                            "En 1925 salen al mercado las primeras grabaciones eléctricas.",
                            "Las ventas caen debido a la popularidad de la radio.",
                            "Las principales compañías cambian de rumbo.",
                        ],
                        images: formatImages.electricity.electric,
                    },
                    {
                        title: "Discos",
                        info: [
                            "Los discos de goma laca surgen a partir de Berliner y tenían una duración de 5 minutos.",
                            "A finales de los años 40 aparecen los discos de vinilo LP que podían contener hasta 25 minutos por lado.",
                            "Estos últimos surgen como alternativa ante la escasez de resina a causa de la guerra.",
                            "Se convierten en estándar a principios de los años 50."
                        ],
                        images: formatImages.electricity.discs,
                    },
                    {
                        title: "DJs y Top 40",
                        info: [
                            "Figuras que aparecen cuando los sponsors abandonan la radio en favor de la televisión.",
                            "La radio se vuelca hacia la música, especialmente rythm and blues y rock and roll.",
                            "Inspirados por el éxito de las rocolas, se comienza a pasar una selección de 40 discos por semana que se repetirían hasta unas 30 o 40 veces por día.",
                            "Esto impulsa la venta de discos y los mecanismos de compra por correo a través de suscripciones.",
                        ],
                        images: formatImages.electricity.djs40,
                    },
                ],
                keywords: [
                    "Álbumes conceptuales",
                    "Innovación",
                    "Experimentalismo",
                    "Muzak",
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
                            "Ford Motors incluye reproductores de Stereo 8 en varios de sus modelos de 1966.",
                            "En 1970 mejora su calidad con Dolby Noise Reduction System.",
                            "Comienzan a salir más reproductores y grabadores al mercado.",
                        ],
                        images: formatImages.electromagnetic.cassette,
                    },
                    {
                        title: "Walkman",
                        info: [
                            "Sony, 1979.",
                            "Dispositivo portátil de reproducción musical que afianzaría al cassette.",
                            "Las ventas de cassette superan a las del disco por primera vez.",
                            "Permite una escucha privada en espacios públicos.",
                        ],
                        images: formatImages.electromagnetic.walkman,
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
                        ],
                        images: formatImages.electromagnetic.mtv,
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
                            "Ofrece 74 minutos de duración con amplia frecuencia y sin ruido.",
                            "Brinda una experiencia sonora superior de manera universal.",
                            "Su aceptación no fue tan rápida, excepto en nichos como el de la música clásica."
                        ],
                        images: formatImages.digital.cd,
                    },
                    {
                        title: "Discman",
                        info: [
                            "Sony, 1984.",
                            "Reproductor de CD portátil.",
                            "Facilitó la inserción y aceptación del CD, que pasa a dominar en ventas.",
                            "Se comienza a desdibujar la presentación visual de la música.",
                            "Entra en decadencia luego del 2000.",
                        ],
                        images: formatImages.digital.discman,
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
                        ],
                        images: formatImages.digital.mp3p2p,
                    },
                    {
                        title: "iPod",
                        info: [
                            "Steve Jobs, 2001.",
                            "Reproductor MP3 portátil con una impronta legalizadora.",
                            "Con una memoria de 5GB, podría almacenar hasta 1000 canciones.",
                            "A través de iTunes Store, las compañías discográficas permitieron que sus catálogos estuvieran disponibles online.",
                            "Los precios bajos complicaron el panorama para los artistas.",
                            "La piratería aún persistía.",
                        ],
                        images: formatImages.digital.ipod,
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
                        title: "Streaming",
                        info: [
                            "Transmisión de contenido bajo demanda a través de internet.",
                            "Formato que presenta el mayor crecimiento y ganancias anuales.",
                            "Los formatos físicos siguen vigentes y las descargas digitales han disminuído.",
                        ],
                        images: formatImages.streaming.streaming,
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
                        ],
                        images: formatImages.streaming.spotify,
                    },
                ],
                keywords: [
                    "De la posesión al acceso",
                    "Legalización y monetización",
                    "Listas de reproducción",
                    "Neo-muzak",
                    "Capitalismo",
                    "Estados de ánimo",
                    "Algoritmos",
                    "Opacidad",
                    "Datos",
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
                            images: formatImages.earlyFormats.phonautograph,
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
                            images: formatImages.earlyFormats.phonograph,
                        },
                        {
                            title: "Graphophone",
                            info: [
                                "Volta Laboratory - Alexander Graham Bell, 1886.",
                                "It is a result of multiple tests with cylinders, records and phonographs.",
                                "Edison is invited to collaborate, but declines.",
                                "The laboratory indirectly evolves towards the birth of Columbia Records."
                            ],
                            images: formatImages.earlyFormats.graphophone,
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
                            images: formatImages.earlyFormats.gramophone,
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
                                "Guest - Merriman, 1920.",
                                "Until then, recording and playback were mechanical.",
                                "It was improved by Western Electric, an American Telegraph & Telephone Company subsidiary.",
                                "The first electric recordings were released in 1925.",
                                "Sales decreased due to radio popularity.",
                                "Leading companies change direction",
                            ],
                            images: formatImages.electricity.electric,
                        },
                        {
                            title: "Discs",
                            info: [
                                "Shellac records emerged from Berliner, spun at 78rpm and had a duration of 5 minutes.",
                                "The late 1940s saw the appearance of vinyl LP records that spun at 33rpm and could contain up to 25 minutes per side.",
                                "The latter emerged as an alternative to the shortage of resin due to war.",
                                "They become standard in the early 1950s."
                            ],
                            images: formatImages.electricity.discs,
                        },
                        {
                            title: "DJs and Top 40",
                            info: [
                                "Figures that appear when sponsors abandon radio in favor of television.",
                                "Radio turns to music, especially rock and roll.",
                                "Inspired by the jukeboxes' success, a selection of 40 records per week began to be played and repeated up to 30 or 40 times per day.",
                                "This drives record sales and mail orders through subscriptions.",
                            ],
                            images: formatImages.electricity.djs40,
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
                                "Stereo 8 is included by Ford Motors on their 1966 models.",
                                "Its quality improved in 1970 with the Dolby Noise Reduction System.",
                                "More players and recorders appeared.",
                            ],
                            images: formatImages.electromagnetic.cassette,
                        },
                        {
                            title: "Walkman",
                            info: [
                                "Sony, 1979.",
                                "Portable cassette player with headphones.",
                                "Cassettes sales surpass discs sales for the first time.",
                                "Enables private listening in public spaces.",
                            ],
                            images: formatImages.electromagnetic.walkman,
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
                            ],
                            images: formatImages.electromagnetic.mtv,
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
                                "Offers 74 minutes of broader frequency and noiseless music.",
                                "Provides a universally superior sound experience.",
                                "Its acceptance was not as fast, except in niches such as that of classical music."
                            ],
                            images: formatImages.digital.cd,
                        },
                        {
                            title: "Discman",
                            info: [
                                "Sony, 1984.",
                                "Portable CD player.",
                                "It facilitated the insertion and acceptance of the CD, which came to dominate in sales.",
                                "The visual presentation of music begins to blur.",
                                "It went into decline after 2000.",
                            ],
                            images: formatImages.digital.discman,
                        },
                        {
                            title: "MP3 and peer-to-peer downloads",
                            info: [
                                "MP3 is an audio compression technique that emerged in 1993.",
                                "The result is of good quality despite the loss of data.",
                                "In 1997 Rio appeared, the first successful portable MP3 player.",
                                "Peer-to-peer downloads are facilitated and services such as Napster appear.",
                                "It revolutionizes the way music is acquired and enjoyed.",
                                "The music industry is slow to embrace this trend.",
                            ],
                            images: formatImages.digital.mp3p2p,
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
                            ],
                            images: formatImages.digital.ipod,
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
                            title: "Streaming",
                            info: [
                                "On-demand content transmission over the Internet.",
                                "Format with the highest growth and annual earnings.",
                                "Physical formats are still in force and digital downloads have declined.",

                            ],
                            images: formatImages.streaming.streaming,
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
                            ],
                            images: formatImages.streaming.spotify,
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