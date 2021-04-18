from flask import Flask, redirect, url_for

app = Flask(__name__, static_folder='build', static_url_path='/')

@app.route('/')
def index():
    return redirect(url_for('index_web'))
@app.route('/web')
def index_web():
    return app.send_static_file('index.html')

@app.route('/api/test', methods=["GET"])
def api_test():
    return "Hello", 200
app.run(host="0.0.0.0", port=3002)