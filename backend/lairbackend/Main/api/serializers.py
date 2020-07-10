from rest_framework import serializers
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
PeliIdioma,
)

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id','title', 'duration', 'reparto', 'showing', 'director', 'synopsis', 'thumbnail')


class EntradasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Entradas
        fields = ('id', 'serial', 'costo', 'id_productos', 'id_proyecciones')


class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'tipo', 'id_venta')


class ProyeccionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proyecciones
        fields = ('id', 'fecha', 'inicio', 'id_salas', 'id_pelicula', 'asientos_vendidos', 'idioma', 'number_3d')


class SalasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Salas
        fields = ('id', 'asientos_totales', 'filas', 'columnas', 'vip')

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('id', 'cedula', 'nombre', 'email', 'estado', 'nacimiento', 'apellido')


class VentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venta
        fields = ('serial', 'fecha', 'id_cliente', 'monto_total')


class AlimentosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alimentos
        fields = ('id', 'nombre', 'costo', 'cantidad', 'categoria', 'caducidad', 'id_producto', 'muestra')


class AsientosOcupadosSerializer(serializers.ModelSerializer):
    class Meta:
        model = AsientosOcupados
        fields = ('id', 'columna', 'fila', 'id_funciones')

class AliComboSerializer(serializers.ModelSerializer):
    class Meta:
        model = AliCombo
        fields = ('id_alimento', 'id_combo')

class CombosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Combos
        fields = ('id', 'nombre', 'costo', 'muestra')

class GeneroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genero
        fields = ('id', 'genero')

class IdiomaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Idioma
        fields = ('id', 'idioma')

class PeliGeneroSerializer(serializers.ModelSerializer):
    class Meta:
        model = PeliGenero
        fields = ('pelis_id', 'genero_id')

class PeliIdiomaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PeliIdioma
        fields = ('peli_id', 'idioma_id')


# class CarteleraSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Movie
#         fields = ('title', 'duration', 'reparto', 'showing', 'director', 'genre', 'language', 'synopsis')