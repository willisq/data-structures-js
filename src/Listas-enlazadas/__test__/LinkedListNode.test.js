import LinkedListNode from "../LinkedListNode";

describe('LinkedListNode', () => {
    it('should create list node with value', () => {
        const node = new LinkedListNode(1);

        expect(node.value).toBe(1);
        expect(node.next).toBeNull();
    });

    it('should creaste a list node with an object value', () => {
        const value = { value: 1, key: "test" };
        const node = new LinkedListNode(value);

        expect(node.value).toEqual({ value: 1, key: "test" })
        expect(node.value.value).toBe(1);
        expect(node.value.key).toBe("test");
        expect(node.next).toBeNull();
    });

    it('should link two nodes together', () => {
        const node1 = new LinkedListNode(1);
        const node2 = new LinkedListNode(2, node1);

        expect(node2.next).toBeDefined();
        expect(node1.next).toBeNull();
        expect(node2.value).toBe(2);
        expect(node2.next.value).toBe(1);
    });
})

