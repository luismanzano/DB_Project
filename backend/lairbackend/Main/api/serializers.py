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
)

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id','title', 'duration', 'reparto', 'showing', 'director', 'language', 'genre', 'synopsis', 'thumbnail')


class EntradasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Entradas
        fields = ('id', 'serial', 'costo', 'id_productos', 'id_proyecciones', 'existo')


class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'tipo', 'id_venta', 'existo')


class ProyeccionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proyecciones
        fields = ('id', 'fecha', 'inicio', 'id_salas', 'id_pelicula', 'asientos_vendidos', 'idioma', 'number_3d', 'existo')


class SalasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Salas
        fields = ('id', 'asientos_totales', 'filas', 'columnas', 'vip', 'existo')

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('id', 'cedula', 'nombre', 'email', 'estado', 'nacimiento', 'apellido', 'existo')


class VentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venta
        fields = ('serial', 'fecha', 'id_cliente', 'monto_total', 'existo')


class AlimentosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alimentos
        fields = ('id', 'nombre', 'costo', 'cantidad', 'categoria', 'caducidad', 'id_producto', 'existo', 'muestra')


class AsientosOcupadosSerializer(serializers.ModelSerializer):
    class Meta:
        model = AsientosOcupados
        fields = ('id', 'columna', 'fila', 'id_funciones', 'existo')

class AliComboSerializer(serializers.ModelSerializer):
    class Meta:
        model = AliCombo
        fields = ('id_alimento', 'id_combo')

class CombosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Combos
        fields = ('id', 'nombre', 'costo', 'muestra', 'existo')


# class CarteleraSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Movie
#         fields = ('title', 'duration', 'reparto', 'showing', 'director', 'genre', 'language', 'synopsis')