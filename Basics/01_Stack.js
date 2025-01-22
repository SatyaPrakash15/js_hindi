// **********  Stack(Primitive DataType)  ***********
/*
A Stack is a data structure that is used for organizing the data. 
It is a linear data structure
The size of the stack memory is limited which is dependent on the OS.
In stack, the allocation and deallocation are automatically managed.
The access time in stack is faster.
*/

// **************   Heap (Non Primitive DataType)      ***********
/*
Heap is also a data structure or memory used to store the global variables. 
By default, all the global variables are stored in the heap memory. 
It allows dynamic memory allocation. 
It is hierarchical data structure
The size of the memory is not limited.
In heap, the memory is manually managed.
The access time in heap is slower.
*/


let myName = "Satya "

let anotherName = myName
    anotherName = "Satyam"
console.log(myName);   // Satya
console.log(anotherName);   // Satyam

