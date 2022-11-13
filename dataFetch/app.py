from flask import Flask, jsonify
from flask_cors import CORS
# import collections
# from collections import abc
# collections.MutableMapping = abc.MutableMapping
# collections.Mapping = abc.Mapping
# collections.Sequence = abc.Sequence
# from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# client = MongoClient("mongodb://localhost:27017", connect=False)
# db = client.bostonhacks
# questionCollection = db.questionCollection


@app.route('/getDepression', methods=['GET'])
def getDepressionTimeline():
    # result = questionCollection.find_one({"question": "Ever told you that you have a form of depression?"})
    result = {
        "question": "Ever told you that you have a form of depression?",
        "yearList": [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        "percentageList": [0.1812508562680809, 0.18521903202113918, 0.1957961416642672, 0.19089408195283022, 0.19089444510180492, 0.17601937077992985, 0.19931488507029682, 0.18809343935925196, 0.1904975864330869, 0.18978010963273284, 0.19593154621409684]
    }
    return result

@app.route('/getGenderDepression', methods=['GET'])
def getGenderDepression():
    # result = questionCollection.find_one({"question": "Ever told you that you have a form of depression?"})
    result = {
        "question": "Ever told you that you have a form of depression?",
        "yearList": [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        "fpercentageList": [0.2117042792402772, 0.21737792694183428, 0.2327051633910116, 0.22765162296736322, 0.22788502145092732, 0.21158139721227706, 0.24035102462214433, 0.2282707662872224, 0.23248539349570604, 0.2345536175234162, 0.24349482153556448],
        "mpercentageList": [0.1336917090570091, 0.13722798321133078, 0.14213778668092059, 0.13877504257302511, 0.14013050658719356, 0.12909504658585108, 0.14706864113612916, 0.13914557861814045, 0.13958418349771318, 0.1363231298281678, 0.14074443500760433]
    }
    return result

@app.route('/getSmoker', methods=['GET'])
def getSmokerTimeline():
    # result = questionCollection.find_one({"question": "Ever told you that you have a form of depression?"})
    result = {
        "question": "Adults who are current smokers (variable calculated from one or more BRFSS questions)",
        "yearList": [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        "percentageList": [0.1682776827530438, 0.1634486279186489, 0.16094524597248766, 0.14980358394504406, 0.14559543422537138, 0.14795204474109946, 0.14732329084588644, 0.14584580873896225, 0.14147127725607192, 0.13801283767116457, 0.1303001239342979]
    }
    return result


@app.route("/", methods=['GET'])
def hello():
	return jsonify({"Hello": "World"})


if __name__ == "__main__":
	app.run(port=5000, debug=True)
