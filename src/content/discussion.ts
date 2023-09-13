interface DiscussionDictionaryEntry {
    discussion: {
        title: string,
        sections: {
            title: string,
            info: string[],
        }[],
        keywords: string[],
    }[],
}

export const DiscussionDictionary: Record<string, DiscussionDictionaryEntry> = {
    es: {
        discussion: [
            {
                title: "Discusiones",
                sections: [
                    {
                        title: "Relacionalidad",
                        info: [
                            "Característica relacional de las tecnologías de grabación y reproducción.",
                            "Las prácticas surgen en conjunto a cierto soporte.",
                            "Las tecnologías no crean prácticas, ni éstas crean tecnologías.",
                            "Todo surge en relación.",
                        ]
                    },
                    {
                        title: "Caja negra",
                        info: [
                            "La mayor problemática reside en la opacidad sin precedentes de la era del streaming.",
                            "La forma en que los algoritmos operan con los datos permanece oscurecida.",
                            "Abrir la caja negra es develar lo social, ético y político que acompaña a estos procesos.",
                        ]
                    },
                    {
                        title: "Nodos en una red",
                        info: [
                            "Quien escucha o produce una canción es un nodo más de una extensa red.",
                            "Los datos y algoritmos también conforman la red y tienen agencia.",
                        ]
                    },
                    {
                        title: "Los objetos de la digitalidad",
                        info: [
                            "Son inherentemente fluidos y relacionales.",
                            "Su existencia e identidad se da en relación con su medio.",
                        ]
                    },
                    {
                        title: "Multiplicidad",
                        info: [
                            "Es imprescindible el acercamiento desde múltiples vertientes que den cuenta de la complejidad de la problemática.",
                            "Se debe contemplar lo socio-histórico y económico.",
                        ]
                    },
                    {
                        title: "El horizonte",
                        info: [
                            "La escucha y producción musical a la luz de nuevos avances en las tecnologías digitales.",
                            "El panorama de los NFT.",
                            "Las implicaciones de la Inteligencia Artificial."
                        ]
                    },
                ],
                keywords: [
                ]
            }
        ]
    },
    en: {
        discussion: [
            {
                title: "Discussion",
                sections: [
                    {
                        title: "Relational nature",
                        info: [
                            "Relational nature of recording and reproduction technologies.",
                            "Practices emerge in conjunction with a certain format.",
                            "Technologies do not create practices, nor do practices create technologies.",
                            "Everything arises in relation.",
                        ]
                    },
                    {
                        title: "Black box",
                        info: [
                            "The biggest problem lies in the unprecedented opacity of the streaming era.",
                            "How algorithms operate on data remains obscured.",
                            "To open the black box is to unveil the social, ethical and political issues that accompany these processes.",
                        ]
                    },
                    {
                        title: "Nodes in a network",
                        info: [
                            "The listener or producer of a song is just another node in a vast network.",
                            "Data and algorithms also make up the network and have agency.",
                        ]
                    },
                    {
                        title: "The Digital",
                        info: [
                            "Digital objects are inherently fluid and relational.",
                            "Their existence and identity is given in relation to its environment.",
                        ]
                    },
                    {
                        title: "Multiplicity",
                        info: [
                            "It is essential to approach the issue from multiple perspectives that take into account the complexity of the problem.",
                            "Socio-historical and economic aspects must be considered."
                        ]
                    },
                    {
                        title: "The horizon",
                        info: [
                            "Music listening and production in light of new advances in digital technologies.",
                            "The NFT Landscape.",
                            "The implications of Artificial Intelligence."
                        ]
                    },
                ],
                keywords: [
                ]
            }
        ]
    }
}