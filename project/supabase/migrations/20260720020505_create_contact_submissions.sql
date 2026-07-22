/*
# Create contact_submissions table

1. Purpose
- Stores inquiries submitted through the parking-site contact form (single-tenant, no auth).

2. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email
  - `phone` (text, nullable) — optional phone number
  - `service` (text, nullable) — requested service (e.g. Line Striping, Crack Filling)
  - `message` (text, not null) — inquiry body
  - `created_at` (timestamptz, default now())

3. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (public contact form).
- No SELECT/UPDATE/DELETE for anon — submissions are private to project owners (read via service role / dashboard).
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);
