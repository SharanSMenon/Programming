export class SmartSystem {
    private _model: string;
    private _touchscreen: boolean;
    private _TV: boolean;
    private _rearCamera: boolean;
    private _AirConditioning: boolean;
    private _AirBag: boolean = true;
    private _OS: string;
    private _ACRange: Array<number>;
    private _temperature: number = 0;
    constructor(model: string, touchscreen: boolean, TV: boolean, rearCamera: boolean, AirConditioning: boolean, OS: string, ACRange: Array<number>) {
        this._model = model;
        this._touchscreen = touchscreen;
        this._TV = TV;
        this._rearCamera = rearCamera;
        this._AirConditioning = AirConditioning;
        this._OS = OS;
        if (this._AirConditioning) {
            this._ACRange = ACRange;
            this._temperature = this._ACRange[0];            
        }
    }


    /**
     * Getter model
     * @return {string}
     */
	public get model(): string {
		return this._model;
	}

    /**
     * Getter touchscreen
     * @return {boolean}
     */
	public get touchscreen(): boolean {
		return this._touchscreen;
	}

    /**
     * Getter TV
     * @return {boolean}
     */
	public get TV(): boolean {
		return this._TV;
	}

    /**
     * Getter rearCamera
     * @return {boolean}
     */
	public get rearCamera(): boolean {
		return this._rearCamera;
	}

    /**
     * Getter AirConditioning
     * @return {boolean}
     */
	public get AirConditioning(): boolean {
		return this._AirConditioning;
	}

    /**
     * Getter AirBag
     * @return {boolean }
     */
	public get AirBag(): boolean  {
		return this._AirBag;
	}

    /**
     * Getter OS
     * @return {string}
     */
	public get OS(): string {
		return this._OS;
	}

    /**
     * Getter ACRange
     * @return {Array<number>}
     */
	public get ACRange(): Array<number> {
		return this._ACRange;
	}

    /**
     * Getter temperature
     * @return {number }
     */
	public get temperature(): number  {
		return this._temperature;
	}

    /**
     * Setter model
     * @param {string} value
     */
	public set model(value: string) {
		this._model = value;
	}

    /**
     * Setter touchscreen
     * @param {boolean} value
     */
	public set touchscreen(value: boolean) {
		this._touchscreen = value;
	}

    /**
     * Setter TV
     * @param {boolean} value
     */
	public set TV(value: boolean) {
		this._TV = value;
	}

    /**
     * Setter rearCamera
     * @param {boolean} value
     */
	public set rearCamera(value: boolean) {
		this._rearCamera = value;
	}

    /**
     * Setter AirConditioning
     * @param {boolean} value
     */
	public set AirConditioning(value: boolean) {
		this._AirConditioning = value;
	}

    /**
     * Setter AirBag
     * @param {boolean } value
     */
	public set AirBag(value: boolean ) {
		this._AirBag = value;
	}

    /**
     * Setter OS
     * @param {string} value
     */
	public set OS(value: string) {
		this._OS = value;
	}

    /**
     * Setter ACRange
     * @param {Array<number>} value
     */
	public set ACRange(value: Array<number>) {
		this._ACRange = value;
	}
    
    
    /**
     * turnAcOn
     */
    public turnAcOn(temp: number): void {
        if (this.AirConditioning) {
            if (temp > this.ACRange[0] && temp < this.ACRange[1]) {
                console.log("Successfully changed the temperature.");                
            }else{
                console.log("Cannot change the temperature.");
                
            }
        }else{
            console.log("Your car does not support air conditioning.");
            
        }
    }
    /**
     * playMusic
     */
    public playMusic(song: string): void {
        console.log(`Playing ${song}`)
    }
    /**
     * playMovie
     */
    public playMovie(movie: string): void {
        if (this.TV) {
            console.log(`Playing movie ${movie}`);            
        }else{
            console.log("TV not supported on this car.");
            
        }
    }


}