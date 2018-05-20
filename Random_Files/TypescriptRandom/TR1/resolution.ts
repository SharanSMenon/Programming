export class Resolution{
    private $height: number;
    private $width: number;

	constructor($$height: number, $$width: number) {
		this.$height = $$height;
		this.$width = $$width;
    }

    /**
     * Getter height
     * @return {number}
     */
	public get height(): number {
		return this.$height;
	}    

    /**
     * Getter width
     * @return {number}
     */
	public get width(): number {
		return this.$width;
	}
    
}