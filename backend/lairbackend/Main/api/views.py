from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView
from Main.models import Movie
from .serializers import MovieSerializer
from rest_framework import viewsets


class MovieViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()




# class MovieListView(ListAPIView):
#     queryset = Movie.objects.all()
#     serializer_class = MovieSerializer

# class MovieDetailView(RetrieveAPIView):
#     queryset = Movie.objects.all()
#     serializer_class = MovieSerializer

# class MovieCreateView(CreateAPIView):
#     queryset = Movie.objects.all()
#     serializer_class = MovieSerializer

# class MovieUpdateView(UpdateAPIView):
#     queryset = Movie.objects.all()
#     serializer_class = MovieSerializer