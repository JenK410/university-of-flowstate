CREATE TABLE `account_deletion_tombstones` (
	`email` text PRIMARY KEY NOT NULL,
	`deleted_at` integer NOT NULL
);
