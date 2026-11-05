import json

def lambda_handler(event, context):

    route = event.get("routeKey", "")

    # GET /projects
    if route == "GET /projects":

        projects = [
            {
                "name": "Family Health Dashboard",
                "technology": "React Native / JavaScript"
            },
            {
                "name": "Restaurant Automation System",
                "technology": "Java / JavaFX"
            },
            {
                "name": "Library Management System",
                "technology": "SQL"
            }
        ]

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps(projects)
        }

    # POST /project
    elif route == "POST /project":

        raw_body = event.get("body")

        if raw_body:
            body = json.loads(raw_body)
        else:
            body = {}

        name = body.get("name", "Guest")
        project = body.get("project", "a project")

        response = {
            "message": f"Thanks {name}! You selected {project}."
        }

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps(response)
        }

    return {
        "statusCode": 404,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": json.dumps({
            "message": "Route not found."
        })
    }