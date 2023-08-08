# backend_revise

nodejs

### HOW IMPORT AND EXPORT

# Default Export::

```
const myName=()=>{
    return "Nitesh Yadav";
}
export default myName;

```

# NAMED EXPORT::

```
const MyDetails=()=>{
    name=()=>{};
    lastName=()=>{}
    return "Nitesh";
}
export {MyDetails}

or

export const {name,lastName}=MyDetails


```
