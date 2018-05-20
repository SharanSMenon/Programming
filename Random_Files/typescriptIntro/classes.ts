export class EngineCar{
    private $id: string;
    private $model: string;
    private $type: string = "V8"

	constructor($id: string, $model: string) {
		this.$id = $id;
		this.$model = $model;
    }

	public get id(): string {
		return this.$id;
    }

	public get type(): string  {
		return this.$type;
    }

	public get model(): string {
		return this.$model;
	}
    
}
export class SuperCar {
    private $engineCar: EngineCar;
    private $gears: number;
    private $maxSpeed: number;
    private $model: string;
    private $speed: number = 0;
    constructor(maxSpeed:number, engineCar:EngineCar, model: string) {
        this.$engineCar = engineCar;
        this.$maxSpeed = maxSpeed || 169;
        this.$model = model;
    }
    
    public get engine() : EngineCar {
        return this.$engineCar;
    }

    static numberOfWheels(): number {
        return 4;
    }

    public accelerate(speed:number):void {
        this.$speed+= speed;
        
    }

    public throttle(speed:number):void {
        this.$speed-= speed;        
    }
    
    public get speed() : number {
        return this.$speed;
    }
    
}
// console.log