from rest_framework.generics import ListAPIView, RetrieveAPIView
from Main.models import Movie
from .serializers import MovieSerializer

class MovieListView(ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class MovieDetailView(RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer