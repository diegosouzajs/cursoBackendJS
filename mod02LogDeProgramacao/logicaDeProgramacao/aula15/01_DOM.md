# 🌐 Documento: Entendendo o DOM (Document Object Model)

## 1. O que é o DOM

O **DOM (Document Object Model)** é uma **representação estruturada de um documento HTML ou XML na memória** do navegador. Ele funciona como uma **interface entre o código JavaScript e a página exibida**, permitindo **acessar, navegar e modificar elementos** do documento de forma programática.

Em outras palavras, quando o navegador carrega uma página HTML, ele transforma o código em uma **árvore de objetos** que pode ser manipulada via JavaScript.

Exemplo simples:

```html
<p id="mensagem">Olá, mundo!</p>
```

No DOM, esse trecho é representado como um objeto:

```js
document.getElementById("mensagem").textContent; // "Olá, mundo!"
```

> 📘 Fonte: *Mozilla Developer Network (MDN), “Document Object Model (DOM)”, 2024.*

---

## 2. Como o DOM é criado

O processo de criação do DOM ocorre durante o **carregamento da página (parsing)**. O navegador executa as seguintes etapas:

1. **Leitura do HTML** linha por linha.
2. **Tokenização** — o HTML é convertido em pequenos blocos de informação.
3. **Construção da árvore DOM**, em que cada tag é transformada em um nó.
4. **Integração com o CSSOM (CSS Object Model)** para aplicar estilos.
5. **Renderização visual** da página com base nas árvores combinadas.

Durante a construção, scripts JavaScript podem **interromper ou modificar** a criação da árvore, por isso é comum o uso de eventos como `DOMContentLoaded` para garantir que o DOM esteja pronto antes de manipulá-lo.

> Exemplo:
>
> ```js
> document.addEventListener("DOMContentLoaded", () => {
>   console.log("DOM totalmente carregado e analisado!");
> });
> ```

---

## 3. A árvore do DOM

O DOM é estruturado em uma **árvore hierárquica**, na qual cada elemento HTML é um **nó (node)**.
Os principais tipos de nós são:

| Tipo de nó  | Descrição                         | Exemplo               |
| ----------- | --------------------------------- | --------------------- |
| `document`  | Raiz da árvore DOM                | `document`            |
| `element`   | Representa uma tag HTML           | `<div>`, `<p>`        |
| `text`      | Texto dentro de um elemento       | "Olá mundo"           |
| `attribute` | Representa atributos de elementos | `id`, `class`         |
| `comment`   | Comentários no HTML               | `<!-- comentário -->` |

### Exemplo gráfico (estrutura simplificada)

```html
<html>
  <body>
    <h1>Exemplo DOM</h1>
    <p>Texto de exemplo</p>
  </body>
</html>
```

Árvore do DOM resultante:

```
Document
 └── html
      └── body
           ├── h1
           │    └── #text "Exemplo DOM"
           └── p
                └── #text "Texto de exemplo"
```

---

## 4. Pontos importantes sobre a árvore do DOM

* Cada **elemento é um nó** conectado a outros por relações **pai, filho e irmão**.
* O nó **`document`** é sempre a **raiz** da árvore.
* O DOM é **dinâmico** — ele muda conforme scripts ou interações do usuário modificam a página.
* O DOM pode conter **nós invisíveis**, como comentários e espaços.
* **Recriar ou reposicionar nós** pode afetar o desempenho, especialmente em árvores muito grandes.

---

## 5. Para que serve o DOM

O DOM permite que desenvolvedores **interajam com a página de forma dinâmica**, tornando as interfaces web **interativas e responsivas**.
Alguns usos práticos:

* **Alterar conteúdo** e estilo de elementos (`textContent`, `style`).
* **Adicionar ou remover elementos** dinamicamente.
* **Responder a eventos** (cliques, teclas, carregamento).
* **Validar formulários** e capturar dados de entrada.
* **Construir aplicações de página única (SPAs)**, manipulando o DOM sem recarregar a página.

---

## 6. Acessando elementos do DOM

JavaScript fornece várias formas de **selecionar elementos** no DOM:

| Método                     | Descrição                                                      | Exemplo                                   |
| -------------------------- | -------------------------------------------------------------- | ----------------------------------------- |
| `getElementById()`         | Retorna o elemento com o ID especificado                       | `document.getElementById("titulo")`       |
| `getElementsByClassName()` | Retorna coleção de elementos com a classe                      | `document.getElementsByClassName("item")` |
| `getElementsByTagName()`   | Retorna elementos com determinada tag                          | `document.getElementsByTagName("p")`      |
| `querySelector()`          | Retorna o **primeiro** elemento que corresponde ao seletor CSS | `document.querySelector(".ativo")`        |
| `querySelectorAll()`       | Retorna **todos** os elementos que correspondem ao seletor     | `document.querySelectorAll("div > p")`    |

Exemplo:

```js
const titulo = document.querySelector("h1");
titulo.style.color = "blue";
```

---

## 7. Manipulando o conteúdo do DOM

Após selecionar um elemento, é possível alterar **texto, HTML interno, atributos e estilos**:

```js
const paragrafo = document.getElementById("mensagem");

// Alterar o texto
paragrafo.textContent = "Novo conteúdo de texto";

// Inserir HTML
paragrafo.innerHTML = "<strong>Conteúdo em negrito</strong>";

// Modificar atributo
paragrafo.setAttribute("class", "destaque");

// Alterar estilo
paragrafo.style.backgroundColor = "yellow";
```

> ⚠️ `innerHTML` deve ser usado com cuidado, pois pode abrir brechas de segurança (XSS) se for alimentado com dados externos.

---

## 8. Adicionando elementos com `appendChild()`

O método `appendChild()` adiciona um **nó filho ao final** de um elemento existente. É uma das formas mais diretas de inserir novos nós na árvore DOM.

### Exemplo prático:

```html
<ul id="lista"></ul>
```

```js
const lista = document.getElementById("lista");
const novoItem = document.createElement("li");

novoItem.textContent = "Item adicionado dinamicamente";
lista.appendChild(novoItem);
```

Resultado no HTML:

```html
<ul id="lista">
  <li>Item adicionado dinamicamente</li>
</ul>
```

> Dica: caso precise inserir o nó em outra posição, use métodos como `insertBefore()` ou `append()`.

---

## Referências

* Mozilla Developer Network (MDN). **“Document Object Model (DOM)”**. Disponível em: [https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model). Acesso em: nov. 2025.
* W3C. **“DOM Standard – WHATWG Living Standard”**. Disponível em: [https://dom.spec.whatwg.org/](https://dom.spec.whatwg.org/). Acesso em: nov. 2025.
* Flanagan, D. (2020). *JavaScript: The Definitive Guide* (7th ed.). O’Reilly Media.

