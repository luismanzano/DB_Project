# Generated by Django 3.0.7 on 2020-07-10 05:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Main', '0003_alimentos_asientosocupados_cliente_entradas_mainmovie_producto_proyecciones_salas_venta'),
    ]

    operations = [
        migrations.CreateModel(
            name='AliCombo',
            fields=[
                ('id_alimento', models.AutoField(primary_key=True, serialize=False)),
                ('id_combo', models.IntegerField()),
            ],
            options={
                'db_table': 'ali_combo',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Combos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('costo', models.FloatField()),
            ],
            options={
                'db_table': 'combos',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Genero',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('genero', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'genero',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Idioma',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idioma', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'idioma',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='PeliGenero',
            fields=[
                ('pelis', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, primary_key=True, serialize=False, to='Main.MainMovie')),
            ],
            options={
                'db_table': 'peli_genero',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='PeliIdioma',
            fields=[
                ('peli', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, primary_key=True, serialize=False, to='Main.MainMovie')),
            ],
            options={
                'db_table': 'peli_idioma',
                'managed': False,
            },
        ),
        migrations.RemoveField(
            model_name='movie',
            name='genre',
        ),
        migrations.RemoveField(
            model_name='movie',
            name='language',
        ),
    ]