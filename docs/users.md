# User Endpoint

<p>Keterangan</p>
<p>Auth : setiap request dengan auth bernilai yes harus dilakukan oleh user/admin yang telah login </p>
<p>Role : setiap endpoint hanya bisa diakses oleh role tertentu </p>

### registrasi user

digunakan untuk registrasi user baru

| METHOD | ENDPOINT                   | AUTH | ROLE |
| ------ | -------------------------- | ---- | ---- |
| POST   | /api/v1/auth/user/register | no   | user |

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

| METHOD | ENDPOINT                | AUTH | ROLE |
| ------ | ----------------------- | ---- | ---- |
| POST   | /api/v1/auth/user/login | no   | user |

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

digunakan untuk logout user yang telah terdaftar

| METHOD | ENDPOINT                 | AUTH | ROLE |
| ------ | ------------------------ | ---- | ---- |
| GET    | /api/v1/auth/user/logout | yes  | user |

```js
{
  message:"logout successful",
}

```
