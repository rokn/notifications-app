# Notifications App

## Getting Started

```bash
npm i # install deps
docker compose up db -d # start the DB
cp .env.template .env # add .env file for Prisma
npx prisma migrate dev # run the migrations
npx prisma db seed -- --environment dev # seed the database with required data and additional testing data
npm run dev # start server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
