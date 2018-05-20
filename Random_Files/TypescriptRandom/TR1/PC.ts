import { Case } from './Case';
import { Monitor } from "./Monitor";
import { Motherboard } from "./Motherboard";
export class PC{
    private _theCase: Case;
    private _monitor: Monitor;
    private _motherboard: Motherboard;

	constructor(theCase: Case, monitor: Monitor, motherboard: Motherboard) {
		this._theCase = theCase;
		this._monitor = monitor;
		this._motherboard = motherboard;
	}

    /**
     * Getter theCase
     * @return {Case}
     */
	public get theCase(): Case {
		return this._theCase;
	}

    /**
     * Getter monitor
     * @return {Monitor}
     */
	public get monitor(): Monitor {
		return this._monitor;
	}

    /**
     * Getter motherboard
     * @return {Motherboard}
     */
	public get motherboard(): Motherboard {
		return this._motherboard;
	}
    
}