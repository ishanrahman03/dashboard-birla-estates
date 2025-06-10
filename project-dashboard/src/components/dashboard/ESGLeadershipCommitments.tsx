import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Checkbox } from '../ui/Checkbox';
import { RadioGroup, RadioGroupItem } from '../ui/RadioGroup';
import { Label } from '../ui/Label';

interface ESGLeadershipCommitmentsProps {
  className?: string;
}

export const ESGLeadershipCommitments: React.FC<ESGLeadershipCommitmentsProps> = ({ className }) => {
  const [hasCommitment, setHasCommitment] = useState<boolean>(false);
  const [selectedCommitments, setSelectedCommitments] = useState<string[]>([]);

  const commitments = [
    { id: 'general', label: 'General ESG commitments' },
    { id: 'giicc', label: 'Global Investor Coalition on Climate Change (including AIGCC, Ceres, IGCC, IIGCC)' },
    { id: 'ilo', label: 'International Labour Organization (ILO) Standards' },
    { id: 'montreal', label: 'Montreal Pledge' },
    { id: 'oecd', label: 'OECD - Guidelines for multinational enterprises' },
    { id: 'pri', label: 'PRI signatory' }
  ];

  const handleCommitmentChange = (id: string) => {
    setSelectedCommitments(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>ESG Leadership Commitments</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-base font-medium">
            Has the entity made a public commitment to ESG leadership standards and/or principles?
          </h3>
          <RadioGroup
            value={hasCommitment ? "yes" : "no"}
            onValueChange={(value) => setHasCommitment(value === "yes")}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>

        {hasCommitment && (
          <div className="space-y-4">
            <h3 className="text-base font-medium">Select all commitments included (multiple answers possible)</h3>
            <div className="space-y-3">
              {commitments.map((commitment) => (
                <div key={commitment.id} className="flex items-start space-x-3">
                  <Checkbox
                    id={commitment.id}
                    checked={selectedCommitments.includes(commitment.id)}
                    onCheckedChange={() => handleCommitmentChange(commitment.id)}
                  />
                  <Label htmlFor={commitment.id} className="text-sm leading-tight">
                    {commitment.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}; 