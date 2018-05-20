export class Case {
    private _color: string;
    private _metal: string;
    private _weight: number;
    private _finish: string;
    private _doors: number;


	constructor(color: string, metal: string, weight: number, finish: string, doors: number) {
		this._color = color;
		this._metal = metal;
		this._weight = weight;
		this._finish = finish;
		this._doors = doors;
	}

    /**
     * Getter color
     * @return {string}
     */
	public get color(): string {
		return this._color;
	}

    /**
     * Getter metal
     * @return {string}
     */
	public get metal(): string {
		return this._metal;
	}

    /**
     * Getter weight
     * @return {number}
     */
	public get weight(): number {
		return this._weight;
	}

    /**
     * Getter finish
     * @return {string}
     */
	public get finish(): string {
		return this._finish;
	}

    /**
     * Getter doors
     * @return {number}
     */
	public get doors(): number {
		return this._doors;
	}

    /**
     * Setter color
     * @param {string} value
     */
	public set color(value: string) {
		this._color = value;
	}

    /**
     * Setter metal
     * @param {string} value
     */
	public set metal(value: string) {
		this._metal = value;
	}

    /**
     * Setter weight
     * @param {number} value
     */
	public set weight(value: number) {
		this._weight = value;
	}

    /**
     * Setter finish
     * @param {string} value
     */
	public set finish(value: string) {
		this._finish = value;
	}

    /**
     * Setter doors
     * @param {number} value
     */
	public set doors(value: number) {
		this._doors = value;
	}
	
    
}