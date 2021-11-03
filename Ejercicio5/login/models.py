from django.db import models

# Create your models here.
class Users(models.Model):
    user = models.CharField(max_length=20)
    password = models.CharField(max_length=8)

    def _str_(self):
        return f"User: {self.user}, pass: {self.password}"