interface DiscussionDictionaryEntry {
    discussion: {
        title: string,
        sections: {
            title: string,
            info: string,
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
                        info: "Característica relacional de las tecnologías de grabación y reproducción, surgiendo así prácticas en conjunto a cierto soporte.",
                    },
                    {
                        title: "Opacidad",
                        info: "La mayor problemática reside en la opacidad sin precedentes de la era del streaming.",
                    },
                    {
                        title: "Nodos en una red",
                        info: "Se puede visualizar una red de la que quien escucha o produce una canción es un nodo más, junto a datos y algoritmos, teniendo estos últimos también agencia.",
                    },
                    {
                        title: "La digitalidad",
                        info: "Los objetos de la digitalidad son inherentemente fluidos y relacionales.",
                    },
                    {
                        title: "La necesaria multiplicidad",
                        info: "Es imprescindible el acercamiento desde múltiples vertientes que den cuenta de la complejidad de la problemática, contemplando lo socio-histórico y económico.",
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
                        info: "Recording and reproduction technologies are relational so the multiple practices emerge in conjunction with a certain format.",
                    },
                    {
                        title: "Opacity",
                        info: "The biggest problem lies in the unprecedented opacity of the streaming era.",
                    },
                    {
                        title: "Nodes in a network",
                        info: "It is possible to visualize a network of which the listener or producer of a song is just another node, together with data and algorithms, the latter also having agency.",
                    },
                    {
                        title: "The Digital",
                        info: "Digital objects are inherently fluid and relational.",
                    },
                    {
                        title: "The necessary multiplicity",
                        info: "It is essential to approach the issue from multiple perspectives that take into account the complexity of the problem, contemplating the socio-historical and economic aspects.",
                    },
                ],
                keywords: [
                ]
            }
        ]
    }
}