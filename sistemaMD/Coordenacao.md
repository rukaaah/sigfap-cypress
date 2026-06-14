Esse .md é responsável para descrever as características da sessão "Coordenação"

Coordenação/
    ├── Dados pessoais
    ├── Endereço
    ├── Dados acadêmicos
    └── Dados profissionais


Dados pessoais
    - Nome
    - Sexo(tipo select)
    - País(tipo select)
    - Data de nascimento
    - Telefone celular
    - E-mail
    - Raça/cor(tipo select)
    - CPF

Data-cy de "Dados pessoais""
const dataCy = [
  "breadcrumb-voltar", "breadcrumb-home", "notification-menu", "user-menu", 
  "editar-perfil", "usuario-pessoa-juridica", "alterar-senha", "logout", 
  "criadoPor.nome", "sexo", "search-sexo", "open-sexo", 
  "close-sexo", "masculino", "feminino", "nao-definido", 
  "pais-id", "search-pais-id", "open-pais-id", "close-pais-id", 
  "afeganistao", "africa-do-sul", "alandia", "albania", 
  "alemanha", "andorra", "angola", "anguilla", 
  "antartida", "antigua-e-barbuda", "arabia-saudita", "argelia", 
  "argentina", "armenia", "aruba", "australia", 
  "austria", "azerbeijao", "bahamas", "bahrein", 
  "bangladesh", "barbados", "belgica", "belize", 
  "benin", "bermudas", "bielorussia", "bolivia", 
  "bosnia-e-herzegovina", "botswana", "brasil", "brunei", 
  "bulgaria", "burkina-faso", "burundi", "butao", 
  "cabo-verde", "camaroes", "camboja", "canada", 
  "catar", "cazaquistao", "chade", "chequia", 
  "chile", "china", "chipre", "cidade-do-vaticano", 
  "colombia", "comores", "congo", "coreia-do-norte", 
  "coreia-do-sul", "costa-do-marfim", "costa-rica", "croacia", 
  "cuba", "dinamarca", "djibouti", "dominica", 
  "egito", "el-salvador", "emirados-arabes-unidos", "equador", 
  "eritreia", "eslovaquia", "eslovenia", "espanha", 
  "estados-unidos", "estonia", "etiopia", "fiji", 
  "filipinas", "finlandia", "franca", "gabao", 
  "gambia", "gana", "georgia", "gibraltar", 
  "granada", "grecia", "gronelandia", "guadalupe", 
  "guam", "guatemala", "guernsey", "guiana", 
  "guiana-francesa", "guine", "guine-equatorial", "guine-bissau", 
  "haiti", "holanda", "honduras", "hong-kong", 
  "hungria", "iemen", "ilha-bouvet", "ilha-da-curacao", 
  "ilha-de-man", "ilha-do-natal", "ilha-formosa", "ilha-heard-e-ilhas-mc-donald", 
  "ilha-norfolk", "ilhas-caimao", "ilhas-cocos-keeling", "ilhas-cook", 
  "ilhas-faroe", "ilhas-georgia-do-sul-e-sandwich", "ilhas-malvinas", "ilhas-marshall", 
  "ilhas-menores-distantes-dos-esta", "ilhas-pitcairn", "ilhas-salomao", "ilhas-svalbard-e-jan-mayen", 
  "ilhas-turks-e-caicos", "ilhas-virgens", "ilhas-virgens-dos-estados-unidos", "india", 
  "indonesia", "irao", "iraque", "irlanda", 
  "islandia", "israel", "italia", "jamaica", 
  "japao", "jersey", "jordania", "kiribati", 
  "kosovo", "kuwait", "laos", "lesoto", 
  "letonia", "libano", "liberia", "libia", 
  "liechtenstein", "lituania", "luxemburgo", "macau", 
  "macedonia-do-norte", "madagascar", "malasia", "malawi", 
  "maldivas", "mali", "malta", "marianas-setentrionais", 
  "marrocos", "martinica", "mauricio", "mauritania", 
  "mayotte", "mexico", "micronesia", "mocambique", 
  "moldavia", "monaco", "mongolia", "montenegro", 
  "montserrat", "myanmar", "namibia", "nauru", 
  "nepal", "nicaragua", "niger", "nigeria", 
  "niue", "noruega", "nova-caledonia", "nova-zelandia", 
  "oma", "paises-baixos-caribenhos", "palau", "palestina", 
  "panama", "papua-nova-guine", "paquistao", "paraguai", 
  "peru", "polinesia-francesa", "polonia", "porto-rico", 
  "portugal", "quenia", "quirguistao", "reino-unido", 
  "republica-centro-africana", "republica-democratica-do-congo", "republica-dominicana", "reuniao", 
  "romenia", "ruanda", "russia", "saara-ocidental", 
  "saint-pierre-e-miquelon", "samoa", "samoa-americana", "san-marino", 
  "santa-helena-ascensao-e-tristao", "santa-lucia", "sao-bartolomeu", "sao-cristovao-e-nevis", 
  "sao-martinho", "sao-martinho", "sao-tome-e-principe", "sao-vincente-e-granadinas", 
  "seicheles", "senegal", "serra-leoa", "servia", 
  "singapura", "siria", "somalia", "sri-lanka", 
  "suazilandia", "sudao", "sudao-do-sul", "suecia", 
  "suica", "suriname", "tailandia", "tajiquistao", 
  "tanzania", "terras-austrais-e-antarticas-fra", "territorio-britanico-do-oceano-i", "timor-leste", 
  "togo", "tokelau", "tonga", "trinidade-e-tobago", 
  "tunisia", "turquemenistao", "turquia", "tuvalu", 
  "ucrania", "uganda", "uruguai", "uzbequistao", 
  "vanuatu", "venezuela", "vietname", "wallis-e-futuna", 
  "zambia", "zimbabwe", "criadoPor.dataNascimento", "criadoPor.celular", 
  "criadoPor.email", "raca-cor-id", "search-raca-cor-id", "open-raca-cor-id", 
  "close-raca-cor-id", "amarelo-a", "branco-a", "indigena", 
  "pardo-a", "preto-a", "criadoPor.documento", "possuo-nome-social", 
  "possuo-nome-social-box", "caracterizacao", "coordenacao", "dados-pessoais", 
  "endereco", "dados-academicos", "dados-profissionais", "apresentacao", 
  "anexos", "finalizacao", "prev-button", "next-button", 
  "menu-salvar", "menu-verificar-pendencias"
];

