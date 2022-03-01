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

	 const nome1:string= ('cristopher silva');
	 const idade1:number= 21;
	 const peso1:number= 71;
	 const altura1:number= 1.74;
	 const ehdev1:boolean= true;
    
	 if (ehdev1==true){
		 console.log(ehdev1)
	 };

	 const nome2:string= ('leandro silva');
	 const idade2:number= 23;
	 const peso2:number= 70;
	 const altura2:number= 1.70;
	 const ehdev2:boolean= true;

     if (ehdev2==true){
      console.log(ehdev2)
     };

	 const nome3:string= ('yago silva');
	 const idade3:number= 25;
	 const peso3:number= 75;
	 const altura3:number= 1.78;
	 const ehdev3:boolean= true;
	 if (ehdev3==true){
		console.log(ehdev3)
		};
		
	 const nome4:string= ('vitor silva');
	 const idade4:number= 30;
	 const peso4:number= 80;
	 const altura4:number= 1.75;
     const ehdev4:boolean= true;
	 if (ehdev4==true){
		console.log(ehdev4)
		};
	 
     console.log(idade1+idade2+idade3+idade4);
     console.log(nome1,nome2,nome3,nome4);
     console.log(nome1,peso1 / (altura1**2));
     console.log(nome2,peso2 / (altura2**2));
     console.log(nome3,peso3 / (altura3**2));
     console.log(nome4,peso4 / (altura4**2));