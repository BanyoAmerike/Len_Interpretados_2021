from django.db import models

# Create your models here.

class Leap_years(models.Model):
    year = models.IntegerField()
    date = models.DateField()
    hour = models.TextField()