Segunda aba de Coordenação

Endereço
- CEP
- Bairro
- Logradouro
- Estado
- Número
- Município
- Complementp 

Data-cy de Endereço
const dataCy = [
  "breadcrumb-voltar", "breadcrumb-home", "notification-menu", "user-menu", "editar-perfil", 
  "usuario-pessoa-juridica", "alterar-senha", "logout", "criadoPor.endereco.cep", "criadoPor.endereco.logradouro", 
  "criadoPor.endereco.numero", "criadoPor.endereco.complemento", "criadoPor.endereco.bairro", "estado", "search-estado", 
  "open-estado", "close-estado", "acre", "alagoas", "amapa", 
  "amazonas", "bahia", "ceara", "distrito-federal", "espirito-santo", 
  "goias", "maranhao", "mato-grosso", "mato-grosso-do-sul", "minas-gerais", 
  "para", "paraiba", "parana", "pernambuco", "piaui", 
  "rio-de-janeiro", "rio-grande-do-norte", "rio-grande-do-sul", "rondonia", "roraima", 
  "santa-catarina", "sao-paulo", "sergipe", "tocantins", "municipio", 
  "search-municipio", "open-municipio", "close-municipio", "agua-clara", "alcinopolis", 
  "amambai", "anastacio", "anaurilandia", "angelica", "antonio-joao", 
  "aparecida-do-taboado", "aquidauana", "aral-moreira", "bandeirantes", "bataguassu", 
  "bataypora", "bela-vista", "bodoquena", "bonito", "brasilandia", 
  "caarapo", "camapua", "campo-grande", "caracol", "cassilandia", 
  "chapadao-do-sul", "corguinho", "coronel-sapucaia", "corumba", "costa-rica", 
  "coxim", "deodapolis", "dois-irmaos-do-buriti", "douradina", "dourados", 
  "eldorado", "fatima-do-sul", "figueirao", "gloria-de-dourados", "guia-lopes-da-laguna", 
  "iguatemi", "inocencia", "itapora", "itaquirai", "ivinhema", 
  "japora", "jaraguari", "jardim", "jatei", "juti", 
  "ladario", "laguna-carapa", "maracaju", "miranda", "mundo-novo", 
  "navirai", "nioaque", "nova-alvorada-do-sul", "nova-andradina", "novo-horizonte-do-sul", 
  "paraiso-das-aguas", "paranaiba", "paranhos", "pedro-gomes", "ponta-pora", 
  "porto-murtinho", "ribas-do-rio-pardo", "rio-brilhante", "rio-negro", "rio-verde-de-mato-grosso", 
  "rochedo", "santa-rita-do-pardo", "sao-gabriel-do-oeste", "sete-quedas", "selviria", 
  "sidrolandia", "sonora", "tacuru", "taquarussu", "terenos", 
  "tres-lagoas", "vicentina", "caracterizacao", "coordenacao", "dados-pessoais", 
  "endereco", "dados-academicos", "dados-profissionais", "apresentacao", "anexos", 
  "finalizacao", "prev-button", "next-button", "menu-salvar", "menu-verificar-pendencias"

];


