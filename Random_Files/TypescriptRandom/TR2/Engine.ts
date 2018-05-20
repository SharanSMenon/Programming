export class Engine {
  private _model: string;
  private _manufacturer: string;
  private _type: string;
  private _cylinders: number;
  private _horsepower: number;

  constructor(
    model: string,
    manufacturer: string,
    type: string,
    cylinders: number,
    horsepower: number
  ) {
    this._model = model;
    this._manufacturer = manufacturer;
    this._type = type;
    this._cylinders = cylinders;
    this._horsepower = horsepower;
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
   * Getter type
   * @return {string}
   */
  public get type(): string {
    return this._type;
  }

  /**
   * Getter cylinders
   * @return {number}
   */
  public get cylinders(): number {
    return this._cylinders;
  }

  /**
   * Getter horsepower
   * @return {number}
   */
  public get horsepower(): number {
    return this._horsepower;
  }

  /**
   * Setter model
   * @param {string} value
   */
  public set model(value: string) {
    this._model = value;
  }

  /**
   * Setter manufacturer
   * @param {string} value
   */
  public set manufacturer(value: string) {
    this._manufacturer = value;
  }

  /**
   * Setter type
   * @param {string} value
   */
  public set type(value: string) {
    this._type = value;
  }

  /**
   * Setter cylinders
   * @param {number} value
   */
  public set cylinders(value: number) {
    this._cylinders = value;
  }

  /**
   * Setter horsepower
   * @param {number} value
   */
  public set horsepower(value: number) {
    this._horsepower = value;
  }

  /**
   * start
   */
  public start(): void {
    console.log("Starting car.");
  }
  /**
   * stop
   */
  public stop(): void {
      console.log("Car stopped");
      
  }
}
