# Zuju-Digital

## Description:
This application allows the client to get the list of all fixtures and also the Match Days.

## Local Setup:
```
git clone git@github.com:avinara/zuju-digital.git
cd ../path/to/zuju-digital
npm install
npm run start
```

## Database Design:

### 1. Fixtures table
```
   CREATE TABLE `fixtures` (
	  `id` bigint NOT NULL AUTO_INCREMENT,
	  `tournament_id` bigint NOT NULL,
	  `team_1` varchar(40) NOT NULL,
	  `team_2` varchar(40) NOT NULL,
	  `team_1_score` int NOT NULL DEFAULT '0',
	  `team_2_score` int NOT NULL DEFAULT '0',
	  `home_team` varchar(40) NOT NULL,
	  `fixture_time` datetime NOT NULL,
	  `result` varchar(20) NOT NULL DEFAULT 'TBD',
	  `status` varchar(20) NOT NULL DEFAULT 'NOT STARTED',
	  `winning_team` varchar(40) DEFAULT NULL,
	  `losing_team` varchar(40) DEFAULT NULL,
	  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `indx_id` (`id`),
  KEY `indx_tournament_id` (`tournament_id`),
  KEY `indx_fixture_time` (`fixture_time`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

The above query creates the fixtures table with the following parameters.
  * `id`
  * `tournament_id`
  * `team_1` 
  * `team_2` 
  * `team_1_score` 
  * `team_2_score`
  * `home_team`
  * `fixture_time`
  * `result`
  * `status`
  * `winning_team` 
  * `losing_team`
  * `created_at` 


## API Contracts

### 1. List All Fixtures (Scrolling)
```
curl --location --request GET 'http://localhost:3000/v1/fixtures/list?previous_id=5'

Response 200 OK

{
    "code": 0,
    "result": [
        {
            "id": 6,
            "team_1": "Liverpool",
            "team_2": "PSG",
            "home_team": "Liverpool",
            "fixture_time": "2022-12-27T06:00:00.000Z",
            "status": "NOT STARTED",
            "result": "TBD"
        },
        {
            "id": 7,
            "team_1": "Chelsea",
            "team_2": "Tottenam",
            "home_team": "Chelsea",
            "fixture_time": "2022-12-25T06:00:00.000Z",
            "status": "NOT STARTED",
            "result": "TBD"
        },
        {
            "id": 8,
            "team_1": "PSG",
            "team_2": "Liverpool",
            "home_team": "PSG",
            "fixture_time": "2022-12-28T06:00:00.000Z",
            "status": "NOT STARTED",
            "result": "TBD"
        },
        {
            "id": 9,
            "team_1": "Tottenam",
            "team_2": "Chelsea",
            "home_team": "Tottenam",
            "fixture_time": "2022-12-25T06:00:00.000Z",
            "status": "NOT STARTED",
            "result": "TBD"
        },
        {
            "id": 10,
            "team_1": "Tottenam",
            "team_2": "PSG",
            "home_team": "PSG",
            "fixture_time": "2022-12-25T06:00:00.000Z",
            "status": "NOT STARTED",
            "result": "TBD"
        }
     ]
  }

4xx Error Response
{
    "code": -1,
    "error_object": {
    	"error_code" : 400001,
	"error_message": "Error, Unable to insert to DB"
    }
}
```

### 2. List All Match Days (Calendar)

```
curl --location --request GET 'http://localhost:3000/v1/fixtures/list/all/match_days'

Response 200 OK

{
    "code": 0,
    "result": [
        {
            "day": "25",
            "month": "12",
            "year": "2022"
        },
        {
            "day": "26",
            "month": "12",
            "year": "2022"
        },
        {
            "day": "27",
            "month": "12",
            "year": "2022"
        },
        {
            "day": "28",
            "month": "12",
            "year": "2022"
        }
    ]
}

4xx Error Response 

{
    "code": -1,
    "error_object": {
    	"error_code" : 400001,
	"error_message": "Error, Unable to insert to DB"
    }
}
```
 

### 3. Create New Fixtures

```
curl --location --request POST 'http://localhost:3000/v1/fixtures/create' \
--header 'Content-Type: application/json' \
--data-raw '    {
        "tournament_id": 1,
        "team_1": "Liverpool",
        "team_2": "Leicester City",
        "home_team": "Liverpool",
        "fixture_time": "2022-11-19 20:00:00"
    }'

Request 

{
	"tournament_id": 1,
	"team_1": "Liverpool",
	"team_2": "Leicester City",
	"home_team": "Liverpool",
	"fixture_time": "2022-11-19 20:00:00"
}

Response 200 OK

{
    "code": 0,
    "result": "Successfully inserted the fixture into the DB"
}

4xx Error Response 

{
    "code": -1,
    "error_object": {
    	"error_code" : 400001,
	"error_message": "Error, Unable to insert to DB"
    }
}
```

### 4. Update Existing Fixtures

```
curl --location --request POST 'http://localhost:3000/v1/fixtures/update' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id":1,
    "tournament_id":1,
    "team_1_score":1
}'

Request 

{
    "id":1,
    "tournament_id":1,
    "team_1_score":1
}

Response 200 OK

{
    "code": 0,
    "result": "Successfully inserted the fixture into the DB"
}

4xx Error Response 

{
    "code": -1,
    "error_object": {
    	"error_code" : 400001,
	"error_message": "Error, Unable to insert to DB"
    }
}
```