Terceira aba de Coordenação Dados acadêmicos

Dados acadêmicos
- Sigla/Instituição(tipo select)
- Sigla/Unidade(tipo select)
- Nível acadêmico(tipo select)
- Currículo Lattes
- LinkedIn

Áreas de conhecimento --> Possui botão de adicionar que deve ser clicado para adicionar a Área de conhecimento
    Ao clicar em adicionar será carregado o primeiro campo que também é do tipo select
    - Grande área
    Com o primeiro campo selecionado o segundo campo será carregado que também é do tipo select
    - Área
    Com o segundo campo selecionado o terceiro campo será carregado que também é do tipo select
    - Sub-área
    Com o terceiro campo selecionado o terceiro campo será carregado que também é do tipo select
    - Especialidade
    Ao final deve-se clicar no botão "confirmar" para que a seleção seja add

Data-cy dessa sessão
const dataCy = [
  "breadcrumb-voltar", "breadcrumb-home", "notification-menu", "user-menu", "editar-perfil", 
  "usuario-pessoa-juridica", "alterar-senha", "logout", "instituicao-id", "search-instituicao-id", 
  "open-instituicao-id", "close-instituicao-id", "caltech-california-institute-of", "funda-fundacao", "hu-harvard-university", 
  "ifam-instituto-federal-do-amazon", "mit-massachusetts-institute-of-t", "su-stanford-university", "uea-universidade-do-estado-do-am", "uem-universidade-estadual-de-mar", 
  "uems-universidade-estadual-do-ma", "ufam-universidade-federal-do-ama", "ufgd-universidade-federal-da-gra", "ufms-universidade-federal-do-mat", "ufpr-universidade-federal-do-par", 
  "ufrj-universidade-federal-do-rio", "ufsc-universidade-federal-de-san", "ufsm-universidade-federal-de-san", "uja-universidad-de-jaen", "usp-universidade-de-sao-paulo", 
  "ut-universidade-teste", "sugerir-instituicao", "sugerir-instituicao-box", "unidade-id", "search-unidade-id", 
  "open-unidade-id", "close-unidade-id", "esan-escola-de-administracao-e-n", "facom-faculdade-de-computacao", "fadired-faculdade-de-direito-ufm", 
  "faeng-faculdade-de-engenharias-a", "faenged-faculdade-de-engenharia", "sugerir-unidade", "sugerir-unidade-box", "nivel-academico-id", 
  "search-nivel-academico-id", "open-nivel-academico-id", "close-nivel-academico-id", "ensino-fundamental", "ensino-medio", 
  "ensino-medio-profissionalizante", "ensino-superior", "especializacao", "mestrado", "doutorado", 
  "pos-doutorado", "interesse-consultor", "interesse-consultor-box", "criadoPor.lattes", "criadoPor.linkedin", 
  "grande-area-id", "search-grande-area-id", "open-grande-area-id", "close-grande-area-id", "ciencias-exatas-e-da-terra", 
  "ciencias-biologicas", "engenharias", "ciencias-da-saude", "ciencias-agrarias", "ciencias-sociais-aplicadas", 
  "ciencias-humanas", "linguistica-letras-e-artes", "outra", "area-id", "search-area-id", 
  "open-area-id", "close-area-id", "matematica-area-teste-editada", "probabilidade-e-estatistica", "ciencia-da-computacao", 
  "astronomia", "fisica", "quimica", "geociencias", "oceanografia", 
  "sub-area-id", "search-sub-area-id", "open-sub-area-id", "close-sub-area-id", "teoria-da-computacao", 
  "matematica-da-computacao", "metodologia-e-tecnicas-da-comput", "sistemas-de-computacao", "especialidade-id", "search-especialidade-id", 
  "open-especialidade-id", "close-especialidade-id", "linguagens-de-programacao", "engenharia-de-software", "banco-de-dados", 
  "sistemas-de-informacao", "processamento-grafico-graphics", "criadoPor.areaDeConhecimento-cancelar", "criadoPor.areaDeConhecimento-confirmar", "caracterizacao", 
  "coordenacao", "dados-pessoais", "endereco", "dados-academicos", "dados-profissionais", 
  "apresentacao", "anexos", "finalizacao", "prev-button", "next-button", 
  "menu-salvar", "menu-verificar-pendencias"
];

