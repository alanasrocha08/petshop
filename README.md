# PetShop

Projeto de uma aplicação de web SPA usando Next.js, Typescript e Supabase (Baas - Back-End as a Service).

## 04_melhorias-nas-paginas-e-componentes-container

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
