# Minecraft Centralized Mod Platform (MCMP) Backend

![Tests](https://github.com/RetroJect/mcmp-backend/workflows/Node.js%20Test/badge.svg)

The backend API for MCMP handles storing data of uploaded mods, managing user accounts, and more.
For an in-depth overview of what the platform does, please see the
[frontend repository](https://github.com/RetroJect/Minecraft-Centralized-Mod-Platform)

Below are descriptions of how the API is structured.
Different actions are separated into "routes" by category of what data is being searched for or modified.

> Anything not currently implemented has `(Planned)` in the title.

- [Minecraft Centralized Mod Platform (MCMP) Backend](#minecraft-centralized-mod-platform-mcmp-backend)
  - [API Overview](#api-overview)
    - [Auth](#auth)
    - [User (Planned)](#user-planned)
    - [Mod (Planned)](#mod-planned)
  - [Contributing](#contributing)

## API Overview

### Auth

Handles authentication to the API using passport.
Currently, only a local strategy (username and password) is implemented, but we plan on extending to allow for more sign-in options in the future.

### User (Planned)

This set of routes handles all things "User".

- Get information about a user
- Update a user's account information
- Delete a user

### Mod (Planned)

- Create, update, or delete a Mod listing
- Get information about a mod listing
  - Name, author, versions, etc.
  - Dependencies
  - Download link

## Contributing

Code contributions are always welcomed and actively encouraged!
To contribute we ask that you follow the steps below:

1. Fork the repository
2. Create a new branch in your fork, or make changes to the development branch
3. Add something new, or spruce up existing code
4. Add tests where applicable

   > Anything that can be tested, should.

5. Run ESLint on your branch with `npm run lint`

   > ESLint will be run on every pull request and will be prevented from merging if linting fails so it's good to check early

6. Test your changes pass the tests with `npm run test`
7. Create a pull request
