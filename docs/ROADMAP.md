# Roadmap do website Ungubani

Referência inicial de 25 de novembro de 2026. `dev` é a branch de integração. Os estados refletem a [análise do repositório](PROJECT_CONTEXT.md#referência-e-colaboração). As prioridades abaixo são propostas para validação com o briefing.

## Estado de implementação

| Área | Estado | Evidência |
| --- | --- | --- |
| Páginas institucionais e componentes partilhados | Implementado em `dev` | Início, Empresa, Projetos e Contacto em PT e EN, com navegação responsiva. |
| Portefólio | Parcial em `dev` | Prime Infinity Residence tem destaque. Os restantes lugares da grelha estão reservados. |
| Contactos e mapa | Parcial em `dev` | O formulário tem validação e feedback. A ação regista a submissão no log. Email, telefone e mapa estão por completar. |
| Página LSF e francês | Em `main`, por integrar | `b143883` acrescenta a rota LSF em três idiomas e os dicionários FR. |
| Exportação estática | Em `main`, por integrar | `b130c9b` introduz o empacotamento para Hostinger. Publicação efetiva por confirmar. |
| Documentação de continuidade | Concluído nesta revisão | Contexto, roadmap e instruções de colaboração registados. |

## Próximas tarefas

| Prioridade | Tarefa | Estado e condição de conclusão |
| --- | --- | --- |
| Alta | Consolidar briefing, conteúdos e design | A aguardar materiais do ChatGPT. Registar as decisões validadas e partilháveis sobre públicos, mensagens, navegação, idiomas e identidade final. |
| Alta | Rever os dois commits de `main` para integração em `dev` | Por iniciar. Validar separadamente FR, página LSF, navegação, SEO e exportação estática. Registar o que será integrado e verificar o resultado em `dev`. |
| Alta | Confirmar domínio, alojamento e modelo de execução | A confirmar. Identificar destino, versão servida, forma de pré-visualizar e publicar, URL canónica e responsável pela publicação. Esta escolha orienta a integração do formulário. |
| Alta | Completar os contactos e a entrega de mensagens | A aguardar contactos públicos, destino das mensagens e decisão sobre alojamento. Validar envio real e tratamento de erros sem escrever dados pessoais no log, ou aprovar um canal de contacto alternativo. Confirmar se o mapa faz parte do lançamento. |
| Média | Completar o portefólio e rever as imagens | A aguardar materiais autorizados. Validar a imagem inicial e os recursos de cada obra, preencher as entradas aprovadas e decidir quais os lugares provisórios a manter durante o desenvolvimento. |
| Média | Fechar conteúdos e revisão por idioma | A aguardar textos aprovados. Rever terminologia, metadados, navegação, 404 e acessibilidade nos idiomas escolhidos. Confirmar a estrutura e os conteúdos da página LSF se entrar no lançamento. |
| Alta antes da publicação | Validar o build e a pré-visualização | Por iniciar. Correr lint e build, testar navegação móvel e por teclado, idiomas, contactos, SEO e imagens. No build estático, verificar os caminhos sob o subdiretório e excluir a galeria de todos os idiomas incluídos. |
| Alta antes da publicação | Autorizar e verificar a publicação | A aguardar destino, validação e autorização. Registar a versão publicada e verificar no destino o redirecionamento, as páginas, o contacto e as definições de indexação. |

Ao retomar uma tarefa, atualiza o estado e acrescenta a evidência disponível, como um commit, um PR ou a referência partilhável de uma decisão aprovada. [Contexto e informação em falta](PROJECT_CONTEXT.md#informação-por-confirmar)
