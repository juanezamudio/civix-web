import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('2d713252-c421-4722-bc53-418618178fde', '1Onie93@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv78901', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('e71a6dee-022d-4691-a659-7b4949f84f81', '10Mauricio.Kling@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=12', 'inv44556', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('117f5ca4-b28e-4b0e-b370-4f14fc180996', '19Jodie_Casper82@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inv12345', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('691023d4-f271-48a2-8e14-3cfaa2427d8b', '28Sharon_Kuhlman45@yahoo.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=30', 'inv12345', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('b80d018e-0b96-4caf-93b6-da6f0858f30d', '37Jakayla_Hammes@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=39', 'inv12345', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('b7cedeab-ca6b-4ef7-9d8e-9ab1f22bcc57', '46Jan_Armstrong-Dickinson88@yahoo.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=48', 'inv78901', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('9468c34a-f548-4689-ba95-d81317160775', '64Josh_Langworth57@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv12345', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('f3b79d0e-f99f-4685-8d8f-a765f70398c5', '73Chyna.Brakus@yahoo.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv12345', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('2feeb4b4-c9d4-4942-8ae0-81e25f986285', '82Hosea_Ferry64@hotmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=84', 'inv44556', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('10e529af-676b-4179-8ade-d2a441047f98', 'z9y8x7w6v5u4t3s2r1q0', '{"deputo":"vereor","atrox":"cinis","acer":"annus","cibo":"terebro","summa":"abutor"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('a122d4fa-97f6-44d9-b023-6992275a42db', 'm1n2o3p4q5r6s7t8u9v0', '{"depopulo":"consuasor","conatus":"adinventitias","ater":"peior","dedecor":"congregatio","decumbo":"velociter"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('a7e82c2a-d793-43b0-b77e-9b4860c85ce4', 'k9j8i7h6g5f4e3d2c1b0', '{"alii":"thymbra","videlicet":"circumvenio","deripio":"abduco","copiose":"utpote"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('7ec2db7c-545c-435f-847f-bbb08752fe74', 'z9y8x7w6v5u4t3s2r1q0', '{"decens":"cetera","temeritas":"cedo","alter":"nihil","urbs":"adulatio","tum":"denuncio"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('b8e6d940-2426-4d09-8233-c8860e049f69', 'z9y8x7w6v5u4t3s2r1q0', '{"aut":"arx","verto":"deludo","amet":"patria","tactus":"tandem","varietas":"thesaurus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('144a955c-8bb5-43a5-97da-f2d8d43f5a4e', 'a1b2c3d4e5f6g7h8i9j0', '{"defaeco":"cubo","allatus":"contigo","aestas":"artificiose"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('ae61ea1d-0117-459a-9ba5-be9af964dd01', 'k9j8i7h6g5f4e3d2c1b0', '{"toties":"coaegresco","cena":"texo","carpo":"apparatus","arca":"considero"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('c68daa9a-8d22-4f6f-ab93-ef884416f49f', 'z9y8x7w6v5u4t3s2r1q0', '{"sustineo":"videlicet","brevis":"crinis","colligo":"confugo","arbitro":"tredecim","quia":"articulus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('f1a27f09-7586-4e4f-8f7c-66a759476e78', 'k9j8i7h6g5f4e3d2c1b0', '{"amita":"sperno","suscipit":"thymum","claro":"turba","bellum":"peccatus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('d4e05de7-8434-4c4b-a53e-7747265f9c54', 'm1n2o3p4q5r6s7t8u9v0', '{"somniculosus":"circumvenio","facere":"dolore","praesentium":"omnis","unde":"decimus","constans":"dedico"}'::jsonb);

INSERT INTO "Category" ("id", "name", "description") VALUES ('19ed15e6-5f85-49f7-854b-bfabf29fcb3d', 'Civic Education', 'Educational materials on civic engagement and local government.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('0b72ab3c-1906-40fe-8d12-1396596df89e', 'Civic Education', 'Opportunities to volunteer and give back to the community.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('b85f3f69-fe09-4f47-8911-aa7907d45231', 'Civic Education', 'Events happening in your local community.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('43f1a5d0-ec41-47fe-b480-68a59b6a4de3', 'Community Events', 'Resources available to residents in the local area.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('53066b19-3b77-4fed-9cee-6047f514b55e', 'Public Meetings', 'Events happening in your local community.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('6e3c5c43-fb20-4d23-ae20-8d2410be2316', 'Public Meetings', 'Events happening in your local community.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('f505fc41-a6ab-46d7-89c5-754d7f00f0e4', 'Community Events', 'Resources available to residents in the local area.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('44ddeff6-17fc-420f-a3e8-f21cd252be29', 'Civic Education', 'Meetings held by local government bodies.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('1f838527-67fd-4e9e-be21-b30282f291e2', 'Civic Education', 'Opportunities to volunteer and give back to the community.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('e4118d51-ab53-4581-af93-b965719cd295', 'Volunteer Opportunities', 'Resources available to residents in the local area.');

INSERT INTO "Location" ("id", "name", "address", "city", "state", "country", "postalCode", "latitude", "longitude") VALUES ('5cbb6297-f20d-4c49-82fe-b333290b2e45', 'Community Center', '152 443 E 6th St, New York, NY 10009', 'Springfield', 'CA', 'USA', '78901', 806, 151);
INSERT INTO "Location" ("id", "name", "address", "city", "state", "country", "postalCode", "latitude", "longitude") VALUES ('8b3be99f-4f1b-4522-a0df-18e9f8f4a430', 'Town Square', '161 443 E 6th St, New York, NY 10009', 'Rivertown', 'FL', 'USA', '78901', 968, 856);
INSERT INTO "Location" ("id", "name", "address", "city", "state", "country", "postalCode", "latitude", "longitude") VALUES ('e2aa7d64-e179-44ed-93e0-d4cd98b07534', 'Community Center', '170 136 E 13th St, New York, NY 10003', 'Hillview', 'NY', 'USA', '12345', 392, 439);
INSERT INTO "Location" ("id", "name", "address", "city", "state", "country", "postalCode", "latitude", "longitude") VALUES ('4b7490f7-26b2-447d-8c4c-43fa5b36c0cd', 'Community Center', '179 330 W Broadway, New York, NY 10013', 'Rivertown', 'FL', 'USA', '12345', 786, 785);
INSERT INTO "Location" ("id", "name", "address", "city", "state", "country", "postalCode", "latitude", "longitude") VALUES ('9c354280-abc5-4a44-9d26-a4316d974e38', 'Recreation Park', '188 18 Spring St, New York, NY 10012', 'Lakeside', 'FL', 'USA', '67890', 208, 419);
INSERT INTO "Location" ("id", "name", "address", "city", "state", "country", "postalCode", "latitude", "longitude") VALUES ('35faec5b-9975-4bbd-8669-62d45b975f1b', 'City Hall', '197 91 Christopher St, New York, NY 10014', 'Hillview', 'FL', 'USA', '44556', 252, 855);
INSERT INTO "Location" ("id", "name", "address", "city", "state", "country", "postalCode", "latitude", "longitude") VALUES ('66c28bf5-e80c-4156-a5c0-baf95b205882', 'Community Center', '206 430 Lafayette St, New York, NY 10003', 'Greenville', 'IL', 'USA', '78901', 706, 819);
INSERT INTO "Location" ("id", "name", "address", "city", "state", "country", "postalCode", "latitude", "longitude") VALUES ('8da64032-bc53-4809-9728-850bb9dd6423', 'Town Square', '215 136 E 13th St, New York, NY 10003', 'Greenville', 'TX', 'USA', '12345', 948, 173);
INSERT INTO "Location" ("id", "name", "address", "city", "state", "country", "postalCode", "latitude", "longitude") VALUES ('81832b66-b7c1-41a3-8a91-81a96cc4249f', 'Community Center', '224 430 Lafayette St, New York, NY 10003', 'Greenville', 'NY', 'USA', '44556', 515, 928);
INSERT INTO "Location" ("id", "name", "address", "city", "state", "country", "postalCode", "latitude", "longitude") VALUES ('9052c5c9-dead-4ba1-8cad-9142ab571c65', 'Public Library', '233 91 Christopher St, New York, NY 10014', 'Springfield', 'IL', 'USA', '78901', 934, 360);

INSERT INTO "Event" ("id", "name", "description", "startDate", "endDate", "categoryId", "locationId") VALUES ('2167b95f-f0a4-4ce5-a254-240541b646ec', 'City Council Meeting', 'Learn about safety measures and meet your neighbors at this informative meeting.', '2025-09-09T02:25:36.204Z', '2024-07-01T19:33:04.715Z', '1f838527-67fd-4e9e-be21-b30282f291e2', '9052c5c9-dead-4ba1-8cad-9142ab571c65');
INSERT INTO "Event" ("id", "name", "description", "startDate", "endDate", "categoryId", "locationId") VALUES ('c62c0bde-d84e-4b48-80f5-18bab27aed8d', 'Public Budget Hearing', 'Help keep our community clean and beautiful by participating in this event.', '2025-08-27T18:45:45.836Z', '2024-10-10T09:06:16.611Z', '44ddeff6-17fc-420f-a3e8-f21cd252be29', '9052c5c9-dead-4ba1-8cad-9142ab571c65');
INSERT INTO "Event" ("id", "name", "description", "startDate", "endDate", "categoryId", "locationId") VALUES ('ca8f288a-c29b-4c93-866e-53ad927f80f1', 'Local Business Fair', 'Discover local businesses and enjoy a day of networking and fun.', '2025-02-14T20:07:22.517Z', '2025-05-01T07:57:26.380Z', 'e4118d51-ab53-4581-af93-b965719cd295', '35faec5b-9975-4bbd-8669-62d45b975f1b');
INSERT INTO "Event" ("id", "name", "description", "startDate", "endDate", "categoryId", "locationId") VALUES ('120da354-af18-4ee4-889a-8e3594f2b899', 'Local Business Fair', 'Help keep our community clean and beautiful by participating in this event.', '2024-01-13T15:46:17.733Z', '2024-10-25T16:03:13.115Z', '0b72ab3c-1906-40fe-8d12-1396596df89e', '9052c5c9-dead-4ba1-8cad-9142ab571c65');
INSERT INTO "Event" ("id", "name", "description", "startDate", "endDate", "categoryId", "locationId") VALUES ('a018717f-46e7-4ccb-8301-70168e32cdb2', 'Neighborhood Watch Meeting', 'Review and provide input on the proposed city budget for the upcoming fiscal year.', '2025-08-24T16:32:42.866Z', '2024-03-08T04:56:22.415Z', '19ed15e6-5f85-49f7-854b-bfabf29fcb3d', '4b7490f7-26b2-447d-8c4c-43fa5b36c0cd');
INSERT INTO "Event" ("id", "name", "description", "startDate", "endDate", "categoryId", "locationId") VALUES ('5b70a2d3-ad48-48ec-9402-bfecc0d1d99f', 'Community CleanUp Day', 'Discover local businesses and enjoy a day of networking and fun.', '2024-01-12T19:44:04.786Z', '2024-04-04T21:03:50.290Z', 'e4118d51-ab53-4581-af93-b965719cd295', '4b7490f7-26b2-447d-8c4c-43fa5b36c0cd');
INSERT INTO "Event" ("id", "name", "description", "startDate", "endDate", "categoryId", "locationId") VALUES ('648dfb4c-cf56-4a83-9c3e-cf4bd3e5d286', 'Local Business Fair', 'Discover local businesses and enjoy a day of networking and fun.', '2024-10-24T08:37:32.335Z', '2024-01-02T08:16:16.417Z', '44ddeff6-17fc-420f-a3e8-f21cd252be29', '9052c5c9-dead-4ba1-8cad-9142ab571c65');
INSERT INTO "Event" ("id", "name", "description", "startDate", "endDate", "categoryId", "locationId") VALUES ('8ea533b4-d04c-4500-9718-dbace02b1476', 'City Council Meeting', 'Review and provide input on the proposed city budget for the upcoming fiscal year.', '2024-11-16T03:50:39.357Z', '2024-07-03T06:37:36.937Z', '0b72ab3c-1906-40fe-8d12-1396596df89e', '8da64032-bc53-4809-9728-850bb9dd6423');
INSERT INTO "Event" ("id", "name", "description", "startDate", "endDate", "categoryId", "locationId") VALUES ('ee257187-fbf1-4172-a987-f1779bd71539', 'Community CleanUp Day', 'Review and provide input on the proposed city budget for the upcoming fiscal year.', '2025-07-14T19:32:23.334Z', '2024-04-04T12:42:49.124Z', '44ddeff6-17fc-420f-a3e8-f21cd252be29', '9052c5c9-dead-4ba1-8cad-9142ab571c65');
INSERT INTO "Event" ("id", "name", "description", "startDate", "endDate", "categoryId", "locationId") VALUES ('466d9895-d52e-4afb-8dab-e091a9043921', 'Public Budget Hearing', 'Learn about safety measures and meet your neighbors at this informative meeting.', '2024-12-31T13:59:47.826Z', '2025-07-13T10:58:40.097Z', '0b72ab3c-1906-40fe-8d12-1396596df89e', '81832b66-b7c1-41a3-8a91-81a96cc4249f');

INSERT INTO "Resource" ("id", "name", "description", "resourceUrl", "categoryId") VALUES ('bffc6d16-8589-46d7-9f85-ae178622686c', 'Community Health Clinic', 'Provides free health services to lowincome families.', 'https://i.imgur.com/YfJQV5z.png?id=293', '53066b19-3b77-4fed-9cee-6047f514b55e');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl", "categoryId") VALUES ('97755505-7e33-4938-8da0-7961754498b6', 'Job Assistance Center', 'Organizes sports activities and events for children and teenagers.', 'https://i.imgur.com/YfJQV5z.png?id=297', '0b72ab3c-1906-40fe-8d12-1396596df89e');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl", "categoryId") VALUES ('3b16f8b4-86b1-4000-be5d-9f2d6b73a4b4', 'Local Food Bank', 'Offers food supplies to those in need.', 'https://i.imgur.com/YfJQV5z.png?id=301', '6e3c5c43-fb20-4d23-ae20-8d2410be2316');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl", "categoryId") VALUES ('2c4661a9-1b25-41a9-b3e6-62d845815fbe', 'Local Food Bank', 'Offers food supplies to those in need.', 'https://i.imgur.com/YfJQV5z.png?id=305', '53066b19-3b77-4fed-9cee-6047f514b55e');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl", "categoryId") VALUES ('373f149e-3b21-4a8d-aa1c-38b26f121801', 'Community Health Clinic', 'A place to borrow books use computers and attend educational programs.', 'https://i.imgur.com/YfJQV5z.png?id=309', '43f1a5d0-ec41-47fe-b480-68a59b6a4de3');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl", "categoryId") VALUES ('bef33096-62da-4f1c-a826-b348f76669b8', 'Youth Sports Program', 'Helps individuals with job search resume building and interview preparation.', 'https://i.imgur.com/YfJQV5z.png?id=313', 'e4118d51-ab53-4581-af93-b965719cd295');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl", "categoryId") VALUES ('8be6cccc-2a1f-4b3f-bf92-41c59c3e029e', 'Job Assistance Center', 'A place to borrow books use computers and attend educational programs.', 'https://i.imgur.com/YfJQV5z.png?id=317', 'e4118d51-ab53-4581-af93-b965719cd295');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl", "categoryId") VALUES ('ac3290c0-d270-4078-b2f8-e5c6f42e1b6d', 'Community Health Clinic', 'Offers food supplies to those in need.', 'https://i.imgur.com/YfJQV5z.png?id=321', '43f1a5d0-ec41-47fe-b480-68a59b6a4de3');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl", "categoryId") VALUES ('a11e6a47-9981-48b5-8c2c-1a479ba110fb', 'Job Assistance Center', 'Organizes sports activities and events for children and teenagers.', 'https://i.imgur.com/YfJQV5z.png?id=325', '0b72ab3c-1906-40fe-8d12-1396596df89e');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl", "categoryId") VALUES ('b4139292-0246-4688-ac3b-d56fae9d4775', 'Local Food Bank', 'A place to borrow books use computers and attend educational programs.', 'https://i.imgur.com/YfJQV5z.png?id=329', '1f838527-67fd-4e9e-be21-b30282f291e2');

INSERT INTO "UserEvent" ("id", "status", "userId", "eventId") VALUES ('c64387f7-fa81-4dd8-b92c-1a9e1f761ef3', 'interested', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'ee257187-fbf1-4172-a987-f1779bd71539');
INSERT INTO "UserEvent" ("id", "status", "userId", "eventId") VALUES ('93936b82-d2ff-4614-99c1-a38f30923815', 'maybe', '117f5ca4-b28e-4b0e-b370-4f14fc180996', '120da354-af18-4ee4-889a-8e3594f2b899');
INSERT INTO "UserEvent" ("id", "status", "userId", "eventId") VALUES ('d826b30e-3733-4c27-b38c-244b8d51ae5a', 'attending', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'ee257187-fbf1-4172-a987-f1779bd71539');
INSERT INTO "UserEvent" ("id", "status", "userId", "eventId") VALUES ('6c205742-48eb-45b5-a4a7-eb7604e995dc', 'undecided', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '8ea533b4-d04c-4500-9718-dbace02b1476');
INSERT INTO "UserEvent" ("id", "status", "userId", "eventId") VALUES ('155b7440-a6f3-4810-bbdd-2e506f078e23', 'maybe', '117f5ca4-b28e-4b0e-b370-4f14fc180996', '5b70a2d3-ad48-48ec-9402-bfecc0d1d99f');
INSERT INTO "UserEvent" ("id", "status", "userId", "eventId") VALUES ('23a7059f-c392-4408-ae02-4c7f778fb331', 'interested', '9468c34a-f548-4689-ba95-d81317160775', '648dfb4c-cf56-4a83-9c3e-cf4bd3e5d286');
INSERT INTO "UserEvent" ("id", "status", "userId", "eventId") VALUES ('416c158f-e78c-4c6c-a9f9-b2a655351e86', 'interested', 'b80d018e-0b96-4caf-93b6-da6f0858f30d', '120da354-af18-4ee4-889a-8e3594f2b899');
INSERT INTO "UserEvent" ("id", "status", "userId", "eventId") VALUES ('db4d594c-af3e-4776-8599-e51864c799b7', 'not attending', '2d713252-c421-4722-bc53-418618178fde', 'ca8f288a-c29b-4c93-866e-53ad927f80f1');
INSERT INTO "UserEvent" ("id", "status", "userId", "eventId") VALUES ('c5870286-a704-4b37-87dd-bac9b1be58b2', 'not attending', 'b7cedeab-ca6b-4ef7-9d8e-9ab1f22bcc57', '2167b95f-f0a4-4ce5-a254-240541b646ec');
INSERT INTO "UserEvent" ("id", "status", "userId", "eventId") VALUES ('e08b38ea-7982-4f5c-b83a-2165fe8fba0a', 'not attending', 'b7cedeab-ca6b-4ef7-9d8e-9ab1f22bcc57', 'ee257187-fbf1-4172-a987-f1779bd71539');

INSERT INTO "UserResource" ("id", "accessDate", "userId", "resourceId") VALUES ('fb3ecc5c-bdaa-4111-bfc8-be983d103130', '2024-02-03T06:39:41.034Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '2c4661a9-1b25-41a9-b3e6-62d845815fbe');
INSERT INTO "UserResource" ("id", "accessDate", "userId", "resourceId") VALUES ('567a128e-fe6c-44b9-86a7-c29cc01bd3b9', '2025-08-04T22:53:02.665Z', 'f3b79d0e-f99f-4685-8d8f-a765f70398c5', 'ac3290c0-d270-4078-b2f8-e5c6f42e1b6d');
INSERT INTO "UserResource" ("id", "accessDate", "userId", "resourceId") VALUES ('99791888-60ef-407d-8f58-f70f15d40339', '2025-02-19T06:06:29.995Z', 'e71a6dee-022d-4691-a659-7b4949f84f81', '97755505-7e33-4938-8da0-7961754498b6');
INSERT INTO "UserResource" ("id", "accessDate", "userId", "resourceId") VALUES ('74988f99-9ee3-4dbd-8056-87948bb6c156', '2025-08-31T00:45:03.624Z', 'f3b79d0e-f99f-4685-8d8f-a765f70398c5', '373f149e-3b21-4a8d-aa1c-38b26f121801');
INSERT INTO "UserResource" ("id", "accessDate", "userId", "resourceId") VALUES ('99095db4-94a8-4a00-931a-6cc0dfedef2a', '2025-09-18T15:56:59.681Z', '691023d4-f271-48a2-8e14-3cfaa2427d8b', '3b16f8b4-86b1-4000-be5d-9f2d6b73a4b4');
INSERT INTO "UserResource" ("id", "accessDate", "userId", "resourceId") VALUES ('af38d20d-d4be-495d-a587-ab961197fb11', '2024-07-10T22:06:45.070Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '3b16f8b4-86b1-4000-be5d-9f2d6b73a4b4');
INSERT INTO "UserResource" ("id", "accessDate", "userId", "resourceId") VALUES ('d3029caf-6674-4c30-8977-e00b224be866', '2025-06-16T06:50:21.937Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'ac3290c0-d270-4078-b2f8-e5c6f42e1b6d');
INSERT INTO "UserResource" ("id", "accessDate", "userId", "resourceId") VALUES ('abbb272e-8f8a-44c2-8e6d-17a599dda9ba', '2025-05-26T19:57:58.640Z', '9468c34a-f548-4689-ba95-d81317160775', 'ac3290c0-d270-4078-b2f8-e5c6f42e1b6d');
INSERT INTO "UserResource" ("id", "accessDate", "userId", "resourceId") VALUES ('951a4f23-1e2e-4e76-94a2-9a54c53a87d4', '2024-05-24T13:45:33.648Z', '691023d4-f271-48a2-8e14-3cfaa2427d8b', '3b16f8b4-86b1-4000-be5d-9f2d6b73a4b4');
INSERT INTO "UserResource" ("id", "accessDate", "userId", "resourceId") VALUES ('d083fdd4-713b-4027-8779-34705b2dc83f', '2024-03-17T16:52:01.170Z', '2feeb4b4-c9d4-4942-8ae0-81e25f986285', 'b4139292-0246-4688-ac3b-d56fae9d4775');

INSERT INTO "ChatSession" ("id", "startTime", "endTime", "userId") VALUES ('81197cb6-1d78-4467-89c5-85ef9afc2a5a', '2024-02-08T23:27:30.565Z', '2024-02-02T18:34:44.417Z', '691023d4-f271-48a2-8e14-3cfaa2427d8b');
INSERT INTO "ChatSession" ("id", "startTime", "endTime", "userId") VALUES ('bfbe7cfe-15dd-4be9-9ee0-14c8788198a0', '2024-07-20T17:13:32.629Z', '2023-12-25T17:27:10.376Z', '691023d4-f271-48a2-8e14-3cfaa2427d8b');
INSERT INTO "ChatSession" ("id", "startTime", "endTime", "userId") VALUES ('54290dc4-cf6d-41f2-aad9-057cd21224d9', '2024-11-12T07:33:22.596Z', '2025-06-25T03:52:55.161Z', 'f3b79d0e-f99f-4685-8d8f-a765f70398c5');
INSERT INTO "ChatSession" ("id", "startTime", "endTime", "userId") VALUES ('a59668e2-78da-44f3-b0ea-e2ee56104f64', '2024-07-12T07:18:06.125Z', '2024-01-14T00:38:30.284Z', 'b80d018e-0b96-4caf-93b6-da6f0858f30d');
INSERT INTO "ChatSession" ("id", "startTime", "endTime", "userId") VALUES ('003c137d-0d5c-4d8d-9c2d-bb181dd1f3ad', '2024-02-08T13:34:41.445Z', '2025-07-09T17:26:15.891Z', 'b7cedeab-ca6b-4ef7-9d8e-9ab1f22bcc57');
INSERT INTO "ChatSession" ("id", "startTime", "endTime", "userId") VALUES ('54f98b41-741e-4d10-b720-0aec1570edad', '2024-03-02T08:12:07.910Z', '2025-09-05T05:08:48.616Z', '691023d4-f271-48a2-8e14-3cfaa2427d8b');
INSERT INTO "ChatSession" ("id", "startTime", "endTime", "userId") VALUES ('8fe82cf1-6bfb-4ada-bd2f-dc2b402dfd48', '2025-09-13T16:27:31.988Z', '2024-07-08T22:09:34.694Z', '691023d4-f271-48a2-8e14-3cfaa2427d8b');
INSERT INTO "ChatSession" ("id", "startTime", "endTime", "userId") VALUES ('9a9cc2ec-ce2c-4bed-b340-d8620f1fb24e', '2023-12-10T12:31:12.876Z', '2025-04-29T23:28:47.732Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "ChatSession" ("id", "startTime", "endTime", "userId") VALUES ('301c30dc-5d22-4a90-9a3e-8b184abb647e', '2024-07-29T19:51:46.226Z', '2024-01-26T11:56:33.443Z', '117f5ca4-b28e-4b0e-b370-4f14fc180996');
INSERT INTO "ChatSession" ("id", "startTime", "endTime", "userId") VALUES ('94f5cd63-2f1b-403c-b4d1-4b51c572012b', '2023-10-20T13:14:18.569Z', '2025-04-17T18:13:59.398Z', 'b7cedeab-ca6b-4ef7-9d8e-9ab1f22bcc57');

INSERT INTO "Message" ("id", "content", "timestamp", "isUserMessage", "chatSessionId") VALUES ('ca3a0833-945e-4ddd-8f26-3ce9f1584e21', 'The city council is discussing the new budget proposal next week.', '2025-03-08T06:23:02.103Z', false, '54290dc4-cf6d-41f2-aad9-057cd21224d9');
INSERT INTO "Message" ("id", "content", "timestamp", "isUserMessage", "chatSessionId") VALUES ('9d851a26-64bc-4ba7-be0e-7f4893d48b69', 'The city council is discussing the new budget proposal next week.', '2023-12-04T05:17:57.279Z', true, 'bfbe7cfe-15dd-4be9-9ee0-14c8788198a0');
INSERT INTO "Message" ("id", "content", "timestamp", "isUserMessage", "chatSessionId") VALUES ('1a319fcf-63b6-4256-9057-88a47619a0d9', 'The city council is discussing the new budget proposal next week.', '2025-03-06T16:34:32.263Z', false, 'a59668e2-78da-44f3-b0ea-e2ee56104f64');
INSERT INTO "Message" ("id", "content", "timestamp", "isUserMessage", "chatSessionId") VALUES ('09e8f00c-a4b8-41f8-99b6-95fd74932288', 'Check out the local farmers market this weekend.', '2024-05-13T18:40:03.273Z', true, '54f98b41-741e-4d10-b720-0aec1570edad');
INSERT INTO "Message" ("id", "content", "timestamp", "isUserMessage", "chatSessionId") VALUES ('9f548100-1fde-4fba-889c-0699d70f1e0a', 'Join us for a community cleanup event this Saturday.', '2024-08-15T11:39:32.631Z', false, 'bfbe7cfe-15dd-4be9-9ee0-14c8788198a0');
INSERT INTO "Message" ("id", "content", "timestamp", "isUserMessage", "chatSessionId") VALUES ('ed36af7c-1431-422a-a2ab-5560dc1be8f8', 'Volunteer opportunities available at the community center.', '2024-04-10T02:54:20.462Z', true, '54290dc4-cf6d-41f2-aad9-057cd21224d9');
INSERT INTO "Message" ("id", "content", "timestamp", "isUserMessage", "chatSessionId") VALUES ('12f83051-bdc1-457f-9fe3-8a7be18e9640', 'The city council is discussing the new budget proposal next week.', '2024-02-29T17:47:04.617Z', true, '54f98b41-741e-4d10-b720-0aec1570edad');
INSERT INTO "Message" ("id", "content", "timestamp", "isUserMessage", "chatSessionId") VALUES ('da73d55a-e504-42ff-9ad1-bd48048a16c0', 'Dont miss the upcoming town hall meeting on Thursday', '2025-06-21T01:06:34.120Z', true, 'a59668e2-78da-44f3-b0ea-e2ee56104f64');
INSERT INTO "Message" ("id", "content", "timestamp", "isUserMessage", "chatSessionId") VALUES ('ecfc1aa7-271e-4866-92ef-e60688b8d942', 'Join us for a community cleanup event this Saturday.', '2025-01-30T15:46:22.172Z', true, '8fe82cf1-6bfb-4ada-bd2f-dc2b402dfd48');
INSERT INTO "Message" ("id", "content", "timestamp", "isUserMessage", "chatSessionId") VALUES ('505ffbe3-cedd-423f-a50a-95e54f62cdb5', 'Volunteer opportunities available at the community center.', '2024-06-01T18:16:06.763Z', true, '54f98b41-741e-4d10-b720-0aec1570edad');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
