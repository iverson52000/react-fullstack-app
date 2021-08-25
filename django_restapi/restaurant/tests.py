from django.test import TestCase
from .models import Restaurant, Review
from django.utils import timezone
# Create your tests here.

class RestaurantTest(TestCase):
    def createRestuarant(self, name="test"):
        return Restaurant.objects.create(name=name)

    def testRestaurantCreation(self):
        R = self.createRestuarant()
        self.assertTrue(isinstance(R, Restaurant))
        self.assertEqual(R.__str__(), R.name)

class ReviewTest(TestCase):
    def createReview(self, rating="3", date="2020-10-26", comment="test", restaurant="test"):
        R = Restaurant.objects.create(name=restaurant)
        return Review.objects.create(rating=rating, date=date, comment=comment, restaurant=R)

    def testRestaurantCreation(self):
        R = self.createReview()
        self.assertTrue(isinstance(R, Review))
        # self.assertEqual(R.__str__(), R)
