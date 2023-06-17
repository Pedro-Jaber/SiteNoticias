const bd = [
  {
    "title": "Novo estudo revela avanços na cura do câncer de pulmão",
    "image": "cancer_pulmao.jpg",
    "tag": ["Saúde", "Ciência"],
    "call": "Pesquisadores descobrem terapia promissora para o câncer de pulmão",
    "body": "Um novo estudo científico revelou avanços promissores na busca por uma cura efetiva para o câncer de pulmão. Pesquisadores descobriram uma nova terapia que tem demonstrado resultados positivos em pacientes com estágios avançados da doença. A terapia utiliza uma combinação de imunoterapia e drogas-alvo específicas para combater as células cancerígenas. Os resultados iniciais são encorajadores e oferecem esperança para aqueles que lutam contra o câncer de pulmão."
  },
  {
    "title": "Atleta brasileiro conquista medalha de ouro nos Jogos Olímpicos",
    "image": "medalha_ouro.jpg",
    "tag": ["Esportes", "Internacional"],
    "call": "Brasileiro João Silva se consagra campeão olímpico na natação",
    "body": "O Brasil celebra mais uma conquista nos Jogos Olímpicos. O atleta brasileiro João Silva conquistou a medalha de ouro na modalidade de natação 100 metros borboleta. Com um desempenho incrível e determinação inabalável, João superou seus adversários e se consagrou campeão olímpico. Essa vitória histórica representa o talento e a dedicação dos atletas brasileiros no cenário esportivo internacional."
  },
  {
    "title": "Novo dispositivo revoluciona a forma como interagimos com a tecnologia",
    "image": "dispositivo_tecnologia.jpg",
    "tag": ["Tecnologia"],
    "call": "Empresa lança dispositivo inovador para interação tecnológica",
    "body": "Uma empresa de tecnologia lançou um dispositivo inovador que promete revolucionar a forma como interagimos com a tecnologia. O dispositivo utiliza realidade aumentada e reconhecimento de gestos para criar uma experiência totalmente imersiva. Com ele, os usuários podem controlar aplicativos, jogar jogos e até mesmo realizar tarefas do dia a dia apenas com movimentos das mãos. Essa nova tecnologia promete abrir portas para novas possibilidades e transformar a maneira como utilizamos nossos dispositivos eletrônicos."
  },
  {
    "title": "Estudantes brasileiros protestam por melhorias na educação",
    "image": "protesto_educacao.jpg",
    "tag": ["Educação", "Política"],
    "call": "Estudantes saem às ruas em busca de melhorias na educação",
    "body": "Milhares de estudantes brasileiros saíram às ruas para protestar por melhorias na educação. Eles reivindicam investimentos adequados em infraestrutura escolar, valorização dos professores e acesso à educação de qualidade para todos. Os manifestantes pedem também por uma reforma educacional abrangente, que promova a equidade e prepare os jovens para os desafios do século XXI. O movimento estudantil ganha força e chama a atenção das autoridades para a importância de investir na educação como forma de promover o desenvolvimento do país."
  },
  {
    "title": "Novas descobertas científicas ameaçam ecossistemas marinhos",
    "image": "acidificacao_oceanos.jpg",
    "tag": ["Meio Ambiente", "Ciência"],
    "call": "Estudos alertam sobre a ameaça da acidificação dos oceanos",
    "body": "Recentes descobertas científicas revelam que os ecossistemas marinhos estão enfrentando uma ameaça crescente. Estudos apontam que a acidificação dos oceanos, causada pela absorção excessiva de dióxido de carbono, está afetando negativamente a vida marinha. Esse fenômeno coloca em risco recifes de coral, espécies marinhas e todo o equilíbrio dos ecossistemas costeiros. Os cientistas alertam para a necessidade urgente de reduzir as emissões de carbono e adotar medidas para proteger os oceanos e preservar a biodiversidade marinha."
  },
  {
    "title": "Pesquisadores descobrem nova espécie de planta com propriedades medicinais",
    "image": "nova_planta_medicinal.jpg",
    "tag": ["Ciência", "Saúde"],
    "call": "Descoberta de planta com potencial terapêutico",
    "body": "Uma equipe de pesquisadores anunciou a descoberta de uma nova espécie de planta com propriedades medicinais. A planta, chamada de 'Botanicus curalis', foi encontrada em uma região remota da floresta amazônica. Estudos iniciais indicam que ela possui compostos químicos com potencial terapêutico para o tratamento de doenças cardiovasculares. Essa descoberta desperta interesse na comunidade científica e pode abrir caminho para o desenvolvimento de novos medicamentos."
  },
  {
    "title": "Empresas de tecnologia anunciam parceria para desenvolver carro autônomo",
    "image": "carro_autonomo.jpg",
    "tag": ["Tecnologia", "Economia"],
    "call": "Parceria para avanço dos carros autônomos",
    "body": "Duas grandes empresas de tecnologia, juntamente com uma montadora de automóveis, anunciaram uma parceria estratégica para o desenvolvimento de carros autônomos. O objetivo é combinar a expertise em inteligência artificial e sensores avançados das empresas de tecnologia com a experiência em produção automotiva da montadora. A expectativa é que essa colaboração acelere o progresso no campo dos veículos autônomos e transforme a indústria automobilística nos próximos anos."
  },
  {
    "title": "Governo implementa medidas para impulsionar a economia nacional",
    "image": "medidas_economia.jpg",
    "tag": ["Economia", "Política"],
    "call": "Medidas para impulsionar a economia",
    "body": "O governo anunciou a implementação de um conjunto de medidas com o objetivo de impulsionar a economia nacional. Entre as ações estão a redução de impostos para determinados setores, incentivos fiscais para atração de investimentos estrangeiros e programas de capacitação profissional. Essas medidas visam estimular o crescimento econômico, gerar empregos e fortalecer o mercado interno. A expectativa é que essas iniciativas tenham um impacto positivo no desenvolvimento do país."
  },
  {
    "title": "Novo estudo revela impacto negativo das redes sociais na saúde mental dos jovens",
    "image": "impacto_redes_sociais.jpg",
    "tag": ["Saúde", "Tecnologia"],
    "call": "Impacto das redes sociais na saúde mental",
    "body": "Um novo estudo científico trouxe à tona o impacto negativo das redes sociais na saúde mental dos jovens. A pesquisa revelou que o uso excessivo das redes sociais está associado a níveis mais altos de ansiedade, depressão e baixa autoestima. Os especialistas alertam para a importância de um uso consciente e equilibrado das plataformas digitais, além da necessidade de promover uma educação digital que ensine os jovens a lidar de forma saudável com as redes sociais."
  },
  {
    "title": "Incêndio de grandes proporções atinge reserva ambiental",
    "image": "incendio_reserva_ambiental.jpg",
    "tag": ["Meio Ambiente"],
    "call": "Incêndio ameaça reserva ambiental",
    "body": "Um incêndio de grandes proporções está consumindo uma reserva ambiental de valor ecológico inestimável. As chamas se espalharam rapidamente devido às condições climáticas desfavoráveis e à vegetação seca. Brigadas de combate a incêndios e equipes de resgate estão mobilizadas para conter as chamas e proteger a biodiversidade local. Esse incidente ressalta a importância da prevenção e do cuidado com os recursos naturais, além da necessidade de políticas efetivas de preservação ambiental."
  }
]



module.exports.homePage = (req, res) => {
  const title = 'Home Page'
  res.render('new', {title: title})
}

module.exports.newsFiltered = (req, res) => {
  const filtro = req.params.filtro
  const title = filtro
  res.send("Noticías Filtradas por " + filtro)
}

module.exports.test3 = (req, res) => {
  res.send("home page")
}

module.exports.test4 = (req, res) => {
  res.send("home page")
}


/*
app.get('/', (req, res) => {
  //res.send('home page')
  const title = 'top'
  res.render('new', {title: title})
})

app.get('/:teste', (req, res) => {
  //res.send('home page')
  console.log(req.params.teste)
  res.send(req.params.teste)
})
*/