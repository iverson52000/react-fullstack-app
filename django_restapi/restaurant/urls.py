from django.urls import path, include
from .views import RestaurantViewSet, ReviewViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('restaurant', RestaurantViewSet)
router.register('review', ReviewViewSet)

urlpatterns = [
    path('viewset/', include(router.urls))
]
