const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
/* 
 ! para resolver undefined dotenv variables acrescenta -> no main da aplica -> require("dotenv").config();
console.log(dbName);
console.log(dbUser);
console.log(dbPass);  
*/

export default {
	
  port: 3000,
  //dbUri: `mongodb+srv://devsamus:Gma957760@cluster0.8af7obo.mongodb.net/dbm1?retryWrites=true&w=majority`,
  dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.8af7obo.mongodb.net/${dbName}?retryWrites=true&w=majority`,
};
