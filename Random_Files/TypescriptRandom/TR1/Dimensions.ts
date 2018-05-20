export class Dimensions{
    private _width: number;
    private _height: number;
    private _depth: number;
    

	constructor(width: number, height: number, depth: number) {
		this._width = width;
		this._height = height;
		this._depth = depth;
	}

    /**
     * Getter width
     * @return {number}
     */
	public get width(): number {
		return this._width;
	}

    /**
     * Getter height
     * @return {number}
     */
	public get height(): number {
		return this._height;
	}

    /**
     * Getter depth
     * @return {number}
     */
	public get depth(): number {
		return this._depth;
	}
    
}