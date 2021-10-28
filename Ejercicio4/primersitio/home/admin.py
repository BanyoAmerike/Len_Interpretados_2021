from django.contrib import admin

from home.views import users
from .models import Leap_years, User_view

# Register your models here.
admin.site.register(Leap_years)
admin.site.register(User_view)