install all the dependencies
 and 
 
 ``` 
npx create-next-app@latest

``` 

short key for creating a next app page is 

```
rafce 
```


In next js whenever we link another page we use the Link tag from next js

```
import Link from 'next/link'
<link href="/about">About</link>
```
instead of using `<a href>` tag we use `<Link>` tag

the files which are in the src folders are considered as server side rendered files so they cannot do some functions like click events and other things. 

if we want to over come that we need add the 
```
'use client'

```

in the top of the file 

<br>

this will make the entire file tuen into client side rendered file

<br> Orrrrrrrrrrrrrrrrrrrrr

<br> 

we can make another component for the button and then import it in the file, it will reduce client side rendering and make the file more readable

<br>

--- 


# Next js -  Fetching Data

In next js we can fetch data from the api using the 'fetch' function

```
const res = await fetch('https://jsonplaceholder.typicode.com/users') 

const data = await res.json()

```

in here we have to declare the data as what type of data we are fetching from the api using interface

```
interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

```

then we can use the data as 

```
const data: User[] = await res.json()
``` 

So now the data will become an array of objects



---

## caching the data

whenever the data is fetched it will stored in the cache memory so that the data will not be fetched again and again in next js

But if we want to fetch the data again and again it is not recommended to use the cache memory

so that we use 

```
const res = await fetch('https://jsonplaceholder.typicode.com/users' , {
    cache: 'no-cache'
}) 
```

<br>

if we wanted to fetch it for every 10s we can use the 

```
const res = await fetch('https://jsonplaceholder.typicode.com/users' , {
    next : {
        revaildate: 10
    }
}) 
```



## static and dynamic rendering 

In next js we can render the data in two ways 
1. Static rendering 

in here it will rendered when the app is built and it will not change when the app is running

2. Dynamic rendering
   
in here the data will be rendered when the app is running and it will change when the app is running 

this will happen when we use `cache: 'no-cache' ` in the fetch function