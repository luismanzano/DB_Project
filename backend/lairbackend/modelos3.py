# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AliCombo(models.Model):
    id_alimento = models.OneToOneField('Alimentos', models.DO_NOTHING, db_column='id_alimento', primary_key=True)
    id_combo = models.ForeignKey('Combos', models.DO_NOTHING, db_column='id_combo')

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


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


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


class Combos(models.Model):
    nombre = models.CharField(max_length=100)
    costo = models.FloatField()
    muestra = models.CharField(max_length=100)
    existo = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'combos'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


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
    existo = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'main_movie'


class Producto(models.Model):
    tipo = models.IntegerField()
    id_venta = models.ForeignKey('Venta', models.DO_NOTHING, db_column='id_venta')
    existo = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'producto'


class Proyecciones(models.Model):
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
    asientos_totales = models.PositiveIntegerField()
    filas = models.PositiveIntegerField()
    columnas = models.PositiveIntegerField()
    number_3d = models.IntegerField(db_column='3d')  # Field renamed because it wasn't a valid Python identifier.
    vip = models.IntegerField()
    existo = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'salas'


class Venta(models.Model):
    serial = models.AutoField(primary_key=True)
    fecha = models.DateField()
    id_cliente = models.ForeignKey(Cliente, models.DO_NOTHING, db_column='id_cliente')
    monto_total = models.FloatField()
    existo = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'venta'
