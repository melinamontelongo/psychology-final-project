interface TheoryDictionaryEntry {
    theory: {
        title: string,
        sections: {
            title: string,
            list: string[],
            images?: string[],
            keywords: string[],
        }[],
    }[],
}
const theoryImages = {
    algorithmsAndCapitalism: {
        algorithms:
            [
                "/images/theory/algorithmsAndCapitalism/algorithms/algorithms1.jpg",
                "/images/theory/algorithmsAndCapitalism/algorithms/algorithms3.jpg",
                "/images/theory/algorithmsAndCapitalism/algorithms/algorithms4.jpg",
                "/images/theory/algorithmsAndCapitalism/algorithms/algorithms5.jpg",
                "/images/theory/algorithmsAndCapitalism/algorithms/algorithms6.jpg",
                "/images/theory/algorithmsAndCapitalism/algorithms/algorithms7.jpg",
                "/images/theory/algorithmsAndCapitalism/algorithms/algorithms9.jpg",
                "/images/theory/algorithmsAndCapitalism/algorithms/algorithms8.jpg",
                "/images/theory/algorithmsAndCapitalism/algorithms/algorithms10.jpg",
            ],
        inMusic: [
            "/images/theory/algorithmsAndCapitalism/music/music1.jpg",
            "/images/theory/algorithmsAndCapitalism/music/music2.jpg",
            "/images/theory/algorithmsAndCapitalism/music/music3.jpg",
            "/images/theory/algorithmsAndCapitalism/music/music4.jpg",
        ],
        capitalism: [
            "/images/theory/algorithmsAndCapitalism/capitalism/capitalism2.jpg",
            "/images/theory/algorithmsAndCapitalism/algorithms/algorithms11.jpg",
            "/images/theory/algorithmsAndCapitalism/capitalism/capitalism1.jpg",
            "/images/theory/algorithmsAndCapitalism/capitalism/capitalism3.jpg",
            "/images/theory/algorithmsAndCapitalism/capitalism/capitalism4.jpg",
            "/images/theory/algorithmsAndCapitalism/capitalism/capitalism5.jpg",
        ]
    },
    scot: {
        scot: [
            "/images/theory/scot/scot/scot1.jpg",
            "/images/theory/scot/scot/scot2.jpg",
            "/images/theory/scot/scot/scot3.jpg",
            "/images/theory/scot/scot/scot4.jpg",
        ],
        music: [
            "/images/theory/scot/music/music1.jpg",
            "/images/theory/scot/music/music2.jpg",
            "/images/theory/scot/music/music3.jpg",
            "/images/theory/scot/music/music4.jpg",
            "/images/theory/scot/music/music5.jpg",
            "/images/theory/scot/music/music6.jpg",
            "/images/theory/scot/music/music8.jpg",
            "/images/theory/scot/music/music9.jpg",
        ],
    },
    digitalObj: {
        objects: [
            "/images/theory/digital/objects/object1.jpg",
            "/images/theory/digital/objects/object2.jpg",
            "/images/theory/digital/objects/object3.jpg",
            "/images/theory/digital/objects/object4.jpg",
        ],
        music: [
            "/images/theory/digital/music/music1.jpg",
            "/images/theory/digital/music/music2.jpg",
            "/images/theory/digital/music/music5.jpg",
            "/images/theory/digital/music/music6.jpg",
            "/images/theory/digital/music/music7.jpg",
        ]
    }

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
                            "El más antiguo data del 2500 A.C.",
                            "Ada Lovelace escribió el primero para ser ejecutado por una máquina.",
                            "Conjunto de instrucciones (entrada) que producen un resultado (salida).",
                            "Están interconectados con la vida cotidiana.",
                            "Los estudios críticos sobre algoritmos los problematizan.",
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
                        ],
                        images: theoryImages.algorithmsAndCapitalism.algorithms,
                    },
                    {
                        title: "Los algoritmos en la música",
                        list: [
                            "Son utilizados por los sistemas de recomendación y personalización.",
                            "Predicen el éxito que podría tener una canción en base a éxitos pasados.",
                            "Creación de música con Inteligencia Artificial.",
                            "Extracción de métricas y metadatos que terminan determinando el éxito."
                        ],
                        keywords: [
                            "Homogeneización",
                            "Altamente efectivos",
                            "¿El cálculo sustituye a la creatividad?",
                            "¿Producción musical o estadística?",
                            "Reflejo del sistema socio-económico"
                        ],
                        images: theoryImages.algorithmsAndCapitalism.inMusic,
                    },
                    {
                        title: "Capitalismo",
                        list: [
                            "Los algoritmos y los datos que manejan son indispensables para el modelo económico capitalista.",
                            "Los intereses del capitalismo no están tan claros en la era del streaming.",
                            "Se presenta este modelo como horizontal y beneficioso para los artistas y usuarios.",
                            "No se visibiliza el rol activo y mediador de los algoritmos.",
                            "Vida social como laboratorio para extraer hipótesis y realizar experimentos.",
                            "Usuario como una masa de datos que se fragmentan y vuelven a él en forma de recomendaciones."
                        ],
                        keywords: [
                            "Caja negra digital",
                            "Cajanegrización",
                            "Lo dividual",
                            "Capitalismo de plataformas",
                        ],
                        images: theoryImages.algorithmsAndCapitalism.capitalism,
                    }
                ],
            },
            {
                title: "La construcción social de la tecnología",
                sections: [
                    {
                        title: "SCOT (Social construction of technology)",
                        list: [
                            "Bijker, principios de 1980.",
                            "Surge en oposición al determinismo tecnológico.",
                            "Se centra en los procesos sociales que tienen que ver en el éxito o fracaso de una invención.",
                            "Bijker y Pinch exponen estudio sobre el desarrollo de la bicicleta."
                        ],
                        keywords: [
                            "Flexibilidad interpretativa",
                            "Multiplicidad de interpretaciones",
                            "Grupos sociales relevantes",
                            "Construcción social de significados",
                            "Clausura y estabilización"
                        ],
                        images: theoryImages.scot.scot,
                    },
                    {
                        title: "En la música",
                        list: [
                            "Los soportes y dispositivos no surgen de forma lineal ni tienen un orígen unívoco.",
                            "La funcionalidad de los aparatos y soportes se construye socialmente a partir de los usos.",
                            "Pinch y Trocco exponen estudio sobre los primeros sintetizadores en 1998.",
                            "El sintetizador de Moog comienza a ser usado por su teclado, logrando sonidos más convencionales.",
                            "El sintetizador de Buchla, sin teclado, queda en el margen y destinado a sonidos más experimentales.",
                            "Como instrumento refleja la sociedad de la época.",
                        ],
                        keywords: [
                            "Orígenes múltiples",
                            "Problemas y soluciones",
                            "Éxito",
                            "Fracaso",
                            "Flexibilidad",
                            "Estabilización",
                            "Evolución",
                        ],
                        images: theoryImages.scot.music,
                    },
                ]
            },
            {
                title: "Los objetos digitales",
                sections: [
                    {
                        title: "Ontología del objeto digital",
                        list: [
                            "Yuk Hui propone ir más allá de los tecnicismos.",
                            "El objeto natural se capta con los sentidos y el objeto técnico tiene su existencia ligada al medio asociado.",
                            "El objeto digital es diferente aunque comparte características con ambos.",
                            "Solamente tiene significado dentro de una red en específico.",
                            "Su sentido se da a través de cadenas de interpretaciones y meta-medios",
                            "El medio es indisociable de su modo de existencia.",
                        ],
                        keywords: [
                            "Naturaleza relacional",
                            "Inmanencia",
                            "Identidad líquida",
                            "Redes",
                            "Medio digital",
                        ],
                        images: theoryImages.digitalObj.objects,
                    },
                    {
                        title: "El objeto digital musical",
                        list: [
                            "La música deja de estar tan vinculada con su presentación visual.",
                            "El proceso de reproducción se vuelve intocable e invisible.",
                            "No tiene identidad fija, se puede modificar, copiar y borrar.",
                            "Aparecen los NFT como modo de retorno a lo único e irrepetible.",
                            "Spotify permitió a los artistas promover NFTs en sus perfiles en 2022 como una prueba.",
                            "Algunos artistas han logrado cifras millonarias vendiendo ediciones limitadas de sus trabajos."
                        ],
                        keywords: [
                            "Desmaterialización",
                            "Liquidez",
                            "Intocable",
                            "Invisible",
                            "NFT",
                            "Incertidumbre",
                        ],
                        images: theoryImages.digitalObj.music,
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
                            "The earliest dates back to 2500 BC.",
                            "Ada Lovelace wrote the first one to be executed by a machine.",
                            "Set of instructions (input) that produce a result (output).",
                            "They are interconnected with everyday life.",
                            "Problematized by Critical Algorithm Studies.",
                        ],
                        keywords: [
                            "Complexity",
                            "Corporate secrecy",
                            "Algorithmic culture",
                            "Algorithmic governmentality",
                            "Data mining, correlations and profiling",
                            "Filter bubble",
                            "Neutrality?",
                            "Networks and processes",
                            "Produced in relations",
                            "Calculation society",
                            "Routes to follow",
                            "They're alive!",
                            "Distributed surveillance",
                        ],
                        images: theoryImages.algorithmsAndCapitalism.algorithms,
                    },
                    {
                        title: "Algorithms in music",
                        list: [
                            "They are used by recommendation and personalization systems.",
                            "Success predictions based on successful songs in the past.",
                            "Music created with Artificial Intelligence.",
                            "Metrics and metadata extraction that determine success."
                        ],
                        keywords: [
                            "Homogenization",
                            "Highly effective",
                            "Calculus to replace creativity?",
                            "Music production or statistics?",
                            "A reflection of the socio-economic system"
                        ],
                        images: theoryImages.algorithmsAndCapitalism.inMusic,
                    },
                    {
                        title: "Capitalism",
                        list: [
                            "Algorithms and the data they handle are indispensable to capitalist economy.",
                            "Capitalism's interests are not so clear in the streaming era.",
                            "This model is presented as horizontal and beneficial for artists and users.",
                            "The active and mediating role of algorithms is not visible.",
                            "Social life as a laboratory for extracting hypotheses and conducting experiments.",
                            "User as a fragmented mass of data that later returns in the form of recommendations"
                        ],
                        keywords: [
                            "Digital black box",
                            "Blackboxing",
                            "The dividual",
                            "Platform capitalism",
                        ],
                        images: theoryImages.algorithmsAndCapitalism.capitalism,
                    }
                ],
            },
            {
                title: "Social Construction of Technology",
                sections: [
                    {
                        title: "SCOT",
                        list: [
                            "Bijker, early 1980s.",
                            "Emerges in opposition to technological determinism.",
                            "Focuses on the social processes involved in the success or failure of an invention.",
                            "Bijker and Pinch present a study on bicycle development on 1984."
                        ],
                        keywords: [
                            "Interpretive flexibility",
                            "Multiple interpretations",
                            "Relevant social groups",
                            "Social constructions of meanings",
                            "Closure and stabilization"
                        ],
                        images: theoryImages.scot.scot,
                    },
                    {
                        title: "In Music",
                        list: [
                            "Formats and devices do not arise in linear fashion, nor do they have univocal origins.",
                            "The functionality of devices and formats is socially constructed based on how they're used.",
                            "Pinch and Trocco present study on early synthesizers 1998.",
                            "Moog's synthesizer begins to be used because of its his keyboard, achieving more conventional sounds.",
                            "Buchla's synthesizer, without keyboard, remains on the sidelines and intended for more experimental sounds.",
                            "As an instrument it reflects the society of the time."
                        ],
                        keywords: [
                            "Multiple origins",
                            "Problems and solutions",
                            "Success",
                            "Failure",
                            "Flexibility",
                            "Stabilization",
                            "Evolution",
                        ],
                        images: theoryImages.scot.music,
                    },
                ]
            },
            {
                title: "Digital Objects",
                sections: [
                    {
                        title: "Ontology of the Digital Object",
                        list: [
                            "Yuk Hui proposes to go beyond technicalities.",
                            "The natural object is grasped with the senses and the technical object has its existence linked to the associated environment.",
                            "The digital object is different although it shares characteristics with both.",
                            "It only has meaning within a specific network.",
                            "Its meaning is given through chains of interpretations and meta-media.",
                            "The environment is inseparable from its mode of existence.",
                        ],
                        keywords: [
                            "Relational nature",
                            "Immanence",
                            "Liquid identity",
                            "Networks",
                            "Digital milieu"
                        ],
                        images: theoryImages.digitalObj.objects,
                    },
                    {
                        title: "The Digital Musical Object",
                        list: [
                            "Music is no longer as closely linked to its visual presentation.",
                            "Reproduction process becomes untouchable and invisible.",
                            "It has no fixed identity, it can be modified, copied and deleted.",
                            "NFTs appear as a way to return to the unique and unrepeatable.",
                            "Spotify allowed artists to promote NFTs on their profiles in 2022 as a test.",
                            "Some artists have made millions by selling limited editions of their work."
                        ],
                        keywords: [
                            "Dematerialization",
                            "Liquidity",
                            "Untouchable",
                            "Invisible",
                            "NFT",
                            "Uncertainty",
                        ],
                        images: theoryImages.digitalObj.music,
                    },
                ],
            },
        ],
    }
}