# Lista Enlazada

Una lista enlazada es una coleccion de elementos llamados nodos. cada nodo se compone en su forma mas sencilla de datos y una referencia al siguiente nodo de la lista.

![Lista enlazada](../../assets/lista-enlazada-simple.svg)

Las listas enlazadas poseen dos elementos principales que las caracterizan: la cabeza y la cola los cuales son el primer y ultimo elemento de la lista, respectivamente.

En las listas de acuerdo a quién apunte su cabeza y cola y al tipo de nodo que implementa (cuántos
punteros tiene) se dividen en cuatro grandes tipos:

- Listas enlazadas (simplemente enlazadas)
- Listas doblemente enlazadas
- Listas circulares (simplemente circulares)
- Listas doblemente circulares

En el caso de las listas simplemente enlazadas la cabeza solo referencia al siguiente elemento que compone la lista, mientras que la cola referencia al valor `null`

![Partes de la lista simplemente enlazada](../../assets/partes-lista-simplemente-enlazada.png)

## Insertar un nuevo elemento en la lista

### Agregar un nuevo elemento al final de la lista

Para este caso es necesario tomar en cuenta dos posibles escenarios: 

1. La lista esta vacia, por lo que el nodo que se inserta ahora es la cabeza y la cola de la lista.
2. La lista no esta vacia, por lo que se puede insertar el nuevo nodo al final de la lista, actualizando las referencias de la cola.
```
Add(value)
  Pre: values is the value to add to the tail of the list
  Post: value has been placed at the tail of the list
  n ← node(value)
  if head = ø
    head ← n
    tail ← n 
  else 
    tail.next ← n
    tail ← n
  end if
end Add
```
### Agregar un nuevo elemento al inicio de la lista
En este caso se deben considerar dos escenarios
1. La lista esta vacio, por lo que el nodo que se inserta es la cabeza y la cola de la lista.
2. La lista no esta vacia, por lo que se puede insertar el nuevo nodo al inicio de la lista, actualizando la referencia de la cabeza.
```
Prepend(value)
  Pre: value is the value to add to the list
  Post: value has been placed at the head of the list
  n ← node(value)
  n.next ← head
  head ← n
  if tail = ø
    tail ← n
  end if
end Prepend
```
### Verificar que un elemento se encuentra en la lista
```
Contains(head, value)
  Pre:  head is the head node in the list
        value is the value to search for
  Post: the item is either in the linked list, true, otherwise false
  n ← head
  while n != ø and n.value != value
    n ← n.next
  end while
  if n = ø
    return false
  end if
  return true
end Contains
```
### Borrar un nodo de la lista
Para borrar un elemento de la lista enlazada, es necesario considerar los siguientes escenarios:
1. La lista esta vacia
2. El nodo a eliminar es el unico elemento en la lista
3. El nodo es la cabeza de la lista
4. El nodo es la cola de la lista
5. El nodo a eliminar se encuentra entre la cabeza y la cola
6. El elemento no existe en la lista enlazada
```
Remove(head, value)
  Pre:  head is the head node of the list
        value is the value to remove from the list
  Post: the value is removed from the list, true, otherwise false
  if head = ø
    return false
  end if
  n ← head
  if n.value = value
    if head = tail
      head ← ø
      tail ← ø
    else 
      head ← head.next
    end if
    return true
  end if
  while n.next != ø and n.next.value != value
    n ← n.next
  end while
  if n.next != ø
    if n.next = tail
      tail ← n
      tail.next ← null
    else 
      n.next ← n.next.next
    end if
    return true
  end if
  return false
end Remove
```
### Recorrer la lista
```
Traverse(head)
  Pre: head is the head node in the list
  Post: the items in the list have been traversed
  n ← head
  while n != ø
    yield n.value
    n ← n.next
  end while
end Traverse
```
### Recorrer la lista en sentido inverso 
```
ReverseTraversal(head, tail)
  Pre: head is the head node in the list
       tail is the tail node in the list
  Post the items in the list have been traversed in reverse order
  if tail != ø
    curr ← tail 
    while curr != head 
      prev ← head
      while prev.next != curr
        prev ← prev.next
      end while
      yield curr.value
    end while
    yield curr.value
  end if
end ReverseTraversal
```
