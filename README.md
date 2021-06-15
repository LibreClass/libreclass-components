# libreclass-components

## Instalando

- O LibreclassComponents pode ser instalado com o npm:
```bash
$ npm i @libreclass/libreclass-components;
```

## Usando

- Para usar o cuida, importe a biblioteca no seu entry point, provavelmente vai ser seu main.js ou app.js:
```js
import LibreclassComponents from '@libreclass/libreclass-components';
```

- E instale o Cuida:
```js
Vue.use(LibreclassComponents);
```

- Agora pra utilizar os componentes, basta usá-los no seu template. Como exemplo, para usar a 
[Badge]:
```html
<lc-badge
    variant="blue"
>
  Teste
</lc-badge>
```

- Para utilizar os tokens, na tag style, importe o arquivo de tokens do projeto:
```scss
<style lang="scss" scoped>
@import 'node_modules/@libreclass/libreclass-components/dist/@libreclass/tokens.scss';

```
