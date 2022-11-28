import pandas as pd 
import os 
import json 


BASE_URL  = "https://gateway.pinata.cloud/ipfs/QmeKmTJSEmom9x9LFkM2cy5JJXBCA7DoGh6koaCyQw2vJL/"
PATH = "scripts/pixel"  # relatif path cuz we are in the same directory 

dir_list = os.listdir(PATH)

list_animo = [f for f in dir_list if f.endswith(".png")]


for name_animo in list_animo:   
    name_animo  = name_animo.replace(".png","")
    dict_metadata = {
        "attributes": [{
            "trait_type":"Eye color",
            "value": "cappucino"
        }],
        "description": f"The world's most adorable and sensitive {name_animo}",
        "image": f"{BASE_URL}/{name_animo}.png",
        "name": name_animo
    }
    print(dict_metadata)
    # json_object = json.dumps(dict_metadata, indent=4)
    # print(json_object)
# Writing to sample.json
    jsonString = json.dumps(dict_metadata)
    with open(f"scripts/metadatas/metadata_{name_animo}.json", "w") as outfile:
        outfile.write(jsonString)

