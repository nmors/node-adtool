# node-adtool

Node utility for modifying Active Directory



## Usage

### Requiring

```js
const admod = require('node-admod'); 
```


### Configuring

```js
admod.config = {
  "username" : "",
  "password" : ""
}; 
```


### Creating Accounts

```js
admod.createUser(username, path)
```

### Set Password

```js
admod.setPassword(username, password)
```


### Unlock a user account

```js
admod.unlockUser(username)
```


### Add a user to a group

```js
admod.addUserToGroup(username, group)
```


### Set an attribute to a user

```js
admod.setAttribute(username, attribute, value)
```


### Search for a user

```js
admod.searchObjects(path)
```


### Create an OU

```js
admod.createOU(ou, path)
```



### Credits


As this is a wrapper utility for `adtool`, credits goto Mike Dawson ( mike _at_ no spam gp2x.org )

His tool can be found at https://gp2x.org/adtool/




### Contributing

1. Create Pull Request
2. Thanks!


