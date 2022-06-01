### 1 Login Admin

- digunakan untuk login admin

| method | endpoint                 | auth |
| ------ | ------------------------ | ---- |
| POST   | /api/v1/auth/admin/login | N    |

- value yang dikirimkan pada body

| name     |
| -------- |
| username |
| password |

- response json

```js
{
message:"success login",
data:{
  id:1,
  username:"Ucup",
  email:"ucup.com",
  number_phone:"08223456789",
  token:"vjwegrngknergknelrngklerlgnergklerklkle"
}

}
```

### 2 Tambah Data Admin

- digunakan untuk menambah admin baru

| method | endpoint       | auth | access role |
| ------ | -------------- | ---- | ----------- |
| POST   | /api/v1/admin/ | Y    | admin       |

- value yang dikirimkan pada body

| name         |
| ------------ |
| username     |
| email        |
| no_handphone |
| password     |

- response json

```js
{
message:"success",
data:{
  id:1,
  name:"Ucup",
  email:"ucup.com",
  number_phone:"08223456789",
}

}
```

### 3 Hapus Data Admin

- digunakan untuk menghapus data admin

| method | endpoint           | auth | access role |
| ------ | ------------------ | ---- | ----------- |
| DELETE | /api/v1/admin/{id} | Y    | admin       |

- response json

```js
{
message:"success",
data:{
  id:1,
  name:"Ucup",
  email:"ucup.com",
  number_phone:"08223456789",
}

}
```

### 4 Ubah Data Admin

- digunakan untuk mengubah data admin

| method | endpoint           | auth | access role |
| ------ | ------------------ | ---- | ----------- |
| PUT    | /api/v1/admin/{id} | Y    | admin       |

- value yang dikirimkan pada body

| name         |
| ------------ |
| username     |
| email        |
| no_handphone |

- response json

```js
{
message:"success",
data:{
  id:1,
  name:"Ucup baru",
  email:"ucupbaru.com",
  number_phone:"08223456789",
}

}
```

### 5 Ambil Data Admin yang Sedang Aktif

- digunakan untuk mengambil data admin

| method | endpoint       | auth | access role |
| ------ | -------------- | ---- | ----------- |
| GET    | /api/v1/admin/ | Y    | admin       |

- response json

```js
{
message:"success",
data:{
  id:1,
  name:"Ucup baru",
  email:"ucupbaru.com",
  number_phone:"08223456789",
}

}
```

### 6 Ambil Semua Data Admin

- digunakan untuk mengambil data admin

| method | endpoint        | auth | access role |
| ------ | --------------- | ---- | ----------- |
| GET    | /api/v1/admins/ | Y    | admin       |

- response json

```js
{
message:"success",
data:[
    {
    id:1,
    name:"Ucup",
    email:"ucup.com",
    number_phone:"08223456789",
    },
    {
    id:2,
    name:"Ucup baru",
    email:"ucupbaru.com",
    number_phone:"08223456789",
    },
]

}
```
