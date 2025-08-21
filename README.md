# PetShop

Projeto de uma aplicação de web SPA usando Next.js, Typescript e Supabase (Baas - Back-End as a Service).

## 10_rotinas-do-formulario-de-contato

- Criação do componente `Formulario` e importação na página de Contato
- Programação de uma **ação de servirdor (Server action)**: `lib/enviar-contato.ts`:

  - É uma função que executa no back-end, por isso, a diretiva `'use server'`
  - Responsável por receber, validar e enviar os dados para Supabase
  - Gerencia, gerenciamento de `state` do `Formulário` e do `BotaiEnviar` visando melhorar a experiência do usuário demontrando o status do processamento através de mensagens e estilos personalisados.

  ***

## 09_migrando-api-para-supabase

- Cadastro no Supabase usando a conta do Github
- Criaçãp e configuração de um projeto dentro do Supabase
- Criação da tabela `posts` com os campos:
  - id (uuid), pk
  - título (text), not null
  - subtitulo (text), not null
  - descricao (text), not null
    categoria (text), not null
- Importação dos dados para a tabela usando o formato `cvs`
- Adição de uma política de segurança para `SELECT` público

## No projeto PetShop (VSCode)

- Instalaç~~ao da lin `npm install @supabase/supabase-js`
- Criação do arquivo contendo variáveis de ambiente> `.env.local`, com a aplicação das variáveis `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KET=Y`. Obs: o contúdo para este arquivo está pronto em sua conta no supabase, dentro do botão **CONNECT**.
- Criação da pasta `lib` e do arquivo `supabase`

### Páginas Home (app/page.tsx)

e DetalhePost (app/post/[id]/page.tsx)

- Substiyuição da função `fetch` e do acesso à fake api pela função e recursos do supabase
- Ajustes nas verificações de erro
- Criação de um componente especial de `loading`(exibido enquanto o processamento dos posts está acontecendo)

## 08_filtro-de-categorias

### Resumo do ciclo de comunicação da prop que passa uma função do pai (ListaPosts) para o filho (FiltroCategorias)

- Usuário clica em um botão do FiltroCategorias (Filho)
- Esse clique (`onClick`) "chama" a prop `aoSelecionar` passando pra ela a categoria escolhida (por exemplo, 'bem-estar')
- O `aoSelecionar` na verdade é um apontamento para o `setCategoriaAtiva` definida no pai (ListaPosts)
- O React/Next atualiza o estado (o state `categoriaAtiva`) do pai
- O pai (ListaPosts) reexecuta com o novo estado, exibindo os posts conforme a categoria ativa
- O `postsFiltrados` é atualizado e os posts filtrados aparecem.

Em resumo, o filho **não muda o estado sozinho**. Ele só **avisa** o pai.

Quem tem o estado, tem o controle.

---

## 07_componentes-SemPosts-e-notFound-da-rota-de-posts

- Criação do componente `SemPosts.tsx` e aplicação de renderização condicional na page `Home`
- Criação da page `not-found.tsx` e aplicação na rota dinâmica de posts usando verificação de erro status 404 e chamada da função `notFound()`.

---

## 06_fake-api-usando-json-server-e-aplicando-rota-dinamica

- Instalação e configuração do `json-server` como dependência de desenvolvedor: Para instalar: `npm install json-server --save-dev`
- Utilização do `fetch` com `async/await` na página Home para consumir os posts da fake-api
- Exclusão do array de posts
- Substituição do array fixo de posts por dados da fake-api
- Configuração de rota dinâmica com carregamento de dados a partir de parâmetros da rota
- Uso de `Promise` como tipo para a prop `params`
- Geração de metadados dinâmicos usando a função `generateMetadata`
- Refatoração da programação de busca de dados na fake-api usando uma função dedicada (`buscarPostPorId`)

---

## 05_home-com-lista-de-posts-a-partir-de-um-array

- Configuração e exportação de um novo tipo `Post.ts`
- Adição de um array de dados: `array-posts.ts`
- Componente `ListaPosts.tsx` com prop `posts`
- Utilização do `map` pata renderizar os <article> com o conteúdo dinâmico de cada post

---

## 04_melhorias-nas-paginas-e-componentes-container

- Adição de conteudo às pages (Sobre, Produtos, Contato)
- Utilização de imagem SVG na page Not Found
- Criação e aplicação do componente Container usando children
- Desativação do compilador Turbopack para evita bugs de cache (em especial quando a alguns módulos CSS)

---

## 03_componentes-cabecalho-menu-e-modulos-de-estilo

- Criação de componentes `Cabecalho` e `Menu`
- Definição de link ativo no menu utilizando o hook `usePathname`
- Ativação a renderização de componente em modo cliente com `use client`
- Importação e importação de módulos CSS

---

## 02_paginas-basicas-links-ajustes-de-layout-metadatas

- Criação das páginas/rotas (usando pastas e arquivo page)
- Definição de metadados específicos oara cada página
- Adição do componente `<Link>` para navegação entre as rotas
- Ajustes diversos de estrutura HTML

---

## 01_css-global-fonts-favicon-metadados

- Adição de estilos globais
- Importação, configuração e aplicação de fonts da web usando `next/fonts`
- Adição de mais metadados
- Aplicando automática de faicon adicionando arquivo `icon.png` direto na pasta `app`

---

## 00_projeto-zerado

Ajustes e exclusões de elementos da instalção padrão do Next.js

### Revisando tópicos importantes

- src/app/page.tsx: página principal (index, Home). Obs: o nome do aruivo **precisa ser** `page.tsx`, mas o nome interno (na função) pode ser qualquer um.

- `src/app/layout.tsx`: componente/ arquivo especial que define a estrutura padrão (layout) para todas as páginas.
