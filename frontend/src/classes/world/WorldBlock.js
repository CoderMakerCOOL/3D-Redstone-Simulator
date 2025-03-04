import BlockData from "../../data/BlockData.js";

export default class WorldBlock {
    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} id
     * @param {any} data
     */
    constructor(x, y, z, id) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.id = id;
        this.data = BlockData[id];
    }
}