from rest_framework.generics import ListAPIView
from Main.models import Movie
from .serializers import MovieSerializer

class MovieListView(ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer