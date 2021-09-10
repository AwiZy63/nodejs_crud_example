# NodeJS CRUD example

# Utilisation

## Pour faire fonctionner l'api, il vous faudra suivre plusieurs étapes.

- Cloner le repo git :
`git clone https://github.com/AwiZy63/nodejs_crud_example`

- Se rendre dans le dossier et installer les modules node :
`cd nodejs_crud_example && npm i`

- Configurer l'accès à votre base de données :
  - Faites les modifications nécessaires dans le fichier "config.json".
  - Dans votre application de gestion SQL, injectez le modèle disponible dans le fichier "database_template.sql" dans une base de données.

- Une fois tout cela effectué, vous pourrez lancer votre API en utilisant la commande :
`npm start`

- Vous accéderez aux différentes fonctionnalités de l'API grâce à ces adresses :
  - GET    /api/v1/employees                : retournera la liste de tout les employés disponibles dans la base
  - GET    /api/v1/employees/<employee_id>  : retournera les informations d'un employé specifique via son ID.
  - POST   /api/v1/employees                : création d'un employé
  - PATCH  /api/v1/employees/<employee_id>  : mise à jour partielle d'un employé
  - DELETE /api/v1/employees/<employee_id>  : suppression d'un employé
  - PUT    /api/v1/employees/<employee_id>  : mise à jour complète d'un employé