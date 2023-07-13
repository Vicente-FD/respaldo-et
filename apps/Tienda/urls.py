from django.urls import path
from . import views

urlpatterns = [
    path('',views.cargarIndex),
    path('carrito2',views.CargarProductosCarrito),
    path('suscripcion',views.cargarSuscripcion),
    path('nosotras',views.cargarNosotras),
    path('terms',views.cargarTerms),
    path('agregarProducto',views.CargarAgregarProducto),
    path('agregarProductoForm',views.agregarProducto),
    path('editarProductoForm', views.editarProductoForm),
    path('editarProducto/<sku>', views.cargarEditarProducto),
    path('eliminarProducto/<sku>', views.eliminarProducto),
    path('validarLogin',views.validarLogin, name='validarLogin'),
    path('actualizar_stock/', views.actualizar_stock, name='actualizar_stock')
]

