/**
 * Virus
 */
class Virus extends Enemy {

    public id: number;
    public hitbox: Rectangle;
    public hitboxPosition: Vector;

    constructor(id: number, pos: Vector) {
        super(pos);
        this.id = id;
        this.div = document.createElement("virus");
        this.div.setAttribute("id", "virus" + this.id);
        document.getElementById("background").appendChild(this.div);

        this.position = this.randomPosition();
        this.div.style.transform = "translate(" + this.position.x + "px, " + this.position.y + "px)";
    }

}