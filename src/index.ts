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
});
	console.log("desafio 02 - Starts...");
	
	 const nome1= ('cristopher'),
	  sobrenome1= ('silva'),
	 idade1= 21,
	 peso1= 71,
	 altura1= 1.74,
	 ehdev1= true;

	 const nome2= ('leandro'),
	 sobrenome2= ('silva'),
	 idade2= 23,
	 peso2= 70,
	 altura2= 1.70,
	 ehdev2= true;

	 const nome3= ('yago'),
	 sobrenome3= ('silva'),
	 idade3= 25,
	 peso3= 75,
	 altura3= 1.78,
	 ehdev3= true;
		
	const nome4= ('vitor'),
	 sobrenome4= ('silva'),
	 idade4= 30,
	 peso4= 80,
	 altura4= 1.75,
     ehdev4= true;

    console.log(nome1,sobrenome1,idade1,peso1,altura1,ehdev1);
	console.log(nome2,sobrenome2,idade2,peso2,altura2,ehdev2);
	console.log(nome3,sobrenome3,idade3,peso3,altura3,ehdev3);
	console.log(nome4,sobrenome4,idade4,peso4,altura4,ehdev4);
	console.log(idade1+idade2+idade3+idade4);
	console.log(nome1,nome2,nome3,nome4);
	console.log(ehdev1,ehdev2,ehdev3,ehdev4);
	console.log(sobrenome1,sobrenome2,sobrenome3,sobrenome4);
	console.log(idade1 * altura1 / 2);
	console.log(idade2 * altura2 / 2);
	console.log(idade3 * altura3 / 2);
	console.log(idade4 * altura4 / 2);