from flask import Flask, render_template, request, redirect

app = Flask(__name__, 
            static_folder='.',
            static_url_path='')

students = []

@app.route("/", methods=["GET"])
def index():
    students_with_index = list(enumerate(students))
    return render_template("index.html", students=students_with_index)

@app.route("/add", methods=["POST"])
def add_student():
    name = request.form.get("name", "")
    date = request.form.get("date", "")
    subject = request.form.get("subject", "")
    email = request.form.get("email", "")
    grade = request.form.get("grade", "")
    
    if name and date and subject and email and grade:
        grade = float(grade)
        status = "Passed" if grade >= 75 else "Failed"
    
        students.append({
            "name": name,
            "date": date,
            "subject": subject,
            "email": email,
            "grade": grade,
            "status": status
        })
    
    return redirect("/")

@app.route("/delete/<int:index>", methods=["POST"])
def delete_student(index):
    if 0 <= index < len(students):
        students.pop(index)
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)