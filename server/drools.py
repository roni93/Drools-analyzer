import json

from Rule_Factory import build_rules
from Rule_From_File_Factory import rules_from_files

lines = [line.rstrip('\n') for line in open('digitalCommonsDocumentExport_ToEsploro.dslr')]
rules_lines = rules_from_files(lines)
f = build_rules(rules_lines)
json_string = [ob.__dict__ for ob in f]


from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)

api = Api(app)



class Drools(Resource):
    json_string_all = []

    def get(self):

        return json_string,200, {'Access-Control-Allow-Origin': '*'}  # Fetches first column that is Employee ID
    def post(self):
        lines = [line.rstrip('\n') for line in open('digitalCommonsDocumentExport_ToEsploro.dslr')]

        rules_lines = rules_from_files(lines)
        f = build_rules(rules_lines)
        json_string = [ob.__dict__ for ob in f]
        return  json_string,200, {'Access-Control-Allow-Origin': '*'}  # Fetches first column that is Employee ID

class DroolsByType(Resource):
    def get(self, type):
        return getDroolsByType(type), 200, {'Access-Control-Allow-Origin': '*'}  # Fetches first column that is Employee ID


def getDroolsByType(type):
    if type == "all":
        return json_string
    drools_by_type = []
    for drool in json_string:
        if type.lower() in drool["rule_name"].lower() or type.lower() in drool["condition"].lower():
            drools_by_type.append(drool)
    return drools_by_type
api.add_resource(Drools, '/Drools')  # Route_1
api.add_resource(DroolsByType, '/Drools/<type>')  # Route_1


if __name__ == '__main__':

    app.run(port='5002')
