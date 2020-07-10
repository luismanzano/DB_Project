# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AliCombo(models.Model):
    id_alimento = models.AutoField(primary_key=True)
    id_combo = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'ali_combo'
        unique_together = (('id_alimento', 'id_combo'),)


class Alimentos(models.Model):
    nombre = models.CharField(max_length=100)
    costo = models.FloatField()
    cantidad = models.FloatField()
    categoria = models.CharField(max_length=150)
    caducidad = models.DateField()
    id_producto = models.ForeignKey('Producto', models.DO_NOTHING, db_column='id_producto')

    class Meta:
        managed = False
        db_table = 'alimentos'


class AsientosOcupados(models.Model):
    columna = models.IntegerField()
    fila = models.IntegerField()
    id_funciones = models.ForeignKey('Proyecciones', models.DO_NOTHING, db_column='id_funciones')

    class Meta:
        managed = False
        db_table = 'asientos_ocupados'


class Cliente(models.Model):
    cedula = models.PositiveIntegerField(unique=True)
    nombre = models.CharField(max_length=100)
    email = models.CharField(unique=True, max_length=50)
    estado = models.CharField(max_length=100)
    nacimiento = models.DateField()
    apellido = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'cliente'


class Combos(models.Model):
    nombre = models.CharField(max_length=100)
    costo = models.FloatField()

    class Meta:
        managed = False
        db_table = 'combos'


class Entradas(models.Model):
    serial = models.CharField(unique=True, max_length=50)
    costo = models.FloatField()
    id_productos = models.ForeignKey('Producto', models.DO_NOTHING, db_column='id_productos')
    id_proyecciones = models.ForeignKey('Proyecciones', models.DO_NOTHING, db_column='id_proyecciones')

    class Meta:
        managed = False
        db_table = 'entradas'


class Genero(models.Model):
    genero = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'genero'


class Idioma(models.Model):
    idioma = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'idioma'


class MainMovie(models.Model):
    title = models.CharField(max_length=120)
    duration = models.IntegerField()
    reparto = models.TextField()
    showing = models.IntegerField()
    director = models.CharField(max_length=120)
    synopsis = models.TextField()
    thumbnail = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'main_movie'


class PeliGenero(models.Model):
    pelis = models.OneToOneField(MainMovie, models.DO_NOTHING, primary_key=True)
    genero = models.ForeignKey(Genero, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'peli_genero'
        unique_together = (('pelis', 'genero'),)


class PeliIdioma(models.Model):
    peli = models.OneToOneField(MainMovie, models.DO_NOTHING, primary_key=True)
    idioma = models.ForeignKey(Idioma, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'peli_idioma'
        unique_together = (('peli', 'idioma'),)


class Producto(models.Model):
    id = models.IntegerField(primary_key=True)
    tipo = models.IntegerField()
    id_venta = models.ForeignKey('Venta', models.DO_NOTHING, db_column='id_venta')

    class Meta:
        managed = False
        db_table = 'producto'


class Proyecciones(models.Model):
    id = models.IntegerField(primary_key=True)
    fecha = models.DateField()
    inicio = models.TimeField()
    id_salas = models.ForeignKey('Salas', models.DO_NOTHING, db_column='id_salas')
    id_pelicula = models.ForeignKey(MainMovie, models.DO_NOTHING, db_column='id_pelicula')
    asientos_vendidos = models.FloatField()
    idioma = models.ForeignKey(Idioma, models.DO_NOTHING, db_column='idioma')
    number_3d = models.IntegerField(db_column='3D')  # Field name made lowercase. Field renamed because it wasn't a valid Python identifier.

    class Meta:
        managed = False
        db_table = 'proyecciones'


class Salas(models.Model):
    id = models.IntegerField(primary_key=True)
    asientos_totales = models.PositiveIntegerField()
    filas = models.PositiveIntegerField()
    columnas = models.PositiveIntegerField()
    vip = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'salas'


class Venta(models.Model):
    serial = models.AutoField(primary_key=True)
    fecha = models.DateField()
    id_cliente = models.ForeignKey(Cliente, models.DO_NOTHING, db_column='id_cliente')
    monto_total = models.FloatField()

    class Meta:
        managed = False
        db_table = 'venta'