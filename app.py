from flask import Flask, render_template, request, redirect

<<<<<<< HEAD
app = Flask(_name_)
=======
app = Flask(__name__)
>>>>>>> acd3b85dbea96a2d30b2624a1a05a3269a9fffa9

students = []

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        name = request.form["name"]
        grade = float(request.form["grade"])
        status = "Passed" if grade >= 75 else "Failed"
    
        students.append({"name": name, "grade": grade, "status": status})
        return redirect("/")
    return render_template("index.html", students=students)

<<<<<<< HEAD
if _name_ == "_main_":
=======
if __name__ == "__main__":
>>>>>>> acd3b85dbea96a2d30b2624a1a05a3269a9fffa9
    app.run(debug=True)