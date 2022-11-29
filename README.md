# bc13_w9_project-backend-lucky-number-seven
bc13_w9_project-backend-lucky-number-seven created by GitHub Classroom

# Lucky Number Sevens Dashboard

This project is a multifunctional dashboard that has a to-do list and an interactive database containing resources such as links, and the topics and weeks to identify them. This project is aimed at somebody taking part in the SoC bootcamp and aims to help make their life easier.




## API Reference

#### Get by topic

```http
  GET /api/linkroutes?topic=xxx
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `topic` | `string` | Get all topics with xxx in topic |

#### Get all links by week

```http
  GET /api/linkroutes?week=xxx
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `week`      | `int` | Get all links by week |

#### POST new link

```http
  POST /api/linkroutes
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `{body}`      | `string` | Create new link |







## Authors

- [@mvhmz81](https://www.github.com/@mvhmz81)
- [@diinif](https://www.github.com/@diinif)
- [@itsevgenii](https://www.github.com/@itsevgenii)
- [@OliLoftus](https://www.github.com/@OliLoftus)



## Tech Stack

**Client:** React

**Server:** Node, Express

**Database:** ElephantSQL

**Languages:** Javascript, CSS, JSX, HTML


## Environment Variables

To run this project, you will need to add your own environment variables to your .env file. You can get this by using the ddd.sql file to create your own database.


`POSTGRES_CONNECTION_URL`

