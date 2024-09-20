# Página de Review de Produto | Fundamentos de React

Nesse projeto, vamos praticar os fundamentos do React para construir a página de um produto da loja de equipamentos de áudio Escutante.

A ideia é permitir que os usuários vejam informações detalhadas de um fone, possam consultar e adicionar avaliações através de uma API externa, além de garantir que a interface seja totalmente responsiva.

A página simula a interface de um e-commerce, porém é importante destacar que isso é feito de forma didática, abstraindo as funcionalidades reais de uma aplicação como essa.

## 🤓 Antes de começar

Esse projeto foca em te ensinar os fundamentos do React por meio da criação de uma interface funcional para exibir e adicionar reviews de um produto. Vamos utilizar uma API para carregar e enviar reviews, garantindo que os dados sejam persistentes.

### API

Vamos utilizar a API fornecida pelo Codante para gerenciar as avaliações. Os seguintes endpoints estarão disponíveis:

- `GET https://apis.codante.io/api/reviews`: Retorna todas as avaliações registradas para o produto.
- `POST https://apis.codante.io/api/reviews`: Adiciona uma nova avaliação ao banco de dados.

Acesse a documentação da API em: 🔗 [https://docs.apis.codante.io](https://docs.apis.codante.io)

## 🔨 Requisitos

### Exibir as informações do produto
- Renderize uma seção que mostre:
  - Nome do produto
  - Preço
  - Imagem do produto
  - Descrição detalhada do produto
  - Especificações técnicas

### Exibir reviews dos usuários
- Ao carregar a página, deve ser feito um **fetch** para o endpoint `GET /reviews` da API para exibir as avaliações existentes.
  - A lista de reviews pode conter:
    - Nome do usuário
    - Data do review
    - Avaliação em estrelas
    - Comentário

### Formulário para adicionar reviews
- Implemente um formulário que permita ao usuário adicionar um novo review.
  - O formulário deve conter:
    - Campo para o nome
    - Campo para o comentário
    - Seletor de estrelas para a avaliação
    - Botão de envio
- Ao submeter o formulário, faça uma requisição POST para o endpoint `POST /reviews` da API, enviando os dados da nova avaliação.

### Estado e eventos
- Utilize o `useState` para gerenciar o estado dos reviews.
- Adicione eventos para capturar as mudanças nos campos do formulário e o clique do botão de envio.
  - Ao submeter o formulário, o novo review deve ser adicionado à lista de reviews na interface, além de ser enviado para a API.

### Renderização condicional
- Caso não haja reviews, exiba uma mensagem de "Sem avaliações até o momento".

### Listas com `map`
- Utilize o método `map` para renderizar a lista de reviews dinamicamente.
  - Cada review deve ter uma `key` única.

### Responsividade
- O design da página deve ser totalmente responsivo, adaptando-se a diferentes tamanhos de tela, desde dispositivos móveis até desktops.
  - Use flexbox ou grid para organizar os elementos da interface de maneira fluida.
  - Certifique-se de que o formulário e as listas de reviews fiquem adequados em diferentes resoluções.

### Estilização
- Adicione estilos à página:
  - Estilos inline ou utilizando classes CSS.
  - Utilize módulos CSS para estilos mais organizados.

## 🎨 Design Sugerido

Disponibilizamos um [design sugerido no Figma](https://www.figma.com/community/file/1418749577351583982/mini-projeto-pagina-de-review-de-um-produto-fundamentos-de-react).

## 👉🏽 Sobre esse mini-projeto

### O que você irá praticar:

- Criação de componentes React e uso de props
- Manipulação de estado e eventos com `useState` e `onChange`
- Implementação de formulários simples
- Fetch de dados de uma API com `useEffect`
- Renderização condicional e manipulação de listas
- Estilização e responsividade utilizando CSS em React
