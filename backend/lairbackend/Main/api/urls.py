
from django.urls import path
from .views import (MovieViewSet,
EntradasViewSet,
ProductosViewSet,
ProyeccionesViewSet,
ClienteViewSet,
SalasViewSet,
VentasViewSet,
AlimentosViewSet,
AsientosOcupadosViewSet,
CarteleraView,
ProyeccionesView
)
from rest_framework.routers import DefaultRouter
# from .views import MovieListView, MovieDetailView, MovieCreateView, MovieUpdateView

urlpatterns = [
    path('proyeccionesPelicula/<pk>', ProyeccionesView.as_view())
]

router = DefaultRouter()
router.register(r'movies', MovieViewSet, basename='movies')
router.register(r'entradas', EntradasViewSet, basename='entradas')
router.register(r'productos', ProductosViewSet, basename='productos')
router.register(r'proyecciones', ProyeccionesViewSet, basename='proyecciones')
router.register(r'clientes', ClienteViewSet, basename='clientes')
router.register(r'salas', SalasViewSet, basename='salas')
router.register(r'ventas', VentasViewSet, basename='ventas')
router.register(r'alimentos', AlimentosViewSet, basename='alimentos')
router.register(r'asientos', AsientosOcupadosViewSet, basename='asientos')

#Url especificos
router.register(r'cartelera', CarteleraView, basename='cartelera')
#router.register(r'proyeccionesPelicula', ProyeccionesView, basename='proyeccionesPelicula')

urlpatterns +   = router.urls


# urlpatterns = [
#      path('', MovieListView.as_view()),
#      path('<pk>', MovieDetailView.as_view()),
#      path('create/', MovieCreateView.as_view()),
#      path('<pk>/update/', MovieCreateView.as_view()),
# ]



