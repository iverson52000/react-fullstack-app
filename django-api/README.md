# Product Review App Backend API

The backend REST API built in Django, Django Rest Framework, Django Rest Auth, for Product Review App

## REST API end points

Admin: Can add/edit/delete, products, users and reviews

Regular User: Can rate and leave a comment for a restaurant

**Restaurant**

Persmission: IsAuthenticatedOrReadOnly

(GET, POST) `/viewset/product/`

(GET, PUT, PATCH, DELETE) `/viewset/product/:id/`

**Review**

Persmission: IsAuthenticatedOrReadOnly

(GET, POST) `/viewset/review/`

(GET, PUT, PATCH, DELETE)

`/viewset/review/:id/`

**Authentication**

Token based authentication

`/auth/login/`

`/auth/logout/`

`/auth/registration/`

**Testing**

Run `python manage.py test` to run the unit tests
