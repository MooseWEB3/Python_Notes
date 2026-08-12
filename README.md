# MooseWeb3 Python Notes

> Practical, beginner-friendly Python learning notes delivered as portable, self-contained HTML pages.

![Python](https://img.shields.io/badge/Python-Learning-3776AB?logo=python&logoColor=white)
![R Markdown](https://img.shields.io/badge/R%20Markdown-Source-276DC3?logo=r&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-Self--contained-E34F26?logo=html5&logoColor=white)
![Tutorial language](https://img.shields.io/badge/Tutorials-English-6D5DFC)

**README languages:** [English](#english) · [Français](#francais) · [Português](#portugues)

**Learning hub:** [Open the MooseWeb3 Python Notes website](https://mooseweb3.github.io/Python_Notes/)

---

<a id="english"></a>

## English

### About the project

**MooseWeb3 Python Notes** is a collection of practical tutorials for people learning Python, R data tools, text and date-time workflows, object-oriented design, software development, data analysis, statistics, regression, and reproducible publishing. Each guide is available as a standalone HTML file that can be opened directly in a browser—no web server or installation is required for reading.

The published tutorials are in **English**. This README is also available in French and Portuguese to make the repository easier to discover and understand.

### Tutorials

| Topic | Guide |
|---|---|
| Python data processing | [Open guide](python_data_processing_en.html) |
| Data wrangling with dplyr and pandas | [Open guide](dplyr_guide_en.html) |
| Text processing with stringr and Python | [Open guide](stringr_guide_en.html) |
| Date-time handling with lubridate and pandas | [Open guide](lubridate_guide_en.html) |
| Object-oriented programming in Python | [Open guide](python_oop_en.html) |
| Software development fundamentals | [Open guide](software_development_fundamentals_en.html) |
| Statistical tests with Python | [Open guide](python_statistical_tests_en.html) |
| Linear and generalized linear regression | [Open guide](python_regression_en.html) |
| Practical Quarto guide | [Open guide](quarto_guide_en.html) |

### What is covered

- Loading, inspecting, cleaning, transforming, joining, reshaping, and exporting data with Python;
- Missing values, duplicates, text, dates, grouped summaries, pivot tables, and quality checks;
- dplyr selection, filtering, mutation, grouping, summaries, joins, window functions, tidy evaluation, and their pandas and NumPy equivalents;
- stringr text cleaning, detection, extraction, replacement, regular expressions, Unicode handling, validation, and Python equivalents;
- Date-time parsing, components, calendar arithmetic, time zones, DST, durations, periods, and intervals with lubridate and pandas;
- Python classes, properties, inheritance, composition, protocols, dataclasses, testing, and maintainable object-oriented design;
- Software requirements, lifecycle, architecture, Git, testing, debugging, APIs, security, CI/CD, reliability, releases, and collaboration;
- t-tests, ANOVA, nonparametric tests, chi-square and Fisher tests, correlation, resampling, effect sizes, multiple-testing corrections, and power analysis;
- Linear regression, generalized linear models, diagnostics, interpretation, and reliable reporting;
- Quarto fundamentals, project structure, code execution, citations, themes, reproducible reports, and publishing concepts;
- Beginner-oriented explanations, runnable Python examples, quick-reference tables, checklists, and exercises.

### Features

- Responsive MooseWeb3 interface for desktop and mobile;
- Consistent navigation across the tutorial collection;
- Sticky or slide-out table of contents;
- Syntax-highlighted code blocks with copy buttons;
- Reading progress indicator and back-to-top control;
- Self-contained HTML with no external runtime dependency;
- Print-friendly styles.

### Quick start

Clone or download the repository:

```bash
git clone https://github.com/MooseWEB3/Python_Notes.git
cd Python_Notes
```

Open any `.html` file in a browser. For example:

```text
python_data_processing_en.html
dplyr_guide_en.html
stringr_guide_en.html
lubridate_guide_en.html
python_oop_en.html
software_development_fundamentals_en.html
python_statistical_tests_en.html
python_regression_en.html
quarto_guide_en.html
```

Reading the tutorials does not require Python or R. To run the Python examples locally, create an environment and install the packages used by the relevant guide:

```bash
python -m venv .venv

# Windows
.venv\Scripts\activate

# macOS / Linux
source .venv/bin/activate

python -m pip install numpy pandas scipy statsmodels matplotlib seaborn openpyxl jupyter
```

### GitHub Pages

All published pages are static HTML and can be hosted with GitHub Pages or another static hosting service. Configure the repository root on your chosen branch as the site source. A tutorial will then be available at a URL similar to:

```text
https://mooseweb3.github.io/Python_Notes/
```

### Repository structure

```text
Python_Notes/
├── index.html
├── README.md
├── .gitignore
├── python_data_processing_en.html
├── dplyr_guide_en.html
├── stringr_guide_en.html
├── lubridate_guide_en.html
├── python_oop_en.html
├── software_development_fundamentals_en.html
├── python_statistical_tests_en.html
├── python_regression_en.html
└── quarto_guide_en.html
```

The canonical `.Rmd` authoring files are maintained locally and intentionally excluded from Git by `.gitignore`. The repository distributes the generated HTML learning materials.

### Contributing

Corrections, accessibility improvements, translations, and suggestions are welcome. When reporting a content issue, include the tutorial filename, section title, and the proposed correction. Because the authoring sources are not published, opening an issue before preparing a large content change is recommended.

### Disclaimer

These materials are educational. Statistical examples do not replace domain-specific review for medical, financial, safety-critical, or other high-impact decisions.

---

<a id="francais"></a>

## Français

### À propos du projet

**MooseWeb3 Python Notes** est une collection de tutoriels pratiques destinée aux personnes qui apprennent Python, les outils de données R, le traitement du texte et des dates, la programmation orientée objet, le développement logiciel, l’analyse de données, les statistiques, la régression et la publication reproductible. Chaque guide est fourni sous la forme d’un fichier HTML autonome qui peut être ouvert directement dans un navigateur, sans serveur web ni installation pour la lecture.

Les tutoriels publiés sont en **anglais**. Ce README comporte également une version française et une version portugaise afin de rendre le dépôt plus facile à découvrir et à comprendre.

### Tutoriels

| Sujet | Guide |
|---|---|
| Traitement des données avec Python | [Ouvrir le guide](python_data_processing_en.html) |
| Manipulation de données avec dplyr et pandas | [Ouvrir le guide](dplyr_guide_en.html) |
| Traitement de texte avec stringr et Python | [Ouvrir le guide](stringr_guide_en.html) |
| Dates et heures avec lubridate et pandas | [Ouvrir le guide](lubridate_guide_en.html) |
| Programmation orientée objet en Python | [Ouvrir le guide](python_oop_en.html) |
| Principes fondamentaux du développement logiciel | [Ouvrir le guide](software_development_fundamentals_en.html) |
| Tests statistiques avec Python | [Ouvrir le guide](python_statistical_tests_en.html) |
| Régression linéaire et linéaire généralisée | [Ouvrir le guide](python_regression_en.html) |
| Guide pratique de Quarto | [Ouvrir le guide](quarto_guide_en.html) |

### Contenu

- Importation, exploration, nettoyage, transformation, jointure, restructuration et exportation des données avec Python ;
- Valeurs manquantes, doublons, texte, dates, agrégations, tableaux croisés dynamiques et contrôles de qualité ;
- Sélection, filtrage, mutation, regroupement, résumés, jointures, fonctions de fenêtre et évaluation tidy avec dplyr, pandas et NumPy ;
- Nettoyage, détection, extraction, remplacement, expressions régulières, Unicode et validation de texte avec stringr et Python ;
- Analyse des dates et heures, calcul calendaire, fuseaux horaires, heure d’été, durées, périodes et intervalles avec lubridate et pandas ;
- Classes, propriétés, héritage, composition, protocoles, dataclasses, tests et conception orientée objet maintenable en Python ;
- Exigences logicielles, cycle de vie, architecture, Git, tests, débogage, API, sécurité, CI/CD, fiabilité, versions et collaboration ;
- Tests t, ANOVA, tests non paramétriques, tests du khi-deux et de Fisher, corrélation, rééchantillonnage, tailles d’effet, corrections pour tests multiples et analyse de puissance ;
- Régression linéaire, modèles linéaires généralisés, diagnostics, interprétation et communication fiable des résultats ;
- Principes de Quarto, structure de projet, exécution du code, citations, thèmes et rapports reproductibles ;
- Explications pour débutants, exemples Python, tableaux de référence, listes de vérification et exercices.

### Fonctionnalités

- Interface MooseWeb3 adaptative pour ordinateur et mobile ;
- Navigation cohérente dans toute la collection ;
- Table des matières fixe ou escamotable ;
- Blocs de code avec coloration syntaxique et bouton de copie ;
- Indicateur de progression et bouton de retour en haut ;
- Fichiers HTML autonomes sans dépendance d’exécution externe ;
- Mise en page adaptée à l’impression.

### Démarrage rapide

Clonez ou téléchargez le dépôt :

```bash
git clone https://github.com/MooseWEB3/Python_Notes.git
cd Python_Notes
```

Ouvrez ensuite n’importe quel fichier `.html` dans votre navigateur. Aucun environnement Python ou R n’est nécessaire pour lire les tutoriels.

Pour exécuter les exemples Python localement :

```bash
python -m venv .venv

# Windows
.venv\Scripts\activate

# macOS / Linux
source .venv/bin/activate

python -m pip install numpy pandas scipy statsmodels matplotlib seaborn openpyxl jupyter
```

### GitHub Pages

Les pages publiées sont des fichiers HTML statiques et peuvent être hébergées avec GitHub Pages ou un autre service d’hébergement statique. Configurez la racine du dépôt de la branche choisie comme source du site. Une page sera alors disponible à une adresse similaire à :

```text
https://mooseweb3.github.io/Python_Notes/
```

### Structure du dépôt

```text
Python_Notes/
├── index.html
├── README.md
├── .gitignore
├── python_data_processing_en.html
├── dplyr_guide_en.html
├── stringr_guide_en.html
├── lubridate_guide_en.html
├── python_oop_en.html
├── software_development_fundamentals_en.html
├── python_statistical_tests_en.html
├── python_regression_en.html
└── quarto_guide_en.html
```

Les fichiers sources `.Rmd` de référence sont conservés localement et volontairement exclus de Git par `.gitignore`. Le dépôt distribue les supports pédagogiques HTML générés.

### Contribution

Les corrections, améliorations d’accessibilité, traductions et suggestions sont les bienvenues. Pour signaler un problème, indiquez le nom du fichier, le titre de la section et la correction proposée. Comme les sources de rédaction ne sont pas publiées, il est recommandé d’ouvrir une issue avant de préparer une modification importante du contenu.

### Avertissement

Ces ressources sont éducatives. Les exemples statistiques ne remplacent pas une expertise spécialisée pour les décisions médicales, financières, critiques pour la sécurité ou à fort impact.

---

<a id="portugues"></a>

## Português

### Sobre o projeto

**MooseWeb3 Python Notes** é uma coleção de tutoriais práticos para quem está aprendendo Python, ferramentas de dados em R, fluxos de texto e datas, programação orientada a objetos, desenvolvimento de software, análise de dados, estatística, regressão e publicação reprodutível. Cada guia é fornecido como um arquivo HTML independente, que pode ser aberto diretamente no navegador sem servidor web ou instalação para leitura.

Os tutoriais publicados estão disponíveis em **inglês**. Este README também oferece versões em francês e português para facilitar a descoberta e a compreensão do repositório.

### Tutoriais

| Tema | Guia |
|---|---|
| Processamento de dados com Python | [Abrir o guia](python_data_processing_en.html) |
| Manipulação de dados com dplyr e pandas | [Abrir o guia](dplyr_guide_en.html) |
| Processamento de texto com stringr e Python | [Abrir o guia](stringr_guide_en.html) |
| Datas e horários com lubridate e pandas | [Abrir o guia](lubridate_guide_en.html) |
| Programação orientada a objetos em Python | [Abrir o guia](python_oop_en.html) |
| Fundamentos de desenvolvimento de software | [Abrir o guia](software_development_fundamentals_en.html) |
| Testes estatísticos com Python | [Abrir o guia](python_statistical_tests_en.html) |
| Regressão linear e linear generalizada | [Abrir o guia](python_regression_en.html) |
| Guia prático do Quarto | [Abrir o guia](quarto_guide_en.html) |

### Conteúdo abordado

- Leitura, inspeção, limpeza, transformação, junção, reformatação e exportação de dados com Python;
- Valores ausentes, duplicatas, texto, datas, resumos agrupados, tabelas dinâmicas e verificações de qualidade;
- Seleção, filtragem, mutação, agrupamento, resumos, junções, funções de janela e avaliação tidy com dplyr, pandas e NumPy;
- Limpeza, detecção, extração, substituição, expressões regulares, Unicode e validação de texto com stringr e Python;
- Análise de datas e horários, aritmética de calendário, fusos horários, horário de verão, durações, períodos e intervalos com lubridate e pandas;
- Classes, propriedades, herança, composição, protocolos, dataclasses, testes e design orientado a objetos sustentável em Python;
- Requisitos de software, ciclo de vida, arquitetura, Git, testes, depuração, APIs, segurança, CI/CD, confiabilidade, lançamentos e colaboração;
- Testes t, ANOVA, testes não paramétricos, qui-quadrado e Fisher, correlação, reamostragem, tamanhos de efeito, correções para testes múltiplos e análise de poder;
- Regressão linear, modelos lineares generalizados, diagnósticos, interpretação e comunicação confiável;
- Fundamentos do Quarto, estrutura de projetos, execução de código, citações, temas e relatórios reprodutíveis;
- Explicações para iniciantes, exemplos em Python, tabelas de referência, listas de verificação e exercícios.

### Recursos

- Interface responsiva MooseWeb3 para computador e dispositivos móveis;
- Navegação consistente em toda a coleção;
- Sumário fixo ou deslizante;
- Blocos de código com realce de sintaxe e botão de cópia;
- Indicador de progresso de leitura e botão para voltar ao topo;
- HTML independente, sem dependência externa em tempo de execução;
- Estilos adequados para impressão.

### Início rápido

Clone ou baixe o repositório:

```bash
git clone https://github.com/MooseWEB3/Python_Notes.git
cd Python_Notes
```

Abra qualquer arquivo `.html` no navegador. Não é necessário instalar Python ou R para ler os tutoriais.

Para executar os exemplos Python localmente:

```bash
python -m venv .venv

# Windows
.venv\Scripts\activate

# macOS / Linux
source .venv/bin/activate

python -m pip install numpy pandas scipy statsmodels matplotlib seaborn openpyxl jupyter
```

### GitHub Pages

Todas as páginas publicadas são arquivos HTML estáticos e podem ser hospedadas pelo GitHub Pages ou por outro serviço de hospedagem estática. Configure a raiz do repositório da branch escolhida como origem do site. Uma página ficará disponível em um endereço semelhante a:

```text
https://mooseweb3.github.io/Python_Notes/
```

### Estrutura do repositório

```text
Python_Notes/
├── index.html
├── README.md
├── .gitignore
├── python_data_processing_en.html
├── dplyr_guide_en.html
├── stringr_guide_en.html
├── lubridate_guide_en.html
├── python_oop_en.html
├── software_development_fundamentals_en.html
├── python_statistical_tests_en.html
├── python_regression_en.html
└── quarto_guide_en.html
```

Os arquivos-fonte `.Rmd` canônicos são mantidos localmente e excluídos intencionalmente do Git pelo `.gitignore`. O repositório distribui os materiais educacionais HTML já gerados.

### Contribuição

Correções, melhorias de acessibilidade, traduções e sugestões são bem-vindas. Ao relatar um problema, informe o nome do arquivo, o título da seção e a correção proposta. Como as fontes de autoria não são publicadas, recomenda-se abrir uma issue antes de preparar uma alteração extensa no conteúdo.

### Aviso

Estes materiais têm finalidade educacional. Os exemplos estatísticos não substituem uma análise especializada em decisões médicas, financeiras, críticas para a segurança ou de alto impacto.

---

## Maintainer

Created and maintained by **MooseWeb3**.
