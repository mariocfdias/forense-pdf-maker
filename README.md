## Forense PDF Maker

Instalação: 

 Node LTS

 - yarn install
 - node src/server.js (na pasta do projeto)

Versão atual recebe como requisição os seguinte paramentros na rota POST (/pdf):

 - introduction: Contem contetudo HTML que será inserido pelo usuario a partir de editor WYSIWYG
 - objective: Contem contetudo HTML que será inserido pelo usuario a partir de editor WYSIWYG
 - metodology: Contem contetudo HTML que será inserido pelo usuario a partir de editor WYSIWYG
 - conclusion: Contem contetudo HTML que será inserido pelo usuario a partir de editor WYSIWYG


Tendo como retorno um arquivo PDF com o laudo gerado (capa em mock).

Pendente adição dos seguintes campos (irei entregar na proxima macro:

 - Campo de inserção dos peritos, recebendo um array
 - Campo de inserção dos acusados, recebendo array
 - Imagem da capa principal do laudo, recebendo uma URL para imagem
 - Titulo do laudo pericial
 - Subtitulo do laudo pericial
 - Array de evidencias, contendo um array de objetos com uma URL de evidencia (imagem, video, ou documento), uma imagem que represente a evidencia e uma descrição da evidencia.
A geração do laudo ocorre de forma sincrona a partir da biblioteca Pupettter **[puppeteer](https://github.com/puppeteer/puppeteer)** que permite manipulação de um navegador (por padrão, Chromium , headless. Podendo assim ter acesso a geração de paginas estilizadas a partir do **[tailwind](https://tailwindcss.com/)** e o PDF gerado a partir a interação de impressão desse navegador headless.
