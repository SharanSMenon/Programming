class Annotation{
    constructor(lx, ly, lx2, ly2, text, parent) {
        this.lx = lx;
        this.ly = ly;
        this.lx2 = lx2;
        this.ly2 = ly2;
        this.text = text;
        this.parent = parent;
        this.createLineAndText();
    }
    createLineAndText(){
        var viz = this;
        viz.svg = d3.select(this.parent);
    }
}