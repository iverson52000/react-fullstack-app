from django.urls import path, include
from .views import ProductViewSet, ReviewViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('product', ProductViewSet)
router.register('review', ReviewViewSet)

urlpatterns = [
    path('viewset/', include(router.urls))
]
