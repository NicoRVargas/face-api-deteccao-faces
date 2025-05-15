  

# Teste Técnico - Appia Tech

  

Este é um projeto simples para detecção de rostos em imagens. O usuário pode enviar uma imagem, visualizar uma prévia antes do envio, e após o processamento, visualizar o resultado com os rostos detectados.

  

---

  

## Funcionalidades

  

- Upload de imagem com pré-visualização.

- Feedback visual de carregamento enquanto o processamento é feito.

- Armazenamento dos dados da detecção no `localStorage`.

- Página de resultado exibindo a imagem com rostos destacados e informações.

- Navegação simples entre página de upload e página de resultado.

  

---

  

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- NodeJS
- FaceAPI

---

## Estrutura do Projeto
```
/
├── models/ 		   # Modelos a serem carregados pelo FaceAPI
├── output-image/ 	   # Destino das imagens processadas pelo FaceAPI
├── public/			   # Arquivos Estáticos
│ └── css/ 			   # Arquivos estáticos de estilização
│ └── html/ 		   # Arquivos estáticos de HTML
│ └── img/ 			   # Imagens usadas no FrontEnd
│ └── js/ 			   # Arquivos estáticos de Javascript
├── src/               # Código Fonte da aplicação
│   ├── controller/    # Controladores responsáveis por receber as requisições e intermediar a lógica
│   ├── routes/        # Definição das rotas da aplicação (endpoints HTTP)
│   ├── service/       # Serviços com a lógica de negócio e funcionalidades específicas
│   └── app.js         # Arquivo principal que inicializa a aplicação e configura o servidor
├── uploads/ 		   # Pasta que recebe as imagens do usuário
├── utils/ 			   # Pasta com o setup do FaceAPI
├── .editorconfig 	   # Arquivo de formatação padrão do projeto
├── package.json 	   # Arquivo de configuração NodeJS do projeto
└── README.md 		   # Documentação do Projeto (Este Arquivo)

```
---

## Como Rodar

1. Instalar **NodeJS(22.15.0)**:
Instalação pode ser encontrada neste link: https://nodejs.org/pt/download  

2. Clone o repositório:

```bash

git clone https://github.com/NicoRVargas/face-api-deteccao-faces.git

cd face-api-deteccao-faces

```

3. Instalar **dependências** dentro do diretório raíz do projeto:
```bash

npm i 

```
4. Rodar servidor:
Para rodar o servidor, execute o comando a seguir:

```bash

npm run start:prod

```


5. Acessar o Projeto:
Para acessar o projeto, no seu navegador, **siga o link**: http://localhost:3000

---  

## Como Usar

1. Na página principal, clique no quadrado com o sinal de "+" para selecionar uma imagem.

2. Visualize a prévia da imagem antes do envio.

3. Clique em "Enviar" para fazer o upload e iniciar o processamento.

4. Aguarde o gif de loading enquanto o backend processa a imagem.

5. Após o processamento, você será redirecionado para a página de resultado, onde verá a imagem com rostos detectados e a quantidade de rostos encontrados.

---  

## Autor

Nicolas Rodrigues de Vargas 
Github:@NicoRVargas

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
