from flask import render_template
from scrape import update_rap
from threading import Thread
from flask import Response
from flask import request
from flask import Flask
import ujson
import json
import time

def update_thread():
    global last_updated, meta_cache, history_cache
    while True:
        time.sleep(60)
        try:
            last_updated, meta_cache, history_cache = update_rap()
        except Exception as e:
            print('Error while updating', e)
        

app = Flask(__name__)

@app.route('/')
def app_index():
    return render_template('index.html', last_updated=last_updated)

@app.route('/last_updated')
def api_last_updated():
    return str(last_updated)

@app.route('/api/item')
def api_item():
    _id = request.args.get('id')
    if _id and _id in meta_cache:
        data = meta_cache[_id]
        data.update({'history': history_cache[_id]})
        return Response(ujson.dumps({'success': True, 'data': data}), mimetype='application/json')
    return {
        'success': False,
        'message': 'Invalid or missing assetId'
    }

@app.route('/api/items')
def api_items():
    return Response(ujson.dumps({'success': True, 'data': meta_cache}), mimetype='application/json')

@app.route('/api/history')
def api_history():
    _id = request.args.get('id')
    if _id and _id in history_cache:
        return Response(ujson.dumps({'success': True, 'data': history_cache[_id]}), mimetype='application/json')
    return {
        'success': False,
        'message': 'Invalid or missing assetId'
    }

@app.route('/api/bulk_history')
def api_bulk_history():
    return Response(ujson.dumps({'success': True, 'data': history_cache}), mimetype='application/json')

last_updated = None
meta_cache = json.load(open('data/rolimons.json', 'r'))
history_cache = json.load(open('data/rap.json', 'r'))
Thread(target=update_thread, daemon=True).start()
# app.run(host='0.0.0.0', port=5005)