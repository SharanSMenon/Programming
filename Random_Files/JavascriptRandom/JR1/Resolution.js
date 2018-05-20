export class Resolution {
  constructor (height, width) {
    this._height = height;
    this._width = width;
  }

  get width() {
      return this._width;
  }
  
  get height() {
      return this._height;
  }
}