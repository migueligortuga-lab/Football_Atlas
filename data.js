const FOOTBALL_ATLAS_DATA = {
    countries: [
        {
            id: "inglaterra",
            name: "Inglaterra",
            confederation: "UEFA",
            crest: "assets/logos/national-teams/england.jpg",
            summary: "Berço do futebol moderno, onde nasceram as primeiras regras oficiais e a taça mais antiga do mundo.",
            history: "A fundação da Football Association (FA) em 1863 marcou a codificação das regras modernas do futebol, seguida pela criação da FA Cup em 1871–72. A seleção inglesa conquistou o Campeonato do Mundo em casa, em 1966.",
            stats: [
                { label: "Melhor marcador histórico", value: "Harry Kane (93 golos)" },
                { label: "Mais internacionalizações", value: "Harry Kane (127 jogos)" },
                { label: "Título mundial", value: "1 (1966)" }
            ],
            nationalTeamTitles: [
                { competition: "Campeonato do Mundo FIFA", count: 1, years: [1966] }
            ],
            mainCompetitions: ["Premier League", "FA Cup", "EFL Cup"],
            featuredClubs: [
                "Manchester City",
                "Liverpool",
                "Arsenal",
                "Manchester United",
                "Chelsea",
                "Tottenham"
            ],
            historicPlayers: ["Bobby Charlton", "Bobby Moore", "Gordon Banks", "Alan Shearer"],
            squad: [
    { number: 1, name: "Jordan Pickford", position: "Guarda-redes", club: "Everton", age: 32, foot: "Esquerdo", info: "Guarda-redes experiente e aguerrido, forte nos reflexos, no pontapé longo e na liderança." },
    { number: 13, name: "Dean Henderson", position: "Guarda-redes", club: "Crystal Palace", age: 29, foot: "Direito", info: "Guarda-redes ágil sob os postes, seguro no 1x1 e rápido na leitura da área." },
    { number: 22, name: "James Trafford", position: "Guarda-redes", club: "Burnley", age: 24, foot: "Direito", info: "Guarda-redes jovem com bons reflexos, jogo de pés e presença sob os postes." },

    { number: 2, name: "Trent Alexander-Arnold", position: "Defesa", club: "Real Madrid", age: 28, foot: "Direito", info: "Lateral com visão de jogo de elite, passe longo, cruzamento e bola parada." },
    { number: 3, name: "Marc Guéhi", position: "Defesa", club: "Manchester City", age: 26, foot: "Direito", info: "Defesa-central sólido no duelo individual, firme na antecipação e seguro com bola." },
    { number: 5, name: "John Stones", position: "Defesa", club: "Inter de Milão", age: 32, foot: "Direito", info: "Defesa-central elegante na construção e passe, capaz de atuar também no meio-campo." },
    { number: 6, name: "Ezri Konsa", position: "Defesa", club: "Arsenal", age: 29, foot: "Direito", info: "Defesa-central posicional e consistente, seguro na leitura defensiva e na cobertura." },
    { number: 12, name: "Reece James", position: "Defesa", club: "Chelsea", age: 26, foot: "Direito", info: "Lateral completo, forte no cruzamento, desarme, condução e chegada à frente." },
    { number: 14, name: "Levi Colwill", position: "Defesa", club: "Chelsea", age: 23, foot: "Esquerdo", info: "Defesa-central canhoto com boa saída de bola, passe vertical e leitura defensiva." },
    { number: 15, name: "Myles Lewis-Skelly", position: "Defesa", club: "Arsenal", age: 20, foot: "Esquerdo", info: "Jovem versátil capaz de atuar como lateral-esquerdo e em zonas interiores com critério." },
    { number: 24, name: "Rico Lewis", position: "Defesa", club: "Manchester City", age: 21, foot: "Direito", info: "Lateral inteligente na ocupação de espaços interiores durante a posse e dinâmico na pressão." },

    { number: 4, name: "Declan Rice", position: "Médio", club: "Arsenal", age: 27, foot: "Direito", info: "Médio box-to-box completo, com forte raio de ação, desarme, transporte e chegada." },
    { number: 8, name: "Jude Bellingham", position: "Médio", club: "Real Madrid", age: 23, foot: "Direito", info: "Médio completo e decisivo, forte na chegada à área, condução, drible e finalização." },
    { number: 10, name: "Phil Foden", position: "Médio", club: "Manchester City", age: 26, foot: "Esquerdo", info: "Médio criativo e goleador, perigoso entre linhas, no drible curto e no remate de fora." },
    { number: 16, name: "Cole Palmer", position: "Médio", club: "Chelsea", age: 24, foot: "Esquerdo", info: "Médio ofensivo/criativo decisivo na visão de jogo, drible, finalização e bola parada." },
    { number: 18, name: "Conor Gallagher", position: "Médio", club: "Tottenham", age: 26, foot: "Direito", info: "Médio incansável na pressão, recuperação de bola, energia e chegada à área." },
    { number: 20, name: "Eberechi Eze", position: "Médio", club: "Arsenal", age: 28, foot: "Direito", info: "Médio ofensivo técnico e desequilibrador no drible curto, condução e bola parada." },
    { number: 21, name: "Morgan Rogers", position: "Médio", club: "Chelsea", age: 24, foot: "Direito", info: "Médio ofensivo/avançado potente na condução, drible e chegada à finalização." },

    { number: 7, name: "Bukayo Saka", position: "Avançado", club: "Arsenal", age: 25, foot: "Esquerdo", info: "Extremo decisivo no 1x1, cruzamento, assistência e finalização pelo lado direito." },
    { number: 9, name: "Harry Kane", position: "Avançado", club: "Bayern de Munique", age: 33, foot: "Direito", info: "Capitão e ponta de lança goleador e associativo, forte na finalização, passe e bola parada." },
    { number: 11, name: "Anthony Gordon", position: "Avançado", club: "FC Barcelona", age: 25, foot: "Direito", info: "Extremo veloz e direto, forte na condução, pressão, transição e chegada à área." },
    { number: 17, name: "Noni Madueke", position: "Avançado", club: "Arsenal", age: 24, foot: "Esquerdo", info: "Extremo explosivo no drible e no ataque ao espaço no último terço." },
    { number: 19, name: "Dominic Solanke", position: "Avançado", club: "Tottenham", age: 29, foot: "Direito", info: "Ponta de lança trabalhador e goleador, forte no apoio frontal, pressão e finalização." },
    { number: 23, name: "Marcus Rashford", position: "Avançado", club: "Manchester United", age: 29, foot: "Direito", info: "Avançado veloz e perigoso no ataque ao espaço, drible e remate." }
]
        },
        {
    id: "spain",
    name: "Espanha",
    confederation: "UEFA",
    crest: "assets/logos/national-teams/spain.jpg",
    summary: "Referência do futebol associativo e de posse, tetracampeã europeia e campeã mundial em 2010.",
    history: "O futebol espanhol construiu uma identidade marcada pela técnica, pelo jogo combinativo e por clubes históricos como Real Madrid, Barcelona e Atlético de Madrid. A seleção alcançou o topo mundial entre 2008 e 2012 com dois Campeonatos da Europa e o Mundial de 2010, tendo voltado a conquistar o Euro em 2024 e a UEFA Nations League em 2022–23.",
    stats: [
        { label: "Melhor marcador histórico", value: "David Villa (59 golos)" },
        { label: "Mais internacionalizações", value: "Sergio Ramos (180 jogos)" },
        { label: "Mais assistências registadas", value: "Cesc Fàbregas (33 assistências)" }
    ],
    nationalTeamTitles: [
        { competition: "Campeonato do Mundo (FIFA World Cup)", count: 1, years: [2010] },
        { competition: "Campeonato da Europa (UEFA Euro)", count: 4, years: [1964, 2008, 2012, 2024] },
        { competition: "UEFA Nations League", count: 1, years: [2023] }
    ],
    mainCompetitions: ["La Liga", "Copa del Rey", "Supercopa de España"],
    featuredClubs: ["Real Madrid", "FC Barcelona", "Atlético de Madrid"],
    historicPlayers: ["Andrés Iniesta", "Xavi Hernández", "Iker Casillas", "David Villa"],
    squad: [
        { number: 23, name: "Unai Simón", position: "Guarda-redes", club: "Athletic Club", age: 29, foot: "Direito", info: "Guarda-redes seguro nos reflexos, no 1x1 e na saída curta a partir de trás." },
        { number: 1, name: "David Raya", position: "Guarda-redes", club: "Arsenal", age: 31, foot: "Direito", info: "Guarda-redes ágil e dominante na área, com excelente jogo de pés e distribuição." },
        { number: 13, name: "Joan García", position: "Guarda-redes", club: "FC Barcelona", age: 25, foot: "Direito", info: "Guarda-redes rápido nas saídas e forte nos reflexos sob os postes." },

        { number: 2, name: "Marc Pubill", position: "Defesa", club: "Atlético de Madrid", age: 23, foot: "Direito", info: "Lateral-direito físico e intenso nas subidas pelo corredor e na recuperação." },
        { number: 4, name: "Dean Huijsen", position: "Defesa", club: "Real Madrid", age: 21, foot: "Direito", info: "Defesa-central alto com boa saída de bola, passe vertical e presença aérea." },
        { number: 5, name: "Pau Cubarsí", position: "Defesa", club: "FC Barcelona", age: 19, foot: "Direito", info: "Defesa-central de grande leitura tática, calma sob pressão e passe progressivo." },
        { number: 12, name: "Pedro Porro", position: "Defesa", club: "Tottenham", age: 27, foot: "Direito", info: "Lateral ofensivo com muita energia, cruzamento, remate de meia distância e profundidade." },
        { number: 14, name: "Aymeric Laporte", position: "Defesa", club: "Athletic Club", age: 32, foot: "Esquerdo", info: "Defesa-central canhoto experiente, forte na construção limpa e no duelo defensivo." },
        { number: 22, name: "Marc Cucurella", position: "Defesa", club: "Real Madrid", age: 28, foot: "Esquerdo", info: "Lateral-esquerdo combativo e dinâmico, capaz de apoiar por fora ou inverter para dentro." },

        { number: 3, name: "Marc Roca", position: "Médio", club: "Real Betis", age: 29, foot: "Esquerdo", info: "Médio organizador com bom critério no passe curto e longo e equilíbrio na posse." },
        { number: 6, name: "Mikel Merino", position: "Médio", club: "Arsenal", age: 30, foot: "Esquerdo", info: "Médio forte no jogo aéreo, nos duelos e na chegada tardia à área." },
        { number: 8, name: "Fabián Ruiz", position: "Médio", club: "PSG", age: 30, foot: "Esquerdo", info: "Médio canhoto de boa condução, visão de jogo, passe entre linhas e remate." },
        { number: 9, name: "Fermín López", position: "Médio", club: "FC Barcelona", age: 23, foot: "Direito", info: "Médio ofensivo dinâmico e incisivo na chegada à zona de finalização e na pressão." },
        { number: 15, name: "Álex Baena", position: "Médio", club: "Atlético de Madrid", age: 25, foot: "Direito", info: "Criativo intenso com excelente último passe, bola parada e chegada ao terço final." },
        { number: 16, name: "Pablo Barrios", position: "Médio", club: "Atlético de Madrid", age: 23, foot: "Direito", info: "Médio móvel e trabalhador, forte na ligação de jogo, condução e recuperação." },
        { number: 18, name: "Martín Zubimendi", position: "Médio", club: "Arsenal", age: 27, foot: "Direito", info: "Médio defensivo/organizador com grande leitura posicional, calma sob pressão e passe seguro." },
        { number: 20, name: "Pedri", position: "Médio", club: "FC Barcelona", age: 23, foot: "Direito", info: "Médio criativo de referência na temporização, controlo de espaço e passe decisivo." },

        { number: 7, name: "Ferran Torres", position: "Avançado", club: "PSG", age: 26, foot: "Direito", info: "Avançado/extremo móvel e incisivo nos ataques ao espaço e na finalização." },
        { number: 10, name: "Lamine Yamal", position: "Avançado", club: "FC Barcelona", age: 19, foot: "Esquerdo", info: "Extremo canhoto desequilibrador no 1x1, criativo no passe e perigoso no remate." },
        { number: 11, name: "Yéremy Pino", position: "Avançado", club: "Crystal Palace", age: 24, foot: "Direito", info: "Extremo veloz e vertical, forte no drible, mobilidade e apoio ofensivo." },
        { number: 17, name: "Nico Williams", position: "Avançado", club: "Athletic Club", age: 24, foot: "Direito", info: "Extremo explosivo na aceleração e no 1x1, perigoso na transição e no cruzamento." },
        { number: 19, name: "Víctor Muñoz", position: "Avançado", club: "Liverpool", age: 23, foot: "Direito", info: "Avançado rápido e móvel na frente ofensiva e na procura de profundidade." },
        { number: 21, name: "Mikel Oyarzabal", position: "Avançado", club: "Real Sociedad", age: 29, foot: "Esquerdo", info: "Avançado inteligente nos movimentos sem bola, associativo e eficaz na finalização." }
    ]
},
   {
    id: "portugal",
    name: "Portugal",
    confederation: "UEFA",
    crest: "assets/logos/national-teams/portugal.jpg",
    summary: "Campeão europeu em 2016 e bicampeão da Liga das Nações, com forte tradição na formação de talento.",
    history: "Com uma escola de formação reconhecida mundialmente e clubes históricos como Benfica, FC Porto e Sporting CP, a seleção portuguesa afirmou-se entre as potências do futebol europeu, conquistando o Euro 2016 e a UEFA Nations League.",
    stats: [
        { label: "Melhor marcador histórico", value: "Cristiano Ronaldo (146 golos)" },
        { label: "Mais internacionalizações", value: "Cristiano Ronaldo (234 jogos)" },
        { label: "Títulos europeus", value: "1 Euro (2016) e 2 Nations League" }
    ],
    nationalTeamTitles: [
        { competition: "Campeonato da Europa (UEFA Euro)", count: 1, years: [2016] },
        { competition: "UEFA Nations League", count: 2, years: [2019, 2025] }
    ],
    mainCompetitions: ["Liga Portugal Betclic", "Taça de Portugal", "Taça da Liga"],
    featuredClubs: ["SL Benfica", "FC Porto", "Sporting CP"],
    historicPlayers: ["Eusébio", "Luís Figo", "Cristiano Ronaldo", "Rui Costa"],
    squad: [
        { number: 1, name: "Diogo Costa", position: "Guarda-redes", club: "FC Porto", age: 27, foot: "Direito", info: "Guarda-redes completo, forte nos reflexos, no 1x1, nos penáltis e no passe longo." },
        { number: 12, name: "Rui Silva", position: "Guarda-redes", club: "Sporting CP", age: 32, foot: "Direito", info: "Guarda-redes experiente, seguro nas intervenções e confortável na saída de bola." },
        { number: 22, name: "Samuel Soares", position: "Guarda-redes", club: "SL Benfica", age: 24, foot: "Esquerdo", info: "Guarda-redes formado no clube com boa agilidade sob os postes e saída de bola." },

        { number: 2, name: "Diogo Dalot", position: "Defesa", club: "Manchester United", age: 27, foot: "Direito", info: "Lateral versátil capaz de atuar em ambos os corredores, intenso e com boa chegada." },
        { number: 3, name: "Rúben Dias", position: "Defesa", club: "Manchester City", age: 29, foot: "Direito", info: "Defesa-central líder e organizador, forte no duelo, antecipação e comunicação." },
        { number: 4, name: "António Silva", position: "Defesa", club: "Bournemouth", age: 23, foot: "Direito", info: "Defesa-central agressivo na marcação, forte no jogo aéreo e na saída de bola." },
        { number: 5, name: "Flávio Nazinho", position: "Defesa", club: "AS Monaco", age: 23, foot: "Esquerdo", info: "Lateral/defesa canhoto com boa dinâmica na subida e apoio pelo corredor." },
        { number: 13, name: "Renato Veiga", position: "Defesa", club: "Villarreal", age: 23, foot: "Esquerdo", info: "Defesa canhoto versátil e físico, seguro na construção e nos duelos." },
        { number: 14, name: "Alberto Costa", position: "Defesa", club: "FC Porto", age: 23, foot: "Direito", info: "Lateral-direito dinâmico com boa capacidade física, cruzamento e transição." },
        { number: 19, name: "Nuno Mendes", position: "Defesa", club: "PSG", age: 24, foot: "Esquerdo", info: "Lateral-esquerdo potente e veloz, forte no 1x1, condução e transição ofensiva." },
        { number: 20, name: "João Cancelo", position: "Defesa", club: "FC Barcelona", age: 32, foot: "Direito", info: "Lateral criativo e técnico, forte na condução interior, passe e apoio ofensivo." },

        { number: 6, name: "João Palhinha", position: "Médio", club: "Tottenham", age: 31, foot: "Direito", info: "Médio defensivo de referência no desarme, interceção e proteção da linha defensiva." },
        { number: 8, name: "Bruno Fernandes", position: "Médio", club: "Manchester United", age: 32, foot: "Direito", info: "Médio criativo e decisivo no último passe, visão de jogo, remate e bolas paradas." },
        { number: 10, name: "Bernardo Silva", position: "Médio", club: "Real Madrid", age: 32, foot: "Esquerdo", info: "Médio criativo e inteligente na ocupação de espaços, controlo de posse e drible." },
        { number: 15, name: "João Neves", position: "Médio", club: "PSG", age: 22, foot: "Direito", info: "Médio incansável na pressão e recuperação, forte no passe curto e na ligação." },
        { number: 18, name: "Mateus Fernandes", position: "Médio", club: "West Ham", age: 22, foot: "Direito", info: "Médio dinâmico e técnico, forte na condução sob pressão e chegada à frente." },
        { number: 21, name: "Rúben Neves", position: "Médio", club: "Al-Hilal", age: 29, foot: "Direito", info: "Médio organizador com excelente passe longo, leitura de jogo e remate." },
        { number: 23, name: "Vitinha", position: "Médio", club: "PSG", age: 26, foot: "Direito", info: "Médio organizador de grande critério no passe, ritmo de jogo e resistência à pressão." },

        { number: 7, name: "Carlos Forbs", position: "Avançado", club: "Club Brugge", age: 22, foot: "Direito", info: "Extremo rápido e vertical no 1x1, forte na aceleração e no ataque à profundidade." },
        { number: 9, name: "Gonçalo Ramos", position: "Avançado", club: "AC Milan", age: 25, foot: "Direito", info: "Ponta de lança móvel e goleador, forte na pressão, desmarcação na área e remate." },
        { number: 11, name: "Geovany Quenda", position: "Avançado", club: "Chelsea", age: 19, foot: "Esquerdo", info: "Extremo/ala canhoto jovem e ágil no drible, condução e desequilíbrio." },
        { number: 16, name: "Francisco Trincão", position: "Avançado", club: "Sporting CP", age: 26, foot: "Esquerdo", info: "Extremo/avançado canhoto técnico, forte na condução interior, drible e remate." },
        { number: 17, name: "Pedro Neto", position: "Avançado", club: "Chelsea", age: 26, foot: "Esquerdo", info: "Extremo veloz e desequilibrador no 1x1, forte na transição e no cruzamento." }
    ]
},
        {
    id: "france",
    name: "França",
    confederation: "UEFA",
    crest: "assets/logos/national-teams/france.jpg",
    summary: "Potência histórica do futebol mundial, bicampeã do mundo e campeã europeia e da Liga das Nações.",
    history: "Com forte tradição na formação de talentos e clubes de referência como o PSG, o Marselha e o Mónaco, a seleção francesa conquistou dois Campeonatos do Mundo (1998 e 2018), dois Campeonatos da Europa (1984 e 2000) e a UEFA Nations League (2020–21).",
    stats: [
        { label: "Melhor marcador histórico", value: "Kylian Mbappé (67 golos)" },
        { label: "Mais internacionalizações", value: "Hugo Lloris (145 jogos)" },
        { label: "Maior goleada", value: "França 14–0 Gibraltar (2023)" }
    ],
    nationalTeamTitles: [
        { competition: "Campeonato do Mundo (FIFA World Cup)", count: 2, years: [1998, 2018] },
        { competition: "Campeonato da Europa (UEFA Euro)", count: 2, years: [1984, 2000] },
        { competition: "UEFA Nations League", count: 1, years: [2021] }
    ],
    mainCompetitions: ["Ligue 1", "Coupe de France", "Trophée des Champions"],
    featuredClubs: ["PSG", "Olympique de Marseille", "AS Monaco"],
    historicPlayers: ["Raymond Kopa", "Michel Platini", "Zinedine Zidane", "Thierry Henry"],
    squad: [
    { number: 1, name: "Guillaume Restes", position: "Guarda-redes", club: "Toulouse", age: 21, foot: "Direito", info: "Guarda-redes jovem com bons reflexos, leitura da área e saída curta de bola." },
    { number: 16, name: "Mike Maignan", position: "Guarda-redes", club: "AC Milan", age: 31, foot: "Direito", info: "Guarda-redes completo, forte nos reflexos, no 1x1, na saída de bola e no passe longo." },
    { number: 23, name: "Lucas Chevalier", position: "Guarda-redes", club: "PSG", age: 25, foot: "Direito", info: "Guarda-redes ágil sob os postes, rápido na leitura da área e seguro na saída." },

    { number: 2, name: "Jules Koundé", position: "Defesa", club: "FC Barcelona", age: 28, foot: "Direito", info: "Defesa polivalente, forte na marcação individual, desarme e apoio pelo corredor direito." },
    { number: 3, name: "Adrien Truffert", position: "Defesa", club: "Bournemouth", age: 24, foot: "Esquerdo", info: "Lateral-esquerdo canhoto com boa condução, cruzamento e apoio ofensivo." },
    { number: 4, name: "Dayot Upamecano", position: "Defesa", club: "Bayern de Munique", age: 28, foot: "Direito", info: "Defesa-central potente fisicamente, agressivo nos duelos e com boa construção." },
    { number: 5, name: "William Saliba", position: "Defesa", club: "Arsenal", age: 25, foot: "Direito", info: "Defesa-central sereno e dominante no duelo, leitura de espaço e saída de bola." },
    { number: 15, name: "Ibrahima Konaté", position: "Defesa", club: "Real Madrid", age: 27, foot: "Direito", info: "Defesa-central físico e veloz, forte nos duelos e na cobertura de profundidade." },
    { number: 17, name: "Malo Gusto", position: "Defesa", club: "Chelsea", age: 23, foot: "Direito", info: "Lateral-direito veloz e intenso, com grande fôlego e chegada à linha de fundo." },
    { number: 22, name: "Leny Yoro", position: "Defesa", club: "Manchester United", age: 21, foot: "Direito", info: "Defesa-central com excelente leitura defensiva, alcance e saída de bola." },

    { number: 6, name: "Eduardo Camavinga", position: "Médio", club: "Real Madrid", age: 24, foot: "Esquerdo", info: "Médio dinâmico e versátil, forte no desarme, condução sob pressão e cobertura." },
    { number: 8, name: "Aurélien Tchouaméni", position: "Médio", club: "Real Madrid", age: 26, foot: "Direito", info: "Médio defensivo/box-to-box forte na recuperação, jogo aéreo, passe e equilíbrio." },
    { number: 13, name: "Rayan Cherki", position: "Médio", club: "Manchester City", age: 23, foot: "Esquerdo", info: "Criativo técnico e imprevisível no drible curto, passe decisivo e visão entre linhas." },
    { number: 14, name: "Adrien Rabiot", position: "Médio", club: "AC Milan", age: 31, foot: "Esquerdo", info: "Médio box-to-box forte na passada, recuperação de bola, chegada e equilíbrio." },
    { number: 18, name: "Warren Zaïre-Emery", position: "Médio", club: "PSG", age: 20, foot: "Direito", info: "Médio box-to-box potente, intenso na recuperação e seguro no transporte de bola." },

    { number: 7, name: "Bradley Barcola", position: "Avançado", club: "Liverpool", age: 24, foot: "Direito", info: "Extremo veloz e perigoso no 1x1, aceleração, drible e ataque à profundidade." },
    { number: 9, name: "Marcus Thuram", position: "Avançado", club: "Inter de Milão", age: 29, foot: "Direito", info: "Avançado físico e móvel, forte no ataque ao espaço, retenção e finalização." },
    { number: 10, name: "Kylian Mbappé", position: "Avançado", club: "Real Madrid", age: 27, foot: "Direito", info: "Avançado letal na velocidade, desmarcação em profundidade, drible e finalização." },
    { number: 11, name: "Ousmane Dembélé", position: "Avançado", club: "PSG", age: 29, foot: "Esquerdo", info: "Extremo ambidestro explosivo no 1x1, drible, condução e desequilíbrio pelos flancos." },
    { number: 12, name: "Randal Kolo Muani", position: "Avançado", club: "Tottenham", age: 27, foot: "Direito", info: "Avançado rápido e dinâmico na profundidade, transição e movimentação ofensiva." },
    { number: 19, name: "Eli Junior Kroupi", position: "Avançado", club: "Bournemouth", age: 20, foot: "Direito", info: "Jovem avançado rápido e incisivo na finalização, desmarcação e ataque ao espaço." },
    { number: 20, name: "Désiré Doué", position: "Avançado", club: "PSG", age: 21, foot: "Direito", info: "Extremo/médio ofensivo criativo, ágil no 1x1, condução e chegada ao último terço." },
    { number: 21, name: "Michael Olise", position: "Avançado", club: "Bayern de Munique", age: 24, foot: "Esquerdo", info: "Extremo/avançado canhoto criativo, forte no passe decisivo, drible, cruzamento e remate." }
]
},
        {
    id: "italia",
    name: "Itália",
    confederation: "UEFA",
    crest: "assets/logos/national-teams/italy.jpg",
    summary: "Tetracampeã mundial e referência histórica na organização tática e defensiva.",
    history: "A Serie A consolidou-se como uma das ligas mais competitivas e históricas da Europa. A seleção italiana venceu quatro Campeonatos do Mundo (1934, 1938, 1982 e 2006) e dois Campeonatos da Europa (1968 e 2020).",
    stats: [
        { label: "Melhor marcador histórico", value: "Luigi Riva (35 golos)" },
        { label: "Mais internacionalizações", value: "Gianluigi Buffon (176 jogos)" },
        { label: "Títulos mundiais", value: "4 (1934, 1938, 1982 e 2006)" }
    ],
    nationalTeamTitles: [
        { competition: "Campeonato do Mundo FIFA", count: 4, years: [1934, 1938, 1982, 2006] },
        { competition: "Campeonato da Europa (UEFA Euro)", count: 2, years: [1968, 2020] }
    ],
    mainCompetitions: ["Serie A", "Coppa Italia", "Supercoppa Italiana"],
    featuredClubs: ["Juventus", "Inter de Milão", "AC Milan", "Napoli"],
    historicPlayers: ["Paolo Maldini", "Gianluigi Buffon", "Roberto Baggio", "Andrea Pirlo"],
    squad: [
        { number: 1, name: "Gianluigi Donnarumma", position: "Guarda-redes", club: "PSG", age: 27, foot: "Direito", info: "Guarda-redes de grande envergadura, forte nos reflexos, jogo aéreo e penáltis." },
        { number: 12, name: "Guglielmo Vicario", position: "Guarda-redes", club: "Tottenham", age: 30, foot: "Direito", info: "Guarda-redes ágil sob os postes e rápido nas saídas em lances próximos." },
        { number: 14, name: "Alex Meret", position: "Guarda-redes", club: "Napoli", age: 29, foot: "Esquerdo", info: "Guarda-redes seguro nos reflexos e na leitura da área." },

        { number: 2, name: "Giovanni Di Lorenzo", position: "Defesa", club: "Napoli", age: 33, foot: "Direito", info: "Lateral/ala experiente e regular, forte na chegada à área, cruzamento e liderança." },
        { number: 3, name: "Federico Dimarco", position: "Defesa", club: "Inter de Milão", age: 29, foot: "Esquerdo", info: "Ala/lateral canhoto com cruzamento de alta precisão, remate e bola parada." },
        { number: 4, name: "Alessandro Buongiorno", position: "Defesa", club: "Napoli", age: 27, foot: "Direito", info: "Defesa-central firme no duelo individual, antecipação e jogo aéreo." },
        { number: 5, name: "Riccardo Calafiori", position: "Defesa", club: "Arsenal", age: 24, foot: "Esquerdo", info: "Defesa canhoto dinâmico na progressão com bola, agressivo nos duelos e versátil." },
        { number: 13, name: "Destiny Udogie", position: "Defesa", club: "Tottenham", age: 23, foot: "Esquerdo", info: "Lateral/ala canhoto potente na passada, drible e chegada ao último terço." },
        { number: 23, name: "Alessandro Bastoni", position: "Defesa", club: "Inter de Milão", age: 27, foot: "Esquerdo", info: "Defesa-central canhoto de grande saída de bola, passe longo e leitura defensiva." },

        { number: 6, name: "Samuele Ricci", position: "Médio", club: "Torino", age: 25, foot: "Direito", info: "Médio organizador com critério no passe curto, temporização e equilíbrio." },
        { number: 8, name: "Sandro Tonali", position: "Médio", club: "Newcastle United", age: 26, foot: "Direito", info: "Médio completo na recuperação, passe vertical, energia e controlo de ritmo." },
        { number: 16, name: "Davide Frattesi", position: "Médio", club: "Inter de Milão", age: 27, foot: "Direito", info: "Médio de grande chegada tardia à área, intensidade e finalização." },
        { number: 18, name: "Nicolò Barella", position: "Médio", club: "Inter de Milão", age: 29, foot: "Direito", info: "Médio box-to-box incansável, forte na dinâmica, chegada à área, passe e pressão." },
        { number: 21, name: "Nicolò Fagioli", position: "Médio", club: "Fiorentina", age: 25, foot: "Direito", info: "Médio técnico com boa leitura entre linhas, passe curto e construção." },

        { number: 9, name: "Mateo Retegui", position: "Avançado", club: "Atalanta", age: 27, foot: "Direito", info: "Ponta de lança forte na área, posicionamento, jogo aéreo e finalização." },
        { number: 10, name: "Lorenzo Pellegrini", position: "Avançado", club: "AS Roma", age: 30, foot: "Direito", info: "Avançado/médio criativo com boa visão de jogo, chegada à frente e bola parada." },
        { number: 11, name: "Moise Kean", position: "Avançado", club: "Fiorentina", age: 26, foot: "Direito", info: "Avançado físico e incisivo no ataque ao espaço e na finalização." },
        { number: 15, name: "Giacomo Raspadori", position: "Avançado", club: "Napoli", age: 26, foot: "Direito", info: "Avançado móvel e associativo, forte na ligação curta, drible e finalização." },
        { number: 17, name: "Riccardo Orsolini", position: "Avançado", club: "Bologna", age: 29, foot: "Esquerdo", info: "Extremo canhoto perigoso na condução interior, cruzamento e remate." },
        { number: 20, name: "Matteo Politano", position: "Avançado", club: "Napoli", age: 33, foot: "Esquerdo", info: "Extremo canhoto trabalhador, com boa condução interior e remate." }
    ]
},
        {
    id: "brasil",
    name: "Brasil",
    confederation: "CONMEBOL",
    crest: "assets/logos/national-teams/brazil.jpg",
    summary: "A seleção mais vitoriosa da história dos Campeonatos do Mundo, com cinco títulos e estilo icónico.",
    history: "O futebol tornou-se parte central da cultura brasileira no século XX, projetando jogadores que marcaram gerações. O Brasil é o único pentacampeão mundial (1958, 1962, 1970, 1994 e 2002) e soma nove títulos da Copa América.",
    stats: [
        { label: "Melhor marcador histórico", value: "Pelé (77 golos)" },
        { label: "Mais internacionalizações", value: "Cafu (142 jogos)" },
        { label: "Títulos mundiais", value: "5 (1958, 1962, 1970, 1994 e 2002)" }
    ],
    nationalTeamTitles: [
        { competition: "Campeonato do Mundo FIFA", count: 5, years: [1958, 1962, 1970, 1994, 2002] },
        { competition: "Copa América", count: 9, years: [1919, 1922, 1949, 1989, 1997, 1999, 2004, 2007, 2019] }
    ],
    mainCompetitions: ["Campeonato Brasileiro (Série A)", "Copa do Brasil", "Supercopa do Brasil"],
    featuredClubs: ["Flamengo", "Palmeiras", "São Paulo", "Botafogo"],
    historicPlayers: ["Pelé", "Ronaldo Nazário", "Romário", "Cafu"],
    squad: [
        { number: 1, name: "Alisson Becker", position: "Guarda-redes", club: "Liverpool", age: 34, foot: "Direito", info: "Guarda-redes completo, seguro no 1x1, nas saídas aéreas e na distribuição." },
        { number: 12, name: "Bento", position: "Guarda-redes", club: "Al-Nassr", age: 27, foot: "Direito", info: "Guarda-redes ágil nos reflexos e seguro nas intervenções sob os postes." },
        { number: 16, name: "Ederson", position: "Guarda-redes", club: "Al-Nassr", age: 33, foot: "Esquerdo", info: "Guarda-redes com excelente jogo de pés, passe longo e leitura de profundidade." },

        { number: 2, name: "Vanderson", position: "Defesa", club: "AS Monaco", age: 25, foot: "Direito", info: "Lateral-direito dinâmico e intenso nas subidas, cruzamento e transição." },
        { number: 3, name: "Gabriel Magalhães", position: "Defesa", club: "Arsenal", age: 28, foot: "Esquerdo", info: "Defesa-central canhoto imponente no duelo individual e no jogo aéreo." },
        { number: 4, name: "Marquinhos", position: "Defesa", club: "PSG", age: 32, foot: "Direito", info: "Defesa-central experiente, forte na antecipação, leitura defensiva e passe." },
        { number: 6, name: "Carlos Augusto", position: "Defesa", club: "Inter de Milão", age: 27, foot: "Esquerdo", info: "Lateral/ala canhoto sólido defensivamente, forte no jogo aéreo e no apoio." },
        { number: 13, name: "Yan Couto", position: "Defesa", club: "Borussia Dortmund", age: 24, foot: "Direito", info: "Lateral ofensivo veloz e dinâmico na subida pelo corredor direito e no apoio." },
        { number: 14, name: "Éder Militão", position: "Defesa", club: "Real Madrid", age: 28, foot: "Direito", info: "Defesa potente e rápido na cobertura de espaços, forte nos duelos e na saída." },

        { number: 5, name: "Bruno Guimarães", position: "Médio", club: "Newcastle United", age: 29, foot: "Direito", info: "Médio organizador e intenso na recuperação, passe vertical e controlo de ritmo." },
        { number: 8, name: "Lucas Paquetá", position: "Médio", club: "West Ham", age: 29, foot: "Esquerdo", info: "Médio criativo e combativo, forte na condução, passe entre linhas e chegada." },
        { number: 15, name: "João Gomes", position: "Médio", club: "Wolverhampton", age: 25, foot: "Direito", info: "Médio combativo e incansável na pressão, desarme e recuperação de bola." },
        { number: 17, name: "Éderson", position: "Médio", club: "Atalanta", age: 27, foot: "Direito", info: "Médio box-to-box de grande raio de ação, forte na recuperação, chegada e transporte." },
        { number: 18, name: "André", position: "Médio", club: "Wolverhampton", age: 25, foot: "Direito", info: "Médio equilibrador com boa saída curta, passe seguro e leitura posicional." },

        { number: 7, name: "Vinícius Júnior", position: "Avançado", club: "Real Madrid", age: 26, foot: "Direito", info: "Extremo desequilibrador em velocidade e 1x1, decisivo na criação e finalização." },
        { number: 9, name: "Endrick", position: "Avançado", club: "Real Madrid", age: 20, foot: "Esquerdo", info: "Ponta de lança canhoto potente no remate, explosão curta e ataque à área." },
        { number: 10, name: "Raphinha", position: "Avançado", club: "FC Barcelona", age: 29, foot: "Esquerdo", info: "Avançado/extremo canhoto intenso na pressão, ataque ao espaço, passe e remate." },
        { number: 19, name: "Gabriel Martinelli", position: "Avançado", club: "Arsenal", age: 25, foot: "Direito", info: "Extremo veloz e vertical, forte na corrida em profundidade e na pressão." },
        { number: 20, name: "Estêvão", position: "Avançado", club: "Chelsea", age: 19, foot: "Esquerdo", info: "Extremo canhoto ágil no drible, condução e desequilíbrio no último terço." }
    ]
},
        {
    id: "argentina",
    name: "Argentina",
    confederation: "CONMEBOL",
    crest: "assets/logos/national-teams/argentina.jpg",
    summary: "Tricampeã mundial e recordista de títulos da Copa América, referência histórica do futebol sul-americano.",
    history: "O futebol argentino construiu uma identidade apaixonada e criativa, com clubes de forte tradição como Boca Juniors e River Plate e gerações marcantes. A seleção conquistou três Campeonatos do Mundo (1978, 1986 e 2022) e o recorde de títulos da Copa América.",
    stats: [
        { label: "Melhor marcador histórico", value: "Lionel Messi (126 golos)" },
        { label: "Mais internacionalizações", value: "Lionel Messi (208 jogos)" },
        { label: "Títulos mundiais", value: "3 (1978, 1986 e 2022)" }
    ],
    nationalTeamTitles: [
        { competition: "Campeonato do Mundo (FIFA World Cup)", count: 3, years: [1978, 1986, 2022] },
        { competition: "Copa América", count: 16, years: [1921, 1925, 1927, 1929, 1937, 1941, 1945, 1946, 1947, 1955, 1957, 1959, 1991, 1993, 2021, 2024] }
    ],
    mainCompetitions: ["Liga Profesional", "Copa Argentina", "Supercopa Argentina"],
    featuredClubs: ["River Plate", "Boca Juniors", "Racing Club"],
    historicPlayers: ["Diego Maradona", "Lionel Messi", "Mario Kempes", "Gabriel Batistuta"],
    squad: [
        { number: 1, name: "Juan Musso", position: "Guarda-redes", club: "Atlético de Madrid", age: 32, foot: "Direito", info: "Guarda-redes experiente, sólido nas saídas aéreas e seguro sob os postes." },
        { number: 12, name: "Gerónimo Rulli", position: "Guarda-redes", club: "Olympique de Marseille", age: 34, foot: "Direito", info: "Guarda-redes ágil nos reflexos e seguro na saída de bola." },
        { number: 23, name: "Emiliano Martínez", position: "Guarda-redes", club: "Aston Villa", age: 34, foot: "Direito", info: "Guarda-redes decisivo em grandes palcos e penáltis, com liderança e saída aérea." },

        { number: 2, name: "Leonardo Balerdi", position: "Defesa", club: "Olympique de Marseille", age: 27, foot: "Direito", info: "Defesa-central firme no duelo individual, com boa saída de bola e agressividade." },
        { number: 3, name: "Nicolás Tagliafico", position: "Defesa", club: "Lyon", age: 34, foot: "Esquerdo", info: "Lateral-esquerdo canhoto incansável, sólido defensivamente e participativo." },
        { number: 4, name: "Gonzalo Montiel", position: "Defesa", club: "River Plate", age: 29, foot: "Direito", info: "Lateral-direito intenso, disciplinado e eficaz em jogos decisivos." },
        { number: 6, name: "Lisandro Martínez", position: "Defesa", club: "Manchester United", age: 28, foot: "Esquerdo", info: "Defesa-central canhoto intenso, combativo e com boa saída curta." },
        { number: 13, name: "Cristian Romero", position: "Defesa", club: "Tottenham", age: 28, foot: "Direito", info: "Defesa-central agressivo na antecipação e firme no duelo individual." },
        { number: 19, name: "Nicolás Otamendi", position: "Defesa", club: "SL Benfica", age: 38, foot: "Direito", info: "Defesa experiente e competitivo no jogo aéreo, desarme e liderança." },

        { number: 5, name: "Leandro Paredes", position: "Médio", club: "Boca Juniors", age: 32, foot: "Direito", info: "Médio organizador com excelente passe longo, leitura de jogo e controlo de ritmo." },
        { number: 7, name: "Rodrigo De Paul", position: "Médio", club: "Inter Miami", age: 32, foot: "Direito", info: "Médio intenso e combativo, forte na recuperação, ligação e ritmo de jogo." },
        { number: 8, name: "Enzo Fernández", position: "Médio", club: "Chelsea", age: 25, foot: "Direito", info: "Médio completo na construção, passe vertical, temporização e chegada à frente." },
        { number: 14, name: "Exequiel Palacios", position: "Médio", club: "Bayer Leverkusen", age: 28, foot: "Direito", info: "Médio dinâmico e equilibrado na posse, pressão e ligação ofensiva." },
        { number: 20, name: "Alexis Mac Allister", position: "Médio", club: "Liverpool", age: 27, foot: "Direito", info: "Médio criativo e organizador com critério no passe, chegada e bola parada." },

        { number: 9, name: "Julián Álvarez", position: "Avançado", club: "Atlético de Madrid", age: 26, foot: "Direito", info: "Avançado móvel e decisivo na finalização, associação, remate e trabalho sem bola." },
        { number: 11, name: "Thiago Almada", position: "Avançado", club: "Atlético de Madrid", age: 25, foot: "Direito", info: "Criativo/avançado ágil no drible curto, condução e último passe." },
        { number: 15, name: "Nicolás González", position: "Avançado", club: "Juventus", age: 28, foot: "Esquerdo", info: "Extremo/ala canhoto potente na corrida, jogo aéreo e chegada à área." },
        { number: 17, name: "Giuliano Simeone", position: "Avançado", club: "Atlético de Madrid", age: 23, foot: "Direito", info: "Avançado/extremo intenso na pressão, corrida e chegada ao último terço." },
        { number: 18, name: "Nico Paz", position: "Avançado", club: "Como", age: 22, foot: "Esquerdo", info: "Criativo/avançado canhoto com visão de jogo, condução entre linhas e remate." },
        { number: 22, name: "Lautaro Martínez", position: "Avançado", club: "Inter de Milão", age: 29, foot: "Direito", info: "Ponta de lança intenso, forte no ataque ao espaço, pressão e finalização." }
    ]
},
        {
    id: "germany",
    name: "Alemanha",
    confederation: "UEFA",
    crest: "assets/logos/national-teams/germany.jpg",
    summary: "Tetracampeã mundial e tricampeã europeia, referência histórica de consistência competitiva.",
    history: "Com forte estrutura clubística liderada pelo Bayern de Munique e uma cultura competitiva sólida, a seleção alemã conquistou quatro Campeonatos do Mundo (1954, 1974, 1990 e 2014) e três Campeonatos da Europa (1972, 1980 e 1996).",
    stats: [
        { label: "Melhor marcador histórico", value: "Miroslav Klose (71 golos)" },
        { label: "Mais internacionalizações", value: "Lothar Matthäus (150 jogos)" },
        { label: "Títulos mundiais", value: "4 (1954, 1974, 1990 e 2014)" }
    ],
    nationalTeamTitles: [
        { competition: "Campeonato do Mundo (FIFA World Cup)", count: 4, years: [1954, 1974, 1990, 2014] },
        { competition: "Campeonato da Europa (UEFA Euro)", count: 3, years: [1972, 1980, 1996] }
    ],
    mainCompetitions: ["Bundesliga", "DFB-Pokal", "DFL-Supercup"],
    featuredClubs: ["Bayern de Munique", "Borussia Dortmund", "Bayer Leverkusen"],
    historicPlayers: ["Gerd Müller", "Franz Beckenbauer", "Miroslav Klose", "Lothar Matthäus"],
    squad: [
        { number: 1, name: "Manuel Neuer", position: "Guarda-redes", club: "Bayern de Munique", age: 40, foot: "Direito", info: "Guarda-redes histórico e líbero de referência, forte no 1x1, saída de bola e reflexos." },
        { number: 12, name: "Alexander Nübel", position: "Guarda-redes", club: "VfB Stuttgart", age: 30, foot: "Direito", info: "Guarda-redes seguro nas intervenções aéreas e na construção a partir de trás." },
        { number: 22, name: "Oliver Baumann", position: "Guarda-redes", club: "TSG Hoffenheim", age: 36, foot: "Direito", info: "Guarda-redes experiente e ágil sob os postes." },

        { number: 2, name: "Joshua Kimmich", position: "Defesa", club: "Bayern de Munique", age: 31, foot: "Direito", info: "Capitão e referência na saída de bola, passe, cruzamento e organização tática." },
        { number: 3, name: "David Raum", position: "Defesa", club: "RB Leipzig", age: 28, foot: "Esquerdo", info: "Lateral-esquerdo canhoto intenso na subida pelo corredor e no cruzamento." },
        { number: 4, name: "Jonathan Tah", position: "Defesa", club: "Bayern de Munique", age: 30, foot: "Direito", info: "Defesa-central potente fisicamente, forte nos duelos e na cobertura." },
        { number: 15, name: "Nico Schlotterbeck", position: "Defesa", club: "Borussia Dortmund", age: 26, foot: "Esquerdo", info: "Defesa-central canhoto agressivo no duelo e com boa progressão com bola." },
        { number: 18, name: "Maximilian Mittelstädt", position: "Defesa", club: "VfB Stuttgart", age: 29, foot: "Esquerdo", info: "Lateral-esquerdo equilibrado na defesa e perigoso no apoio ofensivo." },

        { number: 6, name: "Angelo Stiller", position: "Médio", club: "VfB Stuttgart", age: 25, foot: "Esquerdo", info: "Médio organizador canhoto com bom passe vertical e controlo do meio-campo." },
        { number: 8, name: "Leon Goretzka", position: "Médio", club: "Bayern de Munique", age: 31, foot: "Direito", info: "Médio box-to-box físico, forte na chegada à área, jogo aéreo e pressão." },
        { number: 10, name: "Jamal Musiala", position: "Médio", club: "Bayern de Munique", age: 23, foot: "Direito", info: "Criativo desequilibrador em espaços curtos, com drible fluido, condução e remate." },
        { number: 17, name: "Florian Wirtz", position: "Médio", club: "Bayer Leverkusen", age: 23, foot: "Direito", info: "Médio ofensivo/criativo de altíssimo critério no passe decisivo, visão e associação." },
        { number: 23, name: "Robert Andrich", position: "Médio", club: "Bayer Leverkusen", age: 32, foot: "Direito", info: "Médio combativo e intenso na recuperação de bola, desarme e remate exterior." },

        { number: 7, name: "Kai Havertz", position: "Avançado", club: "Arsenal", age: 27, foot: "Esquerdo", info: "Avançado/médio ofensivo móvel, forte na desmarcação, jogo aéreo e finalização." },
        { number: 9, name: "Deniz Undav", position: "Avançado", club: "VfB Stuttgart", age: 30, foot: "Direito", info: "Avançado associativo e goleador, forte na ligação curta e na finalização." },
        { number: 11, name: "Nick Woltemade", position: "Avançado", club: "VfB Stuttgart", age: 24, foot: "Direito", info: "Avançado alto e técnico, útil no apoio frontal, retenção e chegada à área." },
        { number: 14, name: "Karim Adeyemi", position: "Avançado", club: "Borussia Dortmund", age: 24, foot: "Esquerdo", info: "Extremo/avançado explosivo em velocidade e contra-ataque." },
        { number: 19, name: "Leroy Sané", position: "Avançado", club: "Galatasaray", age: 30, foot: "Esquerdo", info: "Extremo canhoto veloz e vertical, forte na aceleração, drible e remate em diagonal." }
    ]
},
        {
    id: "belgium",
    name: "Bélgica",
    confederation: "UEFA",
    crest: "assets/logos/national-teams/belgium.jpg",
    summary: "Seleção europeia marcada por gerações talentosas e consistência em grandes torneios internacionais.",
    history: "A Bélgica viveu o ponto alto do seu percurso internacional na década de 2010, alcançando o 3.º lugar no Mundial de 2018 e liderando o ranking da FIFA durante longos períodos, apoiada numa geração de referência e na evolução da sua formação.",
    stats: [
        { label: "Melhor marcador histórico", value: "Romelu Lukaku (85 golos)" },
        { label: "Mais internacionalizações", value: "Jan Vertonghen (157 jogos)" },
        { label: "Melhor campanha em Mundiais", value: "3.º lugar (2018)" }
    ],
    nationalTeamTitles: [
        { competition: "Campeonato do Mundo (FIFA World Cup)", count: 0, years: [] },
        { competition: "Campeonato da Europa (UEFA Euro)", count: 0, years: [] }
    ],
    mainCompetitions: ["Belgian Pro League", "Belgian Cup", "Belgian Super Cup"],
    featuredClubs: ["Club Brugge", "RSC Anderlecht", "Union Saint-Gilloise"],
    historicPlayers: ["Kevin De Bruyne", "Eden Hazard", "Thibaut Courtois", "Vincent Kompany"],
    squad: [
    { number: 1, name: "Thibaut Courtois", position: "Guarda-redes", club: "Real Madrid", age: 34, foot: "Esquerdo", info: "Guarda-redes de elite, dominante no jogo aéreo, reflexos, 1x1 e leitura da área." },
    { number: 12, name: "Koen Casteels", position: "Guarda-redes", club: "Al-Qadsiah", age: 34, foot: "Esquerdo", info: "Guarda-redes experiente e seguro sob os postes e nas saídas da baliza." },
    { number: 13, name: "Matz Sels", position: "Guarda-redes", club: "Nottingham Forest", age: 34, foot: "Direito", info: "Guarda-redes regular e ágil nos reflexos e na comunicação com a linha defensiva." },

    { number: 2, name: "Zeno Debast", position: "Defesa", club: "Sporting CP", age: 23, foot: "Direito", info: "Defesa-central com boa saída de bola, passe vertical e capacidade para atuar a médio." },
    { number: 3, name: "Arthur Theate", position: "Defesa", club: "Eintracht Frankfurt", age: 26, foot: "Esquerdo", info: "Defesa-central canhoto firme nos duelos, no jogo aéreo e na construção." },
    { number: 4, name: "Wout Faes", position: "Defesa", club: "Leicester City", age: 28, foot: "Direito", info: "Defesa-central intenso na marcação individual e agressivo na recuperação." },
    { number: 5, name: "Maxim De Cuyper", position: "Defesa", club: "Club Brugge", age: 25, foot: "Esquerdo", info: "Lateral-esquerdo canhoto com excelente cruzamento, chegada à frente e bola parada." },
    { number: 15, name: "Timothy Castagne", position: "Defesa", club: "Fulham", age: 30, foot: "Direito", info: "Lateral polivalente e disciplinado, capaz de jogar em ambos os corredores." },
    { number: 19, name: "Koni De Winter", position: "Defesa", club: "Genoa", age: 24, foot: "Direito", info: "Defesa-central jovem com boa estatura, saída limpa e leitura defensiva." },

    { number: 6, name: "Amadou Onana", position: "Médio", club: "Aston Villa", age: 25, foot: "Direito", info: "Médio defensivo/box-to-box físico e dominante no desarme, jogo aéreo e cobertura." },
    { number: 7, name: "Kevin De Bruyne", position: "Médio", club: "Nápoles", age: 35, foot: "Direito", info: "Médio criativo de referência mundial, exímio no passe longo, cruzamento, visão de jogo e remate." },
    { number: 8, name: "Youri Tielemans", position: "Médio", club: "Aston Villa", age: 29, foot: "Direito", info: "Médio organizador e criativo com excelente passe curto e longo, visão e remate." },
    { number: 14, name: "Aster Vranckx", position: "Médio", club: "VfL Wolfsburg", age: 24, foot: "Direito", info: "Médio dinâmico e intenso na condução, recuperação de bola e transição." },
    { number: 16, name: "Arthur Vermeeren", position: "Médio", club: "RB Leipzig", age: 21, foot: "Direito", info: "Médio associativo e ágil sob pressão, forte na ligação curta e no ritmo de jogo." },
    { number: 18, name: "Orel Mangala", position: "Médio", club: "Lyon", age: 28, foot: "Direito", info: "Médio equilibrador com boa capacidade de transporte, desarme e controlo." },

    { number: 9, name: "Loïs Openda", position: "Avançado", club: "RB Leipzig", age: 26, foot: "Direito", info: "Avançado muito veloz e incisivo no ataque ao espaço, contra-ataque e finalização." },
    { number: 10, name: "Charles De Ketelaere", position: "Avançado", club: "Atalanta", age: 25, foot: "Esquerdo", info: "Criativo/avançado canhoto móvel entre linhas, forte na associação, visão e chegada." },
    { number: 11, name: "Leandro Trossard", position: "Avançado", club: "Arsenal", age: 31, foot: "Direito", info: "Avançado/extremo inteligente nos espaços curtos, ambidestro, associativo e goleador." },
    { number: 17, name: "Johan Bakayoko", position: "Avançado", club: "PSV Eindhoven", age: 23, foot: "Esquerdo", info: "Extremo canhoto rápido e vertical, forte no drible, cruzamento e remate." },
    { number: 20, name: "Malick Fofana", position: "Avançado", club: "Lyon", age: 21, foot: "Direito", info: "Extremo jovem e veloz, perigoso na condução, aceleração e 1x1." },
    { number: 21, name: "Jérémy Doku", position: "Avançado", club: "Manchester City", age: 24, foot: "Direito", info: "Extremo explosivo no 1x1, drible em velocidade e desequilíbrio constante na linha." }
]
},
       {
    id: "netherlands",
    name: "Holanda",
    confederation: "UEFA",
    crest: "assets/logos/national-teams/netherlands.jpg",
    summary: "Referência histórica do futebol ofensivo e organizado, tricampeã vice-campeã mundial e campeã europeia em 1988.",
    history: "O futebol neerlandês influenciou profundamente a tática moderna com o Futebol Total e a formação de referência no Ajax, PSV e Feyenoord. A seleção conquistou o Campeonato da Europa de 1988 e alcançou três finais de Campeonatos do Mundo (1974, 1978 e 2010).",
    stats: [
        { label: "Melhor marcador histórico", value: "Memphis Depay (46 golos)" },
        { label: "Mais internacionalizações", value: "Wesley Sneijder (134 jogos)" },
        { label: "Maior conquista", value: "Campeão Europeu (1988)" }
    ],
    nationalTeamTitles: [
        { competition: "Campeonato da Europa (UEFA Euro)", count: 1, years: [1988] }
    ],
    mainCompetitions: ["Eredivisie", "KNVB Cup", "Johan Cruyff Shield"],
    featuredClubs: ["Ajax", "PSV Eindhoven", "Feyenoord"],
    historicPlayers: ["Johan Cruyff", "Marco van Basten", "Dennis Bergkamp", "Arjen Robben"],
    squad: [
        { number: 1, name: "Bart Verbruggen", position: "Guarda-redes", club: "Brighton", age: 24, foot: "Direito", info: "Guarda-redes ágil nos reflexos, seguro na saída de bola e com boa leitura da área." },
        { number: 13, name: "Mark Flekken", position: "Guarda-redes", club: "Brentford", age: 33, foot: "Direito", info: "Guarda-redes experiente com excelente jogo de pés e passe longo." },
        { number: 20, name: "Nick Olij", position: "Guarda-redes", club: "Sparta Rotterdam", age: 31, foot: "Direito", info: "Guarda-redes seguro sob os postes e firme nas intervenções em lances de área." },

        { number: 2, name: "Jurriën Timber", position: "Defesa", club: "Arsenal", age: 25, foot: "Direito", info: "Defesa polivalente e técnico, forte no 1x1 defensivo, saída de bola e apoio nos corredores." },
        { number: 3, name: "Matthijs de Ligt", position: "Defesa", club: "Manchester United", age: 27, foot: "Direito", info: "Defesa-central físico e agressivo nos duelos, forte no jogo aéreo e na marcação." },
        { number: 4, name: "Virgil van Dijk", position: "Defesa", club: "Liverpool", age: 35, foot: "Direito", info: "Capitão e defesa-central dominante no duelo, jogo aéreo, leitura de espaço e passe longo." },
        { number: 5, name: "Micky van de Ven", position: "Defesa", club: "Tottenham", age: 25, foot: "Esquerdo", info: "Defesa-central canhoto de velocidade excecional na cobertura e boa condução." },
        { number: 15, name: "Jeremie Frimpong", position: "Defesa", club: "Liverpool", age: 25, foot: "Direito", info: "Lateral/ala muito rápido e ofensivo, perigoso na transição, drible e chegada à área." },
        { number: 16, name: "Jorrel Hato", position: "Defesa", club: "Chelsea", age: 20, foot: "Esquerdo", info: "Defesa/lateral canhoto jovem, sereno na saída de bola e sólido nos duelos." },

        { number: 6, name: "Tijjani Reijnders", position: "Médio", club: "Manchester City", age: 28, foot: "Direito", info: "Médio box-to-box dinâmico na condução, passe vertical, chegada à área e ritmo." },
        { number: 8, name: "Ryan Gravenberch", position: "Médio", club: "Liverpool", age: 24, foot: "Direito", info: "Médio alto com excelente capacidade de progressão sob pressão, transporte e recuperação." },
        { number: 12, name: "Joey Veerman", position: "Médio", club: "PSV Eindhoven", age: 27, foot: "Direito", info: "Médio organizador com passe longo preciso, visão de jogo e bola parada." },
        { number: 14, name: "Frenkie de Jong", position: "Médio", club: "FC Barcelona", age: 29, foot: "Direito", info: "Médio construtor de grande controlo na posse, condução e passe entre linhas." },
        { number: 18, name: "Teun Koopmeiners", position: "Médio", club: "Juventus", age: 28, foot: "Esquerdo", info: "Médio canhoto versátil na construção, chegada à frente, remate e bola parada." },

        { number: 7, name: "Xavi Simons", position: "Avançado", club: "Tottenham", age: 23, foot: "Direito", info: "Criativo/extremo móvel entre linhas, forte no drible curto, condução e último passe." },
        { number: 9, name: "Brian Brobbey", position: "Avançado", club: "Ajax", age: 24, foot: "Direito", info: "Ponta de lança potente fisicamente, forte no apoio frontal, retenção e ataque à área." },
        { number: 10, name: "Donyell Malen", position: "Avançado", club: "Aston Villa", age: 27, foot: "Direito", info: "Avançado/extremo veloz e explosivo na aceleração, drible e remate em diagonal." },
        { number: 11, name: "Cody Gakpo", position: "Avançado", club: "Liverpool", age: 27, foot: "Direito", info: "Extremo/avançado forte na condução interior, cruzamento, chegada ao segundo poste e remate." },
        { number: 17, name: "Noa Lang", position: "Avançado", club: "Napoli", age: 27, foot: "Direito", info: "Extremo técnico e criativo no 1x1, com boa condução e chegada ao terço final." },
        { number: 19, name: "Wout Weghorst", position: "Avançado", club: "Ajax", age: 34, foot: "Direito", info: "Avançado de área combativo e forte no jogo aéreo, referência e pressão." }
    ]
}
    ],

    clubs: [
        /* INGLATERRA — BIG SIX */
        {
            id: "manchester-city",
            name: "Manchester City",
            fullName: "Manchester City Football Club",
            country: "Inglaterra",
            city: "Manchester",
            founded: 1880,
            stadium: "Etihad Stadium",
            crest: "assets/logos/clubs/manchester-city.jpg",
            photos: ["assets/images/clubs/manchester-city-1.jpg", "assets/images/clubs/manchester-city-2.jpg"],
            summary: "Potência moderna do futebol inglês, conhecida pelo jogo posicional e pela conquista da Liga dos Campeões em 2023.",
            history: "Fundado originalmente como St. Mark's (West Gorton) em 1880 e tornado Manchester City em 1894, o clube viveu momentos marcantes na era moderna, culminando no 'treble' europeu em 2022–23 e no tetracampeonato consecutivo da Premier League.",
            titles: [
                { competition: "Primeira Divisão / Premier League", count: 10, years: [1937, 1968, 2012, 2014, 2018, 2019, 2021, 2022, 2023, 2024] },
                { competition: "FA Cup", count: 7, years: [1904, 1934, 1956, 1969, 2011, 2019, 2023] },
                { competition: "EFL Cup", count: 8, years: [1970, 1976, 2014, 2016, 2018, 2019, 2020, 2021] },
                { competition: "Liga dos Campeões da UEFA", count: 1, years: [2023] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Sergio Agüero (260 golos)" },
                { label: "Mais jogos oficiais", value: "Alan Oakes (680 jogos)" },
                { label: "Estádio", value: "Etihad Stadium (Manchester)" }
            ],
            squad: [
    { number: 1, name: "Gianluigi Donnarumma", position: "Guarda-redes", nationality: "Itália", age: 27, foot: "Direito", info: "Guarda-redes titular com grande estatura, forte nos reflexos e no jogo aéreo." },
    { number: 13, name: "Marcus Bettinelli", position: "Guarda-redes", nationality: "Inglaterra", age: 34, foot: "Direito", info: "Guarda-redes experiente para compor as opções da baliza." },
    { number: 28, name: "Gerónimo Rulli", position: "Guarda-redes", nationality: "Argentina", age: 34, foot: "Direito", info: "Guarda-redes internacional argentino com experiência em competições europeias." },

    { number: 3, name: "Rúben Dias", position: "Defesa", nationality: "Portugal", age: 29, foot: "Direito", info: "Defesa-central e capitão, referência de liderança e organização defensiva." },
    { number: 6, name: "Marc Guéhi", position: "Defesa", nationality: "Inglaterra", age: 26, foot: "Direito", info: "Defesa-central sólido no duelo individual e seguro na saída de bola." },
    { number: 21, name: "Rayan Aït-Nouri", position: "Defesa", nationality: "Argélia", age: 25, foot: "Esquerdo", info: "Lateral-esquerdo ofensivo, ágil no drible e com boa chegada à frente." },
    { number: 22, name: "Vitor Reis", position: "Defesa", nationality: "Brasil", age: 20, foot: "Direito", info: "Jovem defesa brasileiro com capacidade para jogar a central ou lateral." },
    { number: 24, name: "Joško Gvardiol", position: "Defesa", nationality: "Croácia", age: 24, foot: "Esquerdo", info: "Defesa potente e versátil, forte na construção e nas subidas pelo corredor." },
    { number: 27, name: "Matheus Nunes", position: "Defesa", nationality: "Portugal", age: 28, foot: "Direito", info: "Jogador polivalente com capacidade de condução e chegada ao último terço." },
    { number: 33, name: "Nico O'Reilly", position: "Defesa", nationality: "Inglaterra", age: 21, foot: "Esquerdo", info: "Jovem formado no clube capaz de atuar como lateral-esquerdo ou médio." },
    { number: 45, name: "Abdukodir Khusanov", position: "Defesa", nationality: "Uzbequistão", age: 22, foot: "Direito", info: "Defesa rápido e agressivo na recuperação de bola e na cobertura de espaços." },
    { number: 61, name: "Kaden Braithwaite", position: "Defesa", nationality: "Inglaterra", age: 18, foot: "Esquerdo", info: "Jovem defesa-central integrado nas convocatórias da equipa principal." },
    { number: 82, name: "Rico Lewis", position: "Defesa", nationality: "Inglaterra", age: 21, foot: "Direito", info: "Lateral inteligente na ocupação de espaços interiores durante a posse." },

    { number: 5, name: "Elliot Anderson", position: "Médio", nationality: "Inglaterra", age: 24, foot: "Direito", info: "Médio dinâmico com intensidade na pressão e capacidade de transporte." },
    { number: 8, name: "Mateo Kovačić", position: "Médio", nationality: "Croácia", age: 32, foot: "Direito", info: "Médio experiente, forte a quebrar linhas em condução sob pressão." },
    { number: 10, name: "Rayan Cherki", position: "Médio", nationality: "França", age: 23, foot: "Esquerdo", info: "Médio ofensivo criativo, com grande drible curto e capacidade de passe." },
    { number: 17, name: "Enzo Fernández", position: "Médio", nationality: "Argentina", age: 25, foot: "Direito", info: "Médio completo na distribuição de jogo, ritmo de passe e chegada à área." },
    { number: 32, name: "Ayyoub Bouaddi", position: "Médio", nationality: "Marrocos", age: 19, foot: "Direito", info: "Jovem médio de grande projeção na construção e leitura de jogo." },
    { number: 47, name: "Phil Foden", position: "Médio", nationality: "Inglaterra", age: 26, foot: "Esquerdo", info: "Médio criativo e goleador, perigoso entre linhas e no remate de fora." },

    { number: 7, name: "Iliman Ndiaye", position: "Avançado", nationality: "Senegal", age: 26, foot: "Direito", info: "Avançado móvel e desequilibrador no 1x1 com boa capacidade de associação." },
    { number: 9, name: "Erling Haaland", position: "Avançado", nationality: "Noruega", age: 26, foot: "Esquerdo", info: "Ponta de lança goleador, decisivo na finalização, velocidade e jogo aéreo." },
    { number: 11, name: "Jérémy Doku", position: "Avançado", nationality: "Bélgica", age: 24, foot: "Direito", info: "Extremo explosivo no drible e na aceleração pelos flancos." },
    { number: 37, name: "Allan", position: "Avançado", nationality: "Brasil", age: 22, foot: "Esquerdo", info: "Avançado jovem brasileiro com mobilidade e chegada pelo lado direito." },
    { number: 42, name: "Antoine Semenyo", position: "Avançado", nationality: "Gana", age: 26, foot: "Direito", info: "Avançado físico e direto, forte nos ataques ao espaço e na finalização." },
    { number: 56, name: "Ryan McAidoo", position: "Avançado", nationality: "Inglaterra", age: 18, foot: "Esquerdo", info: "Jovem extremo formado na academia com velocidade e drible." }
],
            legends: ["Colin Bell", "David Silva", "Vincent Kompany", "Sergio Agüero"],
            curiosities: [
                "Foi o primeiro clube inglês a conquistar quatro títulos consecutivos da Premier League (2020–21 a 2023–24).",
                "Antes de se chamar Manchester City em 1894, jogou como St. Mark's e Ardwick."
            ]
        },
        {
            id: "liverpool",
            name: "Liverpool",
            fullName: "Liverpool Football Club",
            country: "Inglaterra",
            city: "Liverpool",
            founded: 1892,
            stadium: "Anfield",
            crest: "assets/logos/clubs/liverpool.jpg",
            photos: ["assets/images/clubs/liverpool-1.jpg", "assets/images/clubs/liverpool-2.jpg"],
            summary: "Um dos clubes mais vitoriosos e emblemáticos de Inglaterra e da Europa, imortalizado por Anfield e 'You'll Never Walk Alone'.",
            history: "Criado em 1892 após a saída do Everton de Anfield, o Liverpool construiu uma história dourada tanto a nível doméstico como europeu, somando seis Taças dos Campeões / Ligas dos Campeões.",
            titles: [
                { competition: "Primeira Divisão / Premier League", count: 20, years: [1901, 1906, 1922, 1923, 1947, 1964, 1966, 1973, 1976, 1977, 1979, 1980, 1982, 1983, 1984, 1986, 1988, 1990, 2020, 2025] },
                { competition: "FA Cup", count: 8, years: [1965, 1974, 1986, 1989, 1992, 2001, 2006, 2022] },
                { competition: "EFL Cup", count: 10, years: [1981, 1982, 1983, 1984, 1995, 2001, 2003, 2012, 2022, 2024] },
                { competition: "Taça dos Campeões / Liga dos Campeões", count: 6, years: [1977, 1978, 1981, 1984, 2005, 2019] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Ian Rush (346 golos)" },
                { label: "Mais jogos oficiais", value: "Ian Callaghan (857 jogos)" },
                { label: "Estádio", value: "Anfield (Liverpool)" }
            ],
            squad: [
    { number: 1, name: "Alisson Becker", position: "Guarda-redes", nationality: "Brasil", age: 34, foot: "Direito", info: "Guarda-redes de topo mundial, forte nos reflexos, no 1x1 e na saída de bola." },
    { number: 25, name: "Giorgi Mamardashvili", position: "Guarda-redes", nationality: "Geórgia", age: 26, foot: "Esquerdo", info: "Guarda-redes de grande estatura, muito seguro no jogo aéreo e nas defesas de perto." },
    { number: 28, name: "Freddie Woodman", position: "Guarda-redes", nationality: "Inglaterra", age: 29, foot: "Direito", info: "Guarda-redes experiente no futebol inglês para reforçar a baliza." },
    { number: 56, name: "Vítězslav Jaroš", position: "Guarda-redes", nationality: "República Checa", age: 25, foot: "Direito", info: "Guarda-redes formado no clube com boa agilidade e leitura da área." },
    { number: 95, name: "Harvey Davies", position: "Guarda-redes", nationality: "Inglaterra", age: 23, foot: "Esquerdo", info: "Jovem guarda-redes oriundo da formação do Liverpool." },

    { number: 2, name: "Joe Gomez", position: "Defesa", nationality: "Inglaterra", age: 29, foot: "Direito", info: "Defesa versátil capaz de atuar a central ou em ambos os laterais." },
    { number: 4, name: "Virgil van Dijk", position: "Defesa", nationality: "Países Baixos", age: 35, foot: "Direito", info: "Capitão e referência defensiva, dominante no jogo aéreo, posicionamento e passe longo." },
    { number: 5, name: "Jérémy Jacquet", position: "Defesa", nationality: "França", age: 21, foot: "Direito", info: "Defesa-central jovem com boa presença física e construção a partir de trás." },
    { number: 6, name: "Milos Kerkez", position: "Defesa", nationality: "Hungria", age: 23, foot: "Esquerdo", info: "Lateral-esquerdo intenso, rápido nas subidas e agressivo na marcação." },
    { number: 12, name: "Conor Bradley", position: "Defesa", nationality: "Irlanda do Norte", age: 23, foot: "Direito", info: "Lateral-direito dinâmico, forte na pressão, energia e chegada ao ataque." },
    { number: 15, name: "Giovanni Leoni", position: "Defesa", nationality: "Itália", age: 19, foot: "Direito", info: "Jovem defesa-central italiano com boa leitura defensiva e projeção." },
    { number: 21, name: "Kostas Tsimikas", position: "Defesa", nationality: "Grécia", age: 30, foot: "Esquerdo", info: "Lateral-esquerdo com bom cruzamento e bola parada." },
    { number: 30, name: "Jeremie Frimpong", position: "Defesa", nationality: "Países Baixos", age: 25, foot: "Direito", info: "Lateral/ala muito rápido e ofensivo, forte no 1x1 e na profundidade." },
    { number: 33, name: "Ronald Araújo", position: "Defesa", nationality: "Uruguai", age: 27, foot: "Direito", info: "Defesa-central potente e rápido nos duelos defensivos e na cobertura de espaços." },
    { number: 44, name: "Luke Chambers", position: "Defesa", nationality: "Inglaterra", age: 22, foot: "Esquerdo", info: "Defesa formado na academia capaz de jogar a lateral-esquerdo ou central." },
    { number: 92, name: "Wellity Lucky", position: "Defesa", nationality: "Espanha", age: 20, foot: "Direito", info: "Jovem defesa da estrutura do clube com estatura e capacidade de duelo." },

    { number: 3, name: "Wataru Endo", position: "Médio", nationality: "Japão", age: 33, foot: "Direito", info: "Médio defensivo combativo, forte na recuperação de bola e no equilíbrio da equipa." },
    { number: 7, name: "Florian Wirtz", position: "Médio", nationality: "Alemanha", age: 23, foot: "Direito", info: "Médio ofensivo criativo, exímio na visão de jogo, passe decisivo e drible entre linhas." },
    { number: 8, name: "Dominik Szoboszlai", position: "Médio", nationality: "Hungria", age: 26, foot: "Direito", info: "Médio de grande resistência e remate forte de meia distância, capaz de jogar em várias zonas." },
    { number: 10, name: "Alexis Mac Allister", position: "Médio", nationality: "Argentina", age: 27, foot: "Direito", info: "Médio organizador com excelente controlo de bola, passe e chegada à área." },
    { number: 38, name: "Ryan Gravenberch", position: "Médio", nationality: "Países Baixos", age: 24, foot: "Direito", info: "Médio elegante com capacidade de condução sob pressão e ligação defensiva/ofensiva." },
    { number: 42, name: "Trey Nyoni", position: "Médio", nationality: "Inglaterra", age: 19, foot: "Direito", info: "Jovem médio criativo da formação com boa técnica e mobilidade." },
    { number: 53, name: "James McConnell", position: "Médio", nationality: "Inglaterra", age: 22, foot: "Direito", info: "Médio formado na academia com disciplina tática e intensidade." },
    { number: 94, name: "Michael Laffey", position: "Médio", nationality: "Inglaterra", age: 21, foot: "Direito", info: "Jovem médio integrado nas opções da base/equipa principal." },

    { number: 9, name: "Alexander Isak", position: "Avançado", nationality: "Suécia", age: 27, foot: "Direito", info: "Ponta de lança móvel, técnico e letal na finalização e no ataque ao espaço." },
    { number: 14, name: "Federico Chiesa", position: "Avançado", nationality: "Itália", age: 29, foot: "Direito", info: "Extremo direto e explosivo, forte na aceleração e no remate." },
    { number: 18, name: "Cody Gakpo", position: "Avançado", nationality: "Países Baixos", age: 27, foot: "Direito", info: "Avançado versátil na frente, perigoso a fletir para dentro e no jogo aéreo." },
    { number: 22, name: "Hugo Ekitiké", position: "Avançado", nationality: "França", age: 24, foot: "Direito", info: "Avançado com boa mobilidade, drible e capacidade de associar-se no ataque." },
    { number: 23, name: "Víctor Muñoz", position: "Avançado", nationality: "Espanha", age: 23, foot: "Direito", info: "Extremo/avançado rápido e vertical com chegada ao último terço." },
    { number: 29, name: "Bradley Barcola", position: "Avançado", nationality: "França", age: 24, foot: "Direito", info: "Extremo veloz e desequilibrador no 1x1 com capacidade de finalização e assistência." },
    { number: 67, name: "Lewis Koumas", position: "Avançado", nationality: "País de Gales", age: 21, foot: "Direito", info: "Jovem avançado formado no clube com boa movimentação na frente." },
    { number: 73, name: "Rio Ngumoha", position: "Avançado", nationality: "Inglaterra", age: 18, foot: "Direito", info: "Jovem extremo muito rápido e criativo no drible curto." },
    { number: 76, name: "Jayden Danns", position: "Avançado", nationality: "Inglaterra", age: 20, foot: "Direito", info: "Ponta de lança da formação com faro de golo e presença na área." },
    { number: 82, name: "Joshua Sonni-Lambie", position: "Avançado", nationality: "Inglaterra", age: 19, foot: "Direito", info: "Jovem avançado integrado nos quadros do clube." }
],
            legends: ["Kenny Dalglish", "Steven Gerrard", "Ian Rush", "Graeme Souness"],
            curiosities: [
                "O hino 'You'll Never Walk Alone' tornou-se a identidade sonora inseparável de Anfield desde os anos 1960.",
                "Protagonizou a célebre reviravolta na final da Liga dos Campeões de 2005, em Istambul, frente ao AC Milan."
            ]
        },
        {
            id: "arsenal",
            name: "Arsenal",
            fullName: "The Arsenal Football Club",
            country: "Inglaterra",
            city: "Londres",
            founded: 1886,
            stadium: "Emirates Stadium",
            crest: "assets/logos/clubs/arsenal.jpg",
            photos: ["assets/images/clubs/arsenal-1.jpg", "assets/images/clubs/arsenal-2.jpg"],
            summary: "Clube histórico do norte de Londres, célebre pela campanha invicta de 2003–04 ('The Invincibles') e pela tradição de futebol ofensivo.",
            history: "Fundado em Woolwich em 1886 por operários de uma fábrica de armamento e transferido para Highbury em 1913, o Arsenal é um dos pilares do futebol inglês moderno, tendo mudado para o Emirates Stadium em 2006.",
            titles: [
                { competition: "Primeira Divisão / Premier League", count: 13, years: [1931, 1933, 1934, 1935, 1938, 1948, 1953, 1971, 1989, 1991, 1998, 2002, 2004] },
                { competition: "FA Cup", count: 14, years: [1930, 1936, 1950, 1971, 1979, 1993, 1998, 2002, 2003, 2005, 2014, 2015, 2017, 2020] },
                { competition: "EFL Cup", count: 2, years: [1987, 1993] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Thierry Henry (228 golos)" },
                { label: "Mais jogos oficiais", value: "David O'Leary (722 jogos)" },
                { label: "Estádio", value: "Emirates Stadium (Londres)" }
            ],
            squad: [
    { number: 1, name: "David Raya", position: "Guarda-redes", nationality: "Espanha", age: 31, foot: "Direito", info: "Guarda-redes titular seguro na saída curta, nos cruzamentos e nas intervenções rápidas." },
    { number: 13, name: "Kepa Arrizabalaga", position: "Guarda-redes", nationality: "Espanha", age: 32, foot: "Direito", info: "Guarda-redes experiente com boa leitura de jogo e agilidade na baliza." },
    { number: 30, name: "Illan Meslier", position: "Guarda-redes", nationality: "França", age: 26, foot: "Esquerdo", info: "Guarda-redes alto e forte no 1x1 com experiência no futebol inglês." },

    { number: 2, name: "William Saliba", position: "Defesa", nationality: "França", age: 25, foot: "Direito", info: "Defesa-central elegante, rápido na recuperação de espaços e muito seguro com bola." },
    { number: 3, name: "Cristhian Mosquera", position: "Defesa", nationality: "Espanha", age: 22, foot: "Direito", info: "Defesa-central jovem com boa estatura, desarme e capacidade de jogar também à direita." },
    { number: 4, name: "Ben White", position: "Defesa", nationality: "Inglaterra", age: 29, foot: "Direito", info: "Lateral/central inteligente na construção, combativo e com boa ligação no corredor." },
    { number: 5, name: "Piero Hincapié", position: "Defesa", nationality: "Equador", age: 24, foot: "Esquerdo", info: "Defesa agressivo e versátil, capaz de atuar como central esquerdo ou lateral." },
    { number: 6, name: "Gabriel Magalhães", position: "Defesa", nationality: "Brasil", age: 28, foot: "Esquerdo", info: "Defesa-central potente no duelo físico e referência ofensiva nas bolas paradas." },
    { number: 12, name: "Jurriën Timber", position: "Defesa", nationality: "Países Baixos", age: 25, foot: "Direito", info: "Defesa polivalente, forte na condução, no 1x1 e na adaptação a vários lados da linha." },
    { number: 15, name: "Ezri Konsa", position: "Defesa", nationality: "Inglaterra", age: 29, foot: "Direito", info: "Defesa-central sólido e posicional, com consistência na Premier League." },
    { number: 33, name: "Riccardo Calafiori", position: "Defesa", nationality: "Itália", age: 24, foot: "Esquerdo", info: "Defesa com forte incursão ofensiva, passe vertical e versatilidade na linha defensiva." },
    { number: 49, name: "Myles Lewis-Skelly", position: "Defesa", nationality: "Inglaterra", age: 20, foot: "Esquerdo", info: "Jovem formado no clube capaz de jogar a lateral-esquerdo e em zonas interiores." },

    { number: 8, name: "Martin Ødegaard", position: "Médio", nationality: "Noruega", age: 27, foot: "Esquerdo", info: "Capitão e criativo principal, forte no passe entrelinhas, visão de jogo e pressão." },
    { number: 10, name: "Eberechi Eze", position: "Médio", nationality: "Inglaterra", age: 28, foot: "Direito", info: "Médio ofensivo técnico e desequilibrador no drible curto, condução e bola parada." },
    { number: 23, name: "Mikel Merino", position: "Médio", nationality: "Espanha", age: 30, foot: "Esquerdo", info: "Médio forte nos duelos, no jogo aéreo e na chegada à área em segunda linha." },
    { number: 36, name: "Martín Zubimendi", position: "Médio", nationality: "Espanha", age: 27, foot: "Direito", info: "Médio organizador de grande critério no passe, posicionamento e leitura do jogo." },
    { number: 39, name: "Bruno Guimarães", position: "Médio", nationality: "Brasil", age: 29, foot: "Direito", info: "Médio intenso e criativo, capaz de ditar ritmos, quebrar linhas e recuperar bolas." },
    { number: 41, name: "Declan Rice", position: "Médio", nationality: "Inglaterra", age: 27, foot: "Direito", info: "Médio box-to-box completo, com forte raio de ação, desarme, transporte e chegada." },

    { number: 7, name: "Bukayo Saka", position: "Avançado", nationality: "Inglaterra", age: 25, foot: "Esquerdo", info: "Extremo decisivo no 1x1, cruzamento, assistência e finalização pelo lado direito." },
    { number: 14, name: "Viktor Gyökeres", position: "Avançado", nationality: "Suécia", age: 28, foot: "Direito", info: "Ponta de lança potente, direto e goleador, forte nos ataques à profundidade e na área." },
    { number: 17, name: "Christos Tzolis", position: "Avançado", nationality: "Grécia", age: 24, foot: "Direito", info: "Extremo rápido e vertical com boa capacidade de drible e remate." },
    { number: 20, name: "Noni Madueke", position: "Avançado", nationality: "Inglaterra", age: 24, foot: "Esquerdo", info: "Extremo explosivo no drible e no ataque ao espaço no último terço." },
    { number: 29, name: "Kai Havertz", position: "Avançado", nationality: "Alemanha", age: 27, foot: "Esquerdo", info: "Avançado móvel e associativo, forte na ligação de jogo, desmarcação e finalização." }
],
            legends: ["Tony Adams", "Dennis Bergkamp", "Thierry Henry", "Patrick Vieira"],
            curiosities: [
                "Em 2003–04 sagrou-se campeão da Premier League sem qualquer derrota (26 vitórias e 12 empates).",
                "É o clube com mais conquistas da FA Cup (14 troféus)."
            ]
        },
        {
            id: "manchester-united",
            name: "Manchester United",
            fullName: "Manchester United Football Club",
            country: "Inglaterra",
            city: "Manchester",
            founded: 1878,
            stadium: "Old Trafford",
            crest: "assets/logos/clubs/manchester-united.jpg",
            photos: ["assets/images/clubs/manchester-united-1.jpg", "assets/images/clubs/manchester-united-2.jpg"],
            summary: "Um dos clubes com maior projeção global da história do futebol, marcado pelos 'Busby Babes', pela era Alex Ferguson e por Old Trafford.",
            history: "Nascido como Newton Heath LYR em 1878 e rebatizado Manchester United em 1902, o clube tornou-se o primeiro campeão inglês da Taça dos Campeões em 1968 e viveu um ciclo dominante sob Alex Ferguson, coroado pela 'treble' de 1999.",
            titles: [
                { competition: "Primeira Divisão / Premier League", count: 20, years: [1908, 1911, 1952, 1956, 1957, 1965, 1967, 1993, 1994, 1996, 1997, 1999, 2000, 2001, 2003, 2007, 2008, 2009, 2011, 2013] },
                { competition: "FA Cup", count: 13, years: [1909, 1948, 1963, 1977, 1983, 1985, 1990, 1994, 1996, 1999, 2004, 2016, 2024] },
                { competition: "EFL Cup", count: 6, years: [1992, 2006, 2009, 2010, 2017, 2023] },
                { competition: "Taça dos Campeões / Liga dos Campeões", count: 3, years: [1968, 1999, 2008] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Wayne Rooney (253 golos)" },
                { label: "Mais jogos oficiais", value: "Ryan Giggs (963 jogos)" },
                { label: "Estádio", value: "Old Trafford (Manchester)" }
            ],
            squad: [
    { number: 1, name: "Senne Lammens", position: "Guarda-redes", nationality: "Bélgica", age: 24, foot: "Direito", info: "Guarda-redes ágil e seguro nas saídas e defesas de perto." },
    { number: 12, name: "Karl Darlow", position: "Guarda-redes", nationality: "País de Gales", age: 36, foot: "Direito", info: "Guarda-redes experiente com longo percurso no futebol inglês." },
    { number: 22, name: "Tom Heaton", position: "Guarda-redes", nationality: "Inglaterra", age: 40, foot: "Direito", info: "Guarda-redes veterano e referência de balneário no clube." },
    { number: 45, name: "Dermot Mee", position: "Guarda-redes", nationality: "Irlanda do Norte", age: 24, foot: "Direito", info: "Guarda-redes formado nas camadas jovens do United." },

    { number: 2, name: "Diogo Dalot", position: "Defesa", nationality: "Portugal", age: 27, foot: "Direito", info: "Lateral versátil capaz de jogar em ambos os flancos, com resistência e chegada ofensiva." },
    { number: 3, name: "Noussair Mazraoui", position: "Defesa", nationality: "Marrocos", age: 29, foot: "Direito", info: "Defesa técnico e posicional, forte na construção e na adaptação a várias posições." },
    { number: 4, name: "Matthijs de Ligt", position: "Defesa", nationality: "Países Baixos", age: 27, foot: "Direito", info: "Defesa-central físico e agressivo nos duelos e no jogo aéreo." },
    { number: 5, name: "Harry Maguire", position: "Defesa", nationality: "Inglaterra", age: 33, foot: "Direito", info: "Defesa-central forte no jogo aéreo, na área e nas bolas paradas." },
    { number: 6, name: "Lisandro Martínez", position: "Defesa", nationality: "Argentina", age: 28, foot: "Esquerdo", info: "Defesa-central intenso, aguerrido no 1x1 e seguro no passe vertical." },
    { number: 13, name: "Patrick Dorgu", position: "Defesa", nationality: "Dinamarca", age: 22, foot: "Esquerdo", info: "Lateral/ala potente e dinâmico, com capacidade física para percorrer o corredor." },
    { number: 15, name: "Leny Yoro", position: "Defesa", nationality: "França", age: 21, foot: "Direito", info: "Jovem defesa-central com excelente leitura defensiva, alcance e saída de bola." },
    { number: 23, name: "Luke Shaw", position: "Defesa", nationality: "Inglaterra", age: 31, foot: "Esquerdo", info: "Lateral-esquerdo experiente, forte no cruzamento, condução e cobertura defensiva." },
    { number: 26, name: "Ayden Heaven", position: "Defesa", nationality: "Inglaterra", age: 20, foot: "Esquerdo", info: "Jovem defesa-central canhoto com boa mobilidade e projeção." },

    { number: 7, name: "Mason Mount", position: "Médio", nationality: "Inglaterra", age: 27, foot: "Direito", info: "Médio dinâmico e trabalhador sem bola, com mobilidade entre linhas e chegada à área." },
    { number: 8, name: "Bruno Fernandes", position: "Médio", nationality: "Portugal", age: 32, foot: "Direito", info: "Capitão e referência criativa, decisivo no passe, remate de fora e bolas paradas." },
    { number: 17, name: "Andrey Santos", position: "Médio", nationality: "Brasil", age: 22, foot: "Direito", info: "Médio jovem com capacidade de recuperação, chegada à área e jogo aéreo." },
    { number: 18, name: "Youri Tielemans", position: "Médio", nationality: "Bélgica", age: 29, foot: "Direito", info: "Médio organizador com excelente passe curto e longo e chegada em segunda linha." },
    { number: 20, name: "Carlos Baleba", position: "Médio", nationality: "Camarões", age: 22, foot: "Esquerdo", info: "Médio físico e combativo, forte na recuperação de bola e condução." },
    { number: 25, name: "Manuel Ugarte", position: "Médio", nationality: "Uruguai", age: 25, foot: "Direito", info: "Médio defensivo incansável na pressão, desarme e cobertura do meio-campo." },
    { number: 37, name: "Kobbie Mainoo", position: "Médio", nationality: "Inglaterra", age: 21, foot: "Direito", info: "Médio calmo sob pressão, com bom controlo em espaços curtos e critério no passe." },

    { number: 9, name: "Marcus Rashford", position: "Avançado", nationality: "Inglaterra", age: 29, foot: "Direito", info: "Avançado veloz e perigoso no ataque ao espaço, drible e remate." },
    { number: 10, name: "Matheus Cunha", position: "Avançado", nationality: "Brasil", age: 27, foot: "Direito", info: "Avançado criativo e móvel, forte no drible, associação e chegada à finalização." },
    { number: 11, name: "Joshua Zirkzee", position: "Avançado", nationality: "Países Baixos", age: 25, foot: "Direito", info: "Avançado técnico com boa capacidade de jogar de costas, associar-se e segurar bola." },
    { number: 16, name: "Amad Diallo", position: "Avançado", nationality: "Costa do Marfim", age: 24, foot: "Esquerdo", info: "Extremo canhoto ágil e criativo, forte no 1x1 e a fletir para dentro." },
    { number: 19, name: "Bryan Mbeumo", position: "Avançado", nationality: "Camarões", age: 27, foot: "Esquerdo", info: "Avançado/extremo rápido, perigoso na transição, finalização e bola parada." },
    { number: 30, name: "Benjamin Šeško", position: "Avançado", nationality: "Eslovénia", age: 23, foot: "Direito", info: "Ponta de lança potente e atlético, forte na velocidade, jogo aéreo e remate." }
],
            legends: ["Bobby Charlton", "George Best", "Ryan Giggs", "Eric Cantona"],
            curiosities: [
                "Old Trafford é conhecido como o 'Teatro dos Sonhos', expressão popularizada por Bobby Charlton.",
                "Em 1999 tornou-se a primeira equipa inglesa a vencer Premier League, FA Cup e Liga dos Campeões na mesma época."
            ]
        },
        {
            id: "chelsea",
            name: "Chelsea",
            fullName: "Chelsea Football Club",
            country: "Inglaterra",
            city: "Londres",
            founded: 1905,
            stadium: "Stamford Bridge",
            crest: "assets/logos/clubs/chelsea.jpg",
            photos: ["assets/images/clubs/chelsea-1.jpg", "assets/images/clubs/chelsea-2.jpg"],
            summary: "Clube de Stamford Bridge com forte palmarés no século XXI, incluindo dois títulos da Liga dos Campeões e todas as grandes taças da UEFA.",
            history: "Fundado em 1905 no oeste de Londres, o Chelsea afirmou-se como potência do futebol inglês e europeu a partir do início do século XXI, conquistando títulos da Premier League, FA Cup, Liga dos Campeões (2012 e 2021) e Liga Europa.",
            titles: [
                { competition: "Primeira Divisão / Premier League", count: 6, years: [1955, 2005, 2006, 2010, 2015, 2017] },
                { competition: "FA Cup", count: 8, years: [1970, 1997, 2000, 2007, 2009, 2010, 2012, 2018] },
                { competition: "EFL Cup", count: 5, years: [1965, 1998, 2005, 2007, 2015] },
                { competition: "Liga dos Campeões da UEFA", count: 2, years: [2012, 2021] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Frank Lampard (211 golos)" },
                { label: "Mais jogos oficiais", value: "Ron Harris (795 jogos)" },
                { label: "Estádio", value: "Stamford Bridge (Londres)" }
            ],
           squad: [
    { number: 1, name: "Emiliano Martínez", position: "Guarda-redes", nationality: "Argentina", age: 34, foot: "Direito", info: "Guarda-redes experiente e campeão do mundo, forte nos reflexos e na presença na área." },
    { number: 28, name: "Teddy Sharman-Lowe", position: "Guarda-redes", nationality: "Inglaterra", age: 23, foot: "Direito", info: "Guarda-redes formado no clube com boa envergadura e jogo aéreo." },
    { number: 39, name: "Mike Penders", position: "Guarda-redes", nationality: "Bélgica", age: 21, foot: "Esquerdo", info: "Jovem guarda-redes belga com grande estatura e leitura de jogo." },
    { number: 44, name: "Gabriel Slonina", position: "Guarda-redes", nationality: "Estados Unidos", age: 22, foot: "Direito", info: "Guarda-redes jovem com bons reflexos e capacidade de saída de bola." },

    { number: 2, name: "Marco Palestra", position: "Defesa", nationality: "Itália", age: 21, foot: "Direito", info: "Lateral-direito dinâmico com boa capacidade física e projeção ofensiva." },
    { number: 3, name: "Wesley Fofana", position: "Defesa", nationality: "França", age: 25, foot: "Direito", info: "Defesa-central rápido e agressivo na antecipação e nos duelos." },
    { number: 5, name: "Maxence Lacroix", position: "Defesa", nationality: "França", age: 26, foot: "Direito", info: "Defesa-central potente, rápido na recuperação de espaços e seguro no jogo aéreo." },
    { number: 6, name: "Levi Colwill", position: "Defesa", nationality: "Inglaterra", age: 23, foot: "Esquerdo", info: "Defesa-central canhoto com boa saída de bola e leitura defensiva." },
    { number: 21, name: "Jorrel Hato", position: "Defesa", nationality: "Países Baixos", age: 20, foot: "Esquerdo", info: "Defesa jovem e versátil, capaz de jogar a lateral-esquerdo ou central." },
    { number: 24, name: "Reece James", position: "Defesa", nationality: "Inglaterra", age: 26, foot: "Direito", info: "Capitão e lateral completo, forte no cruzamento, desarme, condução e chegada à frente." },
    { number: 27, name: "Malo Gusto", position: "Defesa", nationality: "França", age: 23, foot: "Direito", info: "Lateral-direito veloz e intenso, com grande resistência e apoio ofensivo." },
    { number: 29, name: "Pep Chavarría", position: "Defesa", nationality: "Espanha", age: 28, foot: "Esquerdo", info: "Lateral-esquerdo com boa passada e consistência defensiva." },
    { number: 30, name: "Aarón Anselmino", position: "Defesa", nationality: "Argentina", age: 21, foot: "Direito", info: "Jovem defesa-central argentino com boa presença aérea e agressividade." },
    { number: 34, name: "Josh Acheampong", position: "Defesa", nationality: "Inglaterra", age: 20, foot: "Direito", info: "Jovem defesa da formação capaz de atuar como lateral-direito ou central." },
    { number: 37, name: "Olutayo Subuloye", position: "Defesa", nationality: "Inglaterra", age: 18, foot: "Direito", info: "Jovem defesa-central integrado nas convocatórias da equipa principal." },

    { number: 4, name: "Valentín Barco", position: "Médio", nationality: "Argentina", age: 22, foot: "Esquerdo", info: "Jogador criativo e dinâmico, forte na condução, passe e chegada às zonas interiores." },
    { number: 10, name: "Cole Palmer", position: "Médio", nationality: "Inglaterra", age: 24, foot: "Esquerdo", info: "Médio ofensivo/criativo decisivo na visão de jogo, drible, finalização e bola parada." },
    { number: 14, name: "Jordan Henderson", position: "Médio", nationality: "Inglaterra", age: 36, foot: "Direito", info: "Médio experiente com liderança, organização de jogo e intensidade sem bola." },
    { number: 17, name: "Morgan Rogers", position: "Médio", nationality: "Inglaterra", age: 24, foot: "Direito", info: "Médio ofensivo/avançado potente na condução, drible e chegada à finalização." },
    { number: 23, name: "Geovany Quenda", position: "Médio", nationality: "Portugal", age: 19, foot: "Esquerdo", info: "Jovem ala/médio ofensivo canhoto, ágil no 1x1 e perigoso em progressão." },
    { number: 25, name: "Moisés Caicedo", position: "Médio", nationality: "Equador", age: 25, foot: "Direito", info: "Médio intenso e combativo, forte na recuperação, desarme e equilíbrio." },
    { number: 31, name: "Reggie Watson", position: "Médio", nationality: "Inglaterra", age: 16, foot: "Direito", info: "Jovem médio da academia com boa mobilidade e técnica." },
    { number: 32, name: "Mahdi Nicoll-Jazuli", position: "Médio", nationality: "Inglaterra", age: 16, foot: "Direito", info: "Jovem médio da formação integrado nos quadros do clube." },
    { number: 45, name: "Roméo Lavia", position: "Médio", nationality: "Bélgica", age: 22, foot: "Direito", info: "Médio defensivo técnico, calmo sob pressão e forte no passe vertical." },

    { number: 7, name: "Pedro Neto", position: "Avançado", nationality: "Portugal", age: 26, foot: "Esquerdo", info: "Extremo veloz e desequilibrador no 1x1, forte na transição e no cruzamento." },
    { number: 9, name: "João Pedro", position: "Avançado", nationality: "Brasil", age: 25, foot: "Direito", info: "Avançado móvel e técnico, forte na associação, drible e finalização." },
    { number: 11, name: "Jamie Gittens", position: "Avançado", nationality: "Inglaterra", age: 22, foot: "Direito", info: "Extremo explosivo no drible curto e na aceleração pelos corredores." },
    { number: 18, name: "Danny Welbeck", position: "Avançado", nationality: "Inglaterra", age: 35, foot: "Direito", info: "Avançado experiente com mobilidade, trabalho sem bola e leitura de jogo." },
    { number: 22, name: "Emmanuel Emegha", position: "Avançado", nationality: "Países Baixos", age: 23, foot: "Direito", info: "Ponta de lança rápido e físico, perigoso nos ataques ao espaço." },
    { number: 41, name: "Estêvão", position: "Avançado", nationality: "Brasil", age: 19, foot: "Esquerdo", info: "Jovem extremo canhoto criativo e elétrico no drible e no remate." }
],
            legends: ["Peter Osgood", "Frank Lampard", "John Terry", "Didier Drogba"],
            curiosities: [
                "Foi o primeiro clube a conquistar as quatro grandes competições europeias de clubes da UEFA em diferentes momentos (Champions, Europa League, Cup Winners' Cup e Super Cup).",
                "Em 2004–05 estabeleceu o recorde de menos golos sofridos numa edição da Premier League (15 golos)."
            ]
        },
        {
            id: "tottenham",
            name: "Tottenham",
            fullName: "Tottenham Hotspur Football Club",
            country: "Inglaterra",
            city: "Londres",
            founded: 1882,
            stadium: "Tottenham Hotspur Stadium",
            crest: "assets/logos/clubs/tottenham.jpg",
            photos: ["assets/images/clubs/tottenham-1.jpg", "assets/images/clubs/tottenham-2.jpg"],
            summary: "Clube histórico de Londres conhecido pelo lema 'To Dare Is To Do' e pelo primeiro 'double' (Liga + FA Cup) do século XX em Inglaterra.",
            history: "Fundado em 1882 por jovens estudantes de Tottenham, o clube fez história em 1901 ao vencer a FA Cup como equipa não pertencente à Football League e em 1961 ao completar a dobradinha Liga + FA Cup.",
            titles: [
                { competition: "Primeira Divisão", count: 2, years: [1951, 1961] },
                { competition: "FA Cup", count: 8, years: [1901, 1921, 1961, 1962, 1967, 1981, 1982, 1991] },
                { competition: "EFL Cup", count: 4, years: [1971, 1973, 1999, 2008] },
                { competition: "Taça UEFA / Liga Europa", count: 2, years: [1972, 1984] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Harry Kane (280 golos)" },
                { label: "Mais jogos oficiais", value: "Steve Perryman (854 jogos)" },
                { label: "Estádio", value: "Tottenham Hotspur Stadium (Londres)" }
            ],
            squad: [
    { number: 31, name: "Antonín Kinský", position: "Guarda-redes", nationality: "República Checa", age: 23, foot: "Direito", info: "Guarda-redes jovem com boa agilidade nos reflexos e saída de bola." },
    { number: 39, name: "Martin Dúbravka", position: "Guarda-redes", nationality: "Eslováquia", age: 37, foot: "Direito", info: "Guarda-redes experiente na Premier League, seguro na área e nas intervenções." },
    { number: 40, name: "Brandon Austin", position: "Guarda-redes", nationality: "Inglaterra", age: 27, foot: "Direito", info: "Guarda-redes formado no clube para compor as opções da baliza." },
    { number: 46, name: "Luca Gunter", position: "Guarda-redes", nationality: "Inglaterra", age: 21, foot: "Direito", info: "Jovem guarda-redes da estrutura do clube integrado na lista da época." },

    { number: 3, name: "Andy Robertson", position: "Defesa", nationality: "Escócia", age: 32, foot: "Esquerdo", info: "Lateral-esquerdo experiente, intenso nas subidas, cruzamento e liderança." },
    { number: 4, name: "Tosin Adarabioyo", position: "Defesa", nationality: "Inglaterra", age: 29, foot: "Direito", info: "Defesa-central alto e posicional, forte nas bolas paradas e na saída curta." },
    { number: 5, name: "Marcos Senesi", position: "Defesa", nationality: "Argentina", age: 29, foot: "Esquerdo", info: "Defesa-central canhoto combativo nos duelos e seguro na construção a partir de trás." },
    { number: 6, name: "Jan Paul van Hecke", position: "Defesa", nationality: "Países Baixos", age: 26, foot: "Direito", info: "Defesa-central agressivo na antecipação, firme no 1x1 e confiável com bola." },
    { number: 13, name: "Destiny Udogie", position: "Defesa", nationality: "Itália", age: 23, foot: "Esquerdo", info: "Lateral-esquerdo físico e dinâmico, forte na condução e nas incursões ofensivas." },
    { number: 23, name: "Pedro Porro", position: "Defesa", nationality: "Espanha", age: 27, foot: "Direito", info: "Lateral-direito ofensivo com excelente cruzamento, passe vertical e remate de fora." },
    { number: 33, name: "Ben Davies", position: "Defesa", nationality: "País de Gales", age: 33, foot: "Esquerdo", info: "Defesa experiente e polivalente, capaz de jogar a central esquerdo ou lateral." },
    { number: 37, name: "Micky van de Ven", position: "Defesa", nationality: "Países Baixos", age: 25, foot: "Esquerdo", info: "Capitão e defesa-central canhoto de grande velocidade, forte na cobertura e passe." },

    { number: 7, name: "Xavi Simons", position: "Médio", nationality: "Países Baixos", age: 23, foot: "Direito", info: "Criativo versátil e móvel, forte no drible, passe decisivo, mobilidade e remate." },
    { number: 8, name: "Conor Gallagher", position: "Médio", nationality: "Inglaterra", age: 26, foot: "Direito", info: "Médio incansável na pressão, recuperação de bola, energia e chegada à área." },
    { number: 10, name: "James Maddison", position: "Médio", nationality: "Inglaterra", age: 29, foot: "Direito", info: "Médio criativo com grande visão de jogo, passe entrelinhas, remate e bola parada." },
    { number: 14, name: "Archie Gray", position: "Médio", nationality: "Inglaterra", age: 20, foot: "Direito", info: "Jovem polivalente capaz de atuar no meio-campo ou na defesa com critério tático." },
    { number: 15, name: "Lucas Bergvall", position: "Médio", nationality: "Suécia", age: 20, foot: "Direito", info: "Médio jovem criativo e dinâmico, com boa condução, passe e chegada à frente." },
    { number: 16, name: "Sandro Tonali", position: "Médio", nationality: "Itália", age: 26, foot: "Direito", info: "Médio completo no ritmo de jogo, desarme, passe longo e organização do meio-campo." },
    { number: 18, name: "Mateus Fernandes", position: "Médio", nationality: "Portugal", age: 22, foot: "Direito", info: "Médio dinâmico e técnico, forte na condução sob pressão, transporte e ligação." },
    { number: 20, name: "Mohammed Kudus", position: "Médio", nationality: "Gana", age: 26, foot: "Esquerdo", info: "Jogador potente e criativo, muito difícil de desarmar no 1x1 e perigoso no remate." },
    { number: 21, name: "Dejan Kulusevski", position: "Médio", nationality: "Suécia", age: 26, foot: "Esquerdo", info: "Criativo/avançado canhoto, forte na condução, cruzamento, assistência e drible." },
    { number: 27, name: "Mykhailo Mudryk", position: "Médio", nationality: "Ucrânia", age: 25, foot: "Direito", info: "Extremo/ala muito rápido e vertical, perigoso na aceleração e no ataque ao espaço." },
    { number: 30, name: "Rodrigo Bentancur", position: "Médio", nationality: "Uruguai", age: 29, foot: "Direito", info: "Médio equilibrado e experiente, forte na leitura defensiva, desarme e passe." },
    { number: 52, name: "Callum Olusesi", position: "Médio", nationality: "Inglaterra", age: 19, foot: "Direito", info: "Jovem médio da formação integrado no plantel da época." },
    { number: 68, name: "Luca Williams-Barnett", position: "Médio", nationality: "Inglaterra", age: 18, foot: "Direito", info: "Jovem médio ofensivo de grande projeção formado no clube." },

    { number: 9, name: "Richarlison", position: "Avançado", nationality: "Brasil", age: 29, foot: "Direito", info: "Avançado combativo e móvel, forte na pressão, no jogo aéreo e na chegada à área." },
    { number: 11, name: "Mathys Tel", position: "Avançado", nationality: "França", age: 21, foot: "Direito", info: "Jovem avançado rápido e explosivo, capaz de atuar nas alas ou na frente com remate forte." },
    { number: 17, name: "Sávio", position: "Avançado", nationality: "Brasil", age: 22, foot: "Esquerdo", info: "Extremo canhoto ágil e desequilibrador no drible em progressão e no cruzamento." },
    { number: 19, name: "Dominic Solanke", position: "Avançado", nationality: "Inglaterra", age: 29, foot: "Direito", info: "Ponta de lança trabalhador e goleador, forte no apoio frontal, pressão e finalização." },
    { number: 22, name: "Omar Marmoush", position: "Avançado", nationality: "Egito", age: 27, foot: "Direito", info: "Avançado rápido e móvel, perigoso na transição, drible, finalização e bola parada." },
    { number: 28, name: "Wilson Odobert", position: "Avançado", nationality: "França", age: 21, foot: "Direito", info: "Extremo jovem e vertical, forte no 1x1, aceleração e chegada ao último terço." }
],
            legends: ["Danny Blanchflower", "Jimmy Greaves", "Glenn Hoddle", "Harry Kane"],
            curiosities: [
                "Foi o primeiro clube britânico a conquistar uma competição europeia de clubes (Taça das Taças em 1963).",
                "O seu estádio moderno, inaugurado em 2019, foi projetado com relva retrátil para acolher jogos de futebol americano."
            ]
        },

        /* ESPANHA */
        {
            id: "real-madrid",
            name: "Real Madrid",
            fullName: "Real Madrid Club de Fútbol",
            country: "Espanha",
            city: "Madrid",
            founded: 1902,
            stadium: "Estádio Santiago Bernabéu",
            crest: "assets/logos/clubs/real-madrid.jpg",
            photos: ["assets/images/clubs/real-madrid-1.jpg", "assets/images/clubs/real-madrid-2.jpg"],
            summary: "O clube mais vitorioso da história da Taça dos Campeões / Liga dos Campeões e referência absoluta do futebol mundial.",
            history: "Fundado em 1902 como Madrid Football Club e distinguido com o título 'Real' em 1920, o clube dominou os primeiros anos da Taça dos Campeões nos anos 1950 e construiu múltiplas eras douradas até aos dias de hoje.",
            titles: [
                { competition: "La Liga (Campeonato de Espanha)", count: 36, years: [1932, 1933, 1954, 1955, 1957, 1958, 1961, 1962, 1963, 1964, 1965, 1967, 1968, 1969, 1972, 1975, 1976, 1978, 1979, 1980, 1986, 1987, 1988, 1989, 1990, 1995, 1997, 2001, 2003, 2007, 2008, 2012, 2017, 2020, 2022, 2024] },
                { competition: "Copa del Rey", count: 20, years: [1905, 1906, 1907, 1908, 1917, 1934, 1936, 1946, 1947, 1962, 1970, 1974, 1975, 1980, 1982, 1989, 1993, 2011, 2014, 2023] },
                { competition: "Taça dos Campeões / Liga dos Campeões", count: 15, years: [1956, 1957, 1958, 1959, 1960, 1966, 1998, 2000, 2002, 2014, 2016, 2017, 2018, 2022, 2024] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Cristiano Ronaldo (450 golos)" },
                { label: "Mais jogos oficiais", value: "Raúl González (741 jogos)" },
                { label: "Estádio", value: "Estádio Santiago Bernabéu (Madrid)" }
            ],
            squad: [
    { number: 1, name: "Thibaut Courtois", position: "Guarda-redes", nationality: "Bélgica", age: 34, foot: "Esquerdo", info: "Guarda-redes de grande envergadura, forte no 1x1, nos reflexos e no jogo aéreo." },
    { number: 13, name: "Andriy Lunin", position: "Guarda-redes", nationality: "Ucrânia", age: 27, foot: "Direito", info: "Guarda-redes ágil e seguro sob os postes com boa leitura de jogo." },

    { number: 2, name: "Raúl Asencio", position: "Defesa", nationality: "Espanha", age: 23, foot: "Direito", info: "Defesa-central intenso e firme nos duelos e na cobertura defensiva." },
    { number: 3, name: "Éder Militão", position: "Defesa", nationality: "Brasil", age: 28, foot: "Direito", info: "Defesa-central potente e rápido, forte na antecipação, duelos e saída de bola." },
    { number: 4, name: "Dean Huijsen", position: "Defesa", nationality: "Espanha", age: 21, foot: "Direito", info: "Defesa-central alto e elegante na construção a partir de trás." },
    { number: 12, name: "Trent Alexander-Arnold", position: "Defesa", nationality: "Inglaterra", age: 28, foot: "Direito", info: "Lateral com visão de jogo de elite, passe longo, cruzamento e bola parada." },
    { number: 16, name: "Ibrahima Konaté", position: "Defesa", nationality: "França", age: 27, foot: "Direito", info: "Defesa-central físico e veloz, dominante nos duelos e na recuperação de espaços." },
    { number: 17, name: "Marc Cucurella", position: "Defesa", nationality: "Espanha", age: 28, foot: "Esquerdo", info: "Lateral-esquerdo combativo no 1x1, intenso na pressão e móvel por dentro." },
    { number: 18, name: "Álvaro Carreras", position: "Defesa", nationality: "Espanha", age: 23, foot: "Esquerdo", info: "Lateral-esquerdo com boa passada, condução e chegada pelo corredor." },
    { number: 22, name: "Antonio Rüdiger", position: "Defesa", nationality: "Alemanha", age: 33, foot: "Direito", info: "Defesa-central agressivo e experiente, forte na marcação, velocidade e área." },
    { number: 23, name: "Ferland Mendy", position: "Defesa", nationality: "França", age: 31, foot: "Esquerdo", info: "Lateral-esquerdo sólido no 1x1 defensivo e seguro na condução sob pressão." },
    { number: 24, name: "Denzel Dumfries", position: "Defesa", nationality: "Países Baixos", age: 30, foot: "Direito", info: "Lateral potente e incansável, perigoso nas incursões à área e no jogo aéreo." },

    { number: 5, name: "Jude Bellingham", position: "Médio", nationality: "Inglaterra", age: 23, foot: "Direito", info: "Médio completo e decisivo, forte na chegada à área, condução, drible e finalização." },
    { number: 6, name: "Eduardo Camavinga", position: "Médio", nationality: "França", age: 24, foot: "Esquerdo", info: "Médio dinâmico e versátil, forte no desarme, condução sob pressão e cobertura." },
    { number: 8, name: "Federico Valverde", position: "Médio", nationality: "Uruguai", age: 28, foot: "Direito", info: "Capitão e médio de grande raio de ação, potente no remate, corrida e transição." },
    { number: 14, name: "Aurélien Tchouaméni", position: "Médio", nationality: "França", age: 26, foot: "Direito", info: "Médio defensivo físico e posicional, forte na recuperação e na saída de bola." },
    { number: 15, name: "Arda Güler", position: "Médio", nationality: "Turquia", age: 21, foot: "Esquerdo", info: "Médio ofensivo criativo com toque refinado, visão de jogo, drible e remate." },
    { number: 20, name: "Bernardo Silva", position: "Médio", nationality: "Portugal", age: 32, foot: "Esquerdo", info: "Médio criativo e inteligente na ocupação de espaços, controlo e associação." },
    { number: 27, name: "Thiago Pitarch", position: "Médio", nationality: "Espanha", age: 19, foot: "Direito", info: "Jovem médio da formação com boa mobilidade e critério com bola." },

    { number: 7, name: "Vinícius Júnior", position: "Avançado", nationality: "Brasil", age: 26, foot: "Direito", info: "Extremo explosivo no 1x1, drible e velocidade, decisivo na criação e finalização." },
    { number: 9, name: "Endrick", position: "Avançado", nationality: "Brasil", age: 20, foot: "Esquerdo", info: "Avançado potente e explosivo no remate, forte na aceleração e ataque à área." },
    { number: 10, name: "Kylian Mbappé", position: "Avançado", nationality: "França", age: 27, foot: "Direito", info: "Avançado letal na velocidade, desmarcação em profundidade, drible e finalização." },
    { number: 11, name: "Rodrygo", position: "Avançado", nationality: "Brasil", age: 25, foot: "Direito", info: "Avançado móvel e técnico, perigoso no drible curto, associação e em jogos grandes." },
    { number: 19, name: "Carlos Espí", position: "Avançado", nationality: "Espanha", age: 21, foot: "Direito", info: "Ponta de lança jovem com presença na área e mobilidade na frente." },
    { number: 21, name: "Brahim Díaz", position: "Avançado", nationality: "Marrocos", age: 27, foot: "Esquerdo", info: "Avançado/médio ofensivo ágil no drible em espaços curtos e na chegada à área." },
    { number: 25, name: "Yan Diomande", position: "Avançado", nationality: "Costa do Marfim", age: 20, foot: "Direito", info: "Jovem extremo veloz e vertical com capacidade de desequilíbrio no flanco." }
],
            legends: ["Alfredo Di Stéfano", "Francisco Gento", "Raúl González", "Cristiano Ronaldo"],
            curiosities: [
                "Venceu as cinco primeiras edições da Taça dos Campeões Europeus (1956 a 1960).",
                "Foi eleito pela FIFA o Melhor Clube do Século XX."
            ]
        },
        {
            id: "barcelona",
            name: "Barcelona",
            fullName: "Futbol Club Barcelona",
            country: "Espanha",
            city: "Barcelona",
            founded: 1899,
            stadium: "Spotify Camp Nou",
            crest: "assets/logos/clubs/barcelona.jpg",
            photos: ["assets/images/clubs/barcelona-1.jpg", "assets/images/clubs/barcelona-2.jpg"],
            summary: "Símbolo da identidade catalã e referência histórica de jogo associativo, formação em La Masia e conquistas múltiplas.",
            history: "Fundado em 1899 por um grupo liderado por Joan Gamper, o FC Barcelona marcou o futebol mundial com a filosofia introduzida por Johan Cruyff e levada ao auge em 2009 com a conquista de seis troféus num único ano civil.",
            titles: [
                { competition: "La Liga (Campeonato de Espanha)", count: 27, years: [1929, 1945, 1948, 1949, 1952, 1953, 1959, 1960, 1974, 1985, 1991, 1992, 1993, 1994, 1998, 1999, 2005, 2006, 2009, 2010, 2011, 2013, 2015, 2016, 2018, 2019, 2023] },
                { competition: "Copa del Rey", count: 31, years: [1910, 1912, 1913, 1920, 1922, 1925, 1926, 1928, 1942, 1951, 1952, 1953, 1957, 1959, 1963, 1968, 1971, 1978, 1981, 1983, 1988, 1990, 1997, 1998, 2009, 2012, 2015, 2016, 2017, 2018, 2021] },
                { competition: "Taça dos Campeões / Liga dos Campeões", count: 5, years: [1992, 2006, 2009, 2011, 2015] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Lionel Messi (672 golos)" },
                { label: "Mais jogos oficiais", value: "Lionel Messi (778 jogos)" },
                { label: "Estádio", value: "Spotify Camp Nou (Barcelona)" }
            ],
            squad: [
    { number: 1, name: "Joan García", position: "Guarda-redes", nationality: "Espanha", age: 25, foot: "Direito", info: "Guarda-redes ágil nos reflexos, forte no 1x1 e seguro nas intervenções." },
    { number: 13, name: "Wojciech Szczęsny", position: "Guarda-redes", nationality: "Polónia", age: 36, foot: "Direito", info: "Guarda-redes experiente com forte presença na área e leitura de jogo." },
    { number: 25, name: "Dominik Livaković", position: "Guarda-redes", nationality: "Croácia", age: 31, foot: "Direito", info: "Guarda-redes rápido sob os postes e seguro em jogos de alta pressão." },

    { number: 2, name: "João Cancelo", position: "Defesa", nationality: "Portugal", age: 32, foot: "Direito", info: "Lateral criativo e técnico, forte na condução interior, passe e chegada à frente." },
    { number: 3, name: "Alejandro Balde", position: "Defesa", nationality: "Espanha", age: 23, foot: "Esquerdo", info: "Lateral-esquerdo muito veloz e explosivo na ultrapassagem e na linha de fundo." },
    { number: 5, name: "Pau Cubarsí", position: "Defesa", nationality: "Espanha", age: 19, foot: "Direito", info: "Defesa-central maduro e sereno na saída de bola, passe vertical e antecipação." },
    { number: 12, name: "Xavi Espart", position: "Defesa", nationality: "Espanha", age: 19, foot: "Direito", info: "Jovem defesa da formação com boa leitura tática e mobilidade." },
    { number: 15, name: "Andreas Christensen", position: "Defesa", nationality: "Dinamarca", age: 30, foot: "Direito", info: "Defesa-central posicional e calmo com bola, com bom passe e leitura defensiva." },
    { number: 18, name: "Gerard Martín", position: "Defesa", nationality: "Espanha", age: 24, foot: "Esquerdo", info: "Lateral-esquerdo disciplinado com boa passada e apoio ofensivo." },
    { number: 23, name: "Jules Koundé", position: "Defesa", nationality: "França", age: 28, foot: "Direito", info: "Defesa sólido e versátil, forte nos duelos, posicionamento e cobertura." },
    { number: 24, name: "Eric García", position: "Defesa", nationality: "Espanha", age: 25, foot: "Direito", info: "Defesa inteligente na construção a partir de trás e capaz de jogar no eixo ou na lateral." },

    { number: 4, name: "Brian Fariñas", position: "Médio", nationality: "Espanha", age: 20, foot: "Direito", info: "Jovem médio da formação com boa visão de jogo e controlo de bola." },
    { number: 6, name: "Gavi", position: "Médio", nationality: "Espanha", age: 22, foot: "Direito", info: "Médio intenso e combativo, forte na pressão, recuperação e ligação rápida." },
    { number: 7, name: "Fermín López", position: "Médio", nationality: "Espanha", age: 23, foot: "Direito", info: "Médio dinâmico com forte chegada à área, remate e intensidade sem bola." },
    { number: 8, name: "Pedri", position: "Médio", nationality: "Espanha", age: 23, foot: "Direito", info: "Médio criativo e organizador, exímio no controlo sob pressão, drible curto e passe." },
    { number: 16, name: "Rodri", position: "Médio", nationality: "Espanha", age: 30, foot: "Direito", info: "Médio defensivo de referência no controlo do ritmo, passe e equilíbrio da equipa." },
    { number: 20, name: "Dani Olmo", position: "Médio", nationality: "Espanha", age: 28, foot: "Direito", info: "Médio ofensivo criativo e móvel, forte entre linhas, na associação e na finalização." },
    { number: 21, name: "Frenkie de Jong", position: "Médio", nationality: "Países Baixos", age: 29, foot: "Direito", info: "Médio forte na condução progressiva, limpeza de jogo e ligação entre setores." },
    { number: 22, name: "Marc Bernal", position: "Médio", nationality: "Espanha", age: 19, foot: "Esquerdo", info: "Jovem médio defensivo canhoto com boa leitura posicional e saída curta." },

    { number: 9, name: "Gabriel Jesus", position: "Avançado", nationality: "Brasil", age: 29, foot: "Direito", info: "Avançado móvel e trabalhador na pressão, forte no drible, associação e desmarcação." },
    { number: 10, name: "Lamine Yamal", position: "Avançado", nationality: "Espanha", age: 19, foot: "Esquerdo", info: "Extremo canhoto criativo e desequilibrador no 1x1, passe decisivo e remate." },
    { number: 11, name: "Raphinha", position: "Avançado", nationality: "Brasil", age: 29, foot: "Esquerdo", info: "Capitão e avançado intenso, forte no ataque ao espaço, remate, cruzamento e pressão." },
    { number: 14, name: "Karim Adeyemi", position: "Avançado", nationality: "Alemanha", age: 24, foot: "Esquerdo", info: "Avançado muito rápido e vertical, perigoso nas transições e ataques à profundidade." },
    { number: 17, name: "Anthony Gordon", position: "Avançado", nationality: "Inglaterra", age: 25, foot: "Direito", info: "Extremo veloz e direto, forte na condução, pressão, transição e chegada à área." },
    { number: 19, name: "Roony Bardghji", position: "Avançado", nationality: "Suécia", age: 21, foot: "Esquerdo", info: "Extremo canhoto técnico e criativo no drible e no remate." },
    { number: 27, name: "Jesse Bisiwu", position: "Avançado", nationality: "Bélgica", age: 18, foot: "Direito", info: "Jovem avançado rápido e móvel integrado na equipa principal." },
    { number: 29, name: "Hamza Abdelkarim", position: "Avançado", nationality: "Egito", age: 18, foot: "Direito", info: "Jovem avançado com mobilidade na frente de ataque." }
],
            legends: ["Johan Cruyff", "Carles Puyol", "Xavi Hernández", "Lionel Messi"],
            curiosities: [
                "Em 2009 tornou-se o primeiro clube da história a conquistar seis competições oficiais no mesmo ano (La Liga, Copa del Rey, Champions, Supertaça de Espanha, Supertaça Europeia e Mundial de Clubes).",
                "A academia La Masia formou gerações inteiras de internacionais espanhóis campeões do mundo e da Europa."
            ]
        },
        {
            id: "atletico-madrid",
            name: "Atlético Madrid",
            fullName: "Club Atlético de Madrid",
            country: "Espanha",
            city: "Madrid",
            founded: 1903,
            stadium: "Riyadh Air Metropolitano",
            crest: "assets/logos/clubs/atletico-madrid.jpg",
            photos: ["assets/images/clubs/atletico-madrid-1.jpg", "assets/images/clubs/atletico-madrid-2.jpg"],
            summary: "Terceira grande força histórica de Espanha, reconhecida pela garra competitiva, títulos nacionais e conquistas europeias.",
            history: "Fundado em 1903 como Athletic Club Sucursal de Madrid, o Atlético construiu um palmarés de peso em Espanha e na Europa, consolidando-se como potência regular no topo de La Liga e da Liga dos Campeões na era de Diego Simeone.",
            titles: [
                { competition: "La Liga (Campeonato de Espanha)", count: 11, years: [1940, 1941, 1950, 1951, 1966, 1970, 1973, 1977, 1996, 2014, 2021] },
                { competition: "Copa del Rey", count: 10, years: [1960, 1961, 1965, 1972, 1976, 1985, 1991, 1992, 1996, 2013] },
                { competition: "Liga Europa da UEFA", count: 3, years: [2010, 2012, 2018] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Adrián Escudero (169 golos)" },
                { label: "Mais jogos oficiais", value: "Koke (600+ jogos)" },
                { label: "Estádio", value: "Riyadh Air Metropolitano (Madrid)" }
            ],
            squad: [
    { number: 1, name: "Juan Musso", position: "Guarda-redes", nationality: "Argentina", age: 32, foot: "Direito", info: "Guarda-redes experiente com bons reflexos e saída da baliza." },
    { number: 13, name: "Jan Oblak", position: "Guarda-redes", nationality: "Eslovénia", age: 33, foot: "Direito", info: "Guarda-redes de referência, fortíssimo sob os postes, no 1x1 e na leitura da área." },

    { number: 17, name: "Dávid Hancko", position: "Defesa", nationality: "Eslováquia", age: 28, foot: "Esquerdo", info: "Defesa canhoto versátil, forte na construção, passe longo, jogo aéreo e lateral." },
    { number: 18, name: "Marc Pubill", position: "Defesa", nationality: "Espanha", age: 23, foot: "Direito", info: "Lateral-direito físico e dinâmico com capacidade de subida pelo flanco." },
    { number: 21, name: "Cristian Romero", position: "Defesa", nationality: "Argentina", age: 28, foot: "Direito", info: "Defesa-central intenso e agressivo na antecipação, duelos e saída de bola." },
    { number: 22, name: "Álex Grimaldo", position: "Defesa", nationality: "Espanha", age: 31, foot: "Esquerdo", info: "Lateral-esquerdo muito ofensivo, forte no cruzamento, passe, remate e bola parada." },
    { number: 24, name: "Robin Le Normand", position: "Defesa", nationality: "Espanha", age: 30, foot: "Direito", info: "Defesa-central combativo e posicional, firme nos duelos e na organização." },
    { number: 25, name: "Esquivel", position: "Defesa", nationality: "Argentina", age: 22, foot: "Esquerdo", info: "Defesa jovem integrado nas opções do plantel." },
    { number: 30, name: "D. Martínez", position: "Defesa", nationality: "Espanha", age: 21, foot: "Direito", info: "Jovem defesa integrado nas opções da equipa." },

    { number: 3, name: "Obed Vargas", position: "Médio", nationality: "México", age: 21, foot: "Direito", info: "Jovem médio dinâmico com boa mobilidade e capacidade de trabalho no meio-campo." },
    { number: 4, name: "Rodri Mendoza", position: "Médio", nationality: "Espanha", age: 21, foot: "Direito", info: "Jovem médio criativo com boa leitura de jogo e condução." },
    { number: 5, name: "Johnny Cardoso", position: "Médio", nationality: "Estados Unidos", age: 25, foot: "Direito", info: "Médio combativo e equilibrado na recuperação de bola, desarme e ligação." },
    { number: 6, name: "Koke", position: "Médio", nationality: "Espanha", age: 34, foot: "Direito", info: "Capitão e referência de organização, passe, leitura tática e liderança em campo." },
    { number: 7, name: "Lee Kang-in", position: "Médio", nationality: "Coreia do Sul", age: 25, foot: "Esquerdo", info: "Médio ofensivo/criativo canhoto com ótimo drible curto, visão e bola parada." },
    { number: 8, name: "Pablo Barrios", position: "Médio", nationality: "Espanha", age: 23, foot: "Direito", info: "Médio dinâmico e intenso, forte na pressão, condução e chegada entre linhas." },
    { number: 10, name: "Álex Baena", position: "Médio", nationality: "Espanha", age: 25, foot: "Direito", info: "Criativo incisivo no passe decisivo, cruzamento, bola parada e chegada à frente." },
    { number: 14, name: "Marcos Llorente", position: "Médio", nationality: "Espanha", age: 31, foot: "Direito", info: "Jogador de grande potência física e velocidade, decisivo em transição e chegada." },
    { number: 16, name: "Arnau Ortiz", position: "Médio", nationality: "Espanha", age: 25, foot: "Direito", info: "Ala/médio com boa capacidade de corrida e largura no corredor." },
    { number: 20, name: "Giuliano Simeone", position: "Médio", nationality: "Argentina", age: 23, foot: "Direito", info: "Jogador intenso e vertical na pressão, corrida e chegada ao último terço." },
    { number: 23, name: "Morten Hjulmand", position: "Médio", nationality: "Dinamarca", age: 27, foot: "Direito", info: "Médio combativo e organizador, forte no desarme, liderança e passe vertical." },

    { number: 9, name: "Alexander Sørloth", position: "Avançado", nationality: "Noruega", age: 30, foot: "Esquerdo", info: "Ponta de lança físico e forte no jogo aéreo, proteção de bola e finalização." },
    { number: 11, name: "Ademola Lookman", position: "Avançado", nationality: "Nigéria", age: 29, foot: "Direito", info: "Avançado/extremo ágil e explosivo no 1x1, drible, transição e remate." },
    { number: 15, name: "Jonathan David", position: "Avançado", nationality: "Canadá", age: 26, foot: "Direito", info: "Avançado móvel e inteligente nos ataques ao espaço, ligação e finalização." },
    { number: 19, name: "Julián Álvarez", position: "Avançado", nationality: "Argentina", age: 26, foot: "Direito", info: "Avançado versátil e goleador, forte na pressão, mobilidade, remate e bola parada." }
],
            legends: ["Luis Aragonés", "Adelardo Rodríguez", "Fernando Torres", "Diego Godín"],
            curiosities: [
                "As riscas vermelhas e brancas inspiraram-se no fornecimento de equipamentos do Athletic Club de Bilbao (e originalmente nas cores de mantas económicas em Inglaterra).",
                "Venceu três edições da Liga Europa em oito anos (2010, 2012 e 2018)."
            ]
        },

        /* ALEMANHA */
        {
            id: "bayern-de-munique",
            name: "Bayern de Munique",
            fullName: "Fußball-Club Bayern München e. V.",
            country: "Alemanha",
            city: "Munique",
            founded: 1900,
            stadium: "Allianz Arena",
            crest: "assets/logos/clubs/bayern-munich.jpg",
            photos: ["assets/images/clubs/bayern-munich-1.jpg", "assets/images/clubs/bayern-munich-2.jpg"],
            summary: "O gigante do futebol alemão e um dos clubes mais vitoriosos da história europeia, com seis Taças dos Campeões / Ligas dos Campeões.",
            history: "Fundado em 1900 por ginastas de Munique, o Bayern cresceu de forma extraordinária a partir do final dos anos 1960 e 1970, tornando-se a referência da Bundesliga e conquistando o 'sextete' em 2020.",
            titles: [
                { competition: "Campeonato Alemão / Bundesliga", count: 33, years: [1932, 1969, 1972, 1973, 1974, 1980, 1981, 1985, 1986, 1987, 1989, 1990, 1994, 1997, 1999, 2000, 2001, 2003, 2005, 2006, 2008, 2010, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023] },
                { competition: "DFB-Pokal", count: 20, years: [1957, 1966, 1967, 1969, 1971, 1982, 1984, 1986, 1998, 2000, 2003, 2005, 2006, 2008, 2010, 2013, 2014, 2016, 2019, 2020] },
                { competition: "Taça dos Campeões / Liga dos Campeões", count: 6, years: [1974, 1975, 1976, 2001, 2013, 2020] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Gerd Müller (566 golos)" },
                { label: "Mais jogos oficiais", value: "Thomas Müller (700+ jogos)" },
                { label: "Estádio", value: "Allianz Arena (Munique)" }
            ],
           squad: [
    { number: 1, name: "Manuel Neuer", position: "Guarda-redes", nationality: "Alemanha", age: 40, foot: "Direito", info: "Capitão e referência na baliza, forte na saída de bola, leitura da área e 1x1." },
    { number: 26, name: "Sven Ulreich", position: "Guarda-redes", nationality: "Alemanha", age: 38, foot: "Direito", info: "Guarda-redes experiente e fiável nas opções da baliza." },
    { number: 40, name: "Jonas Urbig", position: "Guarda-redes", nationality: "Alemanha", age: 23, foot: "Direito", info: "Jovem guarda-redes alemão com bons reflexos e saída de bola." },

    { number: 2, name: "Dayot Upamecano", position: "Defesa", nationality: "França", age: 28, foot: "Direito", info: "Defesa-central potente fisicamente, agressivo nos duelos e com boa construção." },
    { number: 3, name: "Kim Min-jae", position: "Defesa", nationality: "Coreia do Sul", age: 30, foot: "Direito", info: "Defesa-central intenso na marcação, rápido na cobertura e firme no desarme." },
    { number: 4, name: "Jonathan Tah", position: "Defesa", nationality: "Alemanha", age: 30, foot: "Direito", info: "Defesa-central sólido e experiente, forte no jogo aéreo e na organização defensiva." },
    { number: 11, name: "Nathaniel Brown", position: "Defesa", nationality: "Alemanha", age: 23, foot: "Esquerdo", info: "Lateral-esquerdo dinâmico com boa condução, subida pelo flanco e chegada à frente." },
    { number: 19, name: "Alphonso Davies", position: "Defesa", nationality: "Canadá", age: 26, foot: "Esquerdo", info: "Lateral de velocidade excecional, perigoso nas transições e na recuperação defensiva." },
    { number: 21, name: "Hiroki Itō", position: "Defesa", nationality: "Japão", age: 27, foot: "Esquerdo", info: "Defesa canhoto versátil, capaz de jogar a central ou lateral com bom passe." },
    { number: 23, name: "Sacha Boey", position: "Defesa", nationality: "França", age: 26, foot: "Direito", info: "Lateral-direito físico e veloz, intenso nos duelos e na projeção ofensiva." },
    { number: 27, name: "Konrad Laimer", position: "Defesa", nationality: "Áustria", age: 29, foot: "Direito", info: "Jogador incansável na pressão e na recuperação, capaz de atuar na lateral ou no meio." },
    { number: 30, name: "Cassiano Kiala", position: "Defesa", nationality: "Alemanha", age: 18, foot: "Direito", info: "Jovem defesa da estrutura do clube integrado na lista da época." },
    { number: 44, name: "Josip Stanišić", position: "Defesa", nationality: "Croácia", age: 26, foot: "Direito", info: "Defesa disciplinado e polivalente, forte na leitura tática em várias posições." },

    { number: 6, name: "Joshua Kimmich", position: "Médio", nationality: "Alemanha", age: 31, foot: "Direito", info: "Vice-capitão e organizador do jogo, exímio no passe, visão, bolas paradas e ritmo." },
    { number: 8, name: "Tom Bischof", position: "Médio", nationality: "Alemanha", age: 21, foot: "Esquerdo", info: "Jovem médio criativo e dinâmico, com boa condução, passe e chegada à área." },
    { number: 10, name: "Jamal Musiala", position: "Médio", nationality: "Alemanha", age: 23, foot: "Direito", info: "Criativo diferenciado no drible em espaços curtos, mobilidade entre linhas e remate." },
    { number: 34, name: "Ismael Saibari", position: "Médio", nationality: "Marrocos", age: 25, foot: "Direito", info: "Médio ofensivo/box-to-box potente, forte na condução, pressão e chegada à área." },
    { number: 45, name: "Aleksandar Pavlović", position: "Médio", nationality: "Alemanha", age: 22, foot: "Esquerdo", info: "Médio canhoto sereno sob pressão, seguro na saída curta e no passe vertical." },

    { number: 7, name: "Serge Gnabry", position: "Avançado", nationality: "Alemanha", age: 31, foot: "Direito", info: "Avançado/extremo móvel com bom remate, ataque ao espaço e chegada à área." },
    { number: 9, name: "Harry Kane", position: "Avançado", nationality: "Inglaterra", age: 33, foot: "Direito", info: "Ponta de lança goleador e associativo, forte na finalização, passe longo e bola parada." },
    { number: 14, name: "Luis Díaz", position: "Avançado", nationality: "Colômbia", age: 29, foot: "Direito", info: "Extremo explosivo e intenso na pressão, forte no 1x1, drible e chegada ao golo." },
    { number: 17, name: "Michael Olise", position: "Avançado", nationality: "França", age: 24, foot: "Esquerdo", info: "Extremo canhoto criativo, forte no passe decisivo, drible, cruzamento e remate." }
],
            legends: ["Franz Beckenbauer", "Gerd Müller", "Sepp Maier", "Karl-Heinz Rummenigge"],
            curiosities: [
                "Em 2020 igualou o feito do 'sextete' ao vencer todas as seis competições disputadas.",
                "Foi o primeiro clube alemão a conquistar a Taça dos Campeões três vezes consecutivas (1974–1976)."
            ]
        },
        {
            id: "borussia-dortmund",
            name: "Borussia Dortmund",
            fullName: "Ballspielverein Borussia 09 e. V. Dortmund",
            country: "Alemanha",
            city: "Dortmund",
            founded: 1909,
            stadium: "Signal Iduna Park",
            crest: "assets/logos/clubs/borussia-dortmund.jpg",
            photos: ["assets/images/clubs/borussia-dortmund-1.jpg", "assets/images/clubs/borussia-dortmund-2.jpg"],
            summary: "Clube emblemático do Vale do Ruhr, famoso pela 'Muralha Amarela' e pela conquista da Liga dos Campeões em 1997.",
            history: "Fundado em 1909, o Borussia Dortmund tornou-se o primeiro clube alemão a vencer uma competição europeia (Taça das Taças em 1966) e conquistou a Liga dos Campeões em 1997, mantendo uma das massas adeptas mais vibrantes do planeta.",
            titles: [
                { competition: "Campeonato Alemão / Bundesliga", count: 8, years: [1956, 1957, 1963, 1995, 1996, 2002, 2011, 2012] },
                { competition: "DFB-Pokal", count: 5, years: [1965, 1989, 2012, 2017, 2021] },
                { competition: "Liga dos Campeões da UEFA", count: 1, years: [1997] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Alfred Preißler (177 golos)" },
                { label: "Mais jogos oficiais", value: "Michael Zorc (572 jogos)" },
                { label: "Estádio", value: "Signal Iduna Park (Dortmund)" }
            ],
            squad: [
    { number: 1, name: "Gregor Kobel", position: "Guarda-redes", nationality: "Suíça", age: 28, foot: "Direito", info: "Guarda-redes titular de grande reflexo, forte no 1x1 e na defesa de remates difíceis." },
    { number: 30, name: "Patrick Drewes", position: "Guarda-redes", nationality: "Alemanha", age: 33, foot: "Direito", info: "Guarda-redes experiente no futebol alemão para compor a baliza." },
    { number: 31, name: "Silas Ostrzinski", position: "Guarda-redes", nationality: "Alemanha", age: 22, foot: "Direito", info: "Jovem guarda-redes formado no clube." },
    { number: 33, name: "Alexander Meyer", position: "Guarda-redes", nationality: "Alemanha", age: 35, foot: "Esquerdo", info: "Guarda-redes suplente experiente e seguro sob os postes." },

    { number: 3, name: "Waldemar Anton", position: "Defesa", nationality: "Alemanha", age: 30, foot: "Direito", info: "Defesa-central sólido e líder defensivo, firme nos duelos e na leitura do jogo." },
    { number: 4, name: "Nico Schlotterbeck", position: "Defesa", nationality: "Alemanha", age: 26, foot: "Esquerdo", info: "Defesa-central canhoto intenso nos duelos, com passe longo progressivo e bola parada." },
    { number: 5, name: "Ramy Bensebaini", position: "Defesa", nationality: "Argélia", age: 31, foot: "Esquerdo", info: "Defesa versátil capaz de atuar como central esquerdo ou lateral com jogo aéreo." },
    { number: 22, name: "Joane Gadou", position: "Defesa", nationality: "França", age: 19, foot: "Direito", info: "Jovem defesa-central físico com boa estatura, velocidade e margem de evolução." },
    { number: 23, name: "Emre Can", position: "Defesa", nationality: "Alemanha", age: 32, foot: "Direito", info: "Capitão combativo e físico, forte no desarme, liderança e adaptação a vários setores." },
    { number: 24, name: "Daniel Svensson", position: "Defesa", nationality: "Suécia", age: 24, foot: "Esquerdo", info: "Jogador canhoto dinâmico e disciplinado, capaz de atuar como lateral ou médio." },
    { number: 26, name: "Julian Ryerson", position: "Defesa", nationality: "Noruega", age: 28, foot: "Direito", info: "Lateral incansável na corrida e na marcação, capaz de jogar em ambos os corredores." },
    { number: 36, name: "Kauã Prates", position: "Defesa", nationality: "Brasil", age: 18, foot: "Esquerdo", info: "Jovem lateral-esquerdo brasileiro com capacidade ofensiva e projeção." },

    { number: 7, name: "Jobe Bellingham", position: "Médio", nationality: "Inglaterra", age: 21, foot: "Direito", info: "Médio dinâmico e físico, forte na chegada à área, condução e intensidade." },
    { number: 8, name: "Felix Nmecha", position: "Médio", nationality: "Alemanha", age: 26, foot: "Direito", info: "Médio box-to-box com potência física, condução, remate e chegada ao último terço." },
    { number: 14, name: "Maximilian Beier", position: "Médio", nationality: "Alemanha", age: 24, foot: "Direito", info: "Jogador veloz e vertical no ataque ao espaço, perigoso na transição e na frente." },
    { number: 17, name: "Carney Chukwuemeka", position: "Médio", nationality: "Inglaterra", age: 23, foot: "Direito", info: "Médio técnico e potente na condução sob pressão, com capacidade de ligação ofensiva." },
    { number: 18, name: "Ethan Nwaneri", position: "Médio", nationality: "Inglaterra", age: 19, foot: "Esquerdo", info: "Jovem criativo canhoto com excelente drible curto, visão de jogo e remate." },
    { number: 19, name: "Konstantinos Karetsas", position: "Médio", nationality: "Grécia", age: 19, foot: "Esquerdo", info: "Jovem médio ofensivo criativo com toque refinado e capacidade de desequilíbrio." },
    { number: 20, name: "Marcel Sabitzer", position: "Médio", nationality: "Áustria", age: 32, foot: "Direito", info: "Médio experiente com forte remate de meia distância, passe, pressão e versatilidade." },
    { number: 25, name: "Joey Veerman", position: "Médio", nationality: "Países Baixos", age: 27, foot: "Direito", info: "Médio organizador com excelente passe longo, visão de jogo e construção sob pressão." },

    { number: 9, name: "Serhou Guirassy", position: "Avançado", nationality: "Guiné", age: 30, foot: "Direito", info: "Ponta de lança goleador, forte na proteção de bola, jogo aéreo e finalização na área." },
    { number: 21, name: "Fábio Silva", position: "Avançado", nationality: "Portugal", age: 24, foot: "Direito", info: "Avançado móvel e associativo, com boa leitura de espaços, drible e finalização." }
],
            legends: ["Adi Preißler", "Michael Zorc", "Matthias Sammer", "Marco Reus"],
            curiosities: [
                "A bancada sul do Signal Iduna Park ('Südtribüne') é a maior bancada em pé da Europa, conhecida como a Muralha Amarela.",
                "Foi o primeiro clube alemão a erguer um troféu europeu, em 1966."
            ]
        },
        {
            id: "bayer-leverkusen",
            name: "Bayer Leverkusen",
            fullName: "Bayer 04 Leverkusen Fußball GmbH",
            country: "Alemanha",
            city: "Leverkusen",
            founded: 1904,
            stadium: "BayArena",
            crest: "assets/logos/clubs/bayer-leverkusen.jpg",
            photos: ["assets/images/clubs/bayer-leverkusen-1.jpg", "assets/images/clubs/bayer-leverkusen-2.jpg"],
            summary: "Clube ligado à história industrial de Leverkusen, imortalizado pela época invicta na Bundesliga em 2023–24.",
            history: "Nascido em 1904 a partir de uma iniciativa de trabalhadores da fábrica farmacêutica Bayer, o clube conquistou a Taça UEFA em 1988 e protagonizou uma histórica conquista da Bundesliga sem derrotas na temporada 2023–24.",
            titles: [
                { competition: "Bundesliga", count: 1, years: [2024] },
                { competition: "DFB-Pokal", count: 2, years: [1993, 2024] },
                { competition: "Taça UEFA", count: 1, years: [1988] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Ulf Kirsten (240 golos)" },
                { label: "Mais jogos oficiais", value: "Rüdiger Vollborn (401 jogos)" },
                { label: "Estádio", value: "BayArena (Leverkusen)" }
            ],
            squad: [
    { number: 1, name: "Mark Flekken", position: "Guarda-redes", nationality: "Países Baixos", age: 33, foot: "Direito", info: "Guarda-redes titular seguro nos reflexos e com excelente jogo de pés e passe longo." },
    { number: 28, name: "Janis Blaswich", position: "Guarda-redes", nationality: "Alemanha", age: 35, foot: "Direito", info: "Guarda-redes experiente no futebol alemão para compor a baliza." },
    { number: 36, name: "Niklas Lomb", position: "Guarda-redes", nationality: "Alemanha", age: 33, foot: "Direito", info: "Guarda-redes veterano da estrutura do clube." },

    { number: 2, name: "Facundo Medina", position: "Defesa", nationality: "Argentina", age: 27, foot: "Esquerdo", info: "Defesa-central canhoto intenso e agressivo nos duelos, com boa saída de bola." },
    { number: 3, name: "Miguel Gutiérrez", position: "Defesa", nationality: "Espanha", age: 25, foot: "Esquerdo", info: "Lateral-esquerdo criativo e técnico, forte na condução, cruzamento e construção." },
    { number: 4, name: "Jarell Quansah", position: "Defesa", nationality: "Inglaterra", age: 23, foot: "Direito", info: "Defesa-central alto e seguro na saída de bola, com boa leitura defensiva e duelo." },
    { number: 5, name: "Loïc Badé", position: "Defesa", nationality: "França", age: 26, foot: "Direito", info: "Defesa-central físico e forte no jogo aéreo, desarme e proteção da área." },
    { number: 12, name: "Edmond Tapsoba", position: "Defesa", nationality: "Burquina Faso", age: 27, foot: "Direito", info: "Capitão e defesa-central calmo sob pressão, forte na construção e no 1x1." },
    { number: 15, name: "Tim Oermann", position: "Defesa", nationality: "Alemanha", age: 23, foot: "Direito", info: "Defesa jovem e versátil, capaz de atuar como central ou lateral-direito." },
    { number: 17, name: "Lucas Vázquez", position: "Defesa", nationality: "Espanha", age: 35, foot: "Direito", info: "Lateral/ala experiente com boa técnica, cruzamento e leitura ofensiva." },
    { number: 20, name: "Guéla Doué", position: "Defesa", nationality: "Costa do Marfim", age: 24, foot: "Direito", info: "Lateral-direito físico e dinâmico, forte nas subidas, duelos e transição." },

    { number: 6, name: "Equi Fernández", position: "Médio", nationality: "Argentina", age: 24, foot: "Direito", info: "Médio organizador combativo, com ótimo passe curto/longo, leitura e recuperação." },
    { number: 7, name: "Jonas Hofmann", position: "Médio", nationality: "Alemanha", age: 34, foot: "Direito", info: "Jogador experiente e inteligente na movimentação, passe, cruzamento e chegada." },
    { number: 8, name: "Robert Andrich", position: "Médio", nationality: "Alemanha", age: 32, foot: "Direito", info: "Médio físico e intenso nos duelos, desarme, bolas paradas e liderança." },
    { number: 10, name: "Malik Tillman", position: "Médio", nationality: "Estados Unidos", age: 24, foot: "Direito", info: "Médio ofensivo/criativo técnico, forte na condução, drible e chegada à área." },
    { number: 18, name: "Kennet Eichhorn", position: "Médio", nationality: "Alemanha", age: 17, foot: "Direito", info: "Jovem médio defensivo de grande projeção na organização e recuperação." },
    { number: 23, name: "Nathan Tella", position: "Médio", nationality: "Nigéria", age: 27, foot: "Direito", info: "Ala/avançado rápido e vertical, perigoso na aceleração e no ataque ao espaço." },
    { number: 24, name: "Aleix García", position: "Médio", nationality: "Espanha", age: 29, foot: "Direito", info: "Médio organizador com excelente visão de jogo, passe curto e longo e controlo de ritmo." },
    { number: 30, name: "Ibrahim Maza", position: "Médio", nationality: "Argélia", age: 20, foot: "Direito", info: "Médio ofensivo criativo e ágil no drible curto, condução e chegada entre linhas." },

    { number: 9, name: "Afonso Moreira", position: "Avançado", nationality: "Portugal", age: 21, foot: "Direito", info: "Extremo jovem e veloz, perigoso no 1x1, aceleração e desequilíbrio pelos flancos." },
    { number: 11, name: "Martin Terrier", position: "Avançado", nationality: "França", age: 29, foot: "Direito", info: "Avançado/extremo inteligente na movimentação, com bom remate e chegada à área." },
    { number: 14, name: "Patrik Schick", position: "Avançado", nationality: "República Checa", age: 30, foot: "Esquerdo", info: "Ponta de lança canhoto de grande finalização, jogo aéreo e presença na área." },
    { number: 19, name: "Moussa Diaby", position: "Avançado", nationality: "França", age: 27, foot: "Esquerdo", info: "Extremo canhoto explosivo na velocidade, transição e ataque ao espaço." },
    { number: 22, name: "Victor Boniface", position: "Avançado", nationality: "Nigéria", age: 25, foot: "Direito", info: "Avançado potente na proteção de bola, remate e chegada à finalização." },
    { number: 29, name: "Eliesse Ben Seghir", position: "Avançado", nationality: "Marrocos", age: 21, foot: "Direito", info: "Extremo/avançado técnico e criativo no drible, associação e chegada à área." },
    { number: 35, name: "Christian Kofane", position: "Avançado", nationality: "Camarões", age: 20, foot: "Direito", info: "Ponta de lança jovem e físico com forte presença na área e remate." },
    { number: 42, name: "Montrell Culbreath", position: "Avançado", nationality: "Estados Unidos", age: 19, foot: "Direito", info: "Jovem extremo veloz e direto integrado nas opções ofensivas." }
],
            legends: ["Ulf Kirsten", "Rudi Völler", "Michael Ballack", "Bernd Schneider"],
            curiosities: [
                "Sagrou-se campeão da Bundesliga em 2023–24 sem perder nenhum jogo nas 34 jornadas.",
                "Em 2002 disputou a final da Liga dos Campeões, a final da DFB-Pokal e terminou em 2.º na Bundesliga na mesma época."
            ]
        },

        /* FRANÇA */
        {
            id: "psg",
            name: "PSG",
            fullName: "Paris Saint-Germain Football Club",
            country: "França",
            city: "Paris",
            founded: 1970,
            stadium: "Parc des Princes",
            crest: "assets/logos/clubs/psg.jpg",
            photos: ["assets/images/clubs/psg-1.jpg", "assets/images/clubs/psg-2.jpg"],
            summary: "Clube de Paris com forte domínio recente no futebol francês e presença constante nas grandes noites europeias.",
            history: "Fundado em 1970 no coração de Paris, o Paris Saint-Germain afirmou-se como uma das potências do futebol europeu na década de 2010 e 2020, acumulando títulos da Ligue 1, Taça de França e troféus internacionais.",
            titles: [
                { competition: "Ligue 1", count: 13, years: [1986, 1994, 2013, 2014, 2015, 2016, 2018, 2019, 2020, 2022, 2023, 2024, 2025] },
                { competition: "Coupe de France", count: 15, years: [1982, 1983, 1993, 1995, 1998, 2004, 2006, 2010, 2015, 2016, 2017, 2018, 2020, 2021, 2024] },
                { competition: "Taça das Taças da UEFA", count: 1, years: [1996] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Kylian Mbappé (256 golos)" },
                { label: "Mais jogos oficiais", value: "Jean-Marc Pilorget (435 jogos)" },
                { label: "Estádio", value: "Parc des Princes (Paris)" }
            ],
            squad: [
    { number: 16, name: "Alessandro Longoni", position: "Guarda-redes", nationality: "Itália", age: 18, foot: "Direito", info: "Jovem guarda-redes integrado no plantel principal da época." },
    { number: 30, name: "Lucas Chevalier", position: "Guarda-redes", nationality: "França", age: 25, foot: "Direito", info: "Guarda-redes francês ágil nos reflexos, forte no 1x1 e seguro na saída de bola." },
    { number: 39, name: "Matvey Safonov", position: "Guarda-redes", nationality: "Rússia", age: 27, foot: "Direito", info: "Guarda-redes rápido sob os postes e confiável nas intervenções decisivas." },

    { number: 2, name: "Achraf Hakimi", position: "Defesa", nationality: "Marrocos", age: 28, foot: "Direito", info: "Lateral-direito veloz e incisivo, decisivo nas subidas, transição e cruzamento." },
    { number: 4, name: "Lucas Beraldo", position: "Defesa", nationality: "Brasil", age: 22, foot: "Esquerdo", info: "Defesa-central canhoto calmo sob pressão, com bom passe e leitura defensiva." },
    { number: 5, name: "Marquinhos", position: "Defesa", nationality: "Brasil", age: 32, foot: "Direito", info: "Capitão e defesa-central experiente, forte na antecipação, leitura e liderança." },
    { number: 6, name: "Illia Zabarnyi", position: "Defesa", nationality: "Ucrânia", age: 24, foot: "Direito", info: "Defesa-central sólido e combativo, seguro nos duelos e na saída de bola." },
    { number: 12, name: "Lucas Digne", position: "Defesa", nationality: "França", age: 33, foot: "Esquerdo", info: "Lateral-esquerdo experiente com forte cruzamento, bola parada e consistência." },
    { number: 21, name: "Lucas Hernández", position: "Defesa", nationality: "França", age: 30, foot: "Esquerdo", info: "Defesa intenso e agressivo nos duelos, capaz de jogar a central ou lateral." },
    { number: 25, name: "Nuno Mendes", position: "Defesa", nationality: "Portugal", age: 24, foot: "Esquerdo", info: "Lateral-esquerdo potente e veloz, forte no 1x1 defensivo e ofensivo e na condução." },
    { number: 42, name: "David Boly", position: "Defesa", nationality: "França", age: 17, foot: "Direito", info: "Jovem lateral-direito formado na academia do clube." },
    { number: 51, name: "Willian Pacho", position: "Defesa", nationality: "Equador", age: 25, foot: "Esquerdo", info: "Defesa-central canhoto físico e seguro na cobertura, desarme e construção." },

    { number: 8, name: "Fabián Ruiz", position: "Médio", nationality: "Espanha", age: 30, foot: "Esquerdo", info: "Médio canhoto organizador, forte no controlo de posse, passe e chegada em segunda linha." },
    { number: 11, name: "Maghnes Akliouche", position: "Médio", nationality: "França", age: 24, foot: "Esquerdo", info: "Médio ofensivo/extremo canhoto criativo, forte no drible curto, passe e visão." },
    { number: 17, name: "Vitinha", position: "Médio", nationality: "Portugal", age: 26, foot: "Direito", info: "Médio organizador de grande critério no passe, ritmo de jogo e resistência à pressão." },
    { number: 24, name: "Senny Mayulu", position: "Médio", nationality: "França", age: 20, foot: "Direito", info: "Jovem médio dinâmico e versátil, com boa condução, mobilidade e chegada." },
    { number: 27, name: "Dro Fernández", position: "Médio", nationality: "Espanha", age: 18, foot: "Direito", info: "Jovem médio criativo com boa técnica e visão entre linhas." },
    { number: 33, name: "Warren Zaïre-Emery", position: "Médio", nationality: "França", age: 20, foot: "Direito", info: "Médio box-to-box potente, intenso na recuperação e seguro no transporte de bola." },
    { number: 87, name: "João Neves", position: "Médio", nationality: "Portugal", age: 22, foot: "Direito", info: "Médio incansável na pressão e recuperação, com ótimo passe curto e ligação rápida." },

    { number: 7, name: "Khvicha Kvaratskhelia", position: "Avançado", nationality: "Geórgia", age: 25, foot: "Direito", info: "Extremo desequilibrador no 1x1, criativo no drible, passe decisivo e remate." },
    { number: 9, name: "Ferran Torres", position: "Avançado", nationality: "Espanha", age: 26, foot: "Direito", info: "Avançado móvel e goleador, forte na desmarcação ao espaço e na finalização." },
    { number: 10, name: "Ousmane Dembélé", position: "Avançado", nationality: "França", age: 29, foot: "Esquerdo", info: "Extremo explosivo no drible e na aceleração com ambos os pés, criador de perigo." },
    { number: 14, name: "Désiré Doué", position: "Avançado", nationality: "França", age: 21, foot: "Direito", info: "Extremo/médio ofensivo criativo, ágil no 1x1, condução e chegada ao último terço." },
    { number: 22, name: "Mika Godts", position: "Avançado", nationality: "Bélgica", age: 21, foot: "Direito", info: "Extremo veloz e vertical, perigoso no drible pelo flanco esquerdo e na transição." },
    { number: 47, name: "Quentin Ndjantou", position: "Avançado", nationality: "França", age: 19, foot: "Esquerdo", info: "Jovem avançado formado no clube com velocidade e mobilidade na frente." }
],
            legends: ["Safet Sušić", "Raí", "Pedro Miguel Pauleta", "Kylian Mbappé"],
            curiosities: [
                "É o clube com mais títulos da Coupe de France (15 conquistas).",
                "A data de fundação (1970) resulta da fusão do Paris FC com o Stade Saint-Germain."
            ]
        },
        {
            id: "marseille",
            name: "Marseille",
            fullName: "Olympique de Marseille",
            country: "França",
            city: "Marselha",
            founded: 1899,
            stadium: "Stade Vélodrome",
            crest: "assets/logos/clubs/marseille.jpg",
            photos: ["assets/images/clubs/marseille-1.jpg", "assets/images/clubs/marseille-2.jpg"],
            summary: "Clube histórico de Marselha e o único clube francês a ter conquistado a Taça dos Campeões / Liga dos Campeões (1993).",
            history: "Fundado em 1899, o Olympique de Marseille construiu uma identidade apaixonada no sul de França e entrou para a história europeia ao vencer a edição inaugural da Liga dos Campeões em 1993, em Munique.",
            titles: [
                { competition: "Ligue 1", count: 9, years: [1937, 1948, 1971, 1972, 1989, 1990, 1991, 1992, 2010] },
                { competition: "Coupe de France", count: 10, years: [1924, 1926, 1927, 1935, 1938, 1943, 1969, 1972, 1976, 1989] },
                { competition: "Liga dos Campeões da UEFA", count: 1, years: [1993] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Gunnar Andersson (194 golos)" },
                { label: "Mais jogos oficiais", value: "Steve Mandanda (613 jogos)" },
                { label: "Estádio", value: "Stade Vélodrome (Marselha)" }
            ],
            squad: [
    { number: 1, name: "Jeffrey De Lange", position: "Guarda-redes", nationality: "Países Baixos", age: 28, foot: "Direito", info: "Guarda-redes titular seguro na baliza, forte nas saídas e nos reflexos." },
    { number: 40, name: "Jelle Van Neck", position: "Guarda-redes", nationality: "Bélgica", age: 22, foot: "Direito", info: "Jovem guarda-redes belga integrado nas opções do clube." },
    { number: 92, name: "Théo Vermot", position: "Guarda-redes", nationality: "França", age: 29, foot: "Direito", info: "Guarda-redes experiente para compor o setor da baliza." },

    { number: 4, name: "CJ Egan-Riley", position: "Defesa", nationality: "Inglaterra", age: 23, foot: "Direito", info: "Defesa jovem e seguro na saída de bola, capaz de jogar a central ou lateral." },
    { number: 18, name: "Bamo Meïté", position: "Defesa", nationality: "Costa do Marfim", age: 24, foot: "Direito", info: "Defesa-central físico e veloz nos duelos e na cobertura defensiva." },
    { number: 21, name: "Nayef Aguerd", position: "Defesa", nationality: "Marrocos", age: 30, foot: "Esquerdo", info: "Defesa-central canhoto experiente, forte no jogo aéreo, desarme e passe longo." },
    { number: 25, name: "Ulisses Garcia", position: "Defesa", nationality: "Suíça", age: 30, foot: "Esquerdo", info: "Lateral-esquerdo experiente e disciplinado na marcação e apoio ofensivo." },
    { number: 33, name: "Emerson Palmieri", position: "Defesa", nationality: "Itália", age: 32, foot: "Esquerdo", info: "Lateral-esquerdo ofensivo com boa condução, cruzamento e experiência europeia." },
    { number: 46, name: "Alexi Koum", position: "Defesa", nationality: "França", age: 20, foot: "Direito", info: "Jovem defesa da formação integrado na lista da época." },

    { number: 6, name: "Tochukwu Nnadi", position: "Médio", nationality: "Nigéria", age: 23, foot: "Direito", info: "Médio físico e combativo na recuperação de bola e no equilíbrio do meio-campo." },
    { number: 7, name: "Angel Gomes", position: "Médio", nationality: "Inglaterra", age: 26, foot: "Direito", info: "Médio criativo e inteligente no controlo do ritmo, passe curto e leitura tática." },
    { number: 8, name: "Himad Abdelli", position: "Médio", nationality: "Argélia", age: 27, foot: "Direito", info: "Médio criativo com boa condução, visão de jogo e chegada em segunda linha." },
    { number: 22, name: "Timothy Weah", position: "Médio", nationality: "Estados Unidos", age: 26, foot: "Direito", info: "Capitão e ala/avançado veloz e dinâmico, forte na transição e na largura." },
    { number: 23, name: "Pierre-Emile Højbjerg", position: "Médio", nationality: "Dinamarca", age: 31, foot: "Direito", info: "Médio organizador e combativo, forte na liderança, desarme e distribuição." },
    { number: 43, name: "Tadjidine Mmadi", position: "Médio", nationality: "França", age: 19, foot: "Direito", info: "Jovem médio da formação com mobilidade e intensidade." },
    { number: 48, name: "Keyliane Abdallah", position: "Médio", nationality: "França", age: 20, foot: "Direito", info: "Jovem médio/ala formado no clube com chegada ao ataque." },
    { number: 77, name: "Amine Harit", position: "Médio", nationality: "Marrocos", age: 29, foot: "Direito", info: "Médio ofensivo/extremo técnico e criativo no drible em espaços curtos." },

    { number: 9, name: "Amine Gouiri", position: "Avançado", nationality: "Argélia", age: 26, foot: "Direito", info: "Avançado móvel e goleador, forte na associação, remate e finalização." },
    { number: 11, name: "Neal Maupay", position: "Avançado", nationality: "França", age: 30, foot: "Direito", info: "Avançado combativo na pressão, móvel na frente e oportuno na área." },
    { number: 14, name: "Igor Paixão", position: "Avançado", nationality: "Brasil", age: 26, foot: "Direito", info: "Extremo rápido e desequilibrador no 1x1, com boa chegada ao remate e passe." },
    { number: 29, name: "Faris Moumbagna", position: "Avançado", nationality: "Camarões", age: 26, foot: "Direito", info: "Ponta de lança físico e forte no jogo aéreo, apoio frontal e ataque à área." }
],
            legends: ["Gunnar Andersson", "Jean-Pierre Papin", "Chris Waddle", "Didier Drogba"],
            curiosities: [
                "Continua a ser o único clube de França a conquistar a Liga dos Campeões (1993).",
                "O Stade Vélodrome é o maior estádio de clubes em França em capacidade."
            ]
        },

        /* ITÁLIA */
        {
            id: "juventus",
            name: "Juventus",
            fullName: "Juventus Football Club",
            country: "Itália",
            city: "Turim",
            founded: 1897,
            stadium: "Juventus Stadium",
            crest: "assets/logos/clubs/juventus.jpg",
            photos: ["assets/images/clubs/juventus-1.jpg", "assets/images/clubs/juventus-2.jpg"],
            summary: "O clube com mais títulos da Serie A italiana e o primeiro da história a conquistar todas as três grandes competições da UEFA.",
            history: "Fundada em 1897 por estudantes de Turim, a Juventus tornou-se o emblema da família Agnelli e somou dezenas de títulos nacionais e europeus, incluindo uma sequência recorde de nove scudetti consecutivos (2012–2020).",
            titles: [
                { competition: "Serie A (Campeonato Italiano)", count: 36, years: [1905, 1926, 1931, 1932, 1933, 1934, 1935, 1950, 1952, 1958, 1960, 1961, 1967, 1972, 1973, 1975, 1977, 1978, 1981, 1982, 1984, 1986, 1995, 1997, 1998, 2002, 2003, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020] },
                { competition: "Coppa Italia", count: 15, years: [1938, 1942, 1959, 1960, 1965, 1979, 1983, 1990, 1995, 2015, 2016, 2017, 2018, 2021, 2024] },
                { competition: "Taça dos Campeões / Liga dos Campeões", count: 2, years: [1985, 1996] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Alessandro Del Piero (290 golos)" },
                { label: "Mais jogos oficiais", value: "Alessandro Del Piero (705 jogos)" },
                { label: "Estádio", value: "Juventus Stadium (Turim)" }
            ],
           squad: [
    { number: 1, name: "Kamil Grabara", position: "Guarda-redes", nationality: "Polónia", age: 27, foot: "Direito", info: "Guarda-redes ágil sob os postes, forte nos reflexos e nas defesas em 1x1." },
    { number: 23, name: "Carlo Pinsoglio", position: "Guarda-redes", nationality: "Itália", age: 36, foot: "Esquerdo", info: "Guarda-redes veterano e referência de balneário na equipa." },
    { number: 25, name: "Guglielmo Vicario", position: "Guarda-redes", nationality: "Itália", age: 30, foot: "Direito", info: "Guarda-redes rápido nos reflexos e nas saídas da baliza, forte na reação." },
    { number: 33, name: "Neto", position: "Guarda-redes", nationality: "Brasil", age: 37, foot: "Direito", info: "Guarda-redes experiente com longo percurso internacional e segurança na área." },

    { number: 2, name: "Zeki Çelik", position: "Defesa", nationality: "Turquia", age: 29, foot: "Direito", info: "Lateral-direito disciplinado e combativo na marcação e no apoio pelo corredor." },
    { number: 3, name: "Bremer", position: "Defesa", nationality: "Brasil", age: 29, foot: "Direito", info: "Defesa-central dominante nos duelos individuais, jogo aéreo, antecipação e marcação." },
    { number: 4, name: "Federico Gatti", position: "Defesa", nationality: "Itália", age: 28, foot: "Direito", info: "Defesa-central intenso e agressivo na área, forte nos duelos e nas bolas paradas." },
    { number: 6, name: "Lloyd Kelly", position: "Defesa", nationality: "Inglaterra", age: 28, foot: "Esquerdo", info: "Defesa-central canhoto com boa passada, leitura defensiva e saída de bola." },
    { number: 15, name: "Pierre Kalulu", position: "Defesa", nationality: "França", age: 26, foot: "Direito", info: "Defesa versátil e rápido, capaz de jogar a central ou lateral-direito com segurança." },
    { number: 20, name: "Andrea Cambiaso", position: "Defesa", nationality: "Itália", age: 26, foot: "Esquerdo", info: "Lateral/ala criativo e inteligente, forte na condução interior, passe e chegada." },
    { number: 24, name: "Daniele Rugani", position: "Defesa", nationality: "Itália", age: 32, foot: "Direito", info: "Defesa-central experiente e posicional, seguro na proteção da área." },
    { number: 26, name: "Jhon Lucumí", position: "Defesa", nationality: "Colômbia", age: 28, foot: "Esquerdo", info: "Defesa-central canhoto rápido na cobertura e agressivo nos duelos defensivos." },
    { number: 32, name: "Juan Cabal", position: "Defesa", nationality: "Colômbia", age: 25, foot: "Esquerdo", info: "Lateral-esquerdo físico e dinâmico, forte nas incursões ofensivas e no desarme." },

    { number: 5, name: "Manuel Locatelli", position: "Médio", nationality: "Itália", age: 28, foot: "Direito", info: "Capitão e médio organizador, forte na recuperação de bola, passe longo e equilíbrio." },
    { number: 8, name: "Teun Koopmeiners", position: "Médio", nationality: "Países Baixos", age: 28, foot: "Esquerdo", info: "Médio canhoto completo na chegada à área, remate de fora, passe e bola parada." },
    { number: 12, name: "Douglas Luiz", position: "Médio", nationality: "Brasil", age: 28, foot: "Direito", info: "Médio técnico e organizador, seguro na posse, passe vertical e chegada em segunda linha." },
    { number: 19, name: "Khéphren Thuram", position: "Médio", nationality: "França", age: 25, foot: "Direito", info: "Médio físico e potente na condução progressiva, desarme e transporte de bola." },
    { number: 22, name: "Weston McKennie", position: "Médio", nationality: "Estados Unidos", age: 28, foot: "Direito", info: "Médio versátil e intenso, forte no jogo aéreo, pressão e chegada à finalização." },
    { number: 29, name: "Pape Matar Sarr", position: "Médio", nationality: "Senegal", age: 24, foot: "Direito", info: "Médio box-to-box dinâmico, forte na recuperação, corrida e ligação entre setores." },

    { number: 7, name: "Francisco Conceição", position: "Avançado", nationality: "Portugal", age: 23, foot: "Esquerdo", info: "Extremo canhoto elétrico e desequilibrador no 1x1, forte no drible curto e aceleração." },
    { number: 9, name: "Randal Kolo Muani", position: "Avançado", nationality: "França", age: 27, foot: "Direito", info: "Avançado rápido e móvel, perigoso nos ataques ao espaço, transição e finalização." },
    { number: 10, name: "Kenan Yıldız", position: "Avançado", nationality: "Turquia", age: 21, foot: "Direito", info: "Criativo/extremo técnico e elegante, forte no drible, remate e ligação ofensiva." },
    { number: 11, name: "Edon Zhegrova", position: "Avançado", nationality: "Kosovo", age: 27, foot: "Esquerdo", info: "Extremo canhoto criativo e ágil no drible, perigoso a fletir para o remate ou passe." },
    { number: 13, name: "Jérémie Boga", position: "Avançado", nationality: "Costa do Marfim", age: 29, foot: "Direito", info: "Extremo veloz e desequilibrador no drible em progressão pelo flanco." },
    { number: 14, name: "Arkadiusz Milik", position: "Avançado", nationality: "Polónia", age: 32, foot: "Esquerdo", info: "Ponta de lança canhoto forte na finalização dentro da área e no jogo aéreo." },
    { number: 17, name: "Kerim Alajbegovic", position: "Avançado", nationality: "Bósnia e Herzegovina", age: 19, foot: "Direito", info: "Jovem extremo rápido e vertical com boa capacidade de desequilíbrio." },
    { number: 18, name: "Jeff Ekhator", position: "Avançado", nationality: "Itália", age: 20, foot: "Direito", info: "Jovem avançado móvel e físico com boa desmarcação na frente." },
    { number: 27, name: "Nick Woltemade", position: "Avançado", nationality: "Alemanha", age: 24, foot: "Direito", info: "Avançado alto e técnico, forte na associação, proteção de bola e chegada à área." },
    { number: 31, name: "Nico González", position: "Avançado", nationality: "Argentina", age: 28, foot: "Esquerdo", info: "Avançado/extremo canhoto intenso, forte no jogo aéreo, remate, transição e trabalho." }
],
            legends: ["Giampiero Boniperti", "Michel Platini", "Alessandro Del Piero", "Gianluigi Buffon"],
            curiosities: [
                "Foi o primeiro clube a vencer Taça dos Campeões, Taça UEFA e Taça das Taças.",
                "Conquistou nove títulos consecutivos da Serie A entre 2011–12 e 2019–20."
            ]
        },
        {
            id: "inter-de-milao",
            name: "Inter de Milão",
            fullName: "Football Club Internazionale Milano",
            country: "Itália",
            city: "Milão",
            founded: 1908,
            stadium: "San Siro",
            crest: "assets/logos/clubs/inter-milan.jpg",
            photos: ["assets/images/clubs/inter-milan-1.jpg", "assets/images/clubs/inter-milan-2.jpg"],
            summary: "Clube nascido com vocação internacional em 1908, tricampeão europeu e protagonista do 'triplete' italiano em 2010.",
            history: "Fundado a 9 de março de 1908 por um grupo dissidente que defendia a abertura a jogadores estrangeiros, o Inter marcou épocas como a 'Grande Inter' dos anos 1960 e o 'triplete' de 2009–10.",
            titles: [
                { competition: "Serie A (Campeonato Italiano)", count: 20, years: [1910, 1920, 1930, 1938, 1940, 1953, 1954, 1963, 1965, 1966, 1971, 1980, 1989, 2006, 2007, 2008, 2009, 2010, 2021, 2024] },
                { competition: "Coppa Italia", count: 9, years: [1939, 1978, 1982, 2005, 2006, 2010, 2011, 2022, 2023] },
                { competition: "Taça dos Campeões / Liga dos Campeões", count: 3, years: [1964, 1965, 2010] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Alessandro Altobelli (209 golos)" },
                { label: "Mais jogos oficiais", value: "Javier Zanetti (858 jogos)" },
                { label: "Estádio", value: "San Siro (Milão)" }
            ],
            squad: [
    { number: 1, name: "Josep Martínez", position: "Guarda-redes", nationality: "Espanha", age: 28, foot: "Direito", info: "Guarda-redes ágil sob os postes e confortável na saída curta de bola." },
    { number: 12, name: "Raffaele Di Gennaro", position: "Guarda-redes", nationality: "Itália", age: 33, foot: "Direito", info: "Guarda-redes formado no clube para compor as opções da baliza." },
    { number: 49, name: "Ivan Provedel", position: "Guarda-redes", nationality: "Itália", age: 32, foot: "Direito", info: "Guarda-redes experiente na Serie A, forte nos reflexos e na leitura da área." },

    { number: 6, name: "John Stones", position: "Defesa", nationality: "Inglaterra", age: 32, foot: "Direito", info: "Defesa-central elegante na construção e passe, capaz de atuar também no meio-campo." },
    { number: 25, name: "Manuel Akanji", position: "Defesa", nationality: "Suíça", age: 31, foot: "Direito", info: "Defesa-central sólido e veloz, seguro na saída de bola e nos duelos defensivos." },
    { number: 28, name: "Benjamin Pavard", position: "Defesa", nationality: "França", age: 30, foot: "Direito", info: "Defesa versátil capaz de atuar como central direito ou ala com boa leitura tática." },
    { number: 30, name: "Carlos Augusto", position: "Defesa", nationality: "Brasil", age: 27, foot: "Esquerdo", info: "Jogador canhoto potente e disciplinado, capaz de jogar a ala-esquerdo ou central." },
    { number: 31, name: "Yann-Aurel Bisseck", position: "Defesa", nationality: "Alemanha", age: 25, foot: "Direito", info: "Defesa-central físico e veloz, forte no jogo aéreo, duelos e chegada à frente." },
    { number: 32, name: "Federico Dimarco", position: "Defesa", nationality: "Itália", age: 29, foot: "Esquerdo", info: "Ala-esquerdo canhoto decisivo no cruzamento, passe, remate e bola parada." },
    { number: 95, name: "Alessandro Bastoni", position: "Defesa", nationality: "Itália", age: 27, foot: "Esquerdo", info: "Defesa-central canhoto de referência na saída de bola, passe longo e cobertura." },
    { number: 99, name: "Djed Spence", position: "Defesa", nationality: "Inglaterra", age: 26, foot: "Direito", info: "Ala/lateral veloz e físico, forte na condução, transição e ocupação do corredor." },

    { number: 5, name: "Aleksandar Stanković", position: "Médio", nationality: "Sérvia", age: 21, foot: "Direito", info: "Médio jovem com boa leitura posicional, desarme e capacidade de construção." },
    { number: 7, name: "Piotr Zieliński", position: "Médio", nationality: "Polónia", age: 32, foot: "Direito", info: "Médio criativo com bom drible curto, passe entre linhas e chegada à área." },
    { number: 8, name: "Petar Sučić", position: "Médio", nationality: "Croácia", age: 23, foot: "Direito", info: "Médio dinâmico com boa capacidade de transporte, intensidade e ligação." },
    { number: 17, name: "Andy Diouf", position: "Médio", nationality: "França", age: 23, foot: "Esquerdo", info: "Médio canhoto físico e explosivo na condução, recuperação e chegada ao ataque." },
    { number: 20, name: "Hakan Çalhanoğlu", position: "Médio", nationality: "Turquia", age: 32, foot: "Direito", info: "Organizador de jogo com excelente passe longo, visão, remate e bolas paradas." },
    { number: 21, name: "Curtis Jones", position: "Médio", nationality: "Inglaterra", age: 25, foot: "Direito", info: "Médio versátil com bom controlo sob pressão, condução e chegada em segunda linha." },
    { number: 22, name: "Henrikh Mkhitaryan", position: "Médio", nationality: "Arménia", age: 37, foot: "Direito", info: "Médio experiente e inteligente na ocupação de espaços, passe curto e pressão." },
    { number: 23, name: "Nicolò Barella", position: "Médio", nationality: "Itália", age: 29, foot: "Direito", info: "Vice-capitão e médio box-to-box incansável, forte na intensidade, passe e chegada." },

    { number: 9, name: "Marcus Thuram", position: "Avançado", nationality: "França", age: 29, foot: "Direito", info: "Avançado potente e rápido nos ataques ao espaço, drible, associação e finalização." },
    { number: 10, name: "Lautaro Martínez", position: "Avançado", nationality: "Argentina", age: 29, foot: "Direito", info: "Capitão e ponta de lança goleador, intenso na pressão, mobilidade e remate." },
    { number: 11, name: "Luis Henrique", position: "Avançado", nationality: "Brasil", age: 24, foot: "Direito", info: "Extremo/ala veloz e desequilibrador no 1x1, forte na transição e drible." },
    { number: 14, name: "Ange-Yoan Bonny", position: "Avançado", nationality: "França", age: 23, foot: "Direito", info: "Avançado físico e móvel, forte na proteção de bola, condução e finalização." },
    { number: 94, name: "Francesco Pio Esposito", position: "Avançado", nationality: "Itália", age: 21, foot: "Direito", info: "Ponta de lança jovem com forte presença na área, jogo aéreo e apoio frontal." }
],
            legends: ["Giuseppe Meazza", "Giacinto Facchetti", "Sandro Mazzola", "Javier Zanetti"],
            curiosities: [
                "Em 2010 tornou-se a primeira equipa italiana a conquistar Serie A, Coppa Italia e Liga dos Campeões na mesma época.",
                "É o único clube que sempre alinhou no escalão principal do futebol italiano desde a sua criação."
            ]
        },
        {
            id: "ac-milan",
            name: "AC Milan",
            fullName: "Associazione Calcio Milan",
            country: "Itália",
            city: "Milão",
            founded: 1899,
            stadium: "San Siro",
            crest: "assets/logos/clubs/ac-milan.jpg",
            photos: ["assets/images/clubs/ac-milan-1.jpg", "assets/images/clubs/ac-milan-2.jpg"],
            summary: "Um dos clubes mais icónicos da história europeia, com sete Taças dos Campeões / Ligas dos Campeões e gerações lendárias.",
            history: "Fundado em dezembro de 1899 por Herbert Kilpin e Alfred Edwards, o AC Milan construiu uma aura europeia singular, brilhando nas décadas de 1960, final dos anos 1980/1990 e anos 2000.",
            titles: [
                { competition: "Serie A (Campeonato Italiano)", count: 19, years: [1901, 1906, 1907, 1951, 1955, 1957, 1959, 1962, 1968, 1979, 1988, 1992, 1993, 1994, 1996, 1999, 2004, 2011, 2022] },
                { competition: "Coppa Italia", count: 5, years: [1967, 1972, 1973, 1977, 2003] },
                { competition: "Taça dos Campeões / Liga dos Campeões", count: 7, years: [1963, 1969, 1989, 1990, 1994, 2003, 2007] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Gunnar Nordahl (221 golos)" },
                { label: "Mais jogos oficiais", value: "Paolo Maldini (902 jogos)" },
                { label: "Estádio", value: "San Siro (Milão)" }
            ],
            squad: [
    { number: 1, name: "Pietro Terracciano", position: "Guarda-redes", nationality: "Itália", age: 36, foot: "Direito", info: "Guarda-redes experiente e seguro para compor as opções da baliza." },
    { number: 16, name: "Mike Maignan", position: "Guarda-redes", nationality: "França", age: 31, foot: "Direito", info: "Capitão e guarda-redes completo, forte nos reflexos, no 1x1, na saída de bola e passe longo." },
    { number: 96, name: "Lorenzo Torriani", position: "Guarda-redes", nationality: "Itália", age: 21, foot: "Direito", info: "Jovem guarda-redes formado na academia com boa agilidade e estatura." },

    { number: 2, name: "Pervis Estupiñán", position: "Defesa", nationality: "Equador", age: 28, foot: "Esquerdo", info: "Lateral-esquerdo ofensivo e dinâmico, forte nas subidas pelo corredor, cruzamento e pressão." },
    { number: 5, name: "Koni De Winter", position: "Defesa", nationality: "Bélgica", age: 24, foot: "Direito", info: "Defesa versátil e seguro na saída de bola, capaz de atuar como central ou lateral-direito." },
    { number: 13, name: "Sankhoun Diawara", position: "Defesa", nationality: "Senegal", age: 20, foot: "Esquerdo", info: "Jovem defesa canhoto com boa capacidade física para jogar a central ou lateral." },
    { number: 23, name: "Fikayo Tomori", position: "Defesa", nationality: "Inglaterra", age: 28, foot: "Direito", info: "Defesa-central muito rápido e agressivo no duelo individual e na cobertura de espaços." },
    { number: 31, name: "Strahinja Pavlović", position: "Defesa", nationality: "Sérvia", age: 25, foot: "Esquerdo", info: "Defesa-central canhoto potente e combativo, forte nos duelos físicos e no jogo aéreo." },
    { number: 33, name: "Davide Bartesaghi", position: "Defesa", nationality: "Itália", age: 20, foot: "Esquerdo", info: "Jovem defesa formado no clube capaz de atuar como lateral-esquerdo ou central." },
    { number: 34, name: "Mario Gila", position: "Defesa", nationality: "Espanha", age: 26, foot: "Direito", info: "Defesa-central rápido na recuperação de espaços, firme na antecipação e seguro com bola." },
    { number: 35, name: "Valeri Vladimirov", position: "Defesa", nationality: "Bulgária", age: 18, foot: "Direito", info: "Jovem defesa da formação integrado na equipa principal da época." },
    { number: 42, name: "Filippo Terracciano", position: "Defesa", nationality: "Itália", age: 23, foot: "Direito", info: "Jogador polivalente capaz de atuar em várias posições defensivas com boa leitura tática." },
    { number: 46, name: "Matteo Gabbia", position: "Defesa", nationality: "Itália", age: 27, foot: "Direito", info: "Vice-capitão e defesa-central posicional, seguro no jogo aéreo e na leitura da área." },

    { number: 8, name: "Ruben Loftus-Cheek", position: "Médio", nationality: "Inglaterra", age: 30, foot: "Direito", info: "Médio físico e potente na condução sob pressão, transporte de bola e chegada à área." },
    { number: 11, name: "Christian Pulisic", position: "Médio", nationality: "Estados Unidos", age: 28, foot: "Direito", info: "Criativo/avançado veloz e incisivo no 1x1, drible, movimentação entre linhas e remate." },
    { number: 12, name: "Adrien Rabiot", position: "Médio", nationality: "França", age: 31, foot: "Esquerdo", info: "Médio box-to-box forte na passada, recuperação de bola, chegada em segunda linha e equilíbrio." },
    { number: 14, name: "Luka Modrić", position: "Médio", nationality: "Croácia", age: 41, foot: "Direito", info: "Médio organizador de enorme classe no passe curto/longo, controlo do ritmo e visão de jogo." },
    { number: 20, name: "Omari Hutchinson", position: "Médio", nationality: "Jamaica", age: 23, foot: "Esquerdo", info: "Criativo/extremo canhoto ágil no drible curto, condução e desequilíbrio pelo corredor." },
    { number: 22, name: "Diego Moreira", position: "Médio", nationality: "Bélgica", age: 22, foot: "Esquerdo", info: "Ala/médio canhoto rápido e dinâmico, forte na condução, profundidade e largura." },
    { number: 28, name: "Christian Comotto", position: "Médio", nationality: "Itália", age: 18, foot: "Direito", info: "Jovem médio formado no clube com boa visão de jogo e calma com bola." },
    { number: 30, name: "Ardon Jashari", position: "Médio", nationality: "Suíça", age: 24, foot: "Esquerdo", info: "Médio canhoto combativo e organizador, forte na recuperação, passe e ritmo de jogo." },
    { number: 56, name: "Alexis Saelemaekers", position: "Médio", nationality: "Bélgica", age: 27, foot: "Direito", info: "Ala/médio incansável no trabalho defensivo e ofensivo, útil em ambos os flancos." },
    { number: 70, name: "Alphadjo Cisse", position: "Médio", nationality: "Itália", age: 20, foot: "Direito", info: "Jovem médio ofensivo/avançado dinâmico, perigoso na chegada à finalização e mobilidade." },
    { number: 80, name: "Yunus Musah", position: "Médio", nationality: "Estados Unidos", age: 23, foot: "Direito", info: "Médio dinâmico e veloz na condução, forte na pressão e na transição." },

    { number: 9, name: "Gonçalo Ramos", position: "Avançado", nationality: "Portugal", age: 25, foot: "Direito", info: "Ponta de lança móvel e goleador, forte na pressão, desmarcação na área e finalização." },
    { number: 21, name: "Samuel Chukwueze", position: "Avançado", nationality: "Nigéria", age: 27, foot: "Esquerdo", info: "Extremo canhoto explosivo no 1x1 e no drible, perigoso a fletir para dentro." },
    { number: 73, name: "Francesco Camarda", position: "Avançado", nationality: "Itália", age: 18, foot: "Direito", info: "Jovem avançado formado no clube com faro de golo, movimentação na área e finalização." }
],
            legends: ["Gunnar Nordahl", "Gianni Rivera", "Franco Baresi", "Paolo Maldini"],
            curiosities: [
                "Foi o primeiro clube italiano a erguer a Taça dos Campeões Europeus, em 1963, em Wembley.",
                "A camisola número 6 de Franco Baresi e a número 3 de Paolo Maldini foram retiradas em homenagem à sua longevidade no clube."
            ]
        },
        {
            id: "napoli",
            name: "Napoli",
            fullName: "Società Sportiva Calcio Napoli",
            country: "Itália",
            city: "Nápoles",
            founded: 1926,
            stadium: "Stadio Diego Armando Maradona",
            crest: "assets/logos/clubs/napoli.jpg",
            photos: ["assets/images/clubs/napoli-1.jpg", "assets/images/clubs/napoli-2.jpg"],
            summary: "Símbolo da paixão futebolística do sul de Itália, eternizado pela era de Diego Maradona e pelos títulos da Serie A.",
            history: "Fundado em 1926 como Foot Ball Club Internazionale Napoli, o clube viveu o seu período mais mítico com Diego Armando Maradona nos anos 1980 e regressou ao topo da Serie A na era moderna.",
            titles: [
                { competition: "Serie A (Campeonato Italiano)", count: 3, years: [1987, 1990, 2023] },
                { competition: "Coppa Italia", count: 6, years: [1962, 1976, 1987, 2012, 2014, 2020] },
                { competition: "Taça UEFA", count: 1, years: [1989] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Dries Mertens (148 golos)" },
                { label: "Mais jogos oficiais", value: "Marek Hamšík (520 jogos)" },
                { label: "Estádio", value: "Stadio Diego Armando Maradona (Nápoles)" }
            ],
            squad: [
    { number: 1, name: "Alex Meret", position: "Guarda-redes", nationality: "Itália", age: 29, foot: "Esquerdo", info: "Guarda-redes ágil sob os postes, forte nos reflexos e na leitura de cruzamentos." },
    { number: 12, name: "Claudio Pugliese", position: "Guarda-redes", nationality: "Itália", age: 21, foot: "Direito", info: "Jovem guarda-redes integrado na equipa principal da época." },
    { number: 14, name: "Nikita Contini", position: "Guarda-redes", nationality: "Ucrânia", age: 30, foot: "Direito", info: "Guarda-redes experiente para compor as opções da baliza." },
    { number: 32, name: "Vanja Milinković-Savić", position: "Guarda-redes", nationality: "Sérvia", age: 29, foot: "Direito", info: "Guarda-redes de grande estatura, forte no jogo aéreo, defesas de perto e pontapé." },

    { number: 2, name: "Costantino Favasuli", position: "Defesa", nationality: "Itália", age: 22, foot: "Direito", info: "Ala/lateral dinâmico com boa passada e projeção ofensiva pelo corredor." },
    { number: 4, name: "Alessandro Buongiorno", position: "Defesa", nationality: "Itália", age: 27, foot: "Esquerdo", info: "Defesa-central canhoto intenso na marcação, forte nos duelos e na saída de bola." },
    { number: 5, name: "Benoît Badiashile", position: "Defesa", nationality: "França", age: 25, foot: "Esquerdo", info: "Defesa-central canhoto físico, seguro no jogo aéreo e na construção a partir de trás." },
    { number: 13, name: "Amir Rrahmani", position: "Defesa", nationality: "Kosovo", age: 32, foot: "Direito", info: "Defesa-central posicional e consistente, forte na leitura defensiva e na organização." },
    { number: 16, name: "Rafa Marín", position: "Defesa", nationality: "Espanha", age: 24, foot: "Direito", info: "Defesa-central alto e firme nos duelos, com boa presença aérea." },
    { number: 17, name: "Mathías Olivera", position: "Defesa", nationality: "Uruguai", age: 29, foot: "Esquerdo", info: "Lateral/central esquerdo combativo, forte na marcação, jogo aéreo e apoio." },
    { number: 22, name: "Giovanni Di Lorenzo", position: "Defesa", nationality: "Itália", age: 33, foot: "Direito", info: "Capitão e defesa versátil, forte na liderança, chegada à frente e leitura tática." },
    { number: 30, name: "Pasquale Mazzocchi", position: "Defesa", nationality: "Itália", age: 31, foot: "Direito", info: "Lateral/ala trabalhador e adaptável a ambos os lados da linha defensiva." },
    { number: 31, name: "Sam Beukema", position: "Defesa", nationality: "Países Baixos", age: 27, foot: "Direito", info: "Defesa-central sólido na antecipação e nos duelos, seguro na saída de bola." },
    { number: 35, name: "Luca Marianucci", position: "Defesa", nationality: "Itália", age: 22, foot: "Direito", info: "Jovem defesa-central com boa estatura e capacidade de duelo." },
    { number: 37, name: "Leonardo Spinazzola", position: "Defesa", nationality: "Itália", age: 33, foot: "Direito", info: "Ala/lateral experiente e veloz na condução e nas subidas pelo corredor." },

    { number: 6, name: "Billy Gilmour", position: "Médio", nationality: "Escócia", age: 25, foot: "Direito", info: "Médio organizador calmo sob pressão, exímio no passe curto e na limpeza do jogo." },
    { number: 8, name: "Scott McTominay", position: "Médio", nationality: "Escócia", age: 29, foot: "Direito", info: "Médio físico e goleador, forte na chegada à área, jogo aéreo e intensidade." },
    { number: 11, name: "Kevin De Bruyne", position: "Médio", nationality: "Bélgica", age: 35, foot: "Direito", info: "Criativo de referência no passe decisivo, visão de jogo, cruzamento e remate." },
    { number: 26, name: "Antonio Vergara", position: "Médio", nationality: "Itália", age: 23, foot: "Esquerdo", info: "Médio ofensivo/criativo canhoto com bom drible curto e mobilidade entre linhas." },
    { number: 68, name: "Stanislav Lobotka", position: "Médio", nationality: "Eslováquia", age: 31, foot: "Direito", info: "Médio organizador fundamental na saída sob pressão, ritmo de posse e interceção." },
    { number: 99, name: "Frank Anguissa", position: "Médio", nationality: "Camarões", age: 31, foot: "Direito", info: "Médio potente na recuperação de bola, condução e presença física no meio-campo." },

    { number: 7, name: "David Neres", position: "Avançado", nationality: "Brasil", age: 29, foot: "Esquerdo", info: "Extremo canhoto ágil e criativo no 1x1, drible, assistência e desequilíbrio." },
    { number: 19, name: "Rasmus Højlund", position: "Avançado", nationality: "Dinamarca", age: 23, foot: "Esquerdo", info: "Ponta de lança potente e veloz nos ataques ao espaço, finalização e duelo físico." },
    { number: 20, name: "Lorenzo Lucca", position: "Avançado", nationality: "Itália", age: 26, foot: "Direito", info: "Ponta de lança alto e forte no jogo aéreo, proteção de bola e finalização." },
    { number: 21, name: "Matteo Politano", position: "Avançado", nationality: "Itália", age: 33, foot: "Esquerdo", info: "Extremo canhoto trabalhador e perigoso a fletir para dentro com remate e cruzamento." },
    { number: 23, name: "Giovane", position: "Avançado", nationality: "Brasil", age: 22, foot: "Esquerdo", info: "Avançado jovem brasileiro com mobilidade, drible e chegada à área." },
    { number: 27, name: "Alisson Santos", position: "Avançado", nationality: "Brasil", age: 24, foot: "Direito", info: "Extremo/avançado rápido e vertical com capacidade de desequilíbrio no ataque." },
    { number: 70, name: "Noa Lang", position: "Avançado", nationality: "Países Baixos", age: 27, foot: "Direito", info: "Extremo/avançado criativo e incisivo no 1x1, drible e chegada ao remate." }
],
            legends: ["Diego Maradona", "Antonio Juliano", "Marek Hamšík", "Dries Mertens"],
            curiosities: [
                "O estádio de Nápoles passou a chamar-se Stadio Diego Armando Maradona em dezembro de 2020.",
                "A conquista da Serie A em 2022–23 devolveu o scudetto a Nápoles 33 anos depois do título de 1990."
            ]
        },

        /* PORTUGAL */
        {
            id: "benfica",
            name: "Benfica",
            fullName: "Sport Lisboa e Benfica",
            country: "Portugal",
            city: "Lisboa",
            founded: 1904,
            stadium: "Estádio da Luz",
            crest: "assets/logos/clubs/benfica.jpg",
            photos: ["assets/images/clubs/benfica-1.jpg", "assets/images/clubs/benfica-2.jpg"],
            summary: "Clube histórico de Lisboa com o maior número de títulos nacionais em Portugal e bicampeão europeu (1961 e 1962).",
            history: "Fundado a 28 de fevereiro de 1904 como Sport Lisboa, o Benfica escreveu algumas das páginas mais douradas do futebol português nos anos 1960 com Eusébio e Béla Guttmann, conquistando duas Taças dos Campeões consecutivas.",
            titles: [
                { competition: "Campeonato Nacional / Primeira Liga", count: 38, years: [1936, 1937, 1938, 1942, 1943, 1945, 1950, 1955, 1957, 1960, 1961, 1963, 1964, 1965, 1967, 1968, 1969, 1971, 1972, 1973, 1975, 1976, 1977, 1981, 1983, 1984, 1987, 1989, 1991, 1994, 2005, 2010, 2014, 2015, 2016, 2017, 2019, 2023] },
                { competition: "Taça de Portugal", count: 26, years: [1940, 1943, 1944, 1949, 1951, 1952, 1953, 1955, 1957, 1959, 1962, 1964, 1969, 1970, 1972, 1980, 1981, 1983, 1985, 1986, 1987, 1993, 1996, 2004, 2014, 2017] },
                { competition: "Taça dos Campeões Europeus", count: 2, years: [1961, 1962] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Eusébio (473 golos)" },
                { label: "Mais jogos oficiais", value: "Luisão (538 jogos)" },
                { label: "Estádio", value: "Estádio da Luz (Lisboa)" }
            ],
            squad: [
    { number: 1, name: "Anatoliy Trubin", position: "Guarda-redes", nationality: "Ucrânia", age: 25, foot: "Direito", info: "Guarda-redes titular de grande estatura, forte nos reflexos, no jogo aéreo e no 1x1." },
    { number: 24, name: "Samuel Soares", position: "Guarda-redes", nationality: "Portugal", age: 24, foot: "Esquerdo", info: "Guarda-redes formado no clube com boa agilidade sob os postes e saída de bola." },

    { number: 2, name: "Clément Lenglet", position: "Defesa", nationality: "França", age: 31, foot: "Esquerdo", info: "Defesa-central canhoto experiente, seguro na saída de bola, passe e leitura defensiva." },
    { number: 3, name: "Alessandro Circati", position: "Defesa", nationality: "Austrália", age: 23, foot: "Direito", info: "Defesa-central sólido nos duelos e no jogo aéreo, com boa capacidade de construção." },
    { number: 6, name: "Alexander Bah", position: "Defesa", nationality: "Dinamarca", age: 28, foot: "Direito", info: "Lateral-direito intenso e veloz nas subidas, forte na pressão, cruzamento e cobertura." },
    { number: 26, name: "Samuel Dahl", position: "Defesa", nationality: "Suécia", age: 23, foot: "Esquerdo", info: "Lateral-esquerdo canhoto ágil e disciplinado, forte na condução e apoio pelo flanco." },
    { number: 33, name: "Gabriel Índio", position: "Defesa", nationality: "Brasil", age: 18, foot: "Direito", info: "Jovem defesa integrado no plantel principal da época." },
    { number: 34, name: "Souffian El Karouani", position: "Defesa", nationality: "Marrocos", age: 26, foot: "Esquerdo", info: "Lateral-esquerdo canhoto com boa passada, cruzamento e projeção ofensiva." },
    { number: 44, name: "Tomás Araújo", position: "Defesa", nationality: "Portugal", age: 24, foot: "Direito", info: "Defesa-central veloz e elegante na saída curta/longa, forte na antecipação e duelo." },
    { number: 58, name: "Daniel Banjaqui", position: "Defesa", nationality: "Portugal", age: 18, foot: "Direito", info: "Jovem lateral/defesa formado no clube com boa energia e projeção." },
    { number: 62, name: "José Neto", position: "Defesa", nationality: "Portugal", age: 18, foot: "Esquerdo", info: "Jovem defesa canhoto formado na academia com boa mobilidade." },

    { number: 5, name: "Enzo Barrenechea", position: "Médio", nationality: "Argentina", age: 25, foot: "Direito", info: "Médio defensivo combativo e posicional, forte na recuperação, desarme e equilíbrio." },
    { number: 8, name: "Fredrik Aursnes", position: "Médio", nationality: "Noruega", age: 30, foot: "Direito", info: "Jogador polivalente e incansável na leitura tática, pressão, passe e adaptação a várias zonas." },
    { number: 10, name: "Georgiy Sudakov", position: "Médio", nationality: "Ucrânia", age: 24, foot: "Direito", info: "Médio ofensivo/criativo técnico, forte no passe decisivo, visão entre linhas e remate." },
    { number: 16, name: "Manu Silva", position: "Médio", nationality: "Portugal", age: 25, foot: "Direito", info: "Médio equilibrado e combativo na recuperação de bola, desarme e saída de jogo." },
    { number: 18, name: "Leandro Barreiro", position: "Médio", nationality: "Luxemburgo", age: 26, foot: "Direito", info: "Médio box-to-box intenso na pressão e na corrida, forte na chegada em segunda linha." },
    { number: 30, name: "Claudio Echeverri", position: "Médio", nationality: "Argentina", age: 20, foot: "Direito", info: "Criativo ágil no drible curto, condução e mobilidade entre linhas no último terço." },
    { number: 36, name: "João Palhinha", position: "Médio", nationality: "Portugal", age: 31, foot: "Direito", info: "Médio defensivo de referência no desarme, interceção e proteção da linha defensiva." },

    { number: 11, name: "Dodi Lukébakio", position: "Avançado", nationality: "Bélgica", age: 29, foot: "Esquerdo", info: "Extremo canhoto veloz e perigoso a fletir para dentro com remate, drible e transição." },
    { number: 13, name: "Jakub Kamiński", position: "Avançado", nationality: "Polónia", age: 24, foot: "Direito", info: "Extremo/ala veloz e trabalhador, forte no ataque ao espaço e na largura do corredor." },
    { number: 14, name: "Vangelis Pavlidis", position: "Avançado", nationality: "Grécia", age: 27, foot: "Direito", info: "Ponta de lança móvel e goleador, forte na associação, desmarcação e finalização." },
    { number: 21, name: "Andreas Schjelderup", position: "Avançado", nationality: "Noruega", age: 22, foot: "Direito", info: "Extremo técnico e criativo no drible curto, condução interior e chegada ao remate." },
    { number: 22, name: "Jhon Durán", position: "Avançado", nationality: "Colômbia", age: 22, foot: "Esquerdo", info: "Ponta de lança canhoto potente no remate de meia distância, velocidade e ataque à área." },
    { number: 25, name: "Gianluca Prestianni", position: "Avançado", nationality: "Argentina", age: 20, foot: "Direito", info: "Extremo ágil e atrevido no 1x1, forte na aceleração e no drible em espaços curtos." },
    { number: 27, name: "Rafa Silva", position: "Avançado", nationality: "Portugal", age: 33, foot: "Direito", info: "Avançado/extremo muito rápido na condução e na transição, forte na desmarcação e drible." },
    { number: 72, name: "Anísio Cabral", position: "Avançado", nationality: "Portugal", age: 18, foot: "Direito", info: "Jovem avançado formado na academia com mobilidade e chegada à finalização." }
],
            legends: ["Eusébio", "Mário Coluna", "Humberto Coelho", "Nené"],
            curiosities: [
                "Em 1961 quebrou a hegemonia de cinco anos do Real Madrid na Taça dos Campeões Europeus.",
                "É um dos clubes com maior número de sócios e massa associativa em todo o mundo."
            ]
        },
        {
            id: "fc-porto",
            name: "FC Porto",
            fullName: "Futebol Clube do Porto",
            country: "Portugal",
            city: "Porto",
            founded: 1893,
            stadium: "Estádio do Dragão",
            crest: "assets/logos/clubs/fc-porto.jpg",
            photos: ["assets/images/clubs/fc-porto-1.jpg", "assets/images/clubs/fc-porto-2.jpg"],
            summary: "Clube histórico do norte de Portugal com forte palmarés internacional, incluindo duas Taças dos Campeões / Ligas dos Campeões.",
            history: "Fundado a 28 de setembro de 1893 por António Nicolau de Almeida, o FC Porto afirmou-se como uma das potências mais consistentes do futebol português e europeu, vencendo a Taça dos Campeões em 1987 e a Liga dos Campeões em 2004.",
            titles: [
                { competition: "Campeonato Nacional / Primeira Liga", count: 30, years: [1935, 1939, 1940, 1956, 1959, 1978, 1979, 1985, 1986, 1988, 1990, 1992, 1993, 1995, 1996, 1997, 1998, 1999, 2003, 2004, 2006, 2007, 2008, 2009, 2011, 2012, 2013, 2018, 2020, 2022] },
                { competition: "Taça de Portugal", count: 20, years: [1956, 1958, 1968, 1977, 1984, 1988, 1991, 1994, 1998, 2000, 2001, 2003, 2006, 2009, 2010, 2011, 2020, 2022, 2023, 2024] },
                { competition: "Taça dos Campeões / Liga dos Campeões", count: 2, years: [1987, 2004] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Fernando Gomes (355 golos)" },
                { label: "Mais jogos oficiais", value: "João Pinto (587 jogos)" },
                { label: "Estádio", value: "Estádio do Dragão (Porto)" }
            ],
            squad: [
    { number: 14, name: "Cláudio Ramos", position: "Guarda-redes", nationality: "Portugal", age: 35, foot: "Direito", info: "Guarda-redes experiente e seguro nas intervenções sob os postes e na área." },
    { number: 24, name: "João Costa", position: "Guarda-redes", nationality: "Portugal", age: 21, foot: "Direito", info: "Guarda-redes formado no clube com boa agilidade e leitura da baliza." },
    { number: 50, name: "João Afonso", position: "Guarda-redes", nationality: "Portugal", age: 20, foot: "Direito", info: "Jovem guarda-redes integrado na estrutura do clube." },
    { number: 99, name: "Diogo Costa", position: "Guarda-redes", nationality: "Portugal", age: 27, foot: "Direito", info: "Capitão e guarda-redes completo, forte nos reflexos, no 1x1, nos penáltis e no passe longo." },

    { number: 4, name: "Jakub Kiwior", position: "Defesa", nationality: "Polónia", age: 26, foot: "Esquerdo", info: "Defesa-central canhoto seguro na construção, passe vertical e leitura defensiva." },
    { number: 5, name: "Jan Bednarek", position: "Defesa", nationality: "Polónia", age: 30, foot: "Direito", info: "Defesa-central experiente e firme nos duelos aéreos, marcação e organização." },
    { number: 6, name: "Chris Smalling", position: "Defesa", nationality: "Inglaterra", age: 36, foot: "Direito", info: "Defesa-central veterano forte no jogo aéreo, na proteção da área e na experiência." },
    { number: 12, name: "Zaidu Sanusi", position: "Defesa", nationality: "Nigéria", age: 29, foot: "Esquerdo", info: "Lateral-esquerdo muito veloz na corrida e na cobertura defensiva pelo corredor." },
    { number: 18, name: "Nehuén Pérez", position: "Defesa", nationality: "Argentina", age: 26, foot: "Direito", info: "Defesa-central combativo e agressivo nos duelos, firme na antecipação e saída de bola." },
    { number: 20, name: "Alberto Costa", position: "Defesa", nationality: "Portugal", age: 23, foot: "Direito", info: "Lateral-direito físico e dinâmico, forte nas subidas, cruzamento e transição." },
    { number: 21, name: "Dominik Prpić", position: "Defesa", nationality: "Croácia", age: 22, foot: "Esquerdo", info: "Defesa-central canhoto com boa capacidade de construção e leitura defensiva." },
    { number: 33, name: "João Victor de Souza Menezes", position: "Defesa", nationality: "Brasil", age: 20, foot: "Esquerdo", info: "Jovem defesa brasileiro integrado no plantel da época." },
    { number: 52, name: "Martim Fernandes", position: "Defesa", nationality: "Portugal", age: 20, foot: "Direito", info: "Lateral-direito formado no clube com boa leitura tática, cruzamento e apoio ofensivo." },
    { number: 64, name: "Luís Gomes", position: "Defesa", nationality: "Portugal", age: 21, foot: "Direito", info: "Jovem defesa da formação com boa capacidade de duelo e leitura posicional." },
    { number: 74, name: "Francisco Moura", position: "Defesa", nationality: "Portugal", age: 27, foot: "Esquerdo", info: "Lateral-esquerdo canhoto com bom cruzamento, passe e apoio ofensivo pelo flanco." },

    { number: 8, name: "Victor Froholdt", position: "Médio", nationality: "Dinamarca", age: 20, foot: "Direito", info: "Médio dinamarquês intenso e dinâmico na pressão, recuperação, transporte e chegada." },
    { number: 10, name: "Gabri Veiga", position: "Médio", nationality: "Espanha", age: 24, foot: "Direito", info: "Médio criativo com forte chegada à área, remate de meia distância, passe e drible." },
    { number: 13, name: "Pablo Rosario", position: "Médio", nationality: "República Dominicana", age: 29, foot: "Direito", info: "Médio combativo e equilibrado na recuperação de bola, desarme e organização." },
    { number: 15, name: "Vasco Sousa", position: "Médio", nationality: "Portugal", age: 23, foot: "Direito", info: "Médio intenso e aguerrido na pressão e na ligação rápida entre setores." },
    { number: 16, name: "Hwang In-beom", position: "Médio", nationality: "Coreia do Sul", age: 30, foot: "Esquerdo", info: "Médio canhoto inteligente na construção, passe vertical, visão de jogo e intensidade." },
    { number: 22, name: "Alan Varela", position: "Médio", nationality: "Argentina", age: 25, foot: "Direito", info: "Médio organizador e recuperador, forte na leitura defensiva, desarme e passe." },
    { number: 25, name: "Tomás Pérez", position: "Médio", nationality: "Argentina", age: 21, foot: "Direito", info: "Jovem médio argentino com boa leitura posicional, desarme e saída de bola." },
    { number: 37, name: "Gabriel Mec", position: "Médio", nationality: "Brasil", age: 18, foot: "Direito", info: "Jovem criativo brasileiro com bom drible curto e mobilidade ofensiva." },
    { number: 42, name: "Seko Fofana", position: "Médio", nationality: "Costa do Marfim", age: 31, foot: "Direito", info: "Médio potente na condução, remate de fora e presença física no meio-campo." },
    { number: 57, name: "Duarte Cunha", position: "Médio", nationality: "Portugal", age: 18, foot: "Direito", info: "Jovem médio da formação integrado nas convocatórias." },
    { number: 58, name: "Tiago Silva", position: "Médio", nationality: "Portugal", age: 21, foot: "Direito", info: "Jovem médio formado no clube com boa técnica e mobilidade." },
    { number: 77, name: "Oskar Pietuszewski", position: "Médio", nationality: "Polónia", age: 18, foot: "Direito", info: "Jovem médio/extremo polaco com velocidade e capacidade de drible." },
    { number: 92, name: "João Teixeira", position: "Médio", nationality: "Portugal", age: 20, foot: "Direito", info: "Jovem médio da academia com boa capacidade de ligação." },

    { number: 7, name: "William Gomes", position: "Avançado", nationality: "Brasil", age: 20, foot: "Direito", info: "Extremo rápido e desequilibrador no 1x1, forte na condução e no remate." },
    { number: 9, name: "Samu Aghehowa", position: "Avançado", nationality: "Espanha", age: 22, foot: "Direito", info: "Ponta de lança físico e goleador, letal nos ataques à profundidade, jogo aéreo e área." },
    { number: 11, name: "Pepê", position: "Avançado", nationality: "Brasil", age: 29, foot: "Direito", info: "Avançado/extremo versátil e dinâmico, forte no drible, pressão e mobilidade." },
    { number: 17, name: "Borja Sainz", position: "Avançado", nationality: "Espanha", age: 25, foot: "Direito", info: "Extremo incisivo no 1x1, drible e chegada ao remate pelo corredor." },
    { number: 19, name: "André Silva", position: "Avançado", nationality: "Portugal", age: 31, foot: "Direito", info: "Ponta de lança experiente com boa movimentação na área, finalização e jogo associativo." },
    { number: 29, name: "Santiago Giménez", position: "Avançado", nationality: "México", age: 25, foot: "Esquerdo", info: "Ponta de lança canhoto oportuno na área, forte na finalização, desmarcação e jogo aéreo." },
    { number: 53, name: "Eduardo Ferreira", position: "Avançado", nationality: "Portugal", age: 19, foot: "Direito", info: "Jovem avançado formado no clube." },
    { number: 89, name: "Mateus Mide", position: "Avançado", nationality: "Portugal", age: 19, foot: "Direito", info: "Jovem avançado da formação com mobilidade na frente." }
],
            legends: ["Fernando Gomes", "João Pinto", "Vítor Baía", "Deco"],
            curiosities: [
                "O 'Bi-Grande' Fernando Gomes conquistou duas Botas de Ouro europeias ao serviço do clube (1983 e 1985).",
                "Venceu a Taça UEFA em 2003 e a Liga dos Campeões em 2004 sob o comando de José Mourinho."
            ]
        },
        {
            id: "sporting-cp",
            name: "Sporting CP",
            fullName: "Sporting Clube de Portugal",
            country: "Portugal",
            city: "Lisboa",
            founded: 1906,
            stadium: "Estádio José Alvalade",
            crest: "assets/logos/clubs/sporting-cp.jpg",
            photos: ["assets/images/clubs/sporting-cp-1.jpg", "assets/images/clubs/sporting-cp-2.jpg"],
            summary: "Um dos 'três grandes' de Portugal, célebre pela sua academia de formação e por ter revelado nomes maiores do futebol mundial.",
            history: "Fundado a 1 de julho de 1906 por iniciativa do Visconde de Alvalade, o Sporting CP construiu uma identidade forte em torno do ecletismo e da formação de talentos, conquistando dezenas de títulos nacionais e a Taça das Taças em 1964.",
            titles: [
                { competition: "Campeonato Nacional / Primeira Liga", count: 21, years: [1941, 1944, 1947, 1948, 1949, 1951, 1952, 1953, 1954, 1958, 1962, 1966, 1970, 1974, 1980, 1982, 2000, 2002, 2021, 2024, 2025] },
                { competition: "Taça de Portugal", count: 17, years: [1941, 1945, 1946, 1948, 1954, 1963, 1971, 1973, 1974, 1978, 1982, 1995, 2002, 2007, 2008, 2015, 2019] },
                { competition: "Taça das Taças da UEFA", count: 1, years: [1964] }
            ],
            stats: [
                { label: "Maior marcador histórico", value: "Fernando Peyroteo (544 golos)" },
                { label: "Mais jogos oficiais", value: "Hilário (478 jogos)" },
                { label: "Estádio", value: "Estádio José Alvalade (Lisboa)" }
            ],
           squad: [
    { number: 1, name: "Rui Silva", position: "Guarda-redes", nationality: "Portugal", age: 32, foot: "Direito", info: "Guarda-redes titular experiente, seguro nos reflexos, na saída da baliza e no jogo de pés." },
    { number: 30, name: "Kaique Pereira", position: "Guarda-redes", nationality: "Brasil", age: 23, foot: "Direito", info: "Guarda-redes brasileiro com boa envergadura e agilidade sob os postes." },

    { number: 6, name: "Zeno Debast", position: "Defesa", nationality: "Bélgica", age: 23, foot: "Direito", info: "Defesa-central com forte qualidade de passe longo, leitura defensiva e polivalência." },
    { number: 13, name: "Georgios Vagiannidis", position: "Defesa", nationality: "Grécia", age: 25, foot: "Direito", info: "Lateral-direito veloz e dinâmico, forte nas subidas pelo corredor e na marcação." },
    { number: 20, name: "Maximiliano Araújo", position: "Defesa", nationality: "Uruguai", age: 26, foot: "Esquerdo", info: "Lateral/ala canhoto intenso e combativo, forte na condução, cruzamento e pressão." },
    { number: 22, name: "Iván Fresneda", position: "Defesa", nationality: "Espanha", age: 22, foot: "Direito", info: "Lateral-direito disciplinado e ofensivo, seguro no 1x1 e na chegada à frente." },
    { number: 25, name: "Gonçalo Inácio", position: "Defesa", nationality: "Portugal", age: 25, foot: "Esquerdo", info: "Defesa-central canhoto líder, exímio na saída de bola, passe vertical e antecipação." },
    { number: 50, name: "Rodrigo Dias", position: "Defesa", nationality: "Portugal", age: 21, foot: "Direito", info: "Jovem defesa formado na academia com boa mobilidade e leitura tática." },
    { number: 55, name: "Ibrahima Ba", position: "Defesa", nationality: "França", age: 21, foot: "Direito", info: "Defesa jovem e físico com boa presença nos duelos e na cobertura." },
    { number: 72, name: "Eduardo Quaresma", position: "Defesa", nationality: "Portugal", age: 24, foot: "Direito", info: "Defesa-central rápido na recuperação de espaços, elegante na condução e firme no duelo." },

    { number: 4, name: "Silas Andersen", position: "Médio", nationality: "Dinamarca", age: 22, foot: "Direito", info: "Médio dinamarquês combativo e dinâmico na recuperação, passe e intensidade." },
    { number: 5, name: "Sergi Altimira", position: "Médio", nationality: "Espanha", age: 25, foot: "Direito", info: "Médio organizador e equilibrado, seguro na posse, desarme e leitura de jogo." },
    { number: 8, name: "João Simões", position: "Médio", nationality: "Portugal", age: 19, foot: "Direito", info: "Jovem médio formado no clube com boa intensidade, chegada e critério com bola." },
    { number: 17, name: "Rodrigo Zalazar", position: "Médio", nationality: "Uruguai", age: 27, foot: "Direito", info: "Médio ofensivo/criativo dinâmico, forte no passe decisivo, remate, drible e bola parada." },
    { number: 21, name: "Pedro Lima", position: "Médio", nationality: "Brasil", age: 20, foot: "Direito", info: "Jovem médio/lateral com boa capacidade física e chegada ao último terço." },
    { number: 77, name: "Issa Doumbia", position: "Médio", nationality: "Itália", age: 21, foot: "Direito", info: "Médio físico e intenso na recuperação de bola, condução e transição." },

    { number: 7, name: "Fotis Ioannidis", position: "Avançado", nationality: "Grécia", age: 26, foot: "Direito", info: "Avançado forte no jogo associativo, retenção de bola, pressão e finalização." },
    { number: 9, name: "Rafael Nel", position: "Avançado", nationality: "Portugal", age: 21, foot: "Direito", info: "Ponta de lança jovem formado no clube com boa movimentação na área." },
    { number: 10, name: "Geny Catamo", position: "Avançado", nationality: "Moçambique", age: 25, foot: "Esquerdo", info: "Extremo canhoto ágil e desequilibrador no 1x1, forte a fletir para o remate e passe." },
    { number: 19, name: "Nestory Irankunda", position: "Avançado", nationality: "Austrália", age: 20, foot: "Direito", info: "Extremo explosivo na velocidade e no remate potente, perigoso na transição." },
    { number: 28, name: "Jesse Derry", position: "Avançado", nationality: "Inglaterra", age: 19, foot: "Direito", info: "Jovem extremo veloz e direto com capacidade de drible pelos corredores." },
    { number: 31, name: "Luís Guilherme", position: "Avançado", nationality: "Brasil", age: 20, foot: "Esquerdo", info: "Extremo canhoto rápido e técnico, forte na condução em progressão e no drible." },
    { number: 58, name: "Flávio Gonçalves", position: "Avançado", nationality: "Portugal", age: 19, foot: "Direito", info: "Jovem avançado/extremo formado na academia com faro de golo e mobilidade." },
    { number: 97, name: "Luis Suárez", position: "Avançado", nationality: "Colômbia", age: 28, foot: "Direito", info: "Ponta de lança potente e goleador, forte nos ataques à profundidade, pressão e remate." }
],
            legends: ["Fernando Peyroteo", "Manuel Fernandes", "Luís Figo", "Cristiano Ronaldo"],
            curiosities: [
                "Fernando Peyroteo mantém uma média de golos por jogo lendária no futebol português.",
                "A Academia Cristiano Ronaldo em Alcochete formou jogadores como Luís Figo, Cristiano Ronaldo, Paulo Futre e Nani."
            ]
        }
    ]
}