# cv.kamilcraft.com

The project concerns the CV website at [https://cv.kamilcraft.com](https://cv.kamilcraft.com). The website is created with RWD design techniques. The website is adapted for mobile devices, desktop browsers with A4 printability.

I used Vue.js in the project. Some of the content is static. The information about the projects is retrieved from the [API](https://github.com/kamilniemczycki/kamilcraft-api).

## Dependency installation

```
npm install --legacy-peer-deps
```

### Development

```
npm run dev
```

Application should be available under `127.0.0.1:5173` or `localhost:5173`.

### Compilation

```
npm run build
```

The executable files should be in the `dist` folder.

### Code formatting

1. Use the command to reformat all files in the project.

   ```bash
   npm run format
   ```

2. Use the command to display syntax errors.

   ```
   npm run lint
   ```
