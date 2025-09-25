\# Comandos Básicos do Git



\## Configuração Inicial

\- `git config --global user.name "Seu Nome"`  

&nbsp; Define o nome do usuário que aparecerá nos commits.  



\- `git config --global user.email "seu@email.com"`  

&nbsp; Define o e-mail associado aos commits.  



\- `git config --list`  

&nbsp; Lista todas as configurações ativas do Git.  



---



\## Criação e Clonagem de Repositórios

\- `git init`  

&nbsp; Inicializa um novo repositório Git em um diretório.  



\- `git clone <url>`  

&nbsp; Clona (copia) um repositório remoto para a máquina local.  



---



\## Trabalhando com o Repositório

\- `git status`  

&nbsp; Mostra o estado atual do repositório (arquivos modificados, staged etc.).  



\- `git add <arquivo>`  

&nbsp; Adiciona um arquivo específico para a área de \*staging\*.  



\- `git add .`  

&nbsp; Adiciona todas as alterações do diretório atual para a \*staging area\*.  



\- `git commit -m "mensagem"`  

&nbsp; Salva as alterações no repositório com uma mensagem descritiva.  



\- `git log`  

&nbsp; Exibe o histórico de commits.  



\- `git diff`  

&nbsp; Mostra as diferenças entre o código modificado e o último commit.  



---



\## Branches

\- `git branch`  

&nbsp; Lista as branches existentes.  



\- `git branch <nome>`  

&nbsp; Cria uma nova branch.  



\- `git checkout <nome>`  

&nbsp; Alterna para outra branch.  



\- `git checkout -b <nome>`  

&nbsp; Cria e já muda para uma nova branch.  



\- `git merge <nome>`  

&nbsp; Mescla as alterações de uma branch na branch atual.  



---



\## Repositório Remoto

\- `git remote -v`  

&nbsp; Lista os repositórios remotos vinculados.  



\- `git remote add origin <url>`  

&nbsp; Conecta o repositório local a um repositório remoto.  



\- `git push origin <branch>`  

&nbsp; Envia as alterações para o repositório remoto.  



\- `git pull origin <branch>`  

&nbsp; Atualiza o repositório local com alterações do remoto.  



\- `git fetch`  

&nbsp; Baixa os dados do remoto sem mesclar automaticamente.  



---



\## Outros Úteis

\- `git reset <arquivo>`  

&nbsp; Remove um arquivo da área de \*staging\*.  



\- `git reset --hard <commit>`  

&nbsp; Retorna o repositório ao estado de um commit específico, descartando alterações.  



\- `git stash`  

&nbsp; Salva temporariamente alterações não commitadas.  



\- `git stash pop`  

&nbsp; Recupera alterações guardadas pelo `stash`.  



