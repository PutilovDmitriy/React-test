from flask import Flask, jsonify
import os
import psycopg2

firstName, lastName, login, password = "", "", "", ""

conn = psycopg2.connect(dbname='postgres', user='postgres', password='Putilov1', host='localhost')
cursor = conn.cursor()

app = Flask(__name__)


@app.route('/login/ssl/', methods=['GET'])
def get_tasks():
    cursor.execute('SELECT * FROM staff')
    rows = cursor.fetchall()

    for row in rows:
        # Первое меню
        firstName += row[0]
        lastName += row[2]
        login += row[3]
        password += row[4]
    return()

if __name__ == '__main__':
    app.run(debug=True)