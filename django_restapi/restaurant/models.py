from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.


class Restaurant(models.Model):
    name = models.CharField(max_length=200)
    # address = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Review(models.Model):
    rating = models.IntegerField(default=3, validators=[
                                 MaxValueValidator(5), MinValueValidator(1)])
    date = models.DateField()
    comment = models.CharField(max_length=200)

    restaurant = models.ForeignKey(
        Restaurant, related_name='reviews', on_delete=models.CASCADE)

    def __str__(self):
        return str(self.restaurant)
