# User Endpoint

### registrasi user

digunakan untuk registrasi user baru

| METHOD | ENDPOINT                   | AUTH |
| ------ | -------------------------- | ---- |
| POST   | /api/v1/auth/user/register | no   |

| BODY     |
| -------- |
| username |
| name     |
| address  |
| email    |
| password |

```js
{

  id:1,
  username:"hendysetiawan",
  name:"Hendy Setiawan",
  address:"Ngawi",
  email:"hendy@gmail.com",
  desc:"user registration is successful"

}

```

### login user

digunakan untuk login user yang telah terdaftar

| METHOD | ENDPOINT                | AUTH |
| ------ | ----------------------- | ---- |
| POST   | /api/v1/auth/user/login | no   |

| BODY     |
| -------- |
| email    |
| password |

```js
{

  id:1,
  username:"Hendy Setiawan",
  email:"hendy@gmail.com",
  token:"vjwegrngknergknelrngklerlgnergklerklkle"

}

```

### logout user

digunakan untuk login user yang telah terdaftar

| METHOD | ENDPOINT                | AUTH |
| ------ | ----------------------- | ---- |
| GET   | /api/v1/auth/user/logout | yes  |

```js
{
  message:"logout successful",
}

```
