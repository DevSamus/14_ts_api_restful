Seção 14: Projeto: API RESTfull com typescript, Express

183. Apresentação do projeto
 -> https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30377772#overview

 184. Iniciando o projeto
  -> https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30377780#overview]

#	dependências sistema -> em produção
	npm init -y -> iniciando projeto nodejs
	npm install config dotenv express express-validator mongoose morgan winston 

*	dependencias dev -> tempo de desenvolvimento
	tsc --init  -> iniciando typescript 
	npm install @types/config @types/express @types/mongoose @types/morgan @types/node ts-node-dev typescript --save-dev

file -> package.json
"scripts": {
    .....,
    "dev": "ts-node-dev --respawn --transpile-only src/app.ts "
  },

	ts-node-dev  -> compilador typescript 
	 -> https://www.npmjs.com/package/ts-node-dev
	--respawn -> hot-reload 
	--transpile-only src/app.ts -> mapea pasta/arquivos que ts-node-dev deve compilar 