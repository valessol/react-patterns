principios solid

Los 9 patrones de Diseño en React

1. Custom Hooks
2. HOC
3. Extensible Styles (UI)

- La capacidad de un componente de estilo UI de extender sus estilos. Se basa en
  el open-close principle de SOLID, donde
- como ventaja, los componentes quedan abiertos a su extensión, y cerrados a su
  modificación (no hay necesidad de modificar el código interno del componente
  para extender sus estilos)

4. Compound COmponent o patrón de composición de componentes (UI). Implementar
   la UI de manera flexible (su estructura) siempre que estos componentes
   compartan un estado en común. La desventaja es que esta a tado al React
   Context. Basicamente es tener un componente que acepta childrens, que llama
   al context y se lo pasa a los childrens, sin necesidad de pasar el estado por
   props
5. Render props Utilizar una prop de un componente para indicarle cómo debe
   hacer el render. Es decir, para delegar la responsabilidad de renderizar el
   componente. Sirve para dejar abierto o flexible al componente de la lógica de
   renderización (wrapper). También se basa en el principio open-close de SOLID.
6. Control props En react, los formularios con componentes controlados por un
   estado, con inputs controlados por eventos y por el estado. Este patrón
   consiste en hacer que cualquier componente sea controlado por su propio
   estado, siempre que éste maneje un estado interno. En otras palabras, delegar
   la manipulación de su estado al componente padre. Si un componente padre
   quiere controlar el estado de su componente hijo, éste deberá tener sus
   propias variables de estado, y por lo tanto su lógica. Entonces, quitamos el
   control del componente hijo, debemos igual colocarlo en el padre.
7. Props getters Utilizar una función para compartir valores como props a otros
   componentes, extendiendo la lógica de esos valores a sus componentes hijos.
