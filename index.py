# -*- coding: utf-8 -*-
"""
Created on Thu Feb 20 15:12:59 2020

@author: Carlos Escobar
"""

import pandas as pd 
import numpy 
import django 
import json
import sys
   
data = pd.read_csv("dataset.csv")
valores = []
#print(list(data.columns))
#print(json.dumps({"columnas": list(data.columns)}))

if( len(sys.argv) > 1):

    if(sys.argv[1] == "all"):
        jso = json.loads(json.dumps({"columnas": list(data.columns)}))

        for i, j in data.iterrows():
            valores.append(list(j))
        
        temp = json.dumps({"valores": valores})
        temp2 = json.loads(temp)
        jso.update(temp2)
        print(json.dumps(jso).replace("NaN", "\"\""))

    
    if(sys.argv[1] == "id"):
        jso = json.loads(json.dumps({"columnas": list(data.columns)[0]}))

        for i, j in data.iterrows():
            valores.append(j["AcquisitionID"])
                
        temp = json.dumps({"valores": valores})
        temp2 = json.loads(temp)
        jso.update(temp2)
        print(json.dumps(jso).replace("NaN", "\"\""))

    if(sys.argv[1] == "mes"):
        jso = json.loads(json.dumps({"columnas": list(data.columns)[1]}))

        for i, j in data.iterrows():
            valores.append(j["AcquisitionMonth"])
                
        temp = json.dumps({"valores": valores})
        temp2 = json.loads(temp)
        jso.update(temp2)
        print(json.dumps(jso).replace("NaN", "\"\""))

    if(sys.argv[1] == "mesfecha"):
        jso = json.loads(json.dumps({"columnas": list(data.columns)[2]}))

        for i, j in data.iterrows():
            valores.append(j["AcquisitionMonthDate"])
                
        temp = json.dumps({"valores": valores})
        temp2 = json.loads(temp)
        jso.update(temp2)
        print(json.dumps(jso).replace("NaN", "\"\""))

    if(sys.argv[1] == "ano"):
        jso = json.loads(json.dumps({"columnas": list(data.columns)[3]}))

        for i, j in data.iterrows():
            valores.append(j["AcquisitionYear"])
                
        temp = json.dumps({"valores": valores})
        temp2 = json.loads(temp)
        jso.update(temp2)
        print(json.dumps(jso).replace("NaN", "\"\""))

    if(sys.argv[1] == "compania"):
        jso = json.loads(json.dumps({"columnas": list(data.columns)[4]}))

        for i, j in data.iterrows():
            valores.append(j["Company"])
                
        temp = json.dumps({"valores": valores})
        temp2 = json.loads(temp)
        jso.update(temp2)
        print(json.dumps(jso).replace("NaN", "\"\""))

    if(sys.argv[1] == "negocio"):
        jso = json.loads(json.dumps({"columnas": list(data.columns)[5]}))

        for i, j in data.iterrows():
            valores.append(j["Business"])
                
        temp = json.dumps({"valores": valores})
        temp2 = json.loads(temp)
        jso.update(temp2)
        print(json.dumps(jso).replace("NaN", "\"\""))

    if(sys.argv[1] == "pais"):
        jso = json.loads(json.dumps({"columnas": list(data.columns)[6]}))

        for i, j in data.iterrows():
            valores.append(j["Country"])
                
        temp = json.dumps({"valores": valores})
        temp2 = json.loads(temp)
        jso.update(temp2)
        print(json.dumps(jso).replace("NaN", "\"\""))

    if(sys.argv[1] == "valor"):
        jso = json.loads(json.dumps({"columnas": list(data.columns)[7]}))

        for i, j in data.iterrows():
            valores.append(j["Value (USD)"])
                
        temp = json.dumps({"valores": valores})
        temp2 = json.loads(temp)
        jso.update(temp2)
        print(json.dumps(jso).replace("NaN", "\"\""))

        

    if(sys.argv[1] == "derivados"):
        jso = json.loads(json.dumps({"columnas": list(data.columns)[8]}))

        for i, j in data.iterrows():
            valores.append(j["Derived products"])
                
        temp = json.dumps({"valores": valores})
        temp2 = json.loads(temp)
        jso.update(temp2)
        print(json.dumps(jso).replace("NaN", "\"\""))

    

    if(sys.argv[1] == "compradora"):
        jso = json.loads(json.dumps({"columnas": list(data.columns)[9]}))

        for i, j in data.iterrows():
            valores.append(j["ParentCompany"])
                
        temp = json.dumps({"valores": valores})
        temp2 = json.loads(temp)
        jso.update(temp2)
        print(json.dumps(jso).replace("NaN", "\"\""))

    if(sys.argv[1] == "search"):
        if(len(sys.argv) > 2):
            jso = json.loads(json.dumps({"columnas": list(data.columns)}))

            for i, j in data.iterrows():
                if(j["AcquisitionID"] == sys.argv[2]):
                    valores.append(list(j))
            
            temp = json.dumps({"valores": valores})
            temp2 = json.loads(temp)
            jso.update(temp2)
            print(json.dumps(jso).replace("NaN", "\"\""))
        else:
            print("Falta segundo argumento")
            

else:
    print("error")

