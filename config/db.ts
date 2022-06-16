import config  from 'config'
import mongoose from 'mongoose'
import Logger from './logger'

export default async function connect() {
	const uri = config.get<string>("dbUri")
	try {
		await mongoose.connect(uri)
		//console.log("Conexão estabelecida!!");
		Logger.info("Conexão estabelecida!!")
		
	} catch (e) {
		console.log("--------------------------------------\n");		
		//* console.log("Não foi possível conectar ao banco de dados");
		Logger.error("Não foi possível conectar ao banco de dados")
		//# console.log("erro:",e);
    Logger.error(e)
		process.exit(1)//* interrompe a aplicação!!

		
		
	}
}