from django.shortcuts import render
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.

from .models import Restaurant, Review
from .serializers import RestaurantSerializer, ReviewSerializer
from rest_framework import viewsets

class RestaurantViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer