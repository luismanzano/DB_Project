from django.db import models

# Create your models here.
class Movie (models.Model):
    title = models.CharField(max_length=120)
    duration = models.IntegerField()
    reparto = models.TextField()
    showing = models.BooleanField()
    director = models.CharField(max_length=120)
    genre = models.CharField(max_length=120)
    language = models.CharField(max_length=120)
    synopsis = models.TextField()
    thumbnail = models.ImageField(default='default.png', blank=True)
    existo = models.IntegerField()

    def __str__(self):
        return self.title

class Entradas(models.Model):
    serial = models.CharField(unique=True, max_length=50)
    costo = models.FloatField()
    id_productos = models.ForeignKey('Producto', models.DO_NOTHING, db_column='id_productos')
    id_proyecciones = models.ForeignKey('Proyecciones', models.DO_NOTHING, db_column='id_proyecciones')
    existo = models.IntegerField()
    class Meta:
        managed = False
        db_table = 'entradas'


class MainMovie(models.Model):
    title = models.CharField(max_length=120)
    duration = models.IntegerField()
    reparto = models.TextField()
    showing = models.IntegerField()
    director = models.CharField(max_length=120)
    genre = models.CharField(max_length=120)
    language = models.CharField(max_length=120)
    synopsis = models.TextField()
    thumbnail = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'main_movie'


class Producto(models.Model):
    # id = models.IntegerField(primary_key=True)
    tipo = models.IntegerField()
    id_venta = models.ForeignKey('Venta', models.DO_NOTHING, db_column='id_venta')
    existo = models.IntegerField()
    class Meta:
        managed = False
        db_table = 'producto'


class Proyecciones(models.Model):
    # id = models.IntegerField(primary_key=True)
    fecha = models.DateField()
    inicio = models.TimeField()
    id_salas = models.ForeignKey('Salas', models.DO_NOTHING, db_column='id_salas')
    id_pelicula = models.ForeignKey(MainMovie, models.DO_NOTHING, db_column='id_pelicula')
    asientos_vendidos = models.FloatField()
    existo = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'proyecciones'


class Salas(models.Model):
    # id = models.IntegerField(primary_key=True)
    asientos_totales = models.PositiveIntegerField()
    filas = models.PositiveIntegerField()
    columnas = models.PositiveIntegerField()
    number_3d = models.IntegerField(db_column='3d')  # Field renamed because it wasn't a valid Python identifier.
    vip = models.IntegerField()
    existo = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'salas'

class Cliente(models.Model):
    cedula = models.PositiveIntegerField(unique=True)
    nombre = models.CharField(max_length=100)
    email = models.CharField(unique=True, max_length=50)
    estado = models.CharField(max_length=100)
    nacimiento = models.DateField()
    apellido = models.CharField(max_length=100)
    existo = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'cliente'


class Venta(models.Model):
    serial = models.AutoField(primary_key=True)
    fecha = models.DateField(auto_now_add=True, auto_now=False)
    id_cliente = models.ForeignKey(Cliente, models.DO_NOTHING, db_column='id_cliente')
    monto_total = models.FloatField()

    class Meta:
        managed = True
        db_table = 'venta'

class AliCombo(models.Model):
    id_alimento = models.OneToOneField('Alimentos', models.DO_NOTHING, db_column='id_alimento', primary_key=True)
    id_combo = models.ForeignKey('Combos', models.DO_NOTHING, db_column='id_combo')

    class Meta:
        managed = False
        db_table = 'ali_combo'
        unique_together = (('id_alimento', 'id_combo'),)


class Combos(models.Model):
    nombre = models.CharField(max_length=100)
    costo = models.FloatField()
    muestra = models.CharField(max_length=100)
    existo = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'combos'


class Alimentos(models.Model):
    nombre = models.CharField(max_length=100)
    costo = models.FloatField()
    cantidad = models.FloatField()
    categoria = models.CharField(max_length=150)
    caducidad = models.DateField()
    id_producto = models.ForeignKey('Producto', models.DO_NOTHING, db_column='id_producto')
    existo = models.IntegerField()
    muestra = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'alimentos'


class AsientosOcupados(models.Model):
    columna = models.IntegerField()
    fila = models.IntegerField()
    id_funciones = models.ForeignKey('Proyecciones', models.DO_NOTHING, db_column='id_funciones')
    existo = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'asientos_ocupados'