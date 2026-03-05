from django.contrib import admin
from django.urls import path, include
from Administrator import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('Administrator.urls')),  # include app urls
    path('dashboard/', views.dashboard, name='dashboard'),
    path('delete_post/<int:post_id>/', views.delete_post, name='delete_post'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)