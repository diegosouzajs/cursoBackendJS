Ah, perfeito, Diego! Então estamos falando **especificamente de verbos HTTP** (ou métodos HTTP), não de “verbos HTML”. Vou reformular e detalhar de forma didática, intermediária, com foco em web development.

---

# 🌐 **Verbos HTTP (Métodos HTTP)**

Os **verbos HTTP** são comandos que indicam a **ação a ser realizada em um recurso** no servidor web. Eles fazem parte do protocolo HTTP e definem como clientes (navegadores, APIs) interagem com servidores.

---

## 1. Principais verbos HTTP

| Verbo HTTP  | Descrição                                                             | Uso típico                                                                 |
| ----------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **GET**     | Solicita a representação de um recurso.                               | Buscar páginas HTML, imagens, dados de API. Não altera estado do servidor. |
| **POST**    | Envia dados ao servidor, geralmente para criar ou processar recursos. | Envio de formulários, criação de registros em banco de dados.              |
| **PUT**     | Atualiza um recurso existente com os dados fornecidos.                | Alterar informações de um usuário ou item em uma API REST.                 |
| **PATCH**   | Atualiza parcialmente um recurso.                                     | Modificação de campos específicos sem sobrescrever todo o recurso.         |
| **DELETE**  | Remove um recurso existente no servidor.                              | Excluir registros de um banco de dados via API REST.                       |
| **HEAD**    | Solicita apenas os cabeçalhos de resposta de um recurso.              | Verificar existência ou tipo de conteúdo sem baixar o corpo.               |
| **OPTIONS** | Retorna quais métodos HTTP são suportados por um recurso.             | Utilizado para checagens de CORS e compatibilidade de API.                 |

> ⚠️ Cada verbo tem **propósito semântico**. Usar o verbo errado (ex.: GET para apagar dados) quebra boas práticas e pode gerar problemas de segurança.

---

## 2. Exemplos com HTML e JavaScript

### **GET com formulário HTML**

```html
<form action="/buscar" method="GET">
    <input type="text" name="query" placeholder="Buscar">
    <button type="submit">Pesquisar</button>
</form>
```

* Os dados do formulário vão para a URL:

  ```
  /buscar?query=HTML
  ```
* Recomendado para pesquisas e leituras de dados.

---

### **POST com formulário HTML**

```html
<form action="/calcular-imc" method="POST">
    <input type="text" name="peso" placeholder="Peso">
    <input type="text" name="altura" placeholder="Altura">
    <button type="submit">Calcular IMC</button>
</form>
```

* Os dados são enviados no **corpo da requisição**, não aparecendo na URL.
* Usado quando há criação de dados ou envio de informações sensíveis.

---
### PUT, PATCH e DELETE com JavaScript (fetch API)

HTML puro não suporta PUT, PATCH ou DELETE diretamente em ```<form>```. Para isso, é necessário JavaScript ou APIs REST.

---
## 2. Boas práticas

1. **GET** → apenas leitura (não altera recursos).
2. **POST** → criação ou envio de dados sensíveis.
3. **PUT** → atualização completa de recurso.
4. **PATCH** → atualização parcial de recurso.
5. **DELETE** → remoção de recurso.
6. **Sempre use HTTPS** ao enviar dados sensíveis.

