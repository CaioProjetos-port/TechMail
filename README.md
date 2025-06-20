# Frontend - TechMail

Este repositório contém a interface frontend do sistema TechMail.  
  

## Visão Geral

O frontend é responsável por:
- Coletar informações de cadastro do usuário
- Capturar preferências de notícias de tecnologia
- Enviar os dados para o backend via API REST

- Funcionamento da API:
  1. O usuário preenche o formulário no frontend.
  2. O JavaScript no navegador envia uma requisição HTTP POST para o backend com os dados do formulário.
  3. O backend (API Flask) recebe a requisição, processa e armazena no banco de dados.
  4. O backend devolve uma resposta HTTP para o frontend.
    

## Tecnologias Utilizadas

- **Bootstrap** – framework de CSS para estilização e layout responsivo
- **Fetch API** – nativa do navegador, usada para requisições HTTP
- **Integração com API Flask** – comunicação com o backend via API REST
  

## Tipo de comunicação
- Nome técnico: Comunicação via REST API
- Formato dos dados: JSON
- Método HTTP usado: POST
- Protocolo: HTTP (com HTTPS)
- Padrão de arquitetura: Cliente-servidor (Frontend + Backend)
  

## Configuração do Ambiente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/daily-tech-news-frontend.git
2. Instale as dependências:
   ```bash
   npm install

3. Configure as variáveis de ambiente:  
Crie um arquivo .env na raiz do projeto com:
    ```bash
   REACT_APP_BACKEND_URL=https://seu-backend-no-render.com/api
    
4. Inicie o servidor de desenvolvimento:
    ```bash
    npm start

## Estrutura do Projeto
    Front-end/
      index.html
      script.js
      style.css


## Como Contribuir
Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request
