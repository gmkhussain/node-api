# Create Database

```js
CREATE TABLE IF NOT EXISTS `users` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username varchar(255),
  email varchar(255) NOT NULL,
  phone varchar(255),
  status BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```



```js
INSERT INTO users(username,email,phone,status) 
VALUES 
('amoos','amoos@yopmail.com',001478,1)
```







## Project setup
```
npm install
```

### Run
```
node server.js
```



