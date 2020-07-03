from django.contrib import admin
from .models import (Movie,
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
# Register your models here.

admin.site.register(Movie)
admin.site.register(Entradas)
admin.site.register(MainMovie)
admin.site.register(Producto)
admin.site.register(Proyecciones)
admin.site.register(Cliente)
admin.site.register(Salas)
admin.site.register(Venta)
admin.site.register(Alimentos)
admin.site.register(AsientosOcupados)