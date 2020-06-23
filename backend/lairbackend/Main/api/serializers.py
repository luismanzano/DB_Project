from rest_framework import serializers
from Main.models import Movie

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('title', 'duration', 'reparto', 'showing', 'director', 'genre', 'language', 'synopsis')
