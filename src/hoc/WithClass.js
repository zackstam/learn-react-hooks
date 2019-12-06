import React from 'react';
 
// functional component
// const withClass = (props) => {
//     return (
//         <div className={props.classes}>
//             {props.children}
//        </div>
//     );
// }

// javascript function
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>  
       </div>
    );
}
 
export default withClass;