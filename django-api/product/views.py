from django.shortcuts import render
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.

from .models import Product, Review
from .serializers import ProductSerializer, ReviewSerializer
from rest_framework import viewsets


class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
