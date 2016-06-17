# node-adtool

Node utility for modifying Active Directory



## Usage

### Requiring

```js
const adtool = require('node-adtool')
```


### Configuring

```js
adtool.config = {
  "username" : "",
  "password" : ""
}
```


### Creating Accounts

```js
adtool.createUser(username, path)
```

### Set Password

```js
adtool.setPassword(username, password)
```


### Unlock a user account

```js
adtool.unlockUser(username)
```


### Add a user to a group

```js
adtool.addUserToGroup(username, group)
```


### Set an attribute to a user

```js
adtool.setAttrib(username, attribute, value)
```


### Search for a user

```js
adtool.searchObjects(path)
```


### Create an OU

```js
adtool.createOU(ou, path)
```



### Credits


As this is a wrapper utility for `adtool`, credits goto Mike Dawson ( mike _at_ no spam gp2x.org )

His tool can be found at https://gp2x.org/adtool/




### Contributing

1. Create Pull Request
2. Thanks!


