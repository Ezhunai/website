CREATE TABLE `members` (
 `id` text PRIMARY KEY NOT NULL,
 `name` text NOT NULL,
 `email` text NOT NULL,
 `phone` text NOT NULL,
 `date_of_birth` text,
 `consent_at` text NOT NULL,
 `created_at` text NOT NULL
);
