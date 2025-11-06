### 🧩 **Enunciado da Atividade – Cálculo do IMC (Índice de Massa Corporal)**

Utilizando o **modelo de projeto apresentado anteriormente** e disponível no **repositório oficial do curso no GitHub**, desenvolva uma página web capaz de **calcular o IMC (Índice de Massa Corporal)** de um usuário, conforme o funcionamento descrito a seguir.

O sistema deve ser composto por um **arquivo HTML** e um **script JavaScript**. O arquivo HTML será responsável por **receber os valores de peso e altura** por meio de um **formulário simples** (faça a validação do formato das entradas). O JavaScript deverá **processar os valores informados**, **calcular o IMC** e **exibir o resultado** em uma área de saída no próprio documento, seguindo o modelo da **tabela de resultados** já fornecida no projeto base.

---

#### 🧠 **Requisitos técnicos da implementação**

1. Crie um formulário com dois campos de entrada:

   * **Peso** (em quilogramas)
   * **Altura** (em metros)

2. Capture o evento de **envio do formulário (`submit`)**, evitando o comportamento padrão de recarregar a página.

3. Desenvolva funções JavaScript que executem, de forma modular:

   * A **leitura dos valores** do formulário.

   * O **cálculo do IMC**, utilizando a fórmula:

     [
     IMC = \frac{peso}{altura^2}
     ]

   * A **exibição do resultado** em uma área específica do documento HTML.

4. A mensagem retornada deve indicar a **classificação correspondente ao valor do IMC**, conforme os intervalos abaixo:

   | Faixa de IMC        | Classificação    |
   | ------------------- | ---------------- |
   | Menor que 18,5      | Abaixo do peso   |
   | 18,5 a 24,9         | Peso normal      |
   | 25,0 a 29,9         | Sobrepeso        |
   | 30,0 a 34,9         | Obesidade grau 1 |
   | 35,0 a 39,9         | Obesidade grau 2 |
   | Maior ou igual a 40 | Obesidade grau 3 |

5. Utilize o **método `innerHTML`** para exibir a resposta formatada e **`addEventListener()`** para associar o evento de submissão à função principal.

6. A função principal do script deve ser **modularizada**, conforme o exemplo do código apresentado no modelo.

---

#### 🧾 **Entrega esperada**

O aluno deve apresentar:

* Um arquivo HTML estruturado com o formulário e a área de resultado.
* Um script JavaScript funcional que siga o modelo do repositório e execute corretamente o cálculo e a exibição do IMC.
* O código deve estar devidamente indentado e conter **comentários explicativos** nas funções principais.

---

#### 💡 **Dica**

Antes de iniciar a implementação, consulte o **modelo base disponível no GitHub do curso**, localizado na pasta `assets/js/main.js` e `index.html`.
Use o código fornecido como **referência para organização e estruturação** da sua solução.
