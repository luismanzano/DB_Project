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
Genero,
Idioma,
PeliGenero,
PeliIdioma
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
GeneroSerializer,
IdiomaSerializer,
PeliGeneroSerializer,
PeliIdiomaSerializer
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

class GeneroViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = GeneroSerializer
    queryset = Genero.objects.all()

class IdiomaViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = IdiomaSerializer
    queryset = Idioma.objects.all()

class PeliGeneroViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = PeliGeneroSerializer
    queryset = PeliGenero.objects.all()

class PeliIdiomaViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = PeliIdiomaSerializer
    queryset = PeliIdioma.objects.all()



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

class GenerosView(ListAPIView):
    serializer_class = GeneroSerializer

    def get_queryset(self):
        idGenero = self.kwargs['pk']
        return Genero.objects.filter(id=idGenero)
        
class PeliGeneroView(ListAPIView):
    serializer_class = PeliGeneroSerializer

    def get_queryset(self):
        
       # queryset = super().get_queryset()
       # queryset = queryset.prefetch_related( 
       #      Prefetch('genero_id')
       # )
        
        ide = self.kwargs['t']
        return PeliGenero.objects.filter(pelis_id=ide)

class IdiomasView(ListAPIView):
    serializer_class = IdiomaSerializer

    def get_queryset(self):
        idIdioma = self.kwargs['pk']
        return Idioma.objects.filter(id=idIdioma)
        
class PeliIdiomaView(ListAPIView):
    serializer_class = PeliIdiomaSerializer

    def get_queryset(self):
        
       # queryset = super().get_queryset()
       # queryset = queryset.prefetch_related( 
       #      Prefetch('genero_id')
       # )
        
        ido = self.kwargs['t']
        return PeliIdioma.objects.filter(peli_id=ido)





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