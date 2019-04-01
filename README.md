# Rest APIs

#### made with Express and Sequelize

>#### List of endpoint

| Route | HTTP | Headers | Body | Authentication | Authorize | Description |
| ----- | ---- | ------- | ---- | -------------- | --------- | ----------- |
| /api/register | __POST__ | none | username: string, password: string, role : string| __none__ | __none__ | Create a new user with default role customer |
| /api/login | __POST__ | none | username: string, password: string, role : string | __none__ | __none__ | endpoint login for user and return an access_token |
| /api/users | __POST__ | token | username: string, password: string, role : string | __Yes__ | __Admin__ | Create a new user with authorize role as __admin__ |
| /api/users | __GET__ | token | none | __Yes__ | __Admin__ | Find all users with authorize role as __admin__ |
| /api/users/:id | __GET__ | token | none | __Yes__ | __none__ | Find an user by Id and for __authenticate__ user |
| /api/users/:id | __PUT__ | token | none | __Yes__ | __none__ | Update data an user by Id and for __authenticate__ user |
| /api/users/:id | __DELETE__ | token | none | __Yes__ | __Admin__ | Delete an user by Id with authorize role as __admin__ |


#### Usage
Make sure you have Node.js and npm installed on your computer, then run these command.
````
$ npm install
````

_Don't forget to edit .env_template_
#### Environment Variabels
````
port = your port
secret = your secret key
admin_password = your admin password
````