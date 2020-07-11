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
AsientosOcupados,
AliCombo,
Combos,
)
from .serializers import (MovieSerializer,
EntradasSerializer,
ProductoSerializer,
ProyeccionesSerializer,
ClienteSerializer,
SalasSerializer,
VentaSerializer,
AlimentosSerializer,
AsientosOcupadosSerializer,
AliComboSerializer,
CombosSerializer,
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

class AliComboViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = AliComboSerializer
    queryset = AliCombo.objects.all()

class CombosViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = CombosSerializer
    queryset = Combos.objects.all()




##A PARTIR DE ACA EMPIEZAN LOS QUERIES AVANZADOS
class CarteleraView(viewsets.ModelViewSet):
    serializer_class = MovieSerializer

    queryset = Movie.objects.all().filter(showing=True)


class ProyeccionesView(ListAPIView):
    serializer_class = ProyeccionesSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        idPeli = self.kwargs['pk']
        return Proyecciones.objects.filter(id_pelicula=idPeli)


class AsientosOcupadosView(ListAPIView):
    serializer_class = AsientosOcupadosSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        funcion = self.kwargs['pk']
        return AsientosOcupados.objects.filter(id_funciones=funcion)

class top5View(ListAPIView):
    serializer_class = MovieSerializer

    queryset = Movie.objects.all().order_by('-id')[:5]


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