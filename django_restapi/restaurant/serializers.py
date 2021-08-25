from rest_framework import serializers
from .models import Restaurant, Review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'comment', 'rating', 'date', 'restaurant']


class RestaurantSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'reviews']
        # fields = '__all__'
