"use client";

import { useEffect, useState } from "react";
import { Topbar } from "@/components/layout/Topbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type Agent = {
  id: string;
  name: string;
  role: string;
  status: "online" | "offline";
};

export default function AgentsPage() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAgents() {
      try {
        const res = await fetch("/api/agents");
        if (res.ok) {
          const data = await res.json();
          setAgents(data.agents);
        }
      } catch (error) {
        console.error("Failed to fetch agents", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAgents();
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">
      <Topbar title="Agents" />
      
      {loading ? (
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-48 rounded-xl bg-surfaceHighlight/50 animate-pulse border border-border" />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {agents.map((agent) => (
            <Card key={agent.id} className="flex flex-col h-full hover:border-primary/50 transition-colors group">
              <div className="flex items-center justify-between mb-4">
                <div className="font-semibold text-lg">{agent.name}</div>
                <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium border ${
                  agent.status === "online" 
                    ? "bg-success/10 text-success border-success/20" 
                    : "bg-neutral-800 text-muted border-neutral-700"
                }`}>
                  {agent.status === "online" && <span className="relative flex h-1.5 w-1.5 rounded-full bg-success"></span>}
                  {agent.status.toUpperCase()}
                </div>
              </div>
              
              <div className="text-sm text-muted mb-6 flex-grow">
                <span className="block text-xs uppercase tracking-wide text-subtle mb-1">Role</span>
                {agent.role}
              </div>

              <div className="flex gap-2 mt-auto">
                <Button variant="outline" size="sm" className="w-full">Profile</Button>
                <Button variant="primary" size="sm" className="w-full">Message</Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
