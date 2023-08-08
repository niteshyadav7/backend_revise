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
      OR
export const {name,lastName}=MyDetails

```

### HOW TO TAKE INPUT::

```
let args=process.argv;
args.slice(2);
        OR
const args=process.argv.slice(2);
```
