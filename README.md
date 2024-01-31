# Projeto Capitais do Brasil 🇧🇷


## DESCRIÇÃO

Este projeto é uma aplicação web que lista os estados e as capitais do Brasil. Utiliza um ambiente de contêineres com Ubuntu, Docker, Docker Compose, Node.js, PHP e MySQL.

## PRÉ-REQUISITOS

### Para executar este projeto, você precisará de:

- Uma máquina UBUNTU na versão 22.04.3 LTS;

- Acesso à internet;

- nstalar o Docker 25.0.1

- Instalar o Docker Compose v2.17.2


## CONFIGURAÇÃO DE AMBIENTE

1. Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

     MYSQL_ROOT_PASSWORD=escolha_uma_senha
     MYSQL_DATABASE=capitaisDoBrasil

## INICIALIZAÇÃO DO PROJETO

1. Inicie os contêineres usando o Docker Compose:

     - docker-compose up -d

2. Verifique se os contênieres estão rodando:

     - docker ps

## ACESSANDO A APLICAÇÃO

     - Acesse o servidor Node.js em http://localhost:3000/capitais
     - Acesse a aplicação PHP em http://localhost:8080
