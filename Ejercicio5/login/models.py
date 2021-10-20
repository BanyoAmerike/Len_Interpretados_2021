from django.db import models

# Create your models here.
class Users(models.Model):
    user = models.CharField(max_length=20)
    password = models.CharField(max_length=8)

    def __str__(self):
        return f"User: {self.user}, Pass: {self.password}"