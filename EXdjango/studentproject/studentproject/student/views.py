from django.shortcuts import render,redirect
from .models import Student

def student_info(request):
    student = {
        'college': 'COIMBATORE INSTITUTE OF TECHNOLOGY',
        'name': 'DHANUMITHRA T',
        'roll_number': '2403717672622011',
        'course': 'M.Sc Software Systems',
        'year': 'III Year',
        'welcome': 'Welcome to CIT...!'
    }

    return render(request, 'student.html', student)


students = [
    {
        'id': 1,
        'name': 'RAM',
        'roll_number': '101',
        'course': 'M.Sc Software Systems',
        'year': 'II Year'
    },
    {
        'id': 2,
        'name': 'PRIYA',
        'roll_number': '102',
        'course': 'M.Sc Software Systems',
        'year': 'II Year'
    },
    {
        'id': 3,
        'name': 'ARUN',
        'roll_number': '103',
        'course': 'M.Sc Software Systems',
        'year': 'II Year'
    }
]
def student_list(request):
    return render(request, 'student_list.html', {
        'students': students
    })

def add_student(request):

    if request.method == 'POST':

        name = request.POST.get('name')
        roll_number = request.POST.get('roll_number')
        course = request.POST.get('course')
        year = request.POST.get('year')

        if not name or not roll_number or not course or not year:
            return render(request, 'add_student.html', {
                'error': 'All fields are required.'
            })

        new_id = max([student['id'] for student in students], default=0) + 1

        students.append({
            'id': new_id,
            'name': name,
            'roll_number': roll_number,
            'course': course,
            'year': year
        })

        return redirect('student_list')

    return render(request, 'add_student.html')

def update_student(request, student_id):

    student = next(
        (student for student in students if student['id'] == student_id),
        None
    )

    if student is None:
        return render(request, 'update_student.html', {
            'error': 'Student does not exist.'
        })

    if request.method == 'POST':

        name = request.POST.get('name')
        roll_number = request.POST.get('roll_number')
        course = request.POST.get('course')
        year = request.POST.get('year')

        if not name or not roll_number or not course or not year:
            return render(request, 'update_student.html', {
                'student': student,
                'error': 'All fields are required.'
            })

        student['name'] = name
        student['roll_number'] = roll_number
        student['course'] = course
        student['year'] = year

        return redirect('student_list')

    return render(request, 'update_student.html', {
        'student': student
    })

def delete_student(request, student_id):

    student = next(
        (student for student in students if student['id'] == student_id),
        None
    )

    if student is None:
        return render(request, 'student_list.html', {
            'students': students,
            'error': 'Student does not exist.'
        })

    students.remove(student)

    return redirect('student_list')

def ex13_home(request):
    return render(request, 'ex13_home.html')


def ex13_students(request):
    students = Student.objects.all()

    return render(request, 'ex13_students.html', {
        'students': students
    })


def ex13_about(request):
    return render(request, 'ex13_about.html')