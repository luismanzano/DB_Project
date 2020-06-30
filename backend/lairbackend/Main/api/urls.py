
from django.urls import path
from .views import MovieViewSet
from rest_framework.routers import DefaultRouter
# from .views import MovieListView, MovieDetailView, MovieCreateView, MovieUpdateView

router = DefaultRouter()
router.register(r'movies', MovieViewSet, basename='movies')
urlpatterns = router.urls


# urlpatterns = [
#      path('', MovieListView.as_view()),
#      path('<pk>', MovieDetailView.as_view()),
#      path('create/', MovieCreateView.as_view()),
#      path('<pk>/update/', MovieCreateView.as_view()),
# ]



