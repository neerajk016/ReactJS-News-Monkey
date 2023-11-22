// Till now, we have created our Textutils application by using Function-based components, and now we would begin learning about the Class-based components by creating a NewsMonkey application. So let’s create our News app and continue our journey of React



// Class-based component:
// Class components are basically ES7 Classes. A class Component can also receive props as Input and return HTML. A class component can also maintain some information that is private to that component and can use that information to describe the user interface.





// Creating class component:
// Now, whenever you create a class component, we need to include two imports that are the React and the Component class from React like this:

// import React, { Component } from 'react'
// After this, you have to just define a class. Remember that for a class to become a react component. There are two simple steps. The first step is that it should extend the component class from React. Secondly, The class has to implement a render method that will return null or some HTML. Code:

// export default class App extends Component {
    // c=john;
//     render() {
//         return (
//             <div>
                    // hello {this.c}
        //     </div>
//         )
//     }
// }


// Hence, we have successfully created our class component! 


// In app.js:

// Now to generate the class-based component skeleton, you can simply use the ‘rcc’ snippet. This feature occurs as we have installed the above extension. We can render the content and components in our application by writing some JSX.



// In the upcoming videos, we will be creating our NewsApp application by using the News API and would be learning some new concepts of React. 