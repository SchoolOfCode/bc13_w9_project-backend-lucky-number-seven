CREATE TABLE links (
    Link_id INT PRIMARY KEY,
    week INT,
  	topic TEXT, 
    links VARCHAR (200),
    user_id INT REFERENCES users(user_id)
);


CREATE TABLE users (
user_id SERIAL PRIMARY KEY NOT NULL, 
user_firstname VARCHAR (20) NOT NULL, 
user_surname VARCHAR (20) NOT NULL);

INSERT INTO users (user_id, user_firstname, user_surname)
VALUES (1,'Mukti', 'Zavery'), 
		(2,'Fardosa', 'Diini'), 
		(3,'Evgenii', 'Smazanovich'), 
        (4,'Oli', 'Loftus');
        
        

INSERT INTO
    links (Link_id, week, topic, links, user_id)
VALUES

(1, 1, 'Intro to JS', 'https://classroom.github.com/a/15s9ljmg', 1),
(2,	1,	'Intro to JS',	'https://classroom.github.com/a/_S7B6uV4', 2), 
(3,	1,	'Intro to JS',	'https://classroom.github.com/a/-uKlYUxU', 3),
(4,	1,	'Intro to JS',	'https://classroom.github.com/a/uAQflIXk', 4),
(5,	1,	'Intro to JS',	'https://classroom.github.com/a/IzRslRoC', 1),
(6,	1,	'Intro to JS',	'https://classroom.github.com/a/WYxLwXWQ', 2),
(7,	1,	'Intro to JS',	'https://classroom.github.com/a/wE55cRK6', 3),
(8,	2,	'API fetch',	'https://classroom.github.com/a/Z7pHg0H9', 4),
(9,	2,	'API fetch',	'https://classroom.github.com/a/Bo7CBdab', 1),
(10,	2,	'API fetch',	'https://classroom.github.com/a/EKFd2Uej', 2),
(11,	2,	'API fetch',	'https://classroom.github.com/a/ezf-oTFk', 2),
(12,	2,	'API fetch',	'https://classroom.github.com/a/yoPdbuuT', 3),
(13,	2,	'API fetch',	'https://classroom.github.com/a/MwYNFmbf', 4),
(14,	2,	'API fetch',	'https://classroom.github.com/a/mBzJM5uh', 1),
(15,	3,	'UI/UX',	'https://classroom.github.com/a/RdFFLDd-', 1),
(16,	3,	'UI/UX',	'https://classroom.github.com/a/uKvpHvO2', 2),
(17,	3,	'UI/UX',	'https://cantunsee.space/', 3),
(18,	3,	'UI/UX',	'https://classroom.github.com/a/b28zURxp', 4),
(19,	3,	'UI/UX',	'https://classroom.github.com/a/b28zURxp', 1),
(20,	3,	'UI/UX',	'https://www.frontendmentor.io/challenges?difficulties=1,2', 2),
(21,	3,	'UI/UX',	'https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process', 3),
(22,	4,	'BAckEnd - Create API',	'https://classroom.github.com/a/DsxcpT4l', 4),
(23,	4,	'BAckEnd - Create API',	'https://classroom.github.com/a/DsxcpT4l', 1),
(24,	4,	'BAckEnd - Create API',	'https://classroom.github.com/a/R4LxhN9P', 2),
(25,	4,	'BAckEnd - Create API',	'https://classroom.github.com/a/Y0NSqKdv', 3),
(26,	4,	'BAckEnd - Create API',	'https://classroom.github.com/a/YZi8EjCj', 4),
(27,	4,	'BAckEnd - Create API',	'https://classroom.github.com/a/4u4316a4', 1),
(28,	4,	'BAckEnd - Create API',	'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status', 2),
(29,	4,	'BAckEnd - Create API',	'https://www.npmjs.com/package/morgan', 3)