# CustomerAdmin - Administración de Clientes

Este proyecto es una aplicación de administración de clientes desarrollada con Angular. La aplicación permite gestionar información de clientes, incluyendo la creación, edición, eliminación y búsqueda de clientes, así como la exportación de datos a CSV.

## Descripción General

La aplicación ofrece una interfaz intuitiva para gestionar la información de los clientes. Incluye las siguientes funcionalidades:

- Listado de clientes
- Búsqueda básica y avanzada
- Creación, edición y eliminación de clientes
- Exportación de datos de clientes a CSV
- Interfaz responsiva y fácil de usar

## Requisitos Previos

Antes de empezar, asegúrate de tener instalados los siguientes requisitos en tu máquina:

- Node.js (versión 20 o superior)
- Angular CLI (versión 14 o superior)
- Git

## Paso a Paso para Clonar e Instalar

Sigue estos pasos para clonar e instalar el proyecto en tu máquina local:

1. **Clonar el Repositorio**

   Abre una terminal y ejecuta el siguiente comando para clonar el repositorio:

   ```bash
   git clone https://github.com/jrgeorge89/CustomerAdminAngular.git
   cd nombre-del-repositorio
   ```
   
2. **Instalar Dependencias**

   Instala las dependencias necesarias ejecutando el siguiente comando:

   ```bash
   npm install
   ```
      
3. **Configurar los Environments**

   Configura las URLs del servicio API en los archivos environment.ts ubicados en src/environments/:

   ```bash
   export const environment = {
      production: false,
      apiUrl: 'http://localhost:8080/api/customers'
    };
   ```
   
4. **Ejecutar la Aplicación**

   Una vez instaladas las dependencias y configurados los environments, puedes ejecutar la aplicación con el siguiente comando:

   ```bash
   ng serve
   ```
   La aplicación estará disponible en http://localhost:4200.
   

## Funcionalidades de la Aplicación

Sigue estos pasos para clonar e instalar el proyecto en tu máquina local:

1. **Listado de Clientes**

   - Visualización de la lista de clientes con detalles como nombre, teléfono, email, fecha de inicio y fecha de fin.
   - Acciones disponibles: Editar y Eliminar clientes.
   
2. **Búsqueda Básica y Avanzada**

   - **Búsqueda Básica:**: Permite buscar clientes por "Shared Key".
   - **Búsqueda Avanzada:**: Permite buscar clientes utilizando múltiples criterios como "Shared Key", "Business ID", "Phone", "Email", "Start Date" y "End Date".
   
3. **Creación, Edición y Eliminación de Clientes**

   - **Listar Clientes:**: Permite Listar todos los clientes.
   - **Crear Cliente:**: Permite agregar un nuevo cliente a la lista.
   - **Editar Cliente:**: Permite modificar la información de un cliente existente.
   - **Eliminar Cliente:**: Permite eliminar un cliente de la lista.
   
4. **Exportación de Datos a CSV**

   - Permite exportar la lista de clientes a un archivo CSV.


## Instalación de Dependencias Adicionales

  La aplicación utiliza file-saver y xlsx para la exportación de datos a CSV. Estas dependencias ya están incluidas en el archivo package.json, pero si necesitas instalarlas manualmente, usa los siguientes comandos:

   ```bash
   npm install file-saver xlsx
   ```

¡Gracias por utilizar nuestra aplicación de administración de clientes! 😊🚀
