import {Resolution} from './resolution'
export class Monitor{
    private $model: string;
    private $manufacturer: string;
    private $size: number;
    private $nativeResolution: Resolution;

	constructor($$model: string, $$manufacturer: string, $$size: number, $$nativeResolution: Resolution) {
		this.$model = $$model;
		this.$manufacturer = $$manufacturer;
		this.$size = $$size;
		this.$nativeResolution = $$nativeResolution;
	}
    

    /**
     * Getter model
     * @return {string}
     */
	public get model(): string {
		return this.$model;
    }

    /**
     * Getter manufacturer
     * @return {string}
     */
	public get manufacturer(): string {
		return this.$manufacturer;
	}

    /**
     * Getter nativeResolution
     * @return {Resolution}
     */
	public get nativeResolution(): Resolution {
		return this.$nativeResolution;
	}

    /**
     * Getter size
     * @return {number}
     */
	public get size(): number {
		return this.$size;
	}
    
    
}