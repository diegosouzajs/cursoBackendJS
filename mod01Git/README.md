# Comandos Básicos do Git



## Configuração Inicial

- `git config --global user.name "Seu Nome"`  
Define o nome do usuário que aparecerá nos commits.  

- `git config --global user.email "seu@email.com"`  

Define o e-mail associado aos commits.  

- `git config --list`  

Lista todas as configurações ativas do Git.  

---



## Criação e Clonagem de Repositórios

- `git init`  

Inicializa um novo repositório Git em um diretório.  



- `git clone <url>`  

Clona (copia) um repositório remoto para a máquina local.  



---



## Trabalhando com o Repositório

- `git status`  

Mostra o estado atual do repositório (arquivos modificados, staged etc.).  



- `git add <arquivo>`  

Adiciona um arquivo específico para a área de *staging*.  



- `git add .`  

Adiciona todas as alterações do diretório atual para a *staging area*.  



- `git commit -m "mensagem"`  

Salva as alterações no repositório com uma mensagem descritiva.  



- `git log`  

Exibe o histórico de commits.  



- `git diff`  

Mostra as diferenças entre o código modificado e o último commit.  



---



## Branches

- `git branch`  

Lista as branches existentes.  



- `git branch <nome>`  

Cria uma nova branch.  



- `git checkout <nome>`  

Alterna para outra branch.  



- `git checkout -b <nome>`  

Cria e já muda para uma nova branch.  



- `git merge <nome>`  

Mescla as alterações de uma branch na branch atual.  



---



## Repositório Remoto

- `git remote -v`  

Lista os repositórios remotos vinculados.  



- `git remote add origin <url>`  

Conecta o repositório local a um repositório remoto.  



- `git push origin <branch>`  

Envia as alterações para o repositório remoto.  



- `git pull origin <branch>`  

Atualiza o repositório local com alterações do remoto.  



- `git fetch`  

Baixa os dados do remoto sem mesclar automaticamente.  



---



## Outros Úteis

- `git reset <arquivo>`  

Remove um arquivo da área de *staging*.  



- `git reset --hard <commit>`  

Retorna o repositório ao estado de um commit específico, descartando alterações.  



- `git stash`  

Salva temporariamente alterações não commitadas.  



- `git stash pop`  

Recupera alterações guardadas pelo `stash`. 