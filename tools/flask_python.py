from flask import Flask, redirect, url_for, send_from_directory

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.route('/')
def index():
    return redirect(url_for('index_web'))
@app.route('/web')
def index_web():
    return app.send_static_file('index.html')

@app.route('/api/test', methods=["GET"])
def api_test():
    return "Hello", 200

@app.route('/files/<path:path>')
def static_file(path):
    print(path)
    return send_from_directory("/home/dungnt94/ShareFile", path)

app.run(host="0.0.0.0", port=3002)