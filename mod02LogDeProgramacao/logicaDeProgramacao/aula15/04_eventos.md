## 1. O que são eventos HTML

Eventos HTML são **ações ou ocorrências** que acontecem em elementos da página, como cliques, movimentação do mouse, digitação, envio de formulário, entre outros. Eles permitem que você execute código JavaScript em resposta a essas ações.

**Exemplos de eventos HTML comuns:**

| Evento                 | Descrição                                                 |
| ---------------------- | --------------------------------------------------------- |
| `onclick`              | Disparado quando o usuário clica no elemento              |
| `onmouseover`          | Disparado quando o mouse passa sobre o elemento           |
| `onmouseout`           | Disparado quando o mouse sai do elemento                  |
| `onchange`             | Disparado quando o valor de um input ou select é alterado |
| `oninput`              | Disparado a cada alteração no input, em tempo real        |
| `onsubmit`             | Disparado ao enviar um formulário                         |
| `onkeydown`, `onkeyup` | Disparados ao pressionar ou soltar uma tecla              |

---

## 2. Como usar eventos no JavaScript

Existem duas formas principais de associar eventos a elementos:

### 2.1 Atributo HTML diretamente

```html
<button onclick="alert('Botão clicado!')">Clique aqui</button>
```

* Vantagem: simples para exemplos rápidos.
* Desvantagem: mistura HTML com JavaScript, não recomendado para projetos maiores.

---

### 2.2 JavaScript moderno: `addEventListener`

O método `addEventListener` é o **mais recomendado**, pois permite adicionar múltiplos eventos ao mesmo elemento e separar HTML e JS.

```html
<button id="btn">Clique aqui</button>

<script>
  const button = document.getElementById('btn');

  // Adiciona evento de clique
  button.addEventListener('click', function(event) {
    alert('Botão clicado!');
  });

  // Exemplo com função separada
  function saudacao() {
    console.log('Olá!');
  }

  button.addEventListener('click', saudacao);
</script>
```

* **Sintaxe:** `element.addEventListener('evento', função, useCaptureOpcional);`
* `evento` → nome do evento sem `on` (ex: `'click'`, `'mouseover'`).
* `função` → função que será chamada quando o evento ocorrer.
* `useCaptureOpcional` → booleano que define a fase de captura/bubbling (opcional, raramente usado).

---

## 3. Eventos comuns e suas funções

Aqui estão alguns eventos e exemplos de uso prático:

### 3.1 `click`

Disparado ao clicar em um elemento.

```js
element.addEventListener('click', () => console.log('Clicado!'));
```

### 3.2 `mouseover` e `mouseout`

Disparados quando o mouse entra ou sai de um elemento.

```js
element.addEventListener('mouseover', () => console.log('Mouse entrou'));
element.addEventListener('mouseout', () => console.log('Mouse saiu'));
```

### 3.3 `keydown` e `keyup`

Disparados ao pressionar ou soltar uma tecla.

```js
document.addEventListener('keydown', (e) => console.log(`Tecla pressionada: ${e.key}`));
```

### 3.4 `input` e `change`

`input` ocorre a cada alteração de valor; `change` ocorre quando o usuário finaliza a alteração.

```js
const input = document.querySelector('input');

input.addEventListener('input', (e) => console.log(`Digitando: ${e.target.value}`));
input.addEventListener('change', (e) => console.log(`Valor final: ${e.target.value}`));
```

### 3.5 `submit`

Disparado ao enviar um formulário.

```js
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // evita o envio padrão
  console.log('Formulário enviado via JS');
});
```

---

## 4. `preventDefault()`

* O método `preventDefault()` **previne o comportamento padrão** de um elemento HTML quando ocorre um evento.
* Comum em formulários (`submit`) e links (`a`) para evitar que a página seja recarregada ou que o link seja seguido imediatamente.

**Exemplos:**

```html
<a href="https://www.google.com" id="link">Ir para o Google</a>

<script>
  const link = document.getElementById('link');

  link.addEventListener('click', function(e) {
    e.preventDefault(); // evita o redirecionamento
    alert('Link clicado, mas não foi redirecionado');
  });
</script>
```

```html
<form id="meuForm">
  <input type="text" />
  <button type="submit">Enviar</button>
</form>

<script>
  const form = document.getElementById('meuForm');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // previne o envio do formulário
    console.log('Formulário processado via JS');
  });
</script>
```

---

## 5. Observações importantes

* Eventos podem ser **delegados**, ou seja, aplicados em elementos pais e capturados nos filhos.
* Sempre use `addEventListener` para projetos profissionais.
* `preventDefault()` não cancela **o evento em si**, apenas o comportamento padrão do elemento.