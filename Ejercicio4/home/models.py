from django.db import models

# Create your models here.
class Leap_years(models.Model):
    year = models.IntegerField()
    date = models.DateField()
    hour = models.TimeField()

    def __str__(self):
        return f"Year: {self.year}, Date: {self.date}"


class Users(models.Model):
    user = models.CharField(max_length=20)
    password = models.CharField(max_length=8)

    def __str__(self):
        return f"User: {self.user}, Pass: {self.password}"