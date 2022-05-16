# DS Deliver
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/daniellegb/dsdeliver-sds2/blob/main/LICENSE) 

# Sobre o projeto

https://daniellegb-sds2.netlify.app/

DS Deliver é uma aplicação full stack web e mobile construída durante a 2ª edição da **Semana DevSuperior** (#sds2), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em um sistema de vendas de uma pizzaria. O usuário seleciona as pizzas desejadas e o endereço de entrega. O sistema soma os valores da pizza para a cobrança e envia o pedido para o banco de dados. Esta informação é direcionada para o aplicativo do entregador, que recebe o endereço e a rota (estipulada pelo aplicativo na versão mobile) para poder realizar a entrega.

## Layout mobile
![Mobile 1](https://github.com/daniellegb/dsdeliver-sds2/blob/main/assets/mobile.PNG)

## Layout web
![Web 1](https://github.com/daniellegb/dsdeliver-sds2/blob/main/assets/page%201.png)

![Web 2](https://github.com/daniellegb/dsdeliver-sds2/blob/main/assets/page.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/daniellegb/dsdeliver-sds2/blob/main/assets/modelo-conceitual.png)

## Padrão de camadas adotado
![Padrão de Camadas Adotado](https://github.com/daniellegb/dsdeliver-sds2/blob/main/assets/padrao-camadas.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- MapBox
- Expo
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/daniellegb/dsdeliver-sds2

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/daniellegb/dsdeliver-sds2

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```
