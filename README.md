# VOTING APP - BACKEND TF

This project has all logic  and provide an endpoint to to share different candidates. Also, you can generate random candidates typing a command (see bellow).

Connection with frontend is through Graphql. If you want to take a glimpse to this project, [visit it here.](https://github.com/luisVidal97/frontend-voting-app).

## Starting 🚀

If you you want to run the project locally, please clone this repository in one of your personal folders.

```
git clone https://github.com/luisVidal97/backend-voting-app.git
```

And then, in the project root run the following to install all required dependences:

```
npm run dev
```

With the above, you could enjoy the project, explore different functionalities and do whatever you want.

## Create candidates randomly

You can create candidates randomly typing the following comand:

```
npm run geramus
```

Internally, 20 users will be created with random data using libraries such as [Faker](https://www.npmjs.com/package/faker) and [Lorem ipsum](https://www.npmjs.com/package/lorem-ipsum) to generate them. Besides, this data is stored in an embedded database using TypeORM which database gestor is sqlite.

## Developing with 🛠️

- [Node](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expres](https://expressjs.com/es/)
- [Graphql](https://graphql.org/)
- [TypeORM](https://typeorm.io/#/)

## Authors ✒️

- **Luis Fernando Cruces** - luisfcv97@gmail.com

If you have any recomendation or something to contribute, please let me know sending a message! I will be very eager to receive it.
