## Section 6: More on Functions

- Parameters are these variables which you specify between parentheses when defining a function.
- Arguments then are the concrete values you pass to a function when calling that function:
- Funtion inside an object is referred as method.
- Functions are objects.
- Functions can be assigned to the variable or constants.
- Function declarations are hoisted at the top and can be used anywhere.
- Function expression are hoisted at the top but not initialized. Can't be decalared after its use.

    ##### Different Arrow Function Syntaxes
    1. Default syntax:
        ```
            const add = (a, b) => {
            const result = a + b;
            return result; 
            };
        ```
    2. Shorter parameter syntax, if exactly one parameter is received:
    ```
    const log = message => {
        console.log(message); 
        };
    ```
    3. Empty parameter parentheses if NO arguments are received:
    ```
        const greet = () => {
        console.log('Hi there!');
        };
    ```
    4. Shorter function body, if exactly one expression is used:
    ```
        const add = (a, b) => a + b;
    ```
    5. Function returns an object (with shortened syntax as shown in 4)):
    ```
        const loadPerson = pName => ({name: pName });
    ```