# POKEDEX

Nome dos integrantes: 
- Bruna Barlach 
- Pedro Augusto Stefani Saldanha
- Vitor Suzuki


Link do Surge: https://paiva-pokedex3.surge.sh/


O que funciona:

Tarefas principais realizadas e Global State utilizado no projeto.

- Página inicial:
  - renderiza lista de 40 Pokémon com opção de adicionar a Pokédex ou aparece msg "carregando...".
  - botão "Adicionar ao Pokédex" em cada card adiciona o pokémon específico ao Pokédex (outra página) e retorna alert ao usuário.
  - caso o Pokémon já esteja no Pokédex, o usuário recebe um alert o avisando.
  - botão "Pokédex" no header leva para página do pokédex.
  - botão "Ver detalhes" em cada card leva para página de detalhes do pokémon específico.

- Página Pokédex
  - renderiza lista com todos os Pokémon já adicionados ao Pokédex ou aparece msg que o Pokédex está vazio.
  - botão "Remover do Pokédex" em cada card remove o pokémon específico do Pokédex (tirando o seu card da página) e retorna alert ao usuário.
  - botão "Ver detalhes" em cada card leva para página de detalhes do pokémon específico.
  - botão "Voltar para lista" no header retorna a página inicial.


- Página detalhes
  - renderiza detalhes do Pokémon escolhido em outra página ou aparece msg que "carregando detalhes...".
  - botão "Remover do Pokédex" no header remove o pokémon específico do Pokédex e retorna alert ao usuário.
  - botão "Adicionar do Pokédex" no header adiciona o pokémon específico ao Pokédex e retorna alert ao usuário.
  - caso o Pokémon já esteja no Pokédex, o usuário recebe um alert o avisando.
  - botão "Voltar" no header retorna a página anterior.


O que não funciona: 
- Responsividade poderia estar melhor.
- Desafios não feitos.
