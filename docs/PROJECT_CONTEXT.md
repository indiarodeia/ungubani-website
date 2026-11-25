# Contexto do projeto Ungubani

## Referência e colaboração

O código em `dev` é a referência técnica e a base de integração. A análise de 25 de novembro de 2026 confirmou no GitHub `dev` em `fca9fc5` e `main` em `b143883`. Nesse ponto, `main` tem dois commits adicionais e `dev` é a branch predefinida do repositório. [Repositório](https://github.com/indiarodeia/ungubani-website) · [Comparação entre os commits analisados](https://github.com/indiarodeia/ungubani-website/compare/fca9fc5...b143883)

Este documento reúne o contexto e as decisões confirmadas que podem ser partilhadas publicamente. O [roadmap](ROADMAP.md) acompanha prioridades, dependências e estado das tarefas. As [instruções de trabalho](../AGENTS.md) aplicam-se a quem editar o repositório.

### Integração em revisão

O [PR #1](https://github.com/indiarodeia/ungubani-website/pull/1), de `docs/dev-integration` para `dev`, reúne os dois commits adicionais de `main` e a documentação. Os detalhes de `dev` abaixo descrevem a base anterior ao merge. A pré-visualização da Vercel é criada automaticamente para a branch; a publicação em produção continua por autorizar.

Na branch do PR, o empacotador foi corrigido para remover a pasta `preview` de todos os diretórios exportados antes de criar o ZIP, incluindo FR e futuros idiomas. Esta correção substitui a limitação PT/EN descrita no histórico de `main` abaixo.

Validação da correção: `npm run lint` terminou sem erros e com os dois avisos existentes de dependências de `useEffect`; `npm run build` e `npm run build:static` passaram. O ZIP gerado contém as 15 páginas públicas em PT, EN e FR, `.htaccess` e o redirecionamento para PT, sem diretórios `preview`. Uma verificação isolada com um quarto idioma confirmou a mesma exclusão sem remover as páginas públicas.

Para retomar trabalho entre ChatGPT e Codex, usa estes documentos e indica a branch ou o commit em análise. Quando forem validados materiais preparados no ChatGPT, regista aqui os requisitos e decisões autorizados para divulgação, com a data e a referência de origem quando for partilhável. Mantém os textos do site nos dicionários e atualiza a tarefa correspondente no roadmap. Materiais privados, dados pessoais e credenciais ficam nos canais autorizados.

## Âmbito e requisitos conhecidos

Os conteúdos atuais apresentam a Ungubani como empresa de construção civil e obras públicas nos Açores. O site institucional apresenta a empresa, as suas áreas de atuação e o portefólio, e encaminha visitantes para contacto. O LSF (Light Steel Framing) já aparece entre as especialidades em `dev`. A página dedicada está em `main`. [Conteúdo da empresa](../content/about.ts) · [Serviços](../content/services.ts)

O portefólio em `dev` tem um projeto registado, Prime Infinity Residence, também com uma secção própria na página inicial. A grelha preenche os lugares em aberto com cartões provisórios. As maquetes da galeria de componentes são dados de demonstração. A inclusão de novas obras depende de informação e imagens autorizadas. [Dados do portefólio](../content/projects.ts)

## Arquitetura em `dev`

| Área | Implementação |
| --- | --- |
| Base técnica | Next.js 16.2.10 com App Router, React 19.2.4, TypeScript 5 e npm com `package-lock.json`. Tailwind CSS 4, shadcn/ui com Radix UI, ícones Lucide e ESLint 9. |
| Rotas e layouts | `app/[locale]/layout.tsx` define o idioma HTML, fontes, metadados e dados estruturados. `app/[locale]/(site)/layout.tsx` inclui `Header`, área principal e `Footer`. |
| Componentes | `components/layout/` contém a navegação e o rodapé. `components/sections/` agrupa secções por página. `components/shared/` contém `Hero`, `Cta`, cartões, seletor de idioma, formulário e elementos de animação. `components/ui/` contém as primitivas de interface. |
| Conteúdo | Módulos TypeScript por tema em `content/` e `content/en/`, reunidos por `content/dictionaries.ts` e tipados em `content/types.ts`. O código analisado guarda o conteúdo editorial no repositório. |
| Identidade e recursos | `app/globals.css` concentra os tokens. `public/brand/` contém as variantes do símbolo usadas no site. `brand/logo-original.png` guarda o original. `public/images/` reúne imagens. |
| SEO | `lib/metadata.ts` compõe títulos, descrições, URL canónica, alternâncias de idioma e Open Graph. O layout inclui JSON-LD de `GeneralContractor`. `app/sitemap.ts` e `app/robots.ts` geram os ficheiros para motores de pesquisa. |

### Páginas e idiomas

Em `dev`, a raiz `/` redireciona permanentemente para `/pt` por configuração em `next.config.ts`. Português de Portugal (`pt`) é o idioma predefinido e inglês (`en`) é o segundo idioma. `lib/locale.ts` define os códigos e `generateStaticParams()` enumera os idiomas. O seletor liga à página equivalente usando o mesmo segmento de rota. O erro 404 geral tem texto em português.

| Rotas em `dev` | Função |
| --- | --- |
| `/pt` e `/en` | Página inicial com apresentação, serviços, projeto em destaque e contacto. |
| `/{pt,en}/about` | Empresa, filosofia, especialidades e valores. |
| `/{pt,en}/projects` | Grelha de portefólio com um projeto e lugares provisórios. |
| `/{pt,en}/contact` | Formulário, dados de contacto e espaço reservado para o mapa. |
| `/{pt,en}/preview` | Galeria interna de componentes. O código indica `noindex` e exclui-a em `robots.txt`. |

Em `dev`, o formulário faz validação no navegador. A Server Action regista os dados submetidos no log do servidor e devolve sucesso. O envio para email ou CRM continua por integrar. O email público, o telefone e o mapa apresentam indicações provisórias.

### Identidade visual implementada

- **Tipografia.** Work Sans para texto e navegação. Source Serif 4 para títulos de destaque, incluindo variantes em itálico. Ambas são carregadas por `next/font/google`.
- **Paleta.** Azul-marinho `#0a1a2f` e `#0f2643`, azul de realce `#21556e` e `#2f6c86`, texto carvão `#1c1d1f`, branco e neutros frios. Os componentes aplicam tokens semânticos como `primary`, `accent`, `muted` e `border`.
- **Composição.** Cabeçalho fixo com versão transparente no topo da página inicial, navegação móvel em painel lateral, imagens de grande formato, grelhas de projetos e ilustrações técnicas. Efeitos de entrada e parallax estão em componentes reutilizáveis.

Estas escolhas descrevem a implementação atual. A validação da identidade final, das regras de aplicação da marca e da fotografia faz parte do trabalho editorial e de design. [Tokens](../app/globals.css) · [Cabeçalho](../components/layout/header.tsx) · [Hero](../components/shared/hero.tsx)

## Desenvolvimento e publicação

### Desenvolvimento e execução de `dev`

O mínimo documentado pelo Next.js instalado é Node.js 20.9. Com um checkout de `dev`, usa `npm ci` para instalar as dependências do lockfile e `npm run dev` para pré-visualizar em `http://localhost:3000`. Usa `npm run lint` e `npm run build` para validar, e `npm run start` para servir localmente o build Next.js.

Em `dev`, o caminho implementado é um build Next.js com runtime Node.js. `NEXT_PUBLIC_SITE_URL` define a URL pública usada nos metadados, no `sitemap.xml` e no `robots.txt`. O valor predefinido no código é provisório. O `robots.txt` de `dev` permite o rastreio geral e exclui as galerias `/preview`. O procedimento específico de publicação e a eventual automação de CI/CD estão por documentar em `dev`. A referência a Vercel no README vem do modelo inicial do Next.js. [Configuração Next.js em `dev`](https://github.com/indiarodeia/ungubani-website/blob/fca9fc5/next.config.ts) · [URL e metadados em `dev`](https://github.com/indiarodeia/ungubani-website/blob/fca9fc5/lib/site-url.ts) · [README](../README.md)

### Trabalho de publicação disponível em `main`

- `b130c9b` acrescenta `npm run build:static` e um empacotador para upload em alojamento Hostinger. O build exporta HTML, CSS e JavaScript. O script prepara uma pasta e um ZIP com `.htaccess`, remove as galerias PT e EN da exportação e cria um redirecionamento fixo para PT. `STATIC_BASE_PATH` define o subdiretório público (por omissão, `/ungubani`) e `HOSTINGER_OUT` define o destino local do pacote. O script substitui o destino local e o ZIP existentes. Um carregador de imagens acrescenta o subdiretório aos caminhos dos recursos.
- `b143883` acrescenta os dicionários e as rotas FR, o seletor trilingue e a estrutura da página LSF em PT, EN e FR. No modo com servidor, `proxy.ts` encaminha `/` conforme o idioma do navegador. Na exportação estática aplica-se o redirecionamento fixo para PT. A indexação fica desativada por omissão e pode ser ativada com `NEXT_PUBLIC_ALLOW_INDEXING=true`. O formulário usa uma simulação no navegador. O empacotador ainda só remove as galerias PT e EN, pelo que a exclusão da galeria FR precisa de revisão.

Estes commits documentam a preparação do pacote. A publicação efetiva e o ambiente em produção estão por confirmar. Se a exportação estática for adotada, o fluxo a validar é gerar o pacote na branch que contém o script, conferir os ficheiros e carregar o conteúdo, incluindo `.htaccess`, para o diretório correspondente a `STATIC_BASE_PATH`. Antes de abrir a indexação, verifica o redirecionamento inicial, as rotas por idioma, as imagens, as URLs canónicas, o sitemap e o comportamento do contacto no destino. A publicação requer autorização. [Commit do pacote](https://github.com/indiarodeia/ungubani-website/commit/b130c9b) · [Commit LSF e FR](https://github.com/indiarodeia/ungubani-website/commit/b143883)

## Informação por confirmar

| Área | Informação necessária |
| --- | --- |
| Estratégia | Briefing aprovado, públicos prioritários, objetivos, mensagens-chave e ação de contacto principal. |
| Conteúdos e idiomas | Textos finais, terminologia das especialidades, revisão das traduções e confirmação de quais idiomas devem entrar no lançamento. |
| Marca e imagens | Referência de design aprovada, variantes finais do logótipo, regras de aplicação e imagem definitiva da página inicial. |
| Portefólio | Lista de obras autorizadas, informação de cada obra e direitos de utilização das imagens. |
| Contacto | Email e telefone públicos, indicação para o mapa, destino das mensagens e requisitos de privacidade aplicáveis ao formulário. |
| Publicação | Domínio canónico, alojamento e ambiente de pré-visualização, método de publicação, responsável e versão atualmente servida, se existir. |