Quarta aba de Coordenação Dados profissionais

Deve ser clicado primeiro no quadrado "Possuo Vínculo institucional"
- Tipo de vínculo(tipo selct)

O Botão "Possuo Vínculo empregatício" não deve ser clicado primeiro no quadrado 
- Início de serviço
- Regime de trabalho(tipo select)
- Função/Cargo*
- Início de função/cargo*

Data-cy de Dados profissionais


const dataCy = [
  "breadcrumb-voltar", "breadcrumb-home", "notification-menu", "user-menu", "editar-perfil", 
  "usuario-pessoa-juridica", "alterar-senha", "logout", "possui-vinculo-institucional", "possui-vinculo-institucional-box", 
  "tipo-vinculo-institucional-id", "search-tipo-vinculo-instituciona", "open-tipo-vinculo-institucional", "close-tipo-vinculo-institucional", "autonomo", 
  "bolsista", "clt", "colaborador", "cooperativo", "estagiario", 
  "outros", "servidor-publico", "possui-vinculo-empregaticio", "possui-vinculo-empregaticio-box", "criadoPor.vinculoInstitucional.inicioServico", 
  "regime-trabalho-id", "search-regime-trabalho-id", "open-regime-trabalho-id", "close-regime-trabalho-id", "dedicacao-exclusiva", 
  "tempo-integral", "criadoPor.vinculoInstitucional.funcao", "criadoPor.vinculoInstitucional.inicioFuncao", "caracterizacao", "coordenacao", 
  "dados-pessoais", "endereco", "dados-academicos", "dados-profissionais", "apresentacao", 
  "anexos", "finalizacao", "prev-button", "next-button", "menu-salvar", 
  "menu-verificar-pendencias"
];