from django.db import models

# Create your models here.
class Leap_years(models.Model):
    year = models.IntegerField()
    date = models.DateField()
    hour = models.TimeField()

    def _str_(self):
        return f"year: {self.year}, Date:{self.date}"

class Users(models.Model):
    user = models.CharField(max_length=20)
    password = models.CharField(max_length=8)

    def _str_(self):
        return f"user: {self.user}, Password {self.password}"