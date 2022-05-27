## <p>Keterangan</p>

<p>Auth : setiap request dengan auth bernilai yes harus dilakukan oleh user/admin yang telah login </p>
<p>Role : setiap endpoint hanya bisa diakses oleh role tertentu </p>

### 1 tambah data objek wisata

digunakan untuk menambahkan data objek wisata baru oleh user

| METHOD | ENDPOINT       | AUTH | ROLE           |
| ------ | -------------- | ---- | -------------- |
| POST   | /api/v1/wisata | yes  | user dan admin |

| BODY        |
| ----------- |
| id          |
| name        |
| user_id     |
| address     |
| description |
| city        |
| thumbnail   |
| picture_1   |
| picture_2   |
| picture_3   |
| categories  |

#### response yang diterima setelah request dikirim

```js
{

  id:1,
  name:"Wisata Pantai Ancol",
  user_id:1,
  address:"Pademangan, Jakarta Utara",
  description:"Destinasi di tepi laut Ancol memiliki pantai yang populer untuk olahraga air dan kompleks di tepi laut",
  city:"Jakarta",
  thumbail:"/img/thumnail/ancol.jpg",
  picture_1:"/img/thumnail/ancol1.jpg",
  picture_2:"/img/thumnail/ancol2.jpg",
  picture_3:"/img/thumnail/ancol3.jpg",
  categories:["pantai","taman"]
}
```

### 2 ambil semua data objek wisata

digunakan untuk mengambil semua data objek wisata

| METHOD | ENDPOINT       | AUTH | ROLE |
| ------ | -------------- | ---- | ---- |
| GET    | /api/v1/wisata | no   | all  |

#### response yang diterima setelah request dikirim

```js
{
  data: [
    {
      name: 'Ancol',
      thumbnail: '/img/thumnail/ancol.jpg',
      city: 'Jakarta',
      categories: ['pantai', 'taman'],
      user_id: 1,
    },
    {
      name: 'Ancol',
      thumbnail: '/img/thumnail/ancol.jpg',
      city: 'Jakarta',
      categories: ['pantai', 'taman'],
      user_id: 1,
    },
  ];
  message: 'success get all data';
}
```

### 3 ambil detail data objek wisata berdasarkan id

digunakan untuk mengambil semua data objek wisata

| METHOD | ENDPOINT            | AUTH | ROLE |
| ------ | ------------------- | ---- | ---- |
| GET    | /api/v1/wisata/{id} | no   | all  |

#### response yang diterima setelah request dikirim

```js
{
  data: {
        id:1,
        name:"Wisata Pantai Ancol",
        user_id:1,
        address:"Pademangan, Jakarta Utara",
        description:"Destinasi di tepi laut Ancol memiliki pantai yang populer untuk olahraga air dan kompleks di tepi laut",
        city:"Jakarta",
        thumbail:"/img/thumnail/ancol.jpg",
        picture_1:"/img/thumnail/ancol1.jpg",
        picture_2:"/img/thumnail/ancol2.jpg",
        picture_3:"/img/thumnail/ancol3.jpg",
        categories:["pantai","taman"]
  },
  message: 'success get all data';
}
```

### 4 ambil semua data objek wisata berdasarkan user tertentu

digunakan untuk mengambil semua data objek wisata berdasarkan user id

| METHOD | ENDPOINT                   | AUTH | ROLE |
| ------ | -------------------------- | ---- | ---- |
| GET    | /api/v1/wisata?userid={id} | no   | all  |

#### response yang diterima setelah request dikirim

```js
{
  data: [
    {
      name: 'Ancol',
      thumbnail: '/img/thumnail/ancol.jpg',
      city: 'Jakarta',
      categories: ['pantai', 'taman'],
      user_id: 1,
    },
    {
      name: 'Ancol',
      thumbnail: '/img/thumnail/ancol.jpg',
      city: 'Jakarta',
      categories: ['pantai', 'taman'],
      user_id: 1,
    },
  ];
  message: 'success get all data';
}
```

### 5 hapus data objek wisata

digunakan untuk menghapus data objek wisata

| METHOD | ENDPOINT            | AUTH | ROLE           |
| ------ | ------------------- | ---- | -------------- |
| DELETE | /api/v1/wisata/{id} | yes  | user dan admin |

#### response yang diterima setelah request dikirim

```js
{
  message: 'success delete data with id 1';
}
```

### 6 ubah data objek wisata berdasarkan id

digunakan untuk mengubah data objek wisata berdasarkan id data tersebut

| METHOD | ENDPOINT       | AUTH | ROLE           |
| ------ | -------------- | ---- | -------------- |
| UPDATE | /api/v1/wisata | yes  | user dan admin |

| BODY        |
| ----------- |
| id          |
| name        |
| user_id     |
| address     |
| description |
| city        |
| thumbnail   |
| picture_1   |
| picture_2   |
| picture_3   |
| categories  |

#### response yang diterima setelah request dikirim

```js
{

  id:1,
  name:"Wisata Pantai Ancol",
  user_id:1,
  address:"Pademangan, Jakarta Utara",
  description:"Destinasi di tepi laut Ancol memiliki pantai yang populer untuk olahraga air dan kompleks di tepi laut",
  city:"Jakarta",
  thumbail:"/img/thumnail/ancol.jpg",
  picture_1:"/img/thumnail/ancol1.jpg",
  picture_2:"/img/thumnail/ancol2.jpg",
  picture_3:"/img/thumnail/ancol3.jpg",
  categories:["pantai","taman"]
}
```
