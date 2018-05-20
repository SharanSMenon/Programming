import {Dimensions} from './Dimensions'
export class Case {
    private _model: string;
    private _manufacturer: string;
    private _powerSupply: string;
    private _dimensions: Dimensions;

	constructor(model: string, manufacturer: string, powerSupply: string, dimensions: Dimensions) {
		this._model = model;
		this._manufacturer = manufacturer;
		this._powerSupply = powerSupply;
		this._dimensions = dimensions;
	}
    

    /**
     * Getter model
     * @return {string}
     */
	public get model(): string {
		return this._model;
	}

    /**
     * Getter manufacturer
     * @return {string}
     */
	public get manufacturer(): string {
		return this._manufacturer;
	}

    /**
     * Getter powerSupply
     * @return {string}
     */
	public get powerSupply(): string {
		return this._powerSupply;
	}

    /**
     * Getter dimensions
     * @return {Dimensions}
     */
	public get dimensions(): Dimensions {
		return this._dimensions;
    }
    
    /**
     * powerUp
     */
    public powerUp(): void {
        console.log("Computer is on.");
        
    }
    /**
     * powerOff
     */
    public powerOff(): void {
        console.log("Computer is off.");
        
    }
    
}