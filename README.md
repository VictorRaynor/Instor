# FULL Stack Application based on MERN - Furniture Organizer

The Furniture Organizer App is a full-stack web application based on the MERN (MongoDB, Express, React, Node.js) stack. The primary goal of this project is to provide users with a convenient tool to organize their furniture pieces within their homes or apartments according to size categories - small, medium, and large.

## Features

- **User-friendly Interface:** The app offers an intuitive and user-friendly interface, making it easy for users to navigate and manage their furniture items effortlessly.

- **Organize by Size:** Users can categorize their furniture items into three size categories: small, medium, and large. This helps them visualize and plan their space more effectively.

- **Add and Edit Furniture:** The app allows users to add new furniture items to their inventory. Additionally, users can edit existing furniture entries to update their details as needed.

- **MongoDB Database:** The app utilizes MongoDB to store furniture data, enabling efficient data retrieval and storage.

- **Express Backend:** The backend is built using Express, which ensures smooth communication between the frontend and the database.

- **React Frontend:** The frontend is developed using React, offering a dynamic and interactive user experience.

- **Authentication with hashing:** Finally the authentication mechanism is implemented. Password is stored in the database using the provided hashing function

## Demo

https://instor.alpaycelik.dev

## Run Locally

Clone the project

```bash
  git clone https://github.com/AlpayC/Furniture_MERN
```

Go to the project directory and start the server incl. frontend

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node server.js
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the specific directory

./backend

`CLOUDINARY_CLOUDNAME`

`CLOUDINARY_API_KEY`

`CLOUDINARY_API_SECRET`

`MONGO_URI`

`TOKEN_SECRET`

`MAILGUN_API_KEY`

`RENDER_EXTERNAL_URL`

`APP_NAME`

`MAILGUN_DOMAIN`

./frontend

`VITE_BACKEND_URL`

## API Reference

#### Get all items

```http
  GET /api/furniture
```

#### Get all items of a category

```http
  GET /api/furniture?size=${sizename}
```

| Parameter | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| `size`    | `string` | **Required**. value="klein" or "mittel" or "gross" |

#### Get item with id

```http
  GET /api/furniture/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Post new item

```http
  POST /api/addFurniture/
```

| Form body     | Type     | Description                              |
| :------------ | :------- | :--------------------------------------- |
| `title`       | `string` | **Required**. title of new item          |
| `room`        | `string` | **Required**. room size of new item      |
| `size`        | `string` | **Required**. furniture size of new item |
| `image`       | `file`   | **Required**. jpg/png file of new item   |
| `description` | `string` | **Required**. description of new item    |

#### Update item by id

```http
  PUT /api/updateFurniture/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

| Input field   | Type     | Description                |
| :------------ | :------- | :------------------------- |
| `title`       | `string` | title of new item          |
| `room`        | `string` | room size of new item      |
| `size`        | `string` | furniture size of new item |
| `image`       | `file`   | jpg/png file of new item   |
| `description` | `string` | description of new item    |

#### Delete item by id

```http
  DELETE /api/deleteFurniture/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Authors

- [@AlpayC](https://www.github.com/AlpayC)
- [@BorisD2023](https://github.com/BorisD2023)

## Roadmap

- Additional query support

- Add login / register functionality
