from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView
from Main.models import (Movie,
Entradas,
MainMovie,
Producto,
Proyecciones,
Cliente,
Salas,
Venta,
Alimentos,
AsientosOcupados
)
from .serializers import (MovieSerializer,
EntradasSerializer,
ProductoSerializer,
ProyeccionesSerializer,
ClienteSerializer,
SalasSerializer,
VentaSerializer,
AlimentosSerializer,
AsientosOcupadosSerializer
)
from rest_framework import viewsets


class MovieViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()


class EntradasViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = EntradasSerializer
    queryset = Entradas.objects.all()

class ProductosViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()

class ProyeccionesViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = ProyeccionesSerializer
    queryset = Proyecciones.objects.all()

class ClienteViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = ClienteSerializer
    queryset = Cliente.objects.all()



class SalasViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = SalasSerializer
    queryset = Salas.objects.all()

class VentasViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = VentaSerializer
    queryset = Venta.objects.all()


class AlimentosViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = AlimentosSerializer
    queryset = Alimentos.objects.all()


class AsientosOcupadosViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = AsientosOcupadosSerializer
    queryset = AsientosOcupados.objects.all()

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