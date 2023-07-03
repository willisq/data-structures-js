import LinkedList from '../LinkedList';

describe('LinkedList', () => {
    it('Should Create a linkedList without nodes', () => {
        const list = new LinkedList();
        const mockList = { head: null, tail: null };

        expect(list).toEqual(mockList);
        expect(list.tail).toBeNull();
        expect(list.head).toBeNull();
    }) 
    
    it('Should prepend a node', () => {
        const list = new LinkedList();
        list.prepend(1);

        expect(list.head.value).toBe(1);
        expect(list.head.next).toBeNull();
        expect(list.tail.value).toBe(1);
        expect(list.tail.next).toBeNull();
    });

    it('Should append a node', () => {
        const list = new LinkedList();
        list.append(1);

        expect(list.head.value).toBe(1);
        expect(list.tail.value).toBe(1);
        expect(list.head.next).toBeNull();
        expect(list.tail.next).toBeNull();
    });

    it('Should append multiple nodes', () => {
        const list = new LinkedList();
        list.append(2);
        list.append(3);
        list.prepend(1);

        expect(list.head.value).toBe(1);
        expect(list.head.next.value).toBe(2);
        expect(list.tail.value).toBe(3);
    });

    it('Should verify if an element exists on linkedList', () => {
        const list = new LinkedList();
        list.append(1);
        list.append(2);

        expect(list.contains(1)).toBeTruthy();
        expect(list.contains(2)).toBeTruthy();
        expect(list.contains(3)).toBeFalsy();
    });

    it('Should delete a node', () => {
        const list = new LinkedList();
        list.append(2);
        list.append(3);
        list.prepend(1);
        list.delete(1);

        expect(list.head.value).toBe(2);
        expect(list.head.next.value).toBe(3);
        expect(list.tail.value).toBe(3);
        expect(list.tail.next).toBeNull();
    });

    it('Should return an array of values', () => {
        const list = new LinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        const mockArray = [1, 2, 3];

        expect(list.toArray()).toEqual(mockArray);
        expect(list.toArray().length).toBe(3);
    });

    it('should returns nth node in the list', () => {
        const list = new LinkedList();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.getNthNode(1).value).toBe(2);
        expect(list.getNthNode(0).next.value).toBe(2);
        expect(list.getNthNode(2).next).toBeNull();
        expect(list.getNthNode(5)).toBeNull();
    });
});