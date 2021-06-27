from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
@app.route("/en/")
def hello_world():
    return render_template("index_en.html")


if __name__ == "__main__":
    app.run()
