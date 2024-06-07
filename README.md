# foodtypes

Clone the repository onto your local machine.

## Requirements

### Postgres 16

Brew install instructions

`brew install postgresql@16`

Create a superuser role for user `root` with password `password`

Alternatively, you can edit the credentials in `./config/config.js` and `./src/startup.js`

## Getting Started

```
npm run dev
```

Runs the app in development mode.

At startup a Postgres database structure is created through migrations and seeded with data. The seeding files can be accessed in `./data`.

A Postgres extension is required to be installed manually. Follow these instructions.

`psql -h localhost -U root -d foodstyles`

`CREATE EXTENSION pg_trgm`

Once the extension has been installed either save any file in the project or restart the project.

## Results

An array of search terms is saved in

`./src/library/searchStrings.js`

One of these terms is randomly selected each time the code runs.

The search term used and the final output are logged to the console.

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
