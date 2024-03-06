SET FOREIGN_KEY_CHECKS=0;
DROP TABLE if exists events;
DROP TABLE if exists user_faves;
DROP TABLE if exists hobbies;
DROP TABLE if exists users;
SET FOREIGN_KEY_CHECKS=1; 


CREATE TABLE users(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(40) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);
CREATE TABLE `user_faves`(
    `user_id` BIGINT UNSIGNED NOT NULL,
    `event_id` BIGINT UNSIGNED NOT NULL
);

CREATE TABLE events(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `event_name` VARCHAR(40) NOT NULL,
    `event_price` INT,
    `event_location` VARCHAR(40),
    `event_description` LONGTEXT,
    `event_time` TIME,
    `event_date` DATE,
    `hobby_id` BIGINT UNSIGNED,
    `skill_level` VARCHAR(40),
    `equip_needed` TINYINT(1)
);
CREATE TABLE `hobbies`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `description` LONGTEXT,
    `hobby_category` TEXT NOT NULL
);
ALTER TABLE
    `user_faves` ADD INDEX `user_faves_user_id_index`(`user_id`);
ALTER TABLE
    `user_faves` ADD INDEX `user_faves_event_id_index`(`event_id`);

ALTER TABLE
    `user_faves` ADD CONSTRAINT `user_faves_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE;
ALTER TABLE
    `user_faves` ADD CONSTRAINT `user_faves_event_id_foreign` FOREIGN KEY(`event_id`) REFERENCES `events`(`id`) ON DELETE CASCADE;
ALTER TABLE
    `events` ADD CONSTRAINT `events_hobby_id_foreign` FOREIGN KEY(`hobby_id`) REFERENCES `hobbies`(`id`) ON DELETE CASCADE;

INSERT INTO hobbies (hobby_category) VALUES ('Outdoor sports');
INSERT INTO hobbies (hobby_category) VALUES ('Indoor sports');
INSERT INTO hobbies (hobby_category) VALUES ('Food and Drink');
INSERT INTO hobbies (hobby_category) VALUES ('Music');
INSERT INTO hobbies (hobby_category) VALUES ('Games');
INSERT INTO hobbies (hobby_category) VALUES ('Art and Creativity');
INSERT INTO hobbies (hobby_category) VALUES ('Volunteering and Community');
INSERT INTO hobbies (hobby_category) VALUES ('TV and Film');
INSERT INTO hobbies (hobby_category) VALUES ('Dance and Theatre');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Football Game',
 '5', 
 'Madrid', 
 'Relaxed football game - all abilities welcome', 
 '2024-03-07', 
 '21:00:00', 
 '1', 
 'all-levels', 
 '0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Running club', 
'0', 
'Madrid', 
'A group that gets together to train for upcoming races', 
'2024-03-10', 
'18:00:00', 
'1', 
'intermediate', 
'1');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Hockey League', 
'15', 
'York', 
'Get involved in our relaxed hockey league - join as an established team or come solo and we will place you!', 
'2024-02-28', 
'19:00:00', 
'1', 
'beginners', 
'1');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Bouldering group', 
'10', 
'Climbing centre, Madrid', 
'relaxed weekly climbing session - can work on problems together or go solo. Shoes and Chalk provided', 
'2024-02-28', 
'21:00:00', 
'2', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Wine Tasting', 
'20', 
'Barcelona', 
'Regional wine-tastings organised by academy-certified sommeliers. Over 18s only', 
'2024-04-01', 
'21:00:00', 
'3', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Cookery class', 
'20', 
'Madrid', 
'Learn how to cook Spanish culinary classics in a relaxed, welcoming environment.', 
'2024-03-01', 
'16:00:00', 
'3', 
'beginners', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Chocolate making Course', 
'45', 
'Lucerne', 
'Ever wondered how chocolate was made? Join our day-long course to learn all things chocolate and become a skilled chocolatier', 
'2024-04-30', 
'09:00:00', 
'3', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Guitar Lessons', 
'12', 
'London', 
'Guitar lessons for total beginners - group lessons that take place weekly', 
'2024-03-15', 
'17:00:00', 
'4', 
'beginners', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Open mic nights', 
'0', 
'Glasgow', 
'Relaxed open-mic night for all musicians', 
'2024-03-10', 
'19:00:00', 
'4', 
'intermediate', 
'1');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Gig group', 
'0', 
'Barcelona', 
'Want to go to gigs but have no one to go with? Join our community of music lovers to meet new friends and enjoy music together', 
'2024-04-17', 
'19:00:00', 
'4', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Chess club', 
'0', 
'Berlin', 
'Open sessions at the local chess club that happen on week-nights, come to play, improve your skill and meet new people', 
'2024-02-29', 
'19:00:00', 
'5', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('D&D Campaign', 
'0', 
'Cardiff', 
'New Dungeons and Dragons campaign hosted by the Cardiff D&D society - newcomers welcome', 
'2024-03-02', 
'20:00:00', 
'5', 
'intermediate', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Fornite group', 
'0', 
'Berlin', 
'Play fortnite with new friends', 
'2024-03-21', 
'20:00:00', 
'5', 
'all-levels', 
'1');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Knitting and Cake', 
'3', 
'Madrid', 
'Come and join this knitting group at the Green cafe - 3 euro to eat as much cake as possible while working on your own projects and chatting', 
'2024-02-29', 
'14:00:00', 
'6', 
'all-levels', 
'1');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Pottery class', 
'10', 
'Lucerne', 
'Learn how to make your own pottery - mugs, planters, tableware, or anything your creativity can create', 
'2024-03-08', 
'17:00:00', 
'6', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Paint and Wine', 
'16', 
'Dublin', 
'Let your creativity flow with a bottle of Merlot', 
'2024-03-08', 
'19:00:00', 
'6', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Soup kitchen', 
'0', 
'Glasgow', 
'Come and volunteer at our weekly soup kitchen, providing meals for those who attend. Safety training provided', 
'2024-03-09', 
'18:00:00', 
'7', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Dog Shelter Volunteering', 
'0', 
'Palma', 
'Local dog shelter looking for volunteers to help with dog-care, including walking, feeding, playing and cleaning out pens', 
'2024-04-04', 
'10:00:00', 
'7', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Community Garden', 
'0', 
'Berlin', 
'No previous gardening skills needed - come help us care for our crops and plant vegetables', 
'2024-04-04', 
'10:00:00', 
'7', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Movie club', 
'2', 
'York', 
'Think book club, but with movies! Every week we choose a movie to watch and then meet up to discuss with snacks and drinks', 
'2024-04-05', 
'21:30:00', 
'8', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Trekkie drinks', 
'0', 
'London', 
'A chance for all London-based trekkies to meet up over good food and discuss the final frontier and anything else', 
'2024-03-19', 
'20:00:00', 
'8', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Film festival', 
'11', 
'York', 
'Film festival showing new releases and forgotten gems', 
'2024-03-29', 
'11:00:00', 
'8', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Advanced tap-dance classes', 
'10', 
'Palma', 
'Train with world-famous instructor, develop techniques', 
'2024-03-27', 
'20:00:00', 
'9', 
'advanced', 
'1');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Jazz dance class', 
'7', 
'Barcelona', 
'Learn a new skill! Relaxed beginners jazz dance classes - come solo or with a partner', 
'2024-03-20', 
'19:30:00', 
'9', 
'beginners', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Improv group', 
'10', 
'Berlin', 
'Develop your improv skills in an open and relaxed environment - all you need to bring is your imagination', 
'2024-04-05', 
'17:30:00', 
'9', 
'all-levels', 
'0');

INSERT INTO users (username, password) VALUES ('testUser', 'testpassword');

