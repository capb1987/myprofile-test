# PROYECTO MI PERFIL

###### HECHO POR CARLOS ANDRÉS PUELLO BOLAÑO

> La fuerza no viene de una capacidad física. Viene de una voluntad indomable. - Gandhi

## Inicio

Antes que nada, debes tener en cuenta que debes installar el siguiente comando para instalar node_modules de manera local es decir, se pueda instalar todos los paquetes.

npm install

## Iniciar el servidor de manera local

Debes arrancar el servidor local con algunos de los comandos

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Paquetes

Estos son los paquetes que están instalados(debes comprobar en el package.json si estan instalados de lo contrario, se indicarán):

- Iconify

            Se instala paquetes como iconify donde se muestran los iconos este es el comando se usa para mostrar iconos como por ejemplo redes sociales:

            npm install --save-dev @iconify/react

- React toastify

            Se instala este paquete para agregar una pequeña alerta a una notificación del usuario al validarlo si están en blanco los campos o ya está completo el usuario.

            npm install --save react-toastify

- Animate.css

        Es una libreria de Javascript para uso de animaciones se instala este paquete con ese objetivo para agregar unas en landing page.

        npm install animate.css --save

- AOS(Animate On Scroll Library)

        Libreria de Animaciones cuando se haga scroll se instala este paquete para que en el landing page se agrega unas clases y se pueda hacer la respectiva animación tanto en intereses y contacto.

        npm i --save-dev @types/aos

## Componentes de React usados

Por defecto se hace todo desde el page.tsx que es index ( página principal), Los Componentes usados en este proyecto son(están clasificados con sus carpetas y hoja de estilos en .module.css):

1.  about

                      - About.tsx
                      - SocialMedia.tsx
                      - About.module.css

2.  header

                        - Header.tsx
                        - Header.module.css

3.  interests

                        - Interests.tsx
                        - Interests.module.css

4.  contact

                        - Contact.tsx
                        - About.module.css

P.D Muchas Gracias por la oportunidad y que el todopoderoso siempre los bendiga soy abierto al aprendizaje continuo
