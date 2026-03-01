
-- Create payments table to store all completed payment records
CREATE TABLE public.payments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tran_id TEXT NOT NULL,
  name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  batch_id TEXT,
  amount NUMERIC NOT NULL,
  method TEXT NOT NULL, -- 'bkash' or 'sslcommerz'
  status TEXT NOT NULL DEFAULT 'pending', -- 'success', 'fail', 'cancel', 'pending'
  payment_data JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Public insert policy (edge functions insert without auth)
CREATE POLICY "Allow public insert" ON public.payments FOR INSERT WITH CHECK (true);

-- Public read policy (for viewing payment history)
CREATE POLICY "Allow public read" ON public.payments FOR SELECT USING (true);
