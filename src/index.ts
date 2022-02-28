/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	
	console.log("desafio 02 - Starts...");
	
	const nome1 =('cristopher silva');
	const idade1 = 21;
	const peso1 = 71;
	const altura1 = 1.70;
	const ehdev1 = true;
	
	const nome2 = ('leandro silva');
	const idade2 = 23;
	const peso2 = 69;
	const altura2 = 1.65;
	const ehdev2 = true;
	
	const nome3 = ('yago silva');
	const idade3 = 25;
	const peso3 = 75;
	const altura3 = 1.78;
	const ehdev3 = true;
	
	const nome4 = ('vitor silva');
	const idade4 = 30;
	const peso4 = 80;
	const altura4 = 1.80;
	const ehdev4 = true;

console.log(nome1,idade1,peso1,altura1,ehdev1);
console.log(nome2,idade2,peso2,altura2,ehdev2);
console.log(nome3,idade3,peso3,altura3,ehdev3);
console.log(nome4,idade4,peso4,altura4,ehdev4);


let R01idade1 = (21 + 23 + 25 + 30);
let R02nome = ('cristopher silva, leandro silva, yago silva,vitor silva');
let R03imc1= 71 / 1.70 ** 2;
let R03imc2= 69 / 1.65 ** 2;
let R03imc3= 75 / 1.78 ** 2;
let R03imc4= 80 / 1.80 ** 2;

console.log(R01idade1);
console.log(R02nome);
console.log(R03imc1,R03imc2,R03imc3,R03imc4);

});