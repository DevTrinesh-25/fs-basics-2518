import React from "react";

interface Action {
  label: string;
}

interface QuickActionsProps {
  actions: Action[];
}

function QuickActions({ actions }: QuickActionsProps): React.ReactElement {
  return (
    <div className="card">
      <h3>Quick Actions</h3>
      <div className="actions">
        {actions.map((action, i) => (
          <button key={i} className="action-btn">{action.label}</button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;