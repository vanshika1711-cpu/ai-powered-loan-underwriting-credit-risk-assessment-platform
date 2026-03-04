function AuditLogs() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">
        Audit Logs
      </h1>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <p className="text-gray-400">
          User activity logs will appear here.
        </p>

        <ul className="mt-4 space-y-3 text-sm text-gray-300">
          <li>• User logged in</li>
          <li>• Loan application reviewed</li>
          <li>• Risk score generated</li>
          <li>• Admin exported report</li>
        </ul>
      </div>
    </div>
  );
}

export default AuditLogs;