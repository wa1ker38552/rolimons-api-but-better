from bs4 import BeautifulSoup
import requests
import ujson
import json
import time

# [item_name, acronym, rap, value, default_value, demand, trend, projected, hyped, rare]


def get_rolimons_meta():
    '''r = requests.get('https://api.rolimons.com/items/v1/itemdetails')
    items = r.json()['items']
    return {
        i: {
            'name': items[i][0],
            'acryonym': items[i][1] if items[i][1] else None,
            'rap': items[i][2],
            'value': items[i][3] if items[i][3] != -1 else None,
            'demand': items[i][5] if items[i][5] != -1 else None,
            'trend': items[i][6] if items[i][6] != -1 else None,
            'projected': True if items[i][7] != -1 else False,
            'hyped': True if items[i][7] != -1 else False,
            'rare': True if items[i][7] != -1 else False
        } for i in items
    }'''

    r = requests.get('https://www.rolimons.com/itemtable')
    soup = BeautifulSoup(r.text, 'lxml')
    script = soup.find_all('script')[-2].get_text()
    script = script.split('var item_details = ')[1].split(';')[0]
    raw = json.loads(script)
    return {
        i: {
            'name': raw[i][0],
            'original_price': raw[i][2],
            'creation_timestamp': raw[i][3],
            'discovered_timestamp': raw[i][4],
            'best_price': raw[i][5],
            'favorites': raw[i][6],
            'sellers': raw[i][7],
            'rap': raw[i][8],
            'owners': raw[i][9],
            'premium_owners': raw[i][10],
            'total_copies': raw[i][11],
            'deleted_copies': raw[i][12],
            'premium_copies': raw[i][13],
            'hoarded_copies': raw[i][14],
            'acronym': raw[i][15],
            'value': raw[i][16],
            'demand': raw[i][17],
            'trend': raw[i][18],
            'projected': True if raw[i][19] else False,
            'hyped': True if raw[i][20] else False,
            'rare': True if raw[i][21] else False,
            'icon': raw[i][24]
        } for i in raw
    }

def save_rolimons_meta():
    with open('data/rolimons.json', 'w') as file:
        file.write(json.dumps(get_rolimons_meta()))

def get_item_details(_id):
    success = False

    while not success:
        r = requests.get(f'https://www.rolimons.com/item/{_id}', headers={
            'referer': 'https://www.rolimons.com/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        })
        success = r.status_code == 200
        if success:
            soup = BeautifulSoup(r.text, 'lxml')
            script = soup.find_all('script')[-2].get_text()
            script = script.split(' var history_data = ')[1].split(';')[0]
            data_raw = json.loads(script)
            
            points = []
            for i, rap in enumerate(data_raw['rap']):
                points.append([data_raw['timestamp'][i], rap])
        else:
            print('Failed to fetch, retrying in 30 sec')
            time.sleep(30)
    return points

def save(path, data):
    with open(path, 'w') as file:
        file.write(json.dumps(data))

def scrape_all_item_history(refresh=False, limit=50):
    if refresh:
        save_rolimons_meta()

    items = json.load(open('data/rolimons.json', 'r'))
    data = json.load(open('data/rap.json', 'r'))
    for i, item in enumerate(items):
        if item not in data:
            item_data = get_item_details(item)
            
            if len(item_data) < limit:
                data[item] = item_data
            else:
                data[item] = item_data[-limit:]

            save('data/rap.json', data)
            print(f'[{i+1}/{len(items)}] - {items[item]["name"]}')
            time.sleep(.5)

def append_history(_id, limit=50):
    data = json.load(open('data/rap.json', 'r'))
    item_data = get_item_details(str(_id))
    if len(item_data) < limit:
        data[str(_id)] = item_data
    else:
        data[str(_id)] = item_data[-limit]
    save('data/rap.json', data)
    
def update_rap():
    data = get_rolimons_meta()
    history = ujson.load(open('data/rap.json', 'r'))
    with open('data/rolimons.json', 'w') as file:
        ujson.dump(data, file)

    i = 0
    for item in data:
        if item in history:
            if data[item]['rap'] != history[item][-1][1]:
                history[item].append([round(time.time()), data[item]['rap']])

                if len(history[item]) > 50:
                    history[item] = history[item][-50:]
                i += 1
    with open('data/rap.json', 'w') as file:
        ujson.dump(history, file)
    print(f'Updated {i} items')
    return time.time()

