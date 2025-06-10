import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { formatNumber } from '../../utils/formatters';

interface LogEntry {
  timestamp: string;
  value: number;
  status: 'success' | 'error';
  source: string;
}

const mockLogData: LogEntry[] = [
  {
    timestamp: '2025-03-15T08:00:00',
    value: 142.5,
    status: 'success',
    source: 'Siemens DCS'
  },
  {
    timestamp: '2025-03-15T04:00:00',
    value: 138.2,
    status: 'success',
    source: 'Siemens DCS'
  },
  {
    timestamp: '2025-03-15T00:00:00',
    value: 135.7,
    status: 'success',
    source: 'Siemens DCS'
  },
  {
    timestamp: '2025-03-14T20:00:00',
    value: 140.3,
    status: 'success',
    source: 'Siemens DCS'
  },
  {
    timestamp: '2025-03-14T16:00:00',
    value: 141.8,
    status: 'error',
    source: 'Siemens DCS'
  }
];

export const PowerConsumptionLog: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Data Import Log</span>
          <span className="text-sm font-normal text-gray-500">
            Last 24 Hours
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Timestamp</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Total Plant Electricity (MWh)</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Source</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {mockLogData.map((entry, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 text-sm">
                    {new Date(entry.timestamp).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 text-sm font-medium">
                    {formatNumber(entry.value, 1)}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    {entry.source}
                  </td>
                  <td className="px-4 py-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      entry.status === 'success' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {entry.status === 'success' ? 'Success' : 'Error'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};