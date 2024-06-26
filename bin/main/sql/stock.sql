CREATE DATABASE stockfishdb;
CREATE USER 'stockfishuser'@'localhost' IDENTIFIED BY 'stockfishuser';
CREATE USER 'stockfishuser'@'%' IDENTIFIED BY 'stockfishuser';
GRANT ALL PRIVILEGES ON stockfishdb.* TO 'stockfishuser'@'localhost';
GRANT ALL PRIVILEGES ON stockfishdb.* TO 'stockfishuser'@'%';