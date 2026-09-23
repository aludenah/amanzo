# REPEL · Reparaciones Electromecánicas

Sitio corporativo de REPEL en el repositorio `aludenah/amanzo`. Construido con HTML, CSS y JavaScript, sin dependencias de instalación ni servicios de pago.

## Contenido

- Cinco servicios del brochure: mantenimiento, alquiler de grupos electrógenos de 10 a 600 kW, tableros eléctricos y pozos a tierra, reparación e instalación y rebobinado.
- Información de la empresa, más de 10 años de experiencia y soporte técnico 24/7.
- Logotipo, fotografías y marcas de clientes extraídos del brochure facilitado por el propietario.
- Teléfono: +51 949 829 212. Correo: repelectromecanicas@gmail.com.
- Dirección: Panamericana Norte S/N, Puente Piedra.
- Cotización: formulario que prepara un mensaje localmente; el visitante lo revisa, abre WhatsApp y decide enviarlo. No hay envío automático, servidor de formularios, analítica, cookies ni almacenamiento de datos de los visitantes.

## Editar

- `index.html`: textos, servicios, enlaces y datos de contacto.
- `styles.css`: identidad visual y diseño adaptable.
- `script.js`: menú móvil y preparación de consultas.
- `assets/`: imágenes originales del brochure y favicon.

La información comercial procede del brochure entregado. No se añadieron tarifas, certificaciones, reseñas ni promesas de tiempo de atención. El brochure repite el mismo texto en misión y visión; la web utiliza una presentación de la empresa y sus valores sin inventar una misión diferente.

## Vista local

Desde esta carpeta:

```sh
python3 -m http.server 8080
```

Abrir `http://localhost:8080`. También se puede abrir `index.html` directamente.

## Publicar con GitHub Pages

En el repositorio: **Settings → Pages → Build and deployment → Deploy from a branch → main → / (root) → Save**.

El sitio usa rutas relativas para funcionar en la subcarpeta de GitHub Pages. El archivo `.nojekyll` evita procesamiento innecesario. No se requiere compilación ni claves privadas.

## Revisiones básicas

Comprobar el menú en celular, los cinco servicios, los enlaces de teléfono y correo y la preparación de una consulta (incluidos caracteres como ñ y tildes). Verificar el borrador sin enviarlo a la empresa. La navegación y los enlaces de contacto funcionan incluso sin JavaScript.
