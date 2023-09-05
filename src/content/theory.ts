interface TheoryDictionaryEntry {
    theory: {
        title: string,
        sections: {
            title: string,
            list: string[],
            /* subtitle: string, */
            keywords: string[],
        }[],
    }[],
}

export const TheoryDictionary: Record<string, TheoryDictionaryEntry> = {
    es: {
        theory: [
            {
                title: "Algoritmización y capitalismo",
                sections: [
                    {
                        title: "Algoritmos",
                        list: [
                            "Conjunto de instrucciones (entrada) que producen un resultado (salida)",
                            "Son utilizados por los sistemas de recomendación y personalización",
                            "Los estudios críticos sobre algoritmos los problematizan",
                        ],
                        keywords: [
                            "Complejidad",
                            "Secreto corporativo",
                            "Cultura algorítmica",
                            "Gubernamentalidad algorítmica",
                            "Cosecha de datos, correlaciones y perfilización",
                            "Burbuja de filtros",
                            "¿Neutralidad?",
                            "Redes y procesos",
                            "Producidos en relación",
                            "Sociedad de cálculo",
                            "Ruta a seguir",
                            "¡Tienen vida!",
                            "Vigilancia distribuida"
                        ]
                    },
                    {
                        title: "Los algoritmos en la música",
                        list: [
                            "Predicen el éxito que podría tener una canción en base a éxitos pasados",
                            "Creación de música con Inteligencia Artificial",
                            "Sistemas de recomendación y predicción",
                            "Extracción de métricas y metadatos que terminan determinando el éxito"
                        ],
                        keywords: [
                            "Homogeneización",
                            "Altamente efectivos",
                            "¿El cálculo sustituye a la creatividad?",
                            "¿Producción musical o estadística?",
                            "Reflejo del sistema socio-económico"
                        ]
                    },
                    {
                        title: "Capitalismo",
                        list: [
                            "Los algoritmos y los datos que manejan son indispensables para el modelo económico capitalista",
                            "Los intereses del capitalismo no están tan claros en la era del streaming",
                            "Se presenta este modelo como horizontal y beneficioso para los artistas y usuarios",
                            "No se visibiliza el rol activo y mediador de los algoritmos",
                            "Vida social como laboratorio para extraer hipótesis y realizar experimentos",
                            "Usuario como una masa de datos que se fragmentan y vuelven a él en forma de recomendaciones"
                        ],
                        keywords: [
                            "Caja negra digital",
                            "Cajanegrización",
                            "Lo dividual",
                            "Capitalismo de plataformas",
                        ]
                    }
                ],
            },
            {
                title: "La construcción social de la tecnología",
                sections: [
                    {
                        title: "SCOT (Social construction of technology)",
                        list: [
                            "Surge a principios de 1980 en oposición al determinismo tecnológico",
                            "Se centra en los procesos sociales que tienen que ver en el éxito o fracaso de una invención",
                            "Estudio sobre el desarrollo de la bicicleta (Bijker y Pinch, 1984)"
                        ],
                        keywords: [
                            "Flexibilidad interpretativa",
                            "Multiplicidad de interpretaciones",
                            "Grupos sociales relevantes",
                            "Construcción social de significados",
                            "Clausura y estabilización"
                        ]
                    },
                    {
                        title: "En la música",
                        list: [
                            "Los soportes y dispositivos no surgen de forma lineal ni tienen un orígen unívoco",
                            "La funcionalidad de los aparatos y soportes se construye socialmente a partir de los usos",
                            "Estudio sobre los primeros sintetizadores (Pinch y Trocco, 1998)",
                        ],
                        keywords: [
                            "Orígenes múltiples",
                            "Problemas y soluciones",
                            "Éxito",
                            "Fracaso",
                            "Estabilización",
                            "Evolución",
                        ]
                    },
                    {
                        title: "Críticas",
                        list: [
                            "Provee explicaciones pero no soluciones ni tiene una postura clara",
                            "No aclara la situación de cada grupo social relevante",
                            "Peligro de omitir a grupos que por diversos motivos no puedan tener acceso a cierto avance",
                            "Su concepto de clausura es problemático",
                            "Es antropocentrista, ignorando otro tipo de relaciones"
                        ],
                        keywords: [
                            "Postura acrítica",
                            "Se ignora el poder",
                            "Enfoque simplista",
                            "Explicaciones insuficientes",
                        ]
                    },
                ]
            },
            {
                title: "Los objetos digitales",
                sections: [
                    {
                        title: "El objeto digital musical",
                        list: [
                            "La música deja de estar tan vinculada con su presentación visual",
                            "El proceso de reproducción se vuelve intocable e invisible",
                        ],
                        keywords: [
                            "Desmaterialización",
                            "Liquidez",
                            "Intocable",
                            "Invisible"
                        ]
                    },
                    {
                        title: "Ontología del objeto digital",
                        list: [
                            "Es necesario ir más allá de los tecnicismos",
                            "No puede ser solamente abordado a partir de las concepciones de objeto natural (se captan con los sentidos) y objeto técnico (su existencia se vale de su relación con el medio asociado)",
                            "El objeto digital es diferente a la vez que comparte características con ambos",
                            "Solamente tiene significado dentro de una red en específico",
                            "Su sentido se da a través de cadenas de interpretaciones y meta-medios",
                            "El medio es indisociable de su modo de existencia",
                        ],
                        keywords: [
                            "Naturaleza relacional",
                            "Inmanencia",
                            "Identidad líquida",
                            "Redes",
                        ]
                    },
                    {
                        title: "Los Non-Fungible Tokens",
                        list: [
                            "Los NFTs son la representación digital de un activo real a través de cadenas de bloques descentralizadas y compartidas",
                            "Son un objeto digital y relacional pero con una identidad fija",
                            "No se pueden dividir, intercambiar, sustituir o falsificar",
                            "Adquirir un NFT es obtener el derecho al mismo",
                            "Aunque no fueron pensados para implementarse en el arte, es aquí donde puede significar un retorno a lo único e irrepetible",
                            "Spotify permitió a los artistas promover NFTs en sus perfiles en 2022 como una prueba",
                            "Algunos artistas han logrado cifras millonarias vendiendo ediciones limitadas de sus trabajos, entradas a conciertos o mercadería especial sin la industria de por medio"
                        ],
                        keywords: [
                            "Resignificación",
                            "Horizontalidad",
                            "Incertidumbre",
                        ]
                    },
                ],
            },
        ],
    },
    en: {
        theory: [
            {
                title: "Algorithmization and Capitalism",
                sections: [
                    {
                        title: "Algorithms",
                        list: [
                            "Set of instructions (input) that produce a result (output)",
                            "Used by recommendation and personalization systems",
                            "Problematized by Critical Algorithm Studies",
                        ],
                        keywords: [
                            "Complexity",
                            "Corporate secrecy",
                            "Algorithmic culture",
                            "Algorithmic governmentality",
                            "Data mining, correlations and profiling",
                            "Filter bubble",
                            "¿Neutrality?",
                            "Networks and processes",
                            "Produced in relations",
                            "Calculation society",
                            "Routes to follow",
                            "¡They're alive!",
                            "Distributed surveillance",
                        ]
                    },
                    {
                        title: "Algorithms in music",
                        list: [
                            "Success predictions based on successful songs in the past",
                            "Music created with Artificial Intelligence",
                            "Recommendation and prediction systems",
                            "Metrics and metadata extraction that determine success"
                        ],
                        keywords: [
                            "Homogenization",
                            "Highly effective",
                            "Calculus to replace creativity?",
                            "Music production or statistics?",
                            "A reflection of the socio-economic system"
                        ]
                    },
                    {
                        title: "Capitalism",
                        list: [
                            "Algorithms and the data they handle are indispensable to capitalist economy",
                            "Capitalism's interests are not so clear in the streaming era",
                            "This model is presented as horizontal and beneficial for artists and users",
                            "The active and mediating role of algorithms is not visible",
                            "Social life as a laboratory for extracting hypotheses and conducting experiments through data",
                            "User as a fragmented mass of data that later returns in the form of recommendations"
                        ],
                        keywords: [
                            "Digital black box",
                            "Blackboxing",
                            "The dividual",
                            "Platform capitalism",
                        ]
                    }
                ],
            },
            {
                title: "Social Construction of Technology",
                sections: [
                    {
                        title: "SCOT",
                        list: [
                            "Emerges in the early 80s opposition to technological determinism",
                            "Focuses on the social processes involved in the success or failure of an invention",
                            "Study on bicycle development (Bijker and Pinch, 1984)"
                        ],
                        keywords: [
                            "Interpretive flexibility",
                            "Multiple interpretations of an artifact",
                            "Relevant social groups",
                            "Social constructions of meanings",
                            "Closure and stabilization"
                        ]
                    },
                    {
                        title: "In Music",
                        list: [
                            "Formats and devices do not arise in linear fashion, nor do they have univocal origins",
                            "The functionality of devices and formats is socially constructed based on how they're used",
                            "Study on early synthesizers (Pinch and Trocco, 1998)",
                        ],
                        keywords: [
                            "Multiple origins",
                            "Problems and solutions",
                            "Success",
                            "Failure",
                            "Stabilization",
                            "Evolution",
                        ]
                    },
                    {
                        title: "Criticism",
                        list: [
                            "Provides explanations but no solutions nor clear stance",
                            "It does not clarify the situation of each relevant social group",
                            "Danger of omitting groups that for various reasons may not have access to a certain device",
                            "A problematic concept of closure",
                            "It is anthropocentric, ignoring other types of relationships"
                        ],
                        keywords: [
                            "Non-critical stance",
                            "Ignores power dynamics",
                            "Simplistic approach",
                            "Insufficient explanations",
                        ]
                    },
                ]
            },
            {
                title: "Digital Objects",
                sections: [
                    {
                        title: "The Digital Musical Object",
                        list: [
                            "Music is no longer as closely linked to its visual presentation",
                            "Reproduction process becomes untouchable and invisible",
                        ],
                        keywords: [
                            "Dematerialization",
                            "Liquidity",
                            "Untouchable",
                            "Invisible"
                        ]
                    },
                    {
                        title: "Ontology of the Digital Object",
                        list: [
                            "It is necessary to go beyond technicalities",
                            "It cannot be approached solely based on the conceptions of the natural objects (those perceived with the senses) and the technical objects (those which existence is based on their relationship with the associated environment)",
                            "The digital object characteristics with both while still being different",
                            "It only has meaning within a specific network",
                            "Its meaning is given through chains of interpretations and meta-media.",
                            "The environment is inseparable from its mode of existence",
                        ],
                        keywords: [
                            "Relational nature",
                            "Immanence",
                            "Liquid identity",
                            "Networks",
                        ]
                    },
                    {
                        title: "Non-Fungible Tokens",
                        list: [
                            "NFTs are the digital representation of a real asset through decentralized, shared blockchains",
                            "They are a digital and relational object but with a fixed identity",
                            "Cannot be divided, exchanged, substituted or counterfeited",
                            "Acquiring an NFT is to obtain the right to it",
                            "Although they were not intended to be implemented in art, it is here where it can mean a return to the unique and unrepeatable",
                            "Spotify allowed artists to promote NFTs on their profiles in 2022 as a test run",
                            "Some artists have made millions by selling limited editions of their work, concert tickets or special merchandise without the industry involved"
                        ],
                        keywords: [
                            "Resignification",
                            "Horizontality",
                            "Uncertainty",
                        ]
                    },
                ],
            },
        ],
    }
}