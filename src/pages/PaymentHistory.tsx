import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, XCircle, AlertTriangle, Clock, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaymentRecord {
  id: string;
  tran_id: string;
  name: string;
  mobile: string;
  batch_id: string | null;
  amount: number;
  method: string;
  status: string;
  created_at: string;
}

const statusConfig: Record<string, { icon: React.ReactNode; color: string; label: string }> = {
  success: {
    icon: <CheckCircle2 className="w-4 h-4" />,
    color: "text-green-600 bg-green-50 border-green-200",
    label: "Success",
  },
  fail: {
    icon: <XCircle className="w-4 h-4" />,
    color: "text-red-600 bg-red-50 border-red-200",
    label: "Failed",
  },
  cancel: {
    icon: <AlertTriangle className="w-4 h-4" />,
    color: "text-yellow-600 bg-yellow-50 border-yellow-200",
    label: "Cancelled",
  },
  pending: {
    icon: <Clock className="w-4 h-4" />,
    color: "text-blue-600 bg-blue-50 border-blue-200",
    label: "Pending",
  },
};

const PaymentHistory = () => {
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPayments = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("payments")
      .select("id, tran_id, name, mobile, batch_id, amount, method, status, created_at")
      .order("created_at", { ascending: false })
      .limit(200);

    if (!error && data) {
      setPayments(data as PaymentRecord[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const totalSuccess = payments
    .filter((p) => p.status === "success")
    .reduce((sum, p) => sum + Number(p.amount), 0);

  return (
    <Layout>
      <section className="hero-gradient py-8 md:py-16 px-4">
        <div className="container text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-primary-foreground mb-2">
            Payment History
          </h1>
          <p className="text-primary-foreground/80 text-sm md:text-lg">
            All payment records at a glance
          </p>
        </div>
      </section>

      <section className="py-6 md:py-12 px-2 md:px-4 bg-background">
        <div className="container max-w-4xl">
          {/* Summary */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-card border border-border rounded-xl p-4 flex-1 min-w-[140px]">
              <p className="text-xs text-muted-foreground">Total Transactions</p>
              <p className="text-2xl font-bold text-foreground">{payments.length}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 flex-1 min-w-[140px]">
              <p className="text-xs text-muted-foreground">Successful Amount</p>
              <p className="text-2xl font-bold text-green-600">৳{totalSuccess.toLocaleString()}</p>
            </div>
            <div className="flex items-end">
              <Button variant="outline" size="sm" onClick={fetchPayments} disabled={loading}>
                <RefreshCw className={`w-4 h-4 mr-1 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
            </div>
          </div>

          {/* Table */}
          {loading ? (
            <div className="text-center py-12 text-muted-foreground">Loading...</div>
          ) : payments.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No payment records found yet.
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="text-left p-3 font-semibold">Date</th>
                    <th className="text-left p-3 font-semibold">Name</th>
                    <th className="text-left p-3 font-semibold">Mobile</th>
                    <th className="text-left p-3 font-semibold">Batch</th>
                    <th className="text-right p-3 font-semibold">Amount</th>
                    <th className="text-center p-3 font-semibold">Method</th>
                    <th className="text-center p-3 font-semibold">Status</th>
                    <th className="text-left p-3 font-semibold">Tran ID</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((p) => {
                    const cfg = statusConfig[p.status] || statusConfig.pending;
                    return (
                      <tr key={p.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                        <td className="p-3 whitespace-nowrap text-muted-foreground text-xs">
                          {new Date(p.created_at).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                          <br />
                          <span className="text-[10px]">
                            {new Date(p.created_at).toLocaleTimeString("en-GB", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </td>
                        <td className="p-3 font-medium text-foreground">{p.name}</td>
                        <td className="p-3 text-muted-foreground">{p.mobile}</td>
                        <td className="p-3 text-muted-foreground">{p.batch_id || "—"}</td>
                        <td className="p-3 text-right font-semibold text-foreground">
                          ৳{Number(p.amount).toLocaleString()}
                        </td>
                        <td className="p-3 text-center">
                          <span className="capitalize text-xs font-medium bg-muted px-2 py-1 rounded-full">
                            {p.method}
                          </span>
                        </td>
                        <td className="p-3 text-center">
                          <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full border ${cfg.color}`}>
                            {cfg.icon}
                            {cfg.label}
                          </span>
                        </td>
                        <td className="p-3 font-mono text-xs text-muted-foreground max-w-[120px] truncate">
                          {p.tran_id}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default PaymentHistory;
