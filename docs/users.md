# User Endpoint

<p>Keterangan</p>
<p>Auth : setiap request dengan auth bernilai yes harus dilakukan oleh user/admin yang telah login </p>
<p>Role : setiap endpoint hanya bisa diakses oleh role tertentu </p>

### 1 registrasi user

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

### 2 login user

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

### 3 logout user

digunakan untuk logout user yang telah terdaftar

| METHOD | ENDPOINT                 | AUTH | ROLE |
| ------ | ------------------------ | ---- | ---- |
| GET    | /api/v1/auth/user/logout | yes  | user |

```js
{
  message:"logout successful",
}

```

### 4 Hapus user tertentu

digunakan untuk menghapus data user berdasarkan id
operasi ini dilakukan oleh admin

| method | endpoint          | auth | role  |
| ------ | ----------------- | ---- | ----- |
| DELETE | /api/v1/user/{id} | Y    | admin |

- response json

```js
{
message:"success",
data:{
  id:1,
  name:"Ucup",
  email:"ucup.com",
  address:"Ngawi"
  }
}~
```

### 5 ambil semua data user

digunakan untuk mengambil semua data user
data akan digunakan oleh admin

| method | endpoint      | auth | role  |
| ------ | ------------- | ---- | ----- |
| GET    | /api/v1/users | Yes  | admin |

- response json

```js
{
message:"success",
data:[
    {
    id:1,
    username:"hendysetiawan",
    name:"Hendy Setiawan",
    address:"Ngawi",
    email:"hendy@gmail.com",
  },
  {
    id:,
    username:"ucupsetiawan",
    name:"Ucup Setiawan",
    address:"Ngawi",
    email:"hendy@gmail.com",
  }
]
```

### 6 ambil data user aktif

digunakan untuk mengambil data user yang sedang login

| method | endpoint     | auth | role |
| ------ | ------------ | ---- | ---- |
| GET    | /api/v1/user | Yes  | user |

- response json

```js
{
message:"success",
data:{
  id:1,
  username:"hendysetiawan",
  name:"Hendy Setiawan",
  address:"Ngawi",
  email:"hendy@gmail.com",
}
```
