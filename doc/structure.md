# 🗄️ Project Structure

Most of the code lives in the `src` folder and looks like this:

```sh
src
|
+-- common            # all the common stuff which is going to use by multiply feature modules comes under this folder.
|
+-- core              # all the core implementation which impact core part of microservices.
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the microservices.
|
+-- <featurename>     # feature based folder
```

A feature module could have the following structure:

```sh
src/<featurename>
|
+-- dtos         # DTOs for request and response classes.
|
+-- models       # Model are stored here.
|
+-- interfaces   # Interfaces are stored here.
|
+-- utilities    # utility functions for a specific feature.
|
+-- types        # typescript types for TS specific feature domain.
|
+-- constants    # Constants like procedure names are stored here
```

Everything from a specific folder should be exported from the `index.ts` file which behaves as the public API of the feature.

You should import stuff from other features only by using syntax like below:

```js
import { HealthController, HealthModule } from './common/health';
```

and not

```js
import { HealthController } from './common/health/health.controller';
import { HealthModule } from './common/health/health.module';
```

Every method should have its own dto file and should be exported to `index.ts`

```sh
+-- dtos
    |
    +-- request
        |
        +-- one.request.dto.ts
        +-- two.request.dto.ts
        +-- index.ts               # export both dto files here
    +-- response
        |
        +-- one.response.dto.ts
        +-- two.response.dto.ts
        +-- index.ts               # export both dto files here
```
