Seção 14: Projeto: API RESTfull com typescript, Express

183. Apresentação do projeto
 -> https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30377772#overview

 184. Iniciando o projeto
  -> https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30377780#overview]

#	dependências sistema -> em produção
	npm init -y -> iniciando projeto nodejs
	npm install config dotenv express express-validator mongoose morgan winston 
  folder -> src 
*	dependencias dev -> tempo de desenvolvimento
	tsc --init  -> iniciando typescript 
	npm install @types/config @types/express @types/mongoose @types/morgan @types/node ts-node-dev typescript --save-dev

file -> package.json
"scripts": {
    .....,
    "dev": "ts-node-dev --respawn --transpile-only src/app.ts"
  },

	ts-node-dev  -> compilador typescript 
	 -> https://www.npmjs.com/package/ts-node-dev
	--respawn -> hot-reload 
	--transpile-only src/app.ts -> mapea pasta/arquivos que ts-node-dev deve compilar 



185. Integrando o Express
 -> https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30377784#overview

   folder -> ↓ config
            default.ts

186. Rota de teste da API
https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30377788#overview

187. Criando banco de dados no MongoDB Atlas
 -> https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30377794#overview

# ATLAS 
  https://www.mongodb.com/atlas/database
 
  https://cloud.mongodb.com/v2/62aa1fdd98b6c43fcbcd671f#clusters


188. Conectando ao banco de dados
https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30377808#overview

 ./config/dt.ts -> configuração banco de dados 
  
189. Criando variáveis de ambiente
 -> https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30377814#overview

190. Integrando o Winston
 -> https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30377818#overview


191. Configurando o Morgan
 -> https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30377824#overview


192. Criando o nosso Model
 -> https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30377840#overview











install docker ce 
 -> https://stackoverflow.com/questions/41133455/docker-repository-does-not-have-a-release-file-on-running-apt-get-update-on-ubun
   
	  pra instalar no linux mint
        sudo apt-get remove docker docker-engine docker.io
        
        sudo apt-get update
        
        sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
        
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
        
        sudo apt-key fingerprint 0EBFCD88
        
        sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu xenial stable"
        
        sudo apt-get update

sudo apt-get install docker-ce

sudo docker run hello-world

https://docs.docker.com/engine/install/ubuntu/

# Manage Docker as a non-root user🔗
 -> https://docs.docker.com/engine/install/linux-postinstall/
