export class Motherboard {
    private $model: string;
    private $id: string;
    private $RAMSlots: number;
    private $manufacturer: string;
    private $bios: string;
    private $cardSlots: number;

	constructor($$model: string, $$id: string, $$RAMSlots: number, $$manufacturer: string, $$bios: string, $$cardSlots: number) {
		this.$model = $$model;
		this.$id = $$id;
		this.$RAMSlots = $$RAMSlots;
		this.$manufacturer = $$manufacturer;
		this.$bios = $$bios;
		this.$cardSlots = $$cardSlots;
    }

    /**
     * Getter model
     * @return {string}
     */
	public get model(): string {
		return this.$model;
    }

    /**
     * Getter ID
     * @return {string}
     */
	public get id(): string {
		return this.$id;
    }

    /**
     * Getter RAMSlots
     * @return {number}
     */
	public get RAMSlots(): number {
        return this.$RAMSlots;
    }

    /**
     * Getter manufacturer
     * @return {string}
     */
	public get manufacturer(): string {
		return this.$manufacturer;
    }

    /**
     * Getter bios
     * @return {string}
     */
	public get bios(): string {
		return this.$bios;
	}

    /**
     * Getter cardSlots
     * @return {number}
     */
	public get cardSlots(): number {
		return this.$cardSlots;
	}
    
}