import { Question, QuizCategory, CategoryMetadata } from "../types/quiz";

export const categoryMetadata: CategoryMetadata[] = [
  {
    id: QuizCategory.APOSTOLO,
    name: "Apóstolo",
    description:
      "O dom de Apóstolo está ligado à paixão por compartilhar o evangelho e trazer as pessoas para Cristo. Apóstolos têm um forte desejo de ver vidas transformadas pela salvação e são movidos por um profundo amor pelas almas. Eles frequentemente têm facilidade em comunicar a mensagem do evangelho de forma clara e convincente.",
  },
  {
    id: QuizCategory.PROFETA,
    name: "Profeta",
    description:
      "O dom de Profeta está ligado a uma sensibilidade espiritual aguçada, à capacidade de discernir a vontade de Deus e comunicar Sua mensagem às pessoas. Os profetas são conhecidos por sua intimidade com Deus, coragem para falar a verdade, e o desejo de ver a justiça divina sendo estabelecida.",
  },
  {
    id: QuizCategory.EVANGELISTA,
    name: "Evangelista",
    description:
      "O dom de Evangelista está ligado à paixão por compartilhar o evangelho e trazer as pessoas para Cristo. Evangelistas têm um forte desejo de ver vidas transformadas pela salvação e são movidos por um profundo amor pelas almas. Eles frequentemente têm facilidade em comunicar a mensagem do evangelho de forma clara e convincente.",
  },
  {
    id: QuizCategory.PASTOR,
    name: "Pastor",
    description:
      "O dom pastoral envolve cuidar, guiar e nutrir espiritualmente o rebanho de Deus. Um pastor tem um coração de compaixão pelas pessoas, preocupa-se com seu bem-estar espiritual e emocional, e se dedica a discipular e ajudar os outros a crescerem em Cristo.",
  },
  {
    id: QuizCategory.MESTRE,
    name: "Mestre",
    description:
      "O dom de Mestre envolve a habilidade de ensinar e comunicar de forma clara as verdades bíblicas. Mestres têm paixão por estudar a Palavra de Deus, explicar conceitos complexos e ajudar os outros a crescerem em seu entendimento e aplicação das Escrituras.",
  },
];

export const quizQuestions: Record<QuizCategory, Question[]> = {
  [QuizCategory.APOSTOLO]: [
    {
      id: 1,
      category: QuizCategory.APOSTOLO,
      question:
        "Você se sente chamado para iniciar novos projetos ou ministérios na igreja?",
    },
    {
      id: 2,
      category: QuizCategory.APOSTOLO,
      question:
        "Tem facilidade em ver o potencial de crescimento em diferentes áreas do ministério?",
    },
    {
      id: 3,
      category: QuizCategory.APOSTOLO,
      question:
        "Costuma ser o primeiro a se voluntariar para liderar novos empreendimentos ou iniciativas missionárias?",
    },
    {
      id: 4,
      category: QuizCategory.APOSTOLO,
      question:
        "Sente-se confortável em liderar equipes e delegar tarefas para alcançar um objetivo maior?",
    },
    {
      id: 5,
      category: QuizCategory.APOSTOLO,
      question:
        "Tem uma visão clara de como a igreja pode expandir seu impacto em outras regiões?",
    },
    {
      id: 6,
      category: QuizCategory.APOSTOLO,
      question:
        "Enxerga facilmente soluções para problemas complexos dentro da igreja ou no campo missionário?",
    },
    {
      id: 7,
      category: QuizCategory.APOSTOLO,
      question:
        "Prefere trabalhar em novos projetos do que em funções rotineiras ou já estabelecidas?",
    },
    {
      id: 8,
      category: QuizCategory.APOSTOLO,
      question:
        "Sente-se inspirado ao ver o evangelho alcançando novos lugares ou culturas?",
    },
    {
      id: 9,
      category: QuizCategory.APOSTOLO,
      question:
        "Você tem facilidade em identificar dons e habilidades em outras pessoas e capacitá-las a servir?",
    },
    {
      id: 10,
      category: QuizCategory.APOSTOLO,
      question:
        "Costuma ser visto como alguém com autoridade espiritual para tomar decisões estratégicas?",
    },
    {
      id: 11,
      category: QuizCategory.APOSTOLO,
      question:
        "Prefere mobilizar e treinar outros líderes ao invés de fazer o trabalho sozinho?",
    },
    {
      id: 12,
      category: QuizCategory.APOSTOLO,
      question:
        "Tem uma paixão por criar novas igrejas ou missões onde o evangelho ainda não chegou?",
    },
    {
      id: 13,
      category: QuizCategory.APOSTOLO,
      question:
        "Você sente que Deus o chamou para ser uma referência de liderança e direção espiritual?",
    },
    {
      id: 14,
      category: QuizCategory.APOSTOLO,
      question:
        "Gosta de viajar para outras cidades ou países com o propósito de expandir o Reino de Deus?",
    },
    {
      id: 15,
      category: QuizCategory.APOSTOLO,
      question:
        "Se sente à vontade em ambientes desafiadores onde é preciso estabelecer novas bases de ministério?",
    },
    {
      id: 16,
      category: QuizCategory.APOSTOLO,
      question:
        "As pessoas frequentemente buscam você para conselhos sobre o futuro da igreja ou sobre estratégias de crescimento?",
    },
    {
      id: 17,
      category: QuizCategory.APOSTOLO,
      question:
        "Gosta de trabalhar em equipe para estabelecer uma estrutura sólida e duradoura no ministério?",
    },
    {
      id: 18,
      category: QuizCategory.APOSTOLO,
      question:
        "Se sente realizado ao ver novos ministérios florescendo a partir do seu esforço inicial?",
    },
    {
      id: 19,
      category: QuizCategory.APOSTOLO,
      question:
        "Acredita que tem a habilidade de identificar novas oportunidades de crescimento para o Reino de Deus?",
    },
    {
      id: 20,
      category: QuizCategory.APOSTOLO,
      question:
        "Sente que Deus o chama para influenciar e treinar outras igrejas ou líderes em regiões distantes?",
    },
  ],
  [QuizCategory.PROFETA]: [
    {
      id: 1,
      category: QuizCategory.PROFETA,
      question:
        "Você sente que Deus fala com você de forma clara e direta, revelando coisas sobre o presente ou o futuro?",
    },
    {
      id: 2,
      category: QuizCategory.PROFETA,
      question:
        "Tem facilidade em discernir o que está acontecendo no mundo espiritual em diferentes situações?",
    },
    {
      id: 3,
      category: QuizCategory.PROFETA,
      question:
        "Sente uma forte necessidade de trazer à luz a verdade, mesmo quando é desconfortável para os outros?",
    },
    {
      id: 4,
      category: QuizCategory.PROFETA,
      question:
        "Costuma ter sonhos ou visões que considera serem mensagens de Deus?",
    },
    {
      id: 5,
      category: QuizCategory.PROFETA,
      question:
        "Sente-se impulsionado a chamar a igreja ou as pessoas ao arrependimento e à santidade?",
    },
    {
      id: 6,
      category: QuizCategory.PROFETA,
      question:
        "Tem a impressão de que Deus lhe dá percepções ou revelações sobre situações específicas que precisam de correção?",
    },
    {
      id: 7,
      category: QuizCategory.PROFETA,
      question:
        "Sente um peso espiritual quando vê injustiça ou pecado e é motivado a confrontar isso?",
    },
    {
      id: 8,
      category: QuizCategory.PROFETA,
      question:
        "Costuma ser sensível à presença de Deus e ao mover do Espírito Santo em diferentes momentos?",
    },
    {
      id: 9,
      category: QuizCategory.PROFETA,
      question:
        "Tem a coragem de falar a verdade, mesmo quando vai contra a opinião da maioria?",
    },
    {
      id: 10,
      category: QuizCategory.PROFETA,
      question:
        "As pessoas frequentemente buscam você para discernimento espiritual ou para entender o que Deus está dizendo?",
    },
    {
      id: 11,
      category: QuizCategory.PROFETA,
      question:
        "Sente que Deus lhe dá palavras específicas para outras pessoas que ajudam a guiar suas vidas?",
    },
    {
      id: 12,
      category: QuizCategory.PROFETA,
      question:
        "Tem uma profunda paixão pela justiça de Deus e pelo cumprimento da Sua vontade?",
    },
    {
      id: 13,
      category: QuizCategory.PROFETA,
      question:
        "Costuma perceber com facilidade o que está errado em uma situação ou em uma pessoa e sente o desejo de corrigir?",
    },
    {
      id: 14,
      category: QuizCategory.PROFETA,
      question:
        "Se sente compelido a interceder em oração quando percebe algo fora da vontade de Deus?",
    },
    {
      id: 15,
      category: QuizCategory.PROFETA,
      question:
        "Tem facilidade em perceber quando uma palavra ou mensagem é inspirada por Deus ou não?",
    },
    {
      id: 16,
      category: QuizCategory.PROFETA,
      question:
        "Costuma experimentar uma forte convicção interior para falar ou agir quando sente que Deus está direcionando?",
    },
    {
      id: 17,
      category: QuizCategory.PROFETA,
      question:
        "Você se sente chamado para preparar o caminho para algo que Deus vai fazer, alertando e orientando a igreja?",
    },
    {
      id: 18,
      category: QuizCategory.PROFETA,
      question:
        "Tem facilidade em perceber engano ou falsidade no ambiente espiritual ao seu redor?",
    },
    {
      id: 19,
      category: QuizCategory.PROFETA,
      question:
        "Sente que tem uma responsabilidade especial de alertar as pessoas sobre o julgamento ou a bênção de Deus?",
    },
    {
      id: 20,
      category: QuizCategory.PROFETA,
      question:
        "É frequentemente movido por uma paixão intensa pela pureza e verdade na igreja e no mundo?",
    },
  ],
  [QuizCategory.EVANGELISTA]: [
    {
      id: 1,
      category: QuizCategory.EVANGELISTA,
      question:
        "Você sente uma profunda urgência em compartilhar o evangelho com as pessoas ao seu redor?",
    },
    {
      id: 2,
      category: QuizCategory.EVANGELISTA,
      question:
        "Fica emocionado ao ver alguém aceitar a Cristo como Salvador e sente que isso é parte de sua missão?",
    },
    {
      id: 3,
      category: QuizCategory.EVANGELISTA,
      question:
        "Tem facilidade em iniciar conversas sobre fé e espiritualidade com pessoas que ainda não conhecem a Cristo?",
    },
    {
      id: 4,
      category: QuizCategory.EVANGELISTA,
      question:
        "Acredita que todo cristão deve se envolver na evangelização, e você sente o chamado para liderar isso?",
    },
    {
      id: 5,
      category: QuizCategory.EVANGELISTA,
      question:
        "Se sente impulsionado a alcançar aqueles que estão afastados de Deus e trazê-los de volta para Ele?",
    },
    {
      id: 6,
      category: QuizCategory.EVANGELISTA,
      question:
        "Você sente um peso no coração ao pensar nas pessoas que ainda não ouviram a mensagem de salvação?",
    },
    {
      id: 7,
      category: QuizCategory.EVANGELISTA,
      question:
        "As pessoas ao seu redor costumam ser impactadas por sua paixão ao falar sobre Jesus?",
    },
    {
      id: 8,
      category: QuizCategory.EVANGELISTA,
      question:
        "Gosta de participar ou organizar eventos evangelísticos para levar a mensagem de Cristo a mais pessoas?",
    },
    {
      id: 9,
      category: QuizCategory.EVANGELISTA,
      question:
        "Acredita que sua principal missão na vida é levar o maior número de pessoas possível a conhecer Jesus?",
    },
    {
      id: 10,
      category: QuizCategory.EVANGELISTA,
      question:
        "Sente uma grande alegria em ver a transformação espiritual na vida de alguém que aceita Cristo?",
    },
    {
      id: 11,
      category: QuizCategory.EVANGELISTA,
      question:
        "Costuma ser movido a orar especificamente por pessoas perdidas ou que ainda não conheceram a salvação?",
    },
    {
      id: 12,
      category: QuizCategory.EVANGELISTA,
      question:
        "Enxerga o evangelismo como um estilo de vida, não apenas uma atividade pontual?",
    },
    {
      id: 13,
      category: QuizCategory.EVANGELISTA,
      question:
        "Se sente incomodado quando a igreja não está focada em alcançar os perdidos?",
    },
    {
      id: 14,
      category: QuizCategory.EVANGELISTA,
      question:
        "Tem facilidade em compartilhar seu testemunho pessoal como uma forma de inspirar outros a seguirem Jesus?",
    },
    {
      id: 15,
      category: QuizCategory.EVANGELISTA,
      question:
        "Acredita que Deus lhe dá as palavras certas na hora de compartilhar o evangelho com alguém?",
    },
    {
      id: 16,
      category: QuizCategory.EVANGELISTA,
      question:
        "Sente-se à vontade em falar sobre sua fé em público, mesmo com pessoas desconhecidas?",
    },
    {
      id: 17,
      category: QuizCategory.EVANGELISTA,
      question:
        "Prefere passar tempo em ambientes onde pode alcançar pessoas que ainda não conhecem a Cristo?",
    },
    {
      id: 18,
      category: QuizCategory.EVANGELISTA,
      question:
        "Você sente que é responsável por ajudar outros cristãos a se envolverem mais na evangelização?",
    },
    {
      id: 19,
      category: QuizCategory.EVANGELISTA,
      question:
        "Gosta de treinar e encorajar outros para que se tornem evangelistas em seus próprios contextos?",
    },
    {
      id: 20,
      category: QuizCategory.EVANGELISTA,
      question:
        "Se sente chamado para alcançar pessoas em lugares onde o evangelho ainda não foi pregado ou é pouco conhecido?",
    },
  ],
  [QuizCategory.PASTOR]: [
    {
      id: 1,
      category: QuizCategory.PASTOR,
      question:
        "Você se sente chamado a cuidar e orientar as pessoas no seu crescimento espiritual?",
    },
    {
      id: 2,
      category: QuizCategory.PASTOR,
      question:
        "Tem facilidade em perceber as necessidades emocionais e espirituais das pessoas ao seu redor?",
    },
    {
      id: 3,
      category: QuizCategory.PASTOR,
      question:
        "Sente uma grande compaixão pelos membros da igreja e deseja ajudá-los a superar suas dificuldades?",
    },
    {
      id: 4,
      category: QuizCategory.PASTOR,
      question:
        "Você se sente realizado quando pode aconselhar e confortar aqueles que estão enfrentando problemas?",
    },
    {
      id: 5,
      category: QuizCategory.PASTOR,
      question:
        "Prefere estar envolvido no discipulado individual ou em pequenos grupos, ajudando as pessoas a crescerem na fé?",
    },
    {
      id: 6,
      category: QuizCategory.PASTOR,
      question:
        "Tem facilidade em criar um ambiente acolhedor e seguro onde as pessoas possam compartilhar suas lutas?",
    },
    {
      id: 7,
      category: QuizCategory.PASTOR,
      question:
        "Se sente responsável por garantir que os membros da igreja estejam sendo bem cuidados e pastoreados?",
    },
    {
      id: 8,
      category: QuizCategory.PASTOR,
      question:
        "Acredita que uma parte importante do seu ministério é caminhar ao lado das pessoas, mesmo em momentos difíceis?",
    },
    {
      id: 9,
      category: QuizCategory.PASTOR,
      question:
        "Sente-se à vontade em ensinar e orientar os outros em princípios bíblicos de forma prática e aplicável?",
    },
    {
      id: 10,
      category: QuizCategory.PASTOR,
      question:
        "Você gosta de construir relacionamentos profundos e duradouros com as pessoas, ajudando-as a crescer em sua caminhada com Cristo?",
    },
    {
      id: 11,
      category: QuizCategory.PASTOR,
      question:
        "Sente uma profunda responsabilidade em proteger o rebanho de falsas doutrinas ou influências prejudiciais?",
    },
    {
      id: 12,
      category: QuizCategory.PASTOR,
      question:
        "Acredita que Deus o chamou para ser um cuidador espiritual, ajudando os outros a alcançar a maturidade cristã?",
    },
    {
      id: 13,
      category: QuizCategory.PASTOR,
      question:
        "Gosta de orar e interceder pelas pessoas, carregando seus fardos em oração diante de Deus?",
    },
    {
      id: 14,
      category: QuizCategory.PASTOR,
      question:
        "Tem facilidade em perceber quando alguém está espiritualmente fraco ou se afastando e se sente compelido a ir atrás dessa pessoa?",
    },
    {
      id: 15,
      category: QuizCategory.PASTOR,
      question:
        "Sente-se feliz em estar disponível para ajudar as pessoas, mesmo que isso exija tempo e esforço pessoal?",
    },
    {
      id: 16,
      category: QuizCategory.PASTOR,
      question:
        "Você se preocupa com o bem-estar emocional e espiritual da igreja e quer ver todos crescendo em unidade?",
    },
    {
      id: 17,
      category: QuizCategory.PASTOR,
      question:
        "Prefere servir àqueles que já estão na fé, ajudando-os a crescer, ao invés de evangelizar os não convertidos?",
    },
    {
      id: 18,
      category: QuizCategory.PASTOR,
      question:
        "As pessoas frequentemente vêm até você em busca de aconselhamento ou encorajamento espiritual?",
    },
    {
      id: 19,
      category: QuizCategory.PASTOR,
      question:
        "Se sente chamado a construir uma comunidade cristã saudável e unida, onde todos possam se sentir parte da família de Deus?",
    },
    {
      id: 20,
      category: QuizCategory.PASTOR,
      question:
        "Você acredita que seu papel é proteger e guiar espiritualmente as pessoas como um pastor cuida de seu rebanho?",
    },
  ],
  [QuizCategory.MESTRE]: [
    {
      id: 1,
      category: QuizCategory.MESTRE,
      question:
        "Você sente uma paixão por estudar a Bíblia em profundidade e compartilhar o que aprendeu com os outros?",
    },
    {
      id: 2,
      category: QuizCategory.MESTRE,
      question:
        "Tem facilidade em explicar conceitos bíblicos de maneira clara e compreensível?",
    },
    {
      id: 3,
      category: QuizCategory.MESTRE,
      question:
        "Se sente motivado a ensinar as pessoas a aplicarem as Escrituras em suas vidas diárias?",
    },
    {
      id: 4,
      category: QuizCategory.MESTRE,
      question:
        "Prefere gastar tempo estudando a Palavra de Deus do que fazendo outras atividades no ministério?",
    },
    {
      id: 5,
      category: QuizCategory.MESTRE,
      question:
        "Você costuma ser procurado por outros para esclarecer dúvidas sobre a Bíblia e a fé cristã?",
    },
    {
      id: 6,
      category: QuizCategory.MESTRE,
      question:
        "Sente que Deus o chamou para ensinar e discipular outros através do ensino bíblico?",
    },
    {
      id: 7,
      category: QuizCategory.MESTRE,
      question:
        "Tem facilidade em organizar suas ideias e apresentá-las de forma estruturada, seja em uma aula, sermão ou estudo bíblico?",
    },
    {
      id: 8,
      category: QuizCategory.MESTRE,
      question:
        "Acredita que ensinar as verdades bíblicas é uma das formas mais importantes de fortalecer a igreja?",
    },
    {
      id: 9,
      category: QuizCategory.MESTRE,
      question:
        "Gosta de desenvolver materiais de estudo ou programas de ensino para ajudar as pessoas a aprenderem mais sobre a Bíblia?",
    },
    {
      id: 10,
      category: QuizCategory.MESTRE,
      question:
        "Se sente à vontade em falar em público e ensinar grupos pequenos ou grandes sobre temas espirituais?",
    },
    {
      id: 11,
      category: QuizCategory.MESTRE,
      question:
        "As pessoas frequentemente vêm até você em busca de orientação e clareza sobre doutrinas e temas teológicos?",
    },
    {
      id: 12,
      category: QuizCategory.MESTRE,
      question:
        "Se sente inspirado a ajudar os outros a crescerem em seu entendimento da Palavra e de como vivê-la na prática?",
    },
    {
      id: 13,
      category: QuizCategory.MESTRE,
      question:
        "Acha importante estudar a fundo o contexto histórico e cultural da Bíblia para interpretá-la corretamente?",
    },
    {
      id: 14,
      category: QuizCategory.MESTRE,
      question:
        "Prefere ensinar a aplicar as Escrituras à vida cotidiana do que focar em práticas ministeriais como evangelismo ou aconselhamento?",
    },
    {
      id: 15,
      category: QuizCategory.MESTRE,
      question:
        "Sente-se feliz quando vê que as pessoas estão entendendo e aplicando os ensinamentos bíblicos que você compartilhou?",
    },
    {
      id: 16,
      category: QuizCategory.MESTRE,
      question:
        "Costuma fazer muitas perguntas e incentivar os outros a refletirem profundamente sobre o que estão aprendendo?",
    },
    {
      id: 17,
      category: QuizCategory.MESTRE,
      question:
        "Gosta de discutir e debater sobre questões teológicas, sempre buscando a verdade bíblica?",
    },
    {
      id: 18,
      category: QuizCategory.MESTRE,
      question:
        "Você tem facilidade em transformar conceitos difíceis em lições práticas e aplicáveis para o dia a dia dos cristãos?",
    },
    {
      id: 19,
      category: QuizCategory.MESTRE,
      question:
        "Sente que o ensino bíblico correto é crucial para a maturidade espiritual da igreja?",
    },
    {
      id: 20,
      category: QuizCategory.MESTRE,
      question:
        "Acredita que Deus o chamou para ser uma fonte de conhecimento e sabedoria bíblica para os outros?",
    },
  ],
};

// Helper function to get all questions in order
export const getAllQuestions = (): Question[] => {
  return Object.values(quizQuestions).flat();
};

// Helper to get questions by category
export const getQuestionsByCategory = (category: QuizCategory): Question[] => {
  return quizQuestions[category];
};
