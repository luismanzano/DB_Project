from django.db import models

# Create your models here.
class Movie (models.Model):
    title = models.CharField(max_length=120)
    duration = models.IntegerField()
    reparto = models.TextField()
    showing = models.BooleanField()
    director = models.CharField(max_length=120)
    genre = models.CharField(max_length=120)
    language = models.CharField(max_length=120)
    synopsis = models.TextField()

    def __str__(self):
        return self.title

