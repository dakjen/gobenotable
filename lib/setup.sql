CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS vanguard_applications (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  industry TEXT,
  work_impact TEXT,
  brings_others TEXT,
  linkedin TEXT,
  website TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'denied')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS intensive_submissions (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  tier TEXT NOT NULL,
  preferred_date TEXT,
  website TEXT,
  business_description TEXT,
  goals TEXT,
  file_urls TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- items holds the collateral ids the visitor ticked, as a JSON array.
CREATE TABLE IF NOT EXISTS quote_requests (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  website TEXT,
  timeline TEXT,
  budget TEXT,
  details TEXT,
  items TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'quoted', 'won', 'lost')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
