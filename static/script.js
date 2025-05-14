const routes = [
    {
        route: "/api/item?id=<assetId>",
        description: "Returns information on specified item. Details are cached on the server and updated every minute. This route also returns rap histories for the item.",
        exampleRequest: "api/item?id=1029025",
        exampleResponse: {"data":{"acronym":"CF","best_price":590000,"creation_timestamp":1180591733,"deleted_copies":6032,"demand":4,"discovered_timestamp":1479513600,"favorites":113479,"history":[[1747092600,576775]],"hoarded_copies":178,"hyped":false,"icon":"https://tr.rbxcdn.com/180DAY-0efcf3c392972ede0806e013479fef76/110/110/Hat/Webp/noFilter","name":"The Classic ROBLOX Fedora","original_price":900,"owners":4514,"premium_copies":955,"premium_owners":890,"projected":false,"rap":576775,"rare":false,"sellers":40,"total_copies":10646,"trend":2,"value":540000},"success":true}
    },
    {
        route: "/api/items",
        description: "Returns information on all items. Details are cached on the server and updated every minute. This route does NOT return rap histories for all items, use /api/bulk_history instead.",
        exampleRequest: "api/items",
        exampleResponse: {"success":true,"data":{"1028606":{"name":"Red Baseball Cap","original_price":0,"creation_timestamp":1180509925,"discovered_timestamp":1479513600,"best_price":1199,"favorites":47835,"sellers":60,"rap":1426,"owners":71581,"premium_owners":2503,"total_copies":118946,"deleted_copies":46116,"premium_copies":2727,"hoarded_copies":1982,"acronym":null,"value":null,"demand":null,"trend":null,"projected":false,"hyped":false,"rare":false,"icon":"https://tr.rbxcdn.com/180DAY-7e7243098671c2a06a2f84f09bd9c8bc/110/110/Hat/Webp/noFilter"},"1028720":{"name":"Classic ROBLOX Viking Helm","original_price":125,"creation_timestamp":1180548390,"discovered_timestamp":1479513600,"best_price":13995,"favorites":14772,"sellers":10,"rap":9133,"owners":3020,"premium_owners":236,"total_copies":5472,"deleted_copies":2384,"premium_copies":249,"hoarded_copies":102,"acronym":null,"value":null,"demand":null,"trend":null,"projected":false,"hyped":false,"rare":false,"icon":"https://tr.rbxcdn.com/180DAY-e5ebace48189009a8aa9fdb88e37c89f/110/110/Hat/Webp/noFilter"}}}
    },
    {
        route: "/api/history?id=<assetId>",
        exampleRequest: "api/history?id=1029025",
        description: "Returns rap history for specified item. Details are cached on the server and updated every minute. If an item has more than 50 points, it only returns the last 50 since the maximum points saved on the database is 50 points.",
        exampleResponse: {"success":true,"data":[[1747092600,576775],[1747094400,576775],[1747096200,576775],[1747098000,576775],[1747099800,576775],[1747101600,576775],[1747103400,576775],[1747105200,576775],[1747107000,576775],[1747108800,576775],[1747110600,576775],[1747112400,576775],[1747114200,576775],[1747116000,576775],[1747117800,576775],[1747119600,576775],[1747121400,576775],[1747123200,576775],[1747125000,576775],[1747126800,576775],[1747128600,576775],[1747130400,576775],[1747132200,576775],[1747134000,576775],[1747135800,576775],[1747137600,576775],[1747139400,576775],[1747141200,576775],[1747143000,576775],[1747144800,576775],[1747146600,576775],[1747148400,576775],[1747150200,576775],[1747152000,576775],[1747153800,576775],[1747155600,576775],[1747157400,576775],[1747159200,576775],[1747161000,576775],[1747162800,576775],[1747164600,576775],[1747166400,576775],[1747168200,576775],[1747170000,576775],[1747171800,576775],[1747173600,576775],[1747175400,576775],[1747177200,576775],[1747179000,576775],[1747180800,576775]]}
    },
    {
        route: "/api/bulk_history",
        description: "Returns rap histories on all items. Details are cached on the server and updated every minute. If an item has more than 50 points, it only returns the last 50 since the maximum points saved on the database is 50 points.",
        exampleRequest: "api/bulk_history",
        exampleResponse: {"success":true,"data":{"1028606":[[1747092600,1476],[1747094400,1476],[1747096200,1495],[1747098000,1495],[1747099800,1495],[1747101600,1495],[1747103400,1495],[1747105200,1495],[1747107000,1495],[1747108800,1495],[1747110600,1495],[1747112400,1495],[1747114200,1495],[1747116000,1495],[1747117800,1495],[1747119600,1495],[1747121400,1495],[1747123200,1495],[1747125000,1495],[1747126800,1495],[1747128600,1495],[1747130400,1495],[1747132200,1495],[1747134000,1495],[1747135800,1495],[1747137600,1495],[1747139400,1495],[1747141200,1495],[1747143000,1495],[1747144800,1495],[1747146600,1455],[1747148400,1455],[1747150200,1455],[1747152000,1455],[1747153800,1455],[1747155600,1455],[1747157400,1455],[1747159200,1455],[1747161000,1455],[1747162800,1455],[1747164600,1455],[1747166400,1455],[1747168200,1455],[1747170000,1455],[1747171800,1455],[1747173600,1455],[1747175400,1455],[1747177200,1455],[1747179000,1426],[1747180800,1426]],"1028720":[[1747092600,9133],[1747094400,9133],[1747096200,9133],[1747098000,9133],[1747099800,9133],[1747101600,9133],[1747103400,9133],[1747105200,9133],[1747107000,9133],[1747108800,9133],[1747110600,9133],[1747112400,9133],[1747114200,9133],[1747116000,9133],[1747117800,9133],[1747119600,9133],[1747121400,9133],[1747123200,9133],[1747125000,9133],[1747126800,9133],[1747128600,9133],[1747130400,9133],[1747132200,9133],[1747134000,9133],[1747135800,9133],[1747137600,9133],[1747139400,9133],[1747141200,9133],[1747143000,9133],[1747144800,9133],[1747146600,9133],[1747148400,9133],[1747150200,9133],[1747152000,9133],[1747153800,9133],[1747155600,9133],[1747157400,9133],[1747159200,9133],[1747161000,9133],[1747162800,9133],[1747164600,9133],[1747166400,9133],[1747168200,9133],[1747170000,9133],[1747171800,9133],[1747173600,9133],[1747175400,9133],[1747177200,9133],[1747179000,9133],[1747180800,9133]],"1029025":[[1747092600,576775],[1747094400,576775],[1747096200,576775],[1747098000,576775],[1747099800,576775],[1747101600,576775],[1747103400,576775],[1747105200,576775],[1747107000,576775],[1747108800,576775],[1747110600,576775],[1747112400,576775],[1747114200,576775],[1747116000,576775],[1747117800,576775],[1747119600,576775],[1747121400,576775],[1747123200,576775],[1747125000,576775],[1747126800,576775],[1747128600,576775],[1747130400,576775],[1747132200,576775],[1747134000,576775],[1747135800,576775],[1747137600,576775],[1747139400,576775],[1747141200,576775],[1747143000,576775],[1747144800,576775],[1747146600,576775],[1747148400,576775],[1747150200,576775],[1747152000,576775],[1747153800,576775],[1747155600,576775],[1747157400,576775],[1747159200,576775],[1747161000,576775],[1747162800,576775],[1747164600,576775],[1747166400,576775],[1747168200,576775],[1747170000,576775],[1747171800,576775],[1747173600,576775],[1747175400,576775],[1747177200,576775],[1747179000,576775],[1747180800,576775]],"1031429":[[1747092600,5726071],[1747094400,5726071],[1747096200,5726071],[1747098000,5726071],[1747099800,5726071],[1747101600,5726071],[1747103400,5726071],[1747105200,5726071],[1747107000,5726071],[1747108800,5726071],[1747110600,5726071],[1747112400,5726071],[1747114200,5726071],[1747116000,5726071],[1747117800,5726071],[1747119600,5726071],[1747121400,5726071],[1747123200,5726071],[1747125000,5726071],[1747126800,5726071],[1747128600,5726071],[1747130400,5726071],[1747132200,5726071],[1747134000,5726071],[1747135800,5726071],[1747137600,5726071],[1747139400,5726071],[1747141200,5726071],[1747143000,5726071],[1747144800,5726071],[1747146600,5726071],[1747148400,5726071],[1747150200,5726071],[1747152000,5726071],[1747153800,5726071],[1747155600,5726071],[1747157400,5726071],[1747159200,5726071],[1747161000,5726071],[1747162800,5726071],[1747164600,5726071],[1747166400,5726071],[1747168200,5726071],[1747170000,5726071],[1747171800,5726071],[1747173600,5726071],[1747175400,5726071],[1747177200,5726071],[1747179000,5726071],[1747180800,5726071]]}}
    }
]

// https://stackoverflow.com/questions/4810841/pretty-print-json-using-javascript
function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

function showDoc(n) {
    const item = routes[n]

    animateOpenModal(dquery("#modal"))
    const a = dquery("#modalRoute")
    a.textContent = item.route
    a.href = item.route
    dquery("#modalDescription").textContent = item.description
    dquery("#exampleRequest").innerHTML = `${window.location.href}${item.exampleRequest}`
    dquery("#exampleResponse").innerHTML = syntaxHighlight(JSON.stringify(item.exampleResponse, null, 2))
}

window.onload = function() {
    const modalBackground = dquery("#modal")
    dquery("#indicator").textContent = (last_updated != 'None') ? getRelativeTime(new Date(last_updated * 1000)) : "N/A"

    window.onclick = function(e) {
        if (e.target == modalBackground) {
            animateCloseModal(modalBackground)
        }
    }
}