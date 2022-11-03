# zuju-digital

Description:
This application allows the client to get the list of all fixtures and also the Match Days.

Database Design:

CREATE TABLE `tournaments` (
	`id` bigint(10) auto_increment,
	`name` varchar(40) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `indx_id` (`id`),
  KEY `indx_name` (`name`)
);

The above query creates a tournament table with id, name and created_at params

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


The above query creates the fixtures table with the following parameters.
  `id`
  `tournament_id`
  `team_1` 
  `team_2` 
  `team_1_score` 
  `team_2_score`
  `home_team`
  `fixture_time`
  `result`
  `status`
  `winning_team` 
  `losing_team`
  `created_at` 