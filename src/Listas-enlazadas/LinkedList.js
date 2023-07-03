import LinkedListNode from "./LinkedListNode.js";
/**
 * @class LinkedList
 * Crea una instacia de la clase LinkedList
 * @property {LinkedListNode} head - Referencia a la cabeza de la lista
 * @property {LinkedListNode} tail - Referencia a la cola de la lista
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
  prepend(value) {
    const node = new LinkedListNode(value);
    node.next = this.head;
    this.head = node;
    if (this.tail === null) {
      this.tail = node;
    }
    return this;
  }

  /**
   * Verifica si alguno de los nodos posee el valor ingresado como parametro
   * @param {boolean} value - Valor del nodo a buscar en la lista enlazada
   * @returns 
   */
  contains(value) {
    let node = this.head;
    while (node && node.value !== value) {
      node = node.next;
    }
    if (!node) return false;
    return true;
  }

  /**
   * Elimina el primer nodo cuyo valor coincida con el pasado en el parametro
   * @param {any} value 
   * @returns {boolean} - True si encuentra y elimina el nodo, falso en caso contrario
   */
  delete(value) {
    if (!this.head) return false;
    let node = this.head;
    if (node.value === value) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        return true;
      }
    }
    while (node.next && node.next.value !== value) {
      node = node.next;
    }
    if (!node.next) {
      if (node.next === this.tail) {
        this.tail = node;
        this.tail.next = null;
      } else {
        node.next = node.next.next;
      }
      return true;
    }
    return false;
  }

  /**
   * Recorre la lista ejecutando la funcion callback pasada como parametro
   * @param {function} callback 
   * @returns {LinkedList}
   */
  traverse(callback) {
    let node = this.head;
    while (node) {
      callback(node);
      node = node.next;
    }
    return this;
  }

  /**
   * Devuelve un arreglo cuyas entradas son los valores de cada nodo de la lista
   * @returns {any[]}
   */
  toArray() {
    const arr = [];
    this.traverse(node => {
      arr.push(node.value);
    })
    return arr;
  }

  /**
   * Devuelve el n-simo nodo de la lista
   * @param {number} nodeNumber posición indicial del nodo en la lista
   * @returns {LinkedListNode}
   */
  getNthNode(nodeNumber) {
    let node = this.head;
    let i = 0;
    while (node) {
      if (i === nodeNumber) break;
      i++;
      node = node.next;
    }
    return node;
  }

  /**
   * Devuelve la cantidad de nodos en la lista
   * @type {number}
   */
  get size() {
    return this.toArray().length;
  }
}
