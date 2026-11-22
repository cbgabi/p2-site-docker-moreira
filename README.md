
# Moreira Auto Elétrica Móvel

## Descrição do projeto

Este projeto foi desenvolvido como atividade acadêmica
da disciplina de Sistemas Distribuídos.

O objetivo é criar um site estático utilizando HTML,
CSS e JavaScript e disponibilizá-lo por meio de um
container Docker com servidor Nginx.

O site apresenta a Moreira Auto Elétrica Móvel,
seus serviços automotivos, informações de atendimento
e botões de contato pelo WhatsApp.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Docker
- Nginx

## Estrutura do projeto

p2-site-docker/
- imagens/
  - banner-oficina.jpeg
  - logo-moreira.jpeg
- index.html
- style.css
- script.js
- Dockerfile
- README.md

## Como executar

É necessário ter o Docker instalado e em execução.

### 1. Construir a imagem

Abra um terminal na pasta do projeto e execute:

```bash
docker build -t moreira-auto-eletrica .
```

### 2. Executar o container

```bash
docker run -d --name moreira-site -p 8080:80 moreira-auto-eletrica
```

### 3. Verificar o container

```bash
docker ps
```

### 4. Acessar o site

Abra o navegador e acesse:

http://localhost:8080

### 5. Parar o container

```bash
docker stop moreira-site
```

### 6. Iniciar novamente

```bash
docker start moreira-site
```

## Diferença entre imagem e container

Uma imagem Docker é como um modelo que contém os
arquivos e as configurações necessários para executar
uma aplicação.

O container é a execução desse modelo.

Neste projeto, a imagem contém o Nginx e os arquivos
do site da Moreira Auto Elétrica Móvel.

Quando executamos a imagem, criamos um container
que disponibiliza o site no navegador pela porta 8080.

## Funcionalidades

- Apresentação da oficina
- Exibição dos serviços
- Imagens da identidade visual
- Botões de contato pelo WhatsApp
- Mensagem interativa utilizando JavaScript
- Layout responsivo

## Inteligência artificial utilizada

Foi utilizado o ChatGPT, da OpenAI, como ferramenta
de apoio durante o desenvolvimento.

A ferramenta auxiliou na elaboração dos códigos
HTML, CSS, JavaScript e Dockerfile, na documentação
e na orientação dos comandos Docker.

## Evidência de funcionamento

O funcionamento do site será demonstrado por um
vídeo curto, mostrando o container em execução
e o acesso ao endereço http://localhost:8080.
