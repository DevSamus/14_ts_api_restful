import config  from 'config'
import mongoose from 'mongoose'

export default async function connect() {
	const uri = config.get<string>("dbUri")
	try {
		await mongoose.connect(uri)
		console.log("Conexão estabelecida!!");
		
	} catch (e) {
		console.log("--------------------------------------\n");
		
		console.log("Não foi possível conectar ao banco de dados");
		console.log("erro:",e);
		
		
	}
}