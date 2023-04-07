import LinkedListNode from "./LinkedListNode.js";
/**
 * Crear una instacia de la clase LinkedList
 * 
 */
export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    
  }

  /**
   * Agrega un nuevo nodo al final de la lista
   * @param {any} value - Valor del nodo
   * @returns {LinkedList} 
   */
  append(value) {
    const node = new LinkedListNode(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return this;
    }
    this.tail.next = node;
    this.tail = node;
    return this;
  }

  /**
   * Agrega un nuevo nodo al inicio de la lista
   * @param {any} value - Valor del nodo
   * @return {LinkedList}
   */
  prepend(value){
    const node = new LinkedListNode(value);
    node.next = this.head;
    this.head = node;
    if(this.tail === null){
      this.tail = node;
    }
    return this;
  }
}
