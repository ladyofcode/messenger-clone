-- Removing old data

TRUNCATE TABLE "users" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "groups" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "messages" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "contacts" RESTART IDENTITY CASCADE;


-- Users

INSERT INTO "users"
("firstName", "lastName", "email", "username", "password", "createdAt", "updatedAt")
VALUES
('george', 'clooney', 'test2@example.com', 'georgey', 'pass', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO "users"
("firstName", "lastName", "email", "username", "password", "createdAt", "updatedAt")
VALUES
('britney', 'spears', 'britt@example.com', 'Britney Tears', 'pass', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


-- Groups

INSERT INTO "groups"
("name", "updatedAt", "createdAt")
VALUES
('test', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


-- Messages

INSERT INTO "messages"
("content", "groupId", "senderId")
VALUES
('Hello, World!', 1, 1);


-- Contacts

INSERT INTO contacts
("user1Id", "user2Id", "createdAt")
VALUES
(1, 2, CURRENT_TIMESTAMP);
