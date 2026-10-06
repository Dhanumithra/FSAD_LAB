from django.contrib import admin
from django.urls import path
from student import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.student_info, name='student_info'),
    path('sms/', views.student_list, name='student_list'),
    path('sms/add/', views.add_student, name='add_student'),
    path('sms/update/<int:student_id>/', views.update_student, name='update_student'),
    path('sms/delete/<int:student_id>/', views.delete_student, name='delete_student'),
    path(
        'student-system/',
        views.ex13_home,
        name='ex13_home'
    ),

    path(
        'student-system/students/',
        views.ex13_students,
        name='ex13_students'
    ),

    path(
        'student-system/about/',
        views.ex13_about,
        name='ex13_about'
    ),
]