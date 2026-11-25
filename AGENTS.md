<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Trabalhar neste repositório

- Usa `dev` como branch de referência e destino de integração. Confirma a branch ativa e o estado da árvore de trabalho antes de editar. Verifica em que branch existe cada funcionalidade antes de assumir que está integrada.
- Lê o [contexto do projeto](docs/PROJECT_CONTEXT.md) e consulta o [roadmap](docs/ROADMAP.md) antes de retomar trabalho. Atualiza-os quando houver decisões confirmadas ou mudanças relevantes de estado.
- Usa o briefing, os conteúdos e as decisões de design preparados no ChatGPT após validação. Regista no repositório apenas a informação autorizada para divulgação pública. Mantém credenciais, dados pessoais, briefings privados e informação confidencial do cliente fora do Git.
- Mantém os textos nos dicionários em `content/` e reutiliza os componentes e os tokens de `app/globals.css`. Ao alterar conteúdo ou navegação, verifica as páginas equivalentes nos idiomas suportados pela branch.
- Para alterações ao website, corre `npm run lint` e `npm run build` na branch em trabalho. Valida em `npm run dev` as páginas, idiomas e interações afetados. A publicação exige um pedido explícito.
