# Nodes HTML

No contexto do HTML, **"nós" (nodes)** referem-se a unidades ou elementos dentro da estrutura de um **documento HTML**. Quando trabalhamos com HTML, o documento é estruturado como uma árvore de **nós** (ou **DOM tree**, árvore do modelo de objetos do documento), onde cada parte do conteúdo HTML, como tags, atributos e texto, é tratada como um nó.

### Tipos de Nós em HTML:

1. **Nó de Elemento (Element Node)**:

   * **Descrição**: Cada tag HTML, como `<div>`, `<p>`, `<a>`, etc., é representada como um **nó de elemento**.
   * **Exemplo**: Para a tag `<p>Hello World</p>`, o nó de elemento seria a tag `<p>`, e ele pode ter filhos, como o texto "Hello World".
   * **Exemplo em código**:

     ```html
     <p>Texto aqui</p>
     ```

     Aqui, o nó de elemento é `<p>`.

2. **Nó de Texto (Text Node)**:

   * **Descrição**: O **nó de texto** é o conteúdo real dentro de um elemento. Ou seja, é o texto que aparece na página.
   * **Exemplo**: No código `<p>Hello World</p>`, o nó de texto seria o texto "Hello World" dentro da tag `<p>`.
   * **Exemplo em código**:

     ```html
     <p>Texto aqui</p>
     ```

     Aqui, o nó de texto é "Texto aqui".

3. **Nó de Atributo (Attribute Node)**:

   * **Descrição**: O **nó de atributo** representa os atributos de uma tag HTML. Cada atributo de um elemento é um nó separado.
   * **Exemplo**: Para o elemento `<a href="https://example.com">Link</a>`, o nó de atributo seria `href="https://example.com"`.
   * **Exemplo em código**:

     ```html
     <a href="https://example.com">Clique aqui</a>
     ```

     Aqui, o nó de atributo é `href="https://example.com"`.

4. **Nó de Documento (Document Node)**:

   * **Descrição**: O **nó de documento** é o nó raiz de toda a estrutura HTML. Ele contém todos os outros nós, como `<html>`, `<head>`, `<body>`, etc.
   * **Exemplo**: Quando você acessa o DOM de uma página, você começa a partir do nó de documento.

5. **Nó de Comentário (Comment Node)**:

   * **Descrição**: O **nó de comentário** representa os comentários no código HTML. Embora não apareçam na página renderizada, eles ainda fazem parte da estrutura do DOM.
   * **Exemplo**:

     ```html
     <!-- Este é um comentário -->
     ```

### Como o DOM (Document Object Model) se Relaciona com os Nós?

O **DOM** é uma representação em árvore do documento HTML. Cada tag, texto, atributo ou comentário é representado como um nó nessa árvore. O navegador usa o DOM para entender a estrutura da página, manipular o conteúdo dinamicamente com JavaScript, e renderizar a página para o usuário.

### Exemplo Visual de Árvore de Nós:

Considerando o seguinte código HTML:

```html
<html>
  <head>
    <title>Minha Página</title>
  </head>
  <body>
    <p>Bem-vindo!</p>
  </body>
</html>
```

A árvore de nós seria algo como:

```
- Documento (Document Node)
  - html (Elemento Node)
    - head (Elemento Node)
      - title (Elemento Node)
        - "Minha Página" (Texto Node)
    - body (Elemento Node)
      - p (Elemento Node)
        - "Bem-vindo!" (Texto Node)
```

### Manipulação de Nós com JavaScript:

JavaScript pode ser usado para acessar e modificar esses nós na árvore DOM. Por exemplo:

```javascript
let paragraph = document.querySelector("p");  // Acessa o nó <p>
paragraph.textContent = "Texto alterado!";   // Modifica o nó de texto dentro do <p>
```

Isso altera o conteúdo do parágrafo de "Bem-vindo!" para "Texto alterado!" diretamente através da manipulação do nó de texto.