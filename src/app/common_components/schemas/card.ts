export class Card {

	//ordServ is a primary key of the card
	public ordServ: string;
	cpf: string;
	defeito: string;
	nome: string;
	telPrimario: string;
	data: Date;
	dia: number;
	mes: number;
	imei: string;
	endereco: string;
	marca: string;
	modelo: string;
	telSecundario: string;
	email: string;
	realizado: string;
	pecas: string;
	servico: string;
	maoObra: string;
	valorFinal: string;
	metPag: string;
	observacoes: string;

	initialized = false;
	//"Constructor"
	public init( dataJson: any): boolean
	{
		//Checking primary key
		if(dataJson.ordServ == undefined || dataJson.ordServ == "")
		{
			console.log("Cartão não inicializado, é necessário enviar um valor de ordem de serviço.");
			return false;
		}	

		this.ordServ = dataJson.ordServ;
	    this.cpf = dataJson.cpf;
	    this.defeito = dataJson.defeito;
	    this.nome = dataJson.nome;
	    this.telPrimario = dataJson.telPrimario;
	    this.data = new Date(dataJson.data);
	    this.dia = this.data.getDate();
	    this.mes = this.data.getMonth() + 1;
	    this.imei = dataJson.imei;
	    this.endereco = dataJson.endereco;
	    this.marca = dataJson.marca;
	    this.modelo = dataJson.modelo;
	    this.telSecundario = dataJson.telSecundario;
	    this.email = dataJson.email;
	    this.realizado = dataJson.realizado;
	    this.pecas = dataJson.pecas;
	    this.servico = dataJson.servico;
	    this.maoObra = dataJson.maoObra;
	    this.valorFinal = dataJson.valorFinal;
	    this.metPag = dataJson.metPag;
	    this.observacoes = dataJson.observacoes;

	    this.initialized = true;
	    return true;        
	}

	public updateCard(dataJson: any): boolean
	{
		if(!this.checkInitialized())
		{
			console.log("Não foi possivel obter a ordem de serviço pois o cartão não foi inicializado.");
			return false;
		}
	    this.cpf = dataJson.cpf;
	    this.defeito = dataJson.defeito;
	    this.nome = dataJson.nome;
	    this.telPrimario = dataJson.telPrimario;
	    this.data = dataJson.data;
	    this.dia = dataJson.data.getDate();
	    this.mes = dataJson.data.getMonth() + 1;
	    this.imei = dataJson.imei;
	    this.endereco = dataJson.endereco;
	    this.marca = dataJson.marca;
	    this.modelo = dataJson.modelo;
	    this.telSecundario = dataJson.telSecundario;
	    this.email = dataJson.email;
	    this.realizado = dataJson.realizado;
	    this.pecas = dataJson.pecas;
	    this.servico = dataJson.servico;
	    this.maoObra = dataJson.maoObra;
	    this.valorFinal = dataJson.valorFinal;
	    this.metPag = dataJson.metPag;
	    this.observacoes = dataJson.observacoes;

	    return true;
	}

	public getOrdServ(): string
	{
		if(this.initialized)
			return this.ordServ;
		else
		{
			console.log("Não foi possivel obter a ordem de serviço pois o cartão não foi inicializado.");
			return "";
		}
	}

	public jsonBuilder(ordServ: string, cpf: string, defeito: string, nome: string, telPrimario: string,
			data: Date, imei: string, endereco: string, marca: string, modelo: string, telSecundario: string, 
			email: string, realizado: string, pecas: string, servico: string, maoObra: string, 
			valorFinal: string, metPag: string,	observacoes: string ): string
	{
		if(ordServ === undefined || ordServ == "")
		{
			console.log("Json não gerado, é necessário enviar um valor de ordem de serviço.");
			return "";
		}	
		var ret = "";
		ret = "{\n" + 
						"ordServ : '" + ordServ + "',\n" + 
						"cpf : '" + cpf + "',\n" +
						"defeito: '" + defeito + "',\n" +
						"nome: '" + nome + "',\n" +
						"telPrimario : '" + telPrimario + "',\n" +
						"data : " + data + ",\n" +
						"imei : " + imei + ",\n" +
						"endereco : " + endereco + ",\n" +
						"marca : " + marca + ",\n" +
						"modelo : " + modelo + ",\n" +
						"telSecundario : "+ telSecundario + ",\n" +
						"valorFinal : " + valorFinal + ",\n" +
						"metPag : " + metPag + ",\n" +
						"observacoes : " + observacoes + ",\n" +
					"}"	

		return ret;
	}

	public getJson(): Object
	{
		var json = Object();
		json.ordServ  = this.ordServ;
		json.cpf = this.cpf;
		json.defeito = this.defeito;
		json.nome = this.nome;
		json.telPrimario = this.telPrimario;
		json.data =	this.data;
		json.dia = this.dia;
		json.mes = this.mes;
		json.imei = this.imei;
		json.endereco = this.endereco;
		json.marca = this.marca;
		json.modelo = this.modelo;
		json.telSecundario = this.telSecundario;
		json.email = this.email;
		json.realizado = this.realizado;
		json.pecas = this.pecas;
		json.servico = this.servico;
		json.maoObra = this.maoObra;
		json.valorFinal = this.valorFinal;
		json.metPag = this.metPag;
		json.observacoes = this.observacoes;
		return json;
	}


	private checkInitialized(): boolean
	{
		return this.initialized;
	}

}