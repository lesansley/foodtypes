# foodtypes

Clone the repository onto your local machine.

## Requirements

### Postgres 16

Brew install instructions

`brew install postgresql@16`

## Getting Started

Create a `.env` file for all the environmental variables. You can copy the variables below if yours do not differ.

```
POSTGRES_USER="root"
POSTGRES_PASSWORD="password"
POSTGRES_HOST="localhost"
POSTGRES_DATABASE_NAME="foodstyles"
POSTGRES_DATABASE="postgres"
POSTGRES_PORT="5432"
```

Migrate and seed a Postgres database with the following command

```
npm run startup
```

The seeding files are `.csv` format and can be accessed in `./data`.

A Postgres extension is required to be installed manually. Follow these instructions.

`psql -h localhost -U root -d foodstyles`

`CREATE EXTENSION pg_trgm`

Once the extension has been installed In the project directory, you can run:

```
npm run dev
```

Runs the app in development mode.

The page will reload when you make changes.

## Results

An array of search terms is saved in

`./src/library/searchStrings.js`

One of these terms is randomly selected each time the code runs.

The search term used and the final output are logged to the terminal.

**Example**

```
Search terms: McDonald's in London or Manchester
Output: [
  {
    brands: { id: 4, name: "McDonald's" },
    cities: { id: 1, name: 'London' }
  },
  {
    brands: { id: 4, name: "McDonald's" },
    cities: { id: 6, name: 'Manchester' }
  }
]
```

## Todo

- Create an enviromnetal file to hold all the credentials.

- Place all configuration variables in a common config folder.
