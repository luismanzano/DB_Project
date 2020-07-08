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
AsientosOcupados
)

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('title', 'duration', 'reparto', 'showing', 'director', 'genre', 'language', 'synopsis', 'thumbnail')


class EntradasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Entradas
        fields = ('serial', 'costo', 'id_productos', 'id_proyecciones')


class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'tipo', 'id_venta')


class ProyeccionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proyecciones
        fields = ('id', 'fecha', 'inicio', 'id_salas', 'id_pelicula', 'asientos_vendidos')


class SalasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Salas
        fields = ('id', 'asientos_totales', 'filas', 'columnas', 'number_3d', 'vip')

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('cedula', 'nombre', 'email', 'estado', 'nacimiento', 'apellido')


class VentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venta
        fields = ('serial', 'fecha', 'id_cliente', 'monto_total')


class AlimentosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alimentos
        fields = ('nombre', 'costo', 'cantidad', 'categoria', 'caducidad', 'id_producto')


class AsientosOcupadosSerializer(serializers.ModelSerializer):
    class Meta:
        model = AsientosOcupados
        fields = ('columna', 'fila', 'id_funciones')

# class CarteleraSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Movie
#         fields = ('title', 'duration', 'reparto', 'showing', 'director', 'genre', 'language', 'synopsis')